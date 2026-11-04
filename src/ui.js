import * as THREE from 'three';
import {
  RACES, BEASTS, CLASSES, ELEMENTS, WEATHER, RARITIES, NPC_DEFS, QUESTS,
  itemSummary, formatTime, WORLD_SIZE,
} from './data.js';

const $ = id => document.getElementById(id);
const el = (tag, className = '', text = '') => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};

const NAME_POOL = ['Rowan', 'Maelis', 'Corin', 'Sable', 'Tamsin', 'Orin', 'Yara', 'Vesper', 'Pike', 'Alwyn', 'Nyx', 'Elowen', 'Bram', 'Sorrel'];
const RACE_GLYPHS = { human: '⚜', angel: '✦', demon: '☽', beast: '❖' };
const CLASS_GLYPHS = { warrior: '⚔', rogue: '†', archer: '➶', wizard: '✧', priest: '✟' };

export class UI {
  constructor(game) {
    this.game = game;
    this.selection = {
      name: 'Rowan', sex: 'feminine', race: 'human', beastType: 'dog',
      classId: 'warrior', skin: 0, cloth: 0,
    };
    this.currentModal = null;
    this.enemyLabels = new Map();
    this.lastHUD = 0;
    this.lastMinimap = 0;
    this.questRenderKey = '';
    this.inventoryRenderKey = '';
    this.zoneKey = '';
    this.deathTimer = 0;
    this.dialogNpc = null;
    this.vendorNpc = null;
    this.waypoint = null;
    this.bind();
    this.renderCreation();
    this.createFloatingLayer();
  }

  bind() {
    // Character creation controls.
    for (const btn of document.querySelectorAll('#sex-picker button')) {
      btn.addEventListener('click', () => {
        this.selection.sex = btn.dataset.sex;
        this.setActive('#sex-picker button', btn);
        this.changed('sex');
      });
    }
    for (const btn of document.querySelectorAll('#race-picker button')) {
      btn.addEventListener('click', () => {
        this.selection.race = btn.dataset.race;
        this.setActive('#race-picker button', btn);
        $('beast-picker').classList.toggle('hidden', this.selection.race !== 'beast');
        this.changed('race');
      });
    }
    for (const btn of document.querySelectorAll('#beast-picker button')) {
      btn.addEventListener('click', () => {
        this.selection.beastType = btn.dataset.beast;
        this.setActive('#beast-picker button', btn);
        this.changed('beast');
      });
    }
    for (const btn of document.querySelectorAll('#class-picker button')) {
      btn.addEventListener('click', () => {
        this.selection.classId = btn.dataset.class;
        this.setActive('#class-picker button', btn);
        this.changed('class');
      });
    }
    for (const btn of document.querySelectorAll('#skin-picker button')) {
      btn.addEventListener('click', () => {
        this.selection.skin = Number(btn.dataset.skin);
        this.setActive('#skin-picker button', btn);
        this.changed('skin');
      });
    }
    for (const btn of document.querySelectorAll('#cloth-picker button')) {
      btn.addEventListener('click', () => {
        this.selection.cloth = Number(btn.dataset.cloth);
        this.setActive('#cloth-picker button', btn);
        this.changed('cloth');
      });
    }
    $('hero-name-input').addEventListener('input', (event) => {
      this.selection.name = event.target.value.slice(0, 18) || 'Wanderer';
      $('preview-name').textContent = this.selection.name;
    });
    $('random-name').addEventListener('click', () => {
      let name = this.selection.name;
      while (name === this.selection.name) name = NAME_POOL[Math.floor(Math.random() * NAME_POOL.length)];
      this.selection.name = name;
      $('hero-name-input').value = name;
      $('preview-name').textContent = name;
      this.game.audio?.sfx('ui');
    });
    $('start-button').addEventListener('click', () => this.startGame());
    $('hero-name-input').addEventListener('keydown', (event) => {
      if (event.key === 'Enter') this.startGame();
    });

    // Universal open and close controls.
    for (const btn of document.querySelectorAll('[data-open]')) {
      btn.addEventListener('click', () => {
        const name = btn.dataset.open;
        if (name === 'pause') this.openPause();
        else if (name === 'journal') this.openJournal();
        else if (name === 'inventory') this.openInventory();
        else if (name === 'map') this.openWorldMap();
      });
    }
    for (const btn of document.querySelectorAll('[data-close]')) {
      btn.addEventListener('click', () => this.closeModal());
    }
    $('modal-backdrop').addEventListener('click', () => this.closeModal());
    $('respawn-button').addEventListener('click', () => this.game.respawn());
    $('save-button').addEventListener('click', () => { this.game.save(); this.showToast('SAVED', 'The ledger remembers your road.', 'reward', '◆'); });
    $('new-hero-button').addEventListener('click', () => { this.game.save(); location.reload(); });
    $('quality-toggle').addEventListener('click', () => this.game.togglePixelFilter());
    $('sound-toggle').addEventListener('click', () => this.game.toggleSound());
    for (const slot of document.querySelectorAll('[data-action]')) {
      slot.addEventListener('click', () => {
        if (!this.game.started || this.game.uiOpen) return;
        const action = slot.dataset.action;
        if (action === 'attack') this.game.player.basicAttack();
        if (action === 'ability') this.game.player.useAbility();
        if (action === 'dodge') this.game.player.dodge();
        if (action === 'potion') this.game.usePotion();
        if (action === 'interact') this.game.interact();
      });
    }
    // Map waypoint.
    $('world-map').addEventListener('click', (event) => this.mapClick(event));
    // Joystick.
    this.bindJoystick();
    // Dialogue and shop dynamic action buttons are bound when rendered.
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.currentModal) {
        event.preventDefault();
        this.closeModal();
      }
    });
  }

  bindJoystick() {
    const zone = $('joystick');
    const knob = $('joystick-knob');
    let active = false, pointerId = null;
    const reset = () => {
      active = false; pointerId = null;
      knob.style.transform = '';
      this.game.touchMove.set(0, 0);
    };
    zone.addEventListener('pointerdown', (event) => {
      if (this.game.uiOpen) return;
      active = true; pointerId = event.pointerId;
      zone.setPointerCapture(pointerId);
      this.moveJoystick(event, zone, knob);
    });
    zone.addEventListener('pointermove', (event) => {
      if (!active || event.pointerId !== pointerId) return;
      this.moveJoystick(event, zone, knob);
    });
    zone.addEventListener('pointerup', reset);
    zone.addEventListener('pointercancel', reset);
    zone.addEventListener('lostpointercapture', reset);
  }

  moveJoystick(event, zone, knob) {
    const rect = zone.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const max = rect.width * 0.34;
    const length = Math.hypot(dx, dy) || 1;
    const nx = dx / length, ny = dy / length;
    const amount = Math.min(1, length / max);
    knob.style.transform = `translate(${nx * Math.min(length, max) * 0.6}px, ${ny * Math.min(length, max) * 0.6}px)`;
    this.game.touchMove.set(nx * amount, ny * amount);
  }

  createFloatingLayer() {
    const layer = el('div', 'world-labels');
    layer.id = 'world-labels';
    $('hud').appendChild(layer);
    const floating = el('div', 'floating-layer');
    floating.id = 'floating-layer';
    $('hud').appendChild(floating);
  }

  startGame() {
    if (this.game.started) return;
    this.game.audio?.init();
    this.game.audio?.sfx('ui');
    const button = $('start-button');
    button.disabled = true;
    button.textContent = '…';
    this.game.startGame({ ...this.selection, name: this.selection.name.trim() || 'Wanderer' });
    $('hud').classList.remove('hidden');
    $('creator').classList.add('leaving');
    setTimeout(() => { $('creator').style.display = 'none'; }, 560);
    setTimeout(() => this.showZoneBanner('Hearthvale', 'Warm hearth, cold roads.'), 700);
  }

  setActive(selector, active) {
    document.querySelectorAll(selector).forEach(node => node.classList.toggle('active', node === active));
  }

  changed(kind) {
    this.game.audio?.sfx('ui');
    this.renderCreation();
    this.game.previewCharacter(this.selection);
  }

  renderCreation() {
    const cls = CLASSES[this.selection.classId];
    const race = RACES[this.selection.race];
    const beast = BEASTS[this.selection.beastType];
    $('preview-name').textContent = this.selection.name;
    $('preview-role').textContent = `${race.name.toUpperCase()}${this.selection.race === 'beast' ? ` · ${beast.name.toUpperCase()}` : ''} · ${cls.name.toUpperCase()}`;
    $('summary-class').textContent = cls.role;
    const attack = cls.power + Math.round(cls.power * 0.2);
    const hp = cls.health + (this.selection.race === 'beast' ? 12 + beast.bonuses.health : race.bonuses.health);
    const speed = cls.speed + race.bonuses.speed + (this.selection.race === 'beast' ? beast.bonuses.speed : 0);
    const energy = cls.energy + race.bonuses.spirit;
    $('stat-atk-value').textContent = String(attack);
    $('stat-hp-value').textContent = String(hp);
    $('stat-spd-value').textContent = speed.toFixed(1);
    $('stat-en-value').textContent = String(energy);
    $('stat-atk').style.width = `${Math.min(100, attack * 3.9)}%`;
    $('stat-hp').style.width = `${Math.min(100, hp * 0.47)}%`;
    $('stat-spd').style.width = `${Math.min(100, speed * 11)}%`;
    $('stat-en').style.width = `${Math.min(100, energy * 0.67)}%`;
    const beastText = this.selection.race === 'beast' ? ` ${beast.bonusText}` : '';
    $('race-perk').innerHTML = `<b>${race.perkName}</b> — ${race.perk}${beastText ? `<br><b>${beast.name} kin</b> — ${beast.bonusText}` : ''}`;
    $('hero-glyph').textContent = CLASS_GLYPHS[this.selection.classId];
    // Always keep the visual state correct after any change.
    document.querySelectorAll('#race-picker button').forEach(node => node.classList.toggle('active', node.dataset.race === this.selection.race));
    document.querySelectorAll('#class-picker button').forEach(node => node.classList.toggle('active', node.dataset.class === this.selection.classId));
    document.querySelectorAll('#sex-picker button').forEach(node => node.classList.toggle('active', node.dataset.sex === this.selection.sex));
    document.querySelectorAll('#beast-picker button').forEach(node => node.classList.toggle('active', node.dataset.beast === this.selection.beastType));
    $('beast-picker').classList.toggle('hidden', this.selection.race !== 'beast');
  }

  setCharacter(character) {
    this.selection = { ...this.selection, ...character };
    $('hero-name-input').value = this.selection.name;
    this.renderCreation();
  }

  showHUD() {
    $('hud').classList.remove('hidden');
  }

  setUIOpen(open) {
    this.game.uiOpen = open;
    $('modal-backdrop').classList.toggle('hidden', !open);
    if (!open) {
      document.querySelectorAll('.game-modal').forEach(modal => modal.classList.add('hidden'));
      this.currentModal = null;
      this.dialogNpc = null;
      this.vendorNpc = null;
    }
  }

  closeModal() {
    if (!this.currentModal) return;
    this.game.audio?.sfx('ui');
    this.setUIOpen(false);
  }

  openModal(id) {
    document.querySelectorAll('.game-modal').forEach(modal => modal.classList.add('hidden'));
    $(id).classList.remove('hidden');
    $('modal-backdrop').classList.remove('hidden');
    this.currentModal = id;
    this.game.uiOpen = true;
  }

  openDialogue(npc) {
    this.dialogNpc = npc;
    const def = npc.def;
    $('speaker-portrait').textContent = def.icon || '✦';
    $('speaker-title').textContent = def.title;
    $('speaker-name').textContent = def.name;
    $('speaker-zone').textContent = def.zone.toUpperCase();
    $('dialogue-line').textContent = def.greeting;
    $('dialogue-quest').classList.add('hidden');
    $('dialogue-rewards').classList.add('hidden');
    const actions = $('dialogue-actions');
    actions.innerHTML = '';
    const quest = def.questId ? this.game.quests[def.questId] : null;
    if (quest) {
      if (quest.state === 'available') {
        $('dialogue-quest').classList.remove('hidden');
        $('quest-kicker').textContent = 'NEW OATH';
        $('quest-title').textContent = quest.def.title;
        $('quest-objective').textContent = quest.def.objectives.map(o => `${o.count} × ${o.label}`).join(' · ');
        $('dialogue-line').textContent = quest.def.intro;
        this.addDialogueAction('Accept oath', 'gold', () => { this.game.acceptQuest(def.questId); this.openDialogue(npc); });
        this.addDialogueAction('Not now', 'muted', () => this.closeModal());
      } else if (quest.state === 'active') {
        $('dialogue-quest').classList.remove('hidden');
        $('quest-kicker').textContent = quest.ready ? 'OATH FULFILLED' : 'OATH IN PROGRESS';
        $('quest-title').textContent = quest.def.title;
        $('quest-objective').textContent = quest.def.objectives.map(o => `${Math.min(o.count, quest.progress[o.target] || 0)} / ${o.count} ${o.label}`).join(' · ');
        if (quest.ready) {
          $('dialogue-line').textContent = quest.def.completedLine;
          this.addDialogueAction('Claim reward', 'gold', () => { this.game.turnInQuest(def.questId); this.closeModal(); });
          this.addDialogueAction('Later', 'muted', () => this.closeModal());
          const rewards = $('dialogue-rewards');
          rewards.classList.remove('hidden');
          rewards.innerHTML = `<span class="reward-chip gold">◉ ${quest.def.rewards.gold} gold</span><span class="reward-chip">✦ ${quest.def.rewards.xp} experience</span>${quest.def.rewards.item ? '<span class="reward-chip">◆ Class relic</span>' : ''}`;
        } else {
          $('dialogue-line').textContent = `${def.greeting} The work is not done. ${quest.def.objectives.map(o => `${Math.max(0, o.count - (quest.progress[o.target] || 0))} more`).join(', ')}.`;
          this.addDialogueAction('I will return', 'muted', () => this.closeModal());
        }
      } else {
        $('dialogue-line').textContent = `${def.greeting} You have already carried that weight for us.`;
        this.addDialogueAction('Farewell', 'muted', () => this.closeModal());
      }
    } else if (def.vendor) {
      const shopLabel = { weapon: 'Browse the armory', armor: 'Browse the wardrobe', item: 'Browse supplies' }[def.vendor];
      this.addDialogueAction(shopLabel, 'gold', () => this.openVendor(npc));
      this.addDialogueAction('Just talking', 'muted', () => this.closeModal());
    } else {
      this.addDialogueAction('Farewell', 'muted', () => this.closeModal());
    }
    this.openModal('dialogue-modal');
  }

  addDialogueAction(label, style, callback) {
    const btn = el('button', `pixel-button ${style}`, label);
    btn.type = 'button';
    btn.addEventListener('click', callback);
    $('dialogue-actions').appendChild(btn);
  }

  openVendor(npc) {
    this.vendorNpc = npc;
    const data = this.game.openVendor(npc);
    $('shop-kicker').textContent = `WARES OF ${npc.def.zone.toUpperCase()}`;
    $('shop-name').textContent = {
      weapon: 'Weapons of Consequence', armor: 'Threads & Plate', item: 'Small Miracles',
    }[npc.def.vendor] || 'Travelling Wares';
    $('shop-hint').textContent = `Stock tuned to level ${this.game.player.level}. ${this.game.player.className} equipment only.`;
    $('shop-tabs').innerHTML = `<button type="button" class="active">${npc.def.vendor === 'weapon' ? 'ARMORY' : npc.def.vendor === 'armor' ? 'WARDROBE' : 'SUPPLIES'}</button><button type="button" class="active" style="pointer-events:none;opacity:.5">LV. ${this.game.player.level}</button>`;
    this.renderShop(data.stock);
    this.openModal('vendor-modal');
  }

  renderShop(stock) {
    const grid = $('shop-grid');
    grid.innerHTML = '';
    $('shop-gold').textContent = String(this.game.player.gold);
    if (!stock.length) {
      grid.appendChild(el('div', 'empty-state', 'The shelves are bare. Return after your legend grows.'));
      return;
    }
    for (const item of stock) {
      const card = el('div', 'shop-item');
      const icon = el('div', 'item-icon', item.icon || '❖');
      const copy = el('div', 'item-copy');
      const title = el('b', '', item.name);
      const rarity = RARITIES[item.rarity];
      if (rarity) title.style.color = rarity.css;
      const desc = el('small', '', item.consumable ? item.desc : itemSummary(item));
      const cls = el('em', '', item.consumable ? 'Restores on use' : (item.element ? `${ELEMENTS[item.element]?.name || 'Physical'} attuned` : ''));
      copy.append(title, desc, cls);
      const buy = el('div', 'shop-buy');
      const btn = el('button', '', 'BUY');
      const price = el('small', '', `◉ ${item.price}`);
      const affordable = this.game.player.gold >= item.price;
      btn.disabled = !affordable;
      btn.addEventListener('click', () => {
        const ok = this.game.buyItem(item);
        if (ok) {
          this.game.audio?.sfx('coin');
          this.openVendor(this.vendorNpc);
          this.showToast('PURCHASED', `${item.name} secured.`, 'reward', '◉');
        } else {
          this.game.audio?.sfx('error');
          this.showToast('NOT ENOUGH GOLD', 'The merchant smiles apologetically.', 'danger', '◉');
        }
      });
      buy.append(btn, price);
      card.append(icon, copy, buy);
      grid.appendChild(card);
    }
  }

  openJournal() {
    if (!this.game.started) return;
    this.renderJournal();
    this.openModal('journal-modal');
    this.game.audio?.sfx('ui');
  }

  renderJournal() {
    const active = this.game.getActiveQuests();
    const completed = this.game.getCompletedQuests();
    $('active-quest-count').textContent = String(active.length);
    $('completed-quest-count').textContent = String(completed.length);
    const activeList = $('journal-active');
    activeList.innerHTML = '';
    if (!active.length) activeList.appendChild(el('div', 'journal-empty', 'No oaths sworn. The town boards are full of them.'));
    for (const quest of active) {
      const entry = el('div', `journal-entry ${quest.ready ? 'ready' : ''}`);
      const head = el('div', 'j-head');
      head.append(el('b', '', quest.def.title), el('span', 'j-status', quest.ready ? 'RETURN TO GIVER' : `LV. ${quest.def.level}`));
      entry.appendChild(head);
      entry.appendChild(el('p', '', `Given by ${quest.giverName} · ${quest.zone}`));
      const list = el('ul');
      for (const obj of quest.def.objectives) {
        const current = Math.min(obj.count, quest.progress[obj.target] || 0);
        const li = el('li', current >= obj.count ? 'done' : '', `${obj.label} — ${current}/${obj.count}`);
        list.appendChild(li);
      }
      entry.appendChild(list);
      activeList.appendChild(entry);
    }
    const compList = $('journal-completed');
    compList.innerHTML = '';
    if (!completed.length) compList.appendChild(el('div', 'journal-empty', 'The ledger is still waiting for its first tale.'));
    for (const quest of completed) {
      const entry = el('div', 'journal-entry');
      const head = el('div', 'j-head');
      head.append(el('b', '', quest.def.title), el('span', 'j-status', 'COMPLETE'));
      entry.appendChild(head);
      entry.appendChild(el('p', '', `Rewarded by ${quest.giverName}`));
      compList.appendChild(entry);
    }
  }

  openInventory() {
    if (!this.game.started) return;
    this.renderInventory();
    this.openModal('inventory-modal');
    this.game.audio?.sfx('ui');
  }

  renderInventory() {
    const player = this.game.player;
    $('inventory-summary').textContent = `${player.className} · Level ${player.level} · ${player.raceName}${player.race === 'beast' ? ` (${player.beastName})` : ''}`;
    $('inventory-gold').textContent = `◉ ${player.gold}`;
    const slots = $('equipment-slots');
    slots.innerHTML = '';
    for (const [slot, label] of [['weapon', 'WEAPON'], ['armor', 'ARMOR'], ['trinket', 'RELIC']]) {
      const item = player.equipment[slot];
      const box = el('div', 'equipment-slot');
      box.appendChild(el('div', 'slot-icon', item?.icon || '·'));
      const copy = el('div');
      copy.appendChild(el('small', '', label));
      copy.appendChild(el('b', '', item?.name || 'Nothing equipped'));
      copy.appendChild(el('em', '', item ? itemSummary(item) : '—'));
      box.appendChild(copy);
      slots.appendChild(box);
    }
    const stats = $('inventory-stats');
    stats.innerHTML = `<b>${player.attackPower}</b> attack · <b>${player.maxHealth}</b> vitality · <b>${player.armor}</b> armor<br>${Math.round(player.critChance * 100)}% critical · ${Math.round(player.lifesteal * 100)}% lifesteal · ${player.speed.toFixed(1)} speed`;
    const grid = $('inventory-grid');
    grid.innerHTML = '';
    if (!player.inventory.length) {
      grid.appendChild(el('div', 'inv-empty', 'Your satchel is empty. Chests and vendors await.'));
      return;
    }
    player.inventory.forEach((item, index) => {
      const button = el('button', 'inv-item');
      button.type = 'button';
      button.appendChild(el('div', 'inv-icon', item.icon || '❖'));
      button.appendChild(el('b', '', item.name));
      button.appendChild(el('small', '', item.consumable ? item.desc : itemSummary(item)));
      if (!item.consumable && RARITIES[item.rarity]) {
        const dot = el('span', `rarity ${item.rarity}`);
        button.appendChild(dot);
      }
      button.appendChild(el('div', 'inv-action', item.consumable ? 'USE' : 'EQUIP'));
      button.addEventListener('click', () => {
        if (item.consumable) this.game.useConsumable(index);
        else this.game.equipItem(index);
        this.renderInventory();
      });
      grid.appendChild(button);
    });
  }

  openWorldMap() {
    if (!this.game.started) return;
    this.drawWorldMap();
    this.openModal('map-modal');
    this.game.audio?.sfx('ui');
  }

  mapClick(event) {
    const canvas = $('world-map');
    const rect = canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * WORLD_SIZE - WORLD_SIZE / 2;
    const z = ((event.clientY - rect.top) / rect.height) * WORLD_SIZE - WORLD_SIZE / 2;
    this.waypoint = { x, z };
    this.game.setWaypoint(x, z);
    this.showToast('WAYPOINT SET', `The compass now points to ${Math.round(x)}, ${Math.round(z)}.`, 'reward', '⌖');
    this.drawWorldMap();
  }

  openPause() {
    if (!this.game.started) return;
    const p = this.game.player;
    $('pause-stats').innerHTML = `<span><b>${p.level}</b>LEVEL</span><span><b>${p.gold}</b>GOLD</span><span><b>${this.game.completedQuests.size}</b>OATHS</span><span><b>${p.kills}</b>FOES</span>`;
    $('sound-toggle').classList.toggle('active', !this.game.audio?.enabled === false);
    this.openModal('pause-modal');
    this.game.audio?.sfx('ui');
  }

  toggleSoundState(enabled) {
    $('sound-toggle').classList.toggle('active', enabled);
    $('sound-toggle').textContent = enabled ? '♫ Music on' : '♫ Music off';
  }

  togglePixelState(enabled) {
    $('quality-toggle').classList.toggle('active', enabled);
    $('quality-toggle').textContent = enabled ? '▦ Pixel filter' : '▦ Smooth filter';
  }

  showToast(kicker, message, type = '', icon = '◆') {
    const stack = $('toast-stack');
    if (!stack) return;
    while (stack.children.length >= 4) stack.firstElementChild.remove();
    const toast = el('div', `toast ${type}`);
    toast.appendChild(el('span', 'toast-icon', icon));
    const copy = el('div');
    copy.appendChild(el('b', '', kicker));
    copy.appendChild(document.createTextNode(message));
    toast.appendChild(copy);
    stack.appendChild(toast);
    setTimeout(() => toast.remove(), 5200);
  }

  showZoneBanner(name, subtitle) {
    const banner = $('zone-banner');
    banner.querySelector('strong').textContent = name;
    banner.querySelector('small').textContent = subtitle || '';
    banner.classList.add('show');
    clearTimeout(this.zoneBannerTimer);
    this.zoneBannerTimer = setTimeout(() => banner.classList.remove('show'), 3200);
  }

  updateZone(zone, biome) {
    const zoneName = zone?.name || biome.name;
    const key = `${zoneName}|${biome.name}`;
    if (key === this.zoneKey) return;
    this.zoneKey = key;
    $('zone-name').textContent = zoneName;
    const duplicate = zoneName === biome.name;
    $('biome-name').textContent = duplicate ? '' : biome.name;
    $('biome-name').style.display = duplicate ? 'none' : '';
    const dot = $('zone-name').parentElement?.querySelector('.ribbon-dot');
    if (dot) dot.style.display = duplicate ? 'none' : '';
    $('minimap-zone').textContent = biome.short.toUpperCase();
    if (this.game.started) {
      this.showZoneBanner(zoneName, biome.desc);
      this.game.audio?.setBiome(biome.id);
    }
  }

  updateHUD(dt) {
    if (!this.game.started) return;
    const now = performance.now();
    if (now - this.lastHUD < 44) return;
    this.lastHUD = now;
    const p = this.game.player;
    const world = this.game.world;
    $('health-fill').style.width = `${Math.max(0, p.health / p.maxHealth) * 100}%`;
    $('energy-fill').style.width = `${Math.max(0, p.energy / p.maxEnergy) * 100}%`;
    $('health-text').textContent = `${Math.ceil(p.health)} / ${p.maxHealth}`;
    $('energy-text').textContent = `${Math.ceil(p.energy)} / ${p.maxEnergy}`;
    $('xp-fill').style.width = `${Math.min(100, (p.xp / p.xpNext) * 100)}%`;
    $('xp-text').textContent = `${p.xp} / ${p.xpNext}`;
    $('portrait-level').textContent = String(p.level);
    $('hero-name').textContent = p.name;
    $('hero-subtitle').textContent = `${p.raceName} ${p.className}`;
    $('hero-glyph').textContent = CLASS_GLYPHS[p.classId];
    $('gold-text').textContent = String(p.gold);
    $('clock').textContent = formatTime(world.timeOfDay);
    const weather = world.currentWeather || WEATHER.clear;
    $('weather-icon').textContent = weather.icon;
    $('weather-name').textContent = weather.name;
    $('potion-count').textContent = String(p.potions);
    $('touch-potion-count').textContent = String(p.potions);
    const attackFrac = p.cooldowns.attack > 0 ? p.cooldowns.attack / p.attackCooldown : 0;
    const abilityFrac = p.cooldowns.ability > 0 ? p.cooldowns.ability / p.abilityCooldown : 0;
    const dodgeFrac = p.cooldowns.dodge > 0 ? p.cooldowns.dodge / 0.9 : 0;
    $('cd-attack').style.transform = `scaleY(${attackFrac})`;
    $('cd-ability').style.transform = `scaleY(${abilityFrac})`;
    $('cd-dodge').style.transform = `scaleY(${dodgeFrac})`;
    $('minimap-coords').textContent = `${Math.round(p.position.x)}, ${Math.round(p.position.z)}`;
    this.updateQuestTracker();
    this.updateBossBar();
    this.updateStatuses();
    this.updateInteract();
    this.updateEnemyLabels();
    if (now - this.lastMinimap > 120) {
      this.lastMinimap = now;
      this.drawMinimap();
    }
    this.game.audio?.tick(world.nightFactor > 0.5);
  }

  updateQuestTracker() {
    const quests = this.game.getActiveQuests();
    const key = quests.map(q => `${q.id}:${q.ready}:${Object.values(q.progress).join(',')}`).join('|');
    if (key === this.questRenderKey) return;
    this.questRenderKey = key;
    const list = $('quest-tracker-list');
    list.innerHTML = '';
    if (!quests.length) {
      list.appendChild(el('div', 'quest-empty', 'Find a soul with an oath to swear.'));
      return;
    }
    for (const quest of quests.slice(0, 3)) {
      const row = el('div', 'quest-track');
      const name = el('div', 'q-name');
      name.appendChild(el('span', 'q-mark', quest.ready ? '?' : '!'));
      name.appendChild(document.createTextNode(quest.def.title));
      row.appendChild(name);
      for (const obj of quest.def.objectives) {
        const progress = Math.min(obj.count, quest.progress[obj.target] || 0);
        const line = el('div', `q-obj ${progress >= obj.count ? 'done' : ''}`, `${obj.label} ${progress}/${obj.count}`);
        row.appendChild(line);
      }
      if (quest.ready) row.appendChild(el('div', 'q-obj q-ready', `Return to ${quest.giverName}`));
      list.appendChild(row);
    }
  }

  updateBossBar() {
    const boss = this.game.activeBoss;
    const bar = $('boss-bar');
    if (!boss || boss.dead) { bar.classList.add('hidden'); return; }
    bar.classList.remove('hidden');
    $('boss-title').textContent = `${boss.name} — ${boss.title}`;
    $('boss-level').textContent = `Lv. ${boss.level}`;
    $('boss-fill').style.width = `${Math.max(0, boss.health / boss.maxHealth) * 100}%`;
    $('boss-fill').style.background = boss.element === 'fire'
      ? 'linear-gradient(180deg,#ffb25e,#c74934 55%,#771f24)'
      : boss.element === 'shadow' ? 'linear-gradient(180deg,#b69ae4,#6f4c99 55%,#3a2454)' : 'linear-gradient(180deg,#d4e47d,#7c9a3f 55%,#4b5f28)';
    $('boss-element').textContent = `${ELEMENTS[boss.element]?.name.toUpperCase() || 'UNKNOWN'} · ${boss.title}`;
  }

  updateStatuses() {
    const list = $('status-effects');
    const statuses = this.game.player.statuses;
    const key = statuses.map(s => s.id).join(',');
    if (key === this.statusKey) return;
    this.statusKey = key;
    list.innerHTML = '';
    for (const status of statuses) {
      const chip = el('div', `status-chip ${status.buff ? 'buff' : ''}`, `${status.icon || '◆'} ${status.name} ${Math.ceil(status.remaining)}s`);
      list.appendChild(chip);
    }
  }

  updateInteract() {
    const prompt = $('interact-prompt');
    const target = this.game.nearbyInteraction;
    if (!target || this.game.uiOpen || this.game.player.dead) {
      prompt.classList.add('hidden');
      return;
    }
    prompt.classList.remove('hidden');
    $('interact-label').textContent = target.label;
  }

  updateEnemyLabels() {
    const camera = this.game.camera;
    const alive = new Set();
    const p = this.game.player;
    for (const enemy of this.game.enemies) {
      if (enemy.dead || enemy.isBoss) continue;
      alive.add(enemy.id);
      const distance = enemy.root.position.distanceTo(p.position);
      if (distance > 30 || this.game.uiOpen) {
        if (this.enemyLabels.has(enemy.id)) this.enemyLabels.get(enemy.id).style.display = 'none';
        continue;
      }
      let label = this.enemyLabels.get(enemy.id);
      if (!label) {
        label = el('div', 'enemy-label');
        label.innerHTML = '<span class="enemy-el"></span><b></b><i><s></s></i>';
        $('world-labels').appendChild(label);
        this.enemyLabels.set(enemy.id, label);
      }
      label.style.display = '';
      const vec = new THREE.Vector3(enemy.root.position.x, enemy.root.position.y + enemy.height + 0.6, enemy.root.position.z).project(camera);
      if (vec.z > 1 || vec.z < -1 || Math.abs(vec.x) > 1.08 || Math.abs(vec.y) > 1.08) { label.style.display = 'none'; continue; }
      label.style.left = `${(vec.x * 0.5 + 0.5) * window.innerWidth}px`;
      label.style.top = `${(-vec.y * 0.5 + 0.5) * window.innerHeight}px`;
      label.querySelector('b').textContent = enemy.name;
      label.querySelector('.enemy-el').textContent = ELEMENTS[enemy.element]?.icon || '◆';
      label.querySelector('.enemy-el').style.color = ELEMENTS[enemy.element]?.css || '#fff';
      label.querySelector('s').style.width = `${Math.max(0, enemy.health / enemy.maxHealth) * 100}%`;
      label.classList.toggle('elite', !!enemy.def.elite);
    }
    for (const [id, label] of this.enemyLabels) {
      if (!alive.has(id)) { label.remove(); this.enemyLabels.delete(id); }
    }
  }

  showDamage(worldPos, amount, options = {}) {
    const camera = this.game.camera;
    const vec = worldPos.clone().project(camera);
    if (vec.z > 1 || Math.abs(vec.x) > 1.1 || Math.abs(vec.y) > 1.1) return;
    const node = el('div', `damage-number ${options.crit ? 'crit' : ''} ${options.heal ? 'heal' : ''}`);
    node.textContent = `${options.heal ? '+' : '-'}${Math.round(amount)}`;
    node.style.left = `${(vec.x * 0.5 + 0.5) * window.innerWidth + (Math.random() - 0.5) * 22}px`;
    node.style.top = `${(-vec.y * 0.5 + 0.5) * window.innerHeight - 10}px`;
    if (options.element && ELEMENTS[options.element]) node.style.color = ELEMENTS[options.element].css;
    if (options.crit) node.style.fontSize = '24px';
    $('floating-layer').appendChild(node);
    setTimeout(() => node.remove(), 900);
  }

  flashDamage() {
    const flash = $('damage-flash');
    flash.classList.add('flash');
    setTimeout(() => flash.classList.remove('flash'), 110);
  }

  flashLightning() {
    const tint = $('weather-tint');
    tint.style.background = 'rgba(220,234,255,.32)';
    setTimeout(() => { tint.style.background = ''; }, 90);
  }

  setWeatherVisual(weather) {
    const tint = $('weather-tint');
    tint.style.background = weather.tint;
    $('rain-glass').classList.toggle('active', weather.rain || weather.snow);
    if (weather.rain) tint.style.background = weather.tint;
  }

  drawMinimap() {
    const canvas = $('minimap');
    const ctx = canvas.getContext('2d');
    const p = this.game.player;
    const size = 196;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, size, size);
    const range = 92;
    const map = this.game.world.mapCanvas;
    const mx = p.position.x + WORLD_SIZE / 2;
    const mz = p.position.z + WORLD_SIZE / 2;
    const sx = mx - range / 2, sy = mz - range / 2;
    ctx.fillStyle = '#0b1716'; ctx.fillRect(0, 0, size, size);
    ctx.drawImage(map, sx, sy, range, range, 0, 0, size, size);
    const toLocal = (x, z) => [((x + WORLD_SIZE / 2 - sx) / range) * size, ((z + WORLD_SIZE / 2 - sy) / range) * size];
    for (const chest of this.game.world.chests) {
      if (chest.x < sx || chest.x > sx + range || chest.z < sy || chest.z > sy + range) continue;
      const [x, y] = toLocal(chest.x, chest.z);
      ctx.fillStyle = chest.opened ? '#5d5a4c' : chest.locked ? '#9b84dd' : '#e9b85f';
      ctx.fillRect(x - 2, y - 2, 4, 4);
    }
    for (const npc of this.game.npcs) {
      const [x, y] = toLocal(npc.def.pos[0], npc.def.pos[1]);
      const quest = npc.def.questId ? this.game.quests[npc.def.questId] : null;
      ctx.fillStyle = quest?.ready ? '#71d7c4' : quest?.state === 'available' ? '#e9b85f' : npc.def.vendor ? '#9ad5c9' : '#d8cfb0';
      ctx.fillRect(x - 2, y - 2, 4, 4);
    }
    for (const enemy of this.game.enemies) {
      if (enemy.dead || enemy.isBoss) continue;
      if (enemy.root.position.x < sx || enemy.root.position.x > sx + range || enemy.root.position.z < sy || enemy.root.position.z > sy + range) continue;
      const [x, y] = toLocal(enemy.root.position.x, enemy.root.position.z);
      ctx.fillStyle = '#d85a57'; ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
    }
    for (const boss of this.game.enemies.filter(e => e.isBoss && !e.dead)) {
      const [x, y] = toLocal(boss.root.position.x, boss.root.position.z);
      if (x < 0 || x > size || y < 0 || y > size) continue;
      ctx.fillStyle = '#dca7ff'; ctx.fillRect(x - 3, y - 3, 6, 6);
    }
    if (this.waypoint) {
      const [x, y] = toLocal(this.waypoint.x, this.waypoint.z);
      ctx.strokeStyle = '#ffd77e'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(x, y - 6); ctx.lineTo(x + 5, y); ctx.lineTo(x, y + 6); ctx.lineTo(x - 5, y); ctx.closePath(); ctx.stroke();
    }
    const [px, py] = [size / 2, size / 2];
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(-p.facing);
    ctx.fillStyle = '#fff0bc';
    ctx.beginPath(); ctx.moveTo(0, -7); ctx.lineTo(5, 5); ctx.lineTo(0, 2); ctx.lineTo(-5, 5); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = '#1a1a12'; ctx.lineWidth = 1; ctx.stroke();
    ctx.restore();
    // subtle vignette
    const grad = ctx.createRadialGradient(size / 2, size / 2, size * 0.3, size / 2, size / 2, size * 0.72);
    grad.addColorStop(0, 'rgba(0,0,0,0)'); grad.addColorStop(1, 'rgba(3,9,12,.55)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, size, size);
  }

  drawWorldMap() {
    const canvas = $('world-map');
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.game.world.mapCanvas, 0, 0, w, h);
    const toMap = (x, z) => [((x + WORLD_SIZE / 2) / WORLD_SIZE) * w, ((z + WORLD_SIZE / 2) / WORLD_SIZE) * h];
    // Region labels.
    ctx.font = '15px "Press Start 2P", monospace';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(241,227,191,.75)';
    for (const id of ['meadow', 'forest', 'volcano', 'beach', 'lake', 'graveyard', 'highlands', 'cave']) {
      const b = this.game.world.biomeAt && { ...this.game.world };
      const biome = this.game.biomes?.[id];
      if (!biome) continue;
      const [x, y] = toMap(biome.center[0], biome.center[1]);
      ctx.fillStyle = 'rgba(9,20,24,.58)';
      ctx.fillRect(x - 56, y - 11, 112, 20);
      ctx.fillStyle = '#f1e3bf';
      ctx.fillText(biome.short.toUpperCase(), x, y + 3);
    }
    for (const id of ['town', 'city']) {
      const biome = this.game.biomes?.[id];
      if (!biome) continue;
      const [x, y] = toMap(biome.center[0], biome.center[1]);
      ctx.fillStyle = '#ffe7a2';
      ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill();
      ctx.font = '12px "Press Start 2P", monospace';
      ctx.fillStyle = '#fff0c4'; ctx.fillText(biome.name.toUpperCase(), x, y - 13);
    }
    // markers
    for (const npc of this.game.npcs) {
      const [x, y] = toMap(npc.def.pos[0], npc.def.pos[1]);
      const q = npc.def.questId ? this.game.quests[npc.def.questId] : null;
      ctx.fillStyle = q?.ready ? '#71d7c4' : q?.state === 'available' ? '#e9b85f' : npc.def.vendor ? '#b8d6cc' : '#d8cfb0';
      ctx.beginPath(); ctx.arc(x, y, 3.4, 0, Math.PI * 2); ctx.fill();
    }
    for (const chest of this.game.world.chests) {
      if (chest.opened) continue;
      const [x, y] = toMap(chest.x, chest.z);
      ctx.fillStyle = chest.locked ? '#a38bc9' : '#e9b85f';
      ctx.fillRect(x - 3, y - 3, 6, 6);
    }
    for (const boss of this.game.enemies.filter(e => e.isBoss && !e.dead)) {
      const [x, y] = toMap(boss.root.position.x, boss.root.position.z);
      ctx.strokeStyle = '#e0a5ff'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#e0a5ff'; ctx.font = '10px "Press Start 2P"'; ctx.fillText('☠', x, y + 3);
    }
    if (this.waypoint) {
      const [x, y] = toMap(this.waypoint.x, this.waypoint.z);
      ctx.strokeStyle = '#ffd77e'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x, y - 12); ctx.lineTo(x + 9, y); ctx.lineTo(x, y + 12); ctx.lineTo(x - 9, y); ctx.closePath(); ctx.stroke();
    }
    const p = this.game.player;
    const [px, py] = toMap(p.position.x, p.position.z);
    ctx.save(); ctx.translate(px, py); ctx.rotate(-p.facing);
    ctx.fillStyle = '#fff0bc'; ctx.strokeStyle = '#0b1716'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, -10); ctx.lineTo(7, 7); ctx.lineTo(0, 3); ctx.lineTo(-7, 7); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    // corner compass
    ctx.fillStyle = 'rgba(241,227,191,.7)'; ctx.font = '18px "Press Start 2P"'; ctx.fillText('N', w - 30, 32);
  }

  showLevelUp(level, detail) {
    $('level-up-number').textContent = String(level);
    $('level-up-detail').textContent = detail || 'Vitality restored · New power unlocked';
    const overlay = $('level-up');
    overlay.classList.remove('hidden');
    clearTimeout(this.levelTimer);
    this.levelTimer = setTimeout(() => overlay.classList.add('hidden'), 3000);
  }

  showDeath(seconds) {
    this.deathTimer = seconds;
    $('death-count').textContent = String(Math.ceil(seconds));
    $('death-modal').classList.remove('hidden');
    this.setUIOpen(true);
    $('death-modal').classList.remove('hidden');
  }

  updateDeath(seconds) {
    if (seconds === undefined) return;
    $('death-count').textContent = String(Math.max(0, Math.ceil(seconds)));
  }

  hideDeath() {
    $('death-modal').classList.add('hidden');
    this.setUIOpen(false);
  }

  showFatal(message) {
    $('fatal-message').textContent = message;
    $('fatal-error').classList.remove('hidden');
  }
}
