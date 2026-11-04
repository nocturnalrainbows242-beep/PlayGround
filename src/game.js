/* ═══════════════════════════════════════════════════════════════
   AETHERFALL — game orchestration, player, NPCs, enemies, combat
   ═══════════════════════════════════════════════════════════════ */

import * as THREE from 'three';
import {
  RACES, BEASTS, CLASSES, ELEMENTS, BIOMES, WEATHER, NPC_DEFS, QUESTS,
  ENEMY_TYPES, BOSSES, CONSUMABLES, CLASS_GEAR, TRINKETS, RARITIES,
  WATER_LEVEL, WORLD_LIMIT,
  makeStarterWeapon, makeStarterArmor, makeItem, makeTrinket,
  generateShopStock, makeQuestRelic, xpForLevel, clamp, distance2,
} from './data.js';
import { World, PLAYER_SPAWN, TOWN, CITY } from './world.js';
import {
  createCharacter, paletteFromIndices, animateHumanoid, updateWeapon,
  createEnemyModel, animateEnemy, createNpcMarker, createProjectileMesh,
  createGlowSprite, material, box, cylinder, sphere, disposeObject,
} from './entities.js';
import { UI } from './ui.js';
import { SoundEngine } from './audio.js';

const $ = id => document.getElementById(id);
const SAVE_KEY = 'aetherfall_save_v2';
const SAVE_VERSION = 2;
const TAU = Math.PI * 2;

const elementColor = (element) => ELEMENTS[element]?.color || 0xe7dcc2;

function angleDelta(a, b) {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
}

function approachAngle(current, target, amount) {
  return current + angleDelta(current, target) * clamp(amount, 0, 1);
}

function oppositeElement(element) {
  return { fire: 'ice', ice: 'fire', holy: 'shadow', shadow: 'holy',
    lightning: 'earth', earth: 'lightning', water: 'wind', wind: 'water' }[element] || null;
}

function rarityForLevel(level, bonus = 0) {
  const roll = level + bonus;
  if (roll >= 8) return 'epic';
  if (roll >= 5) return 'rare';
  if (roll >= 3) return 'uncommon';
  return 'common';
}

function defaultStats(character) {
  const race = RACES[character.race] || RACES.human;
  const beast = character.race === 'beast' ? BEASTS[character.beastType] || BEASTS.dog : null;
  const cls = CLASSES[character.classId] || CLASSES.warrior;
  return { race, beast, cls };
}

/* ═══════════════════════════════════════════════════════════════
   GAME
   ═══════════════════════════════════════════════════════════════ */

export class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();
    this.elapsed = 0;
    this.started = false;
    this.uiOpen = false;
    this.previewMode = true;
    this.dead = false;
    this.player = null;
    this.previewModel = null;
    this.previewLight = null;
    this.npcs = [];
    this.enemies = [];
    this.projectiles = [];
    this.effects = [];
    this.timers = [];
    this.quests = {};
    this.completedQuests = new Set();
    this.activeBoss = null;
    this.nearbyInteraction = null;
    this.touchMove = new THREE.Vector2();
    this.keys = new Set();
    this.cameraYaw = 0;
    this.cameraPitch = 0.34;
    this.cameraDistance = 8.6;
    this.cameraTarget = new THREE.Vector3();
    this.pointer = { down: false, id: null, x: 0, y: 0, moved: 0, start: 0, button: 0 };
    this.biomes = BIOMES;
    this.waypoint = null;
    this.timeOfDay = 9.2;
    this.weather = WEATHER.clear;
    this.weatherTimer = 80;
    this.deathTimer = 0;
    this.autosaveTimer = 45;
    this.pixelFilter = true;
    this.renderScale = 0.74;
    this.activeVendorNpc = null;
    this.savedGame = null;
    this.pendingSave = null;

    this.createRenderer();
    this.createCamera();
    this.audio = new SoundEngine();
    this.world = new World(this);
    this.world.sun.shadow.mapSize.set(1536, 1536);
    this.ui = new UI(this);
    this.initQuests();
    this.createNpcs();
    this.spawnEnemies();
    this.createPreview();
    this.bindEvents();
    this.resize();
    this.restoreSaveMeta();
    this.animate();
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.setPixelRatio(1);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.domElement.setAttribute('aria-hidden', 'true');
    $('viewport').appendChild(this.renderer.domElement);
  }

  createCamera() {
    this.camera = new THREE.PerspectiveCamera(52, 1, 0.12, 620);
    this.camera.position.set(4, 4.2, 44);
    this.camera.lookAt(0, 1.4, 38);
  }

  /* ── Preview / character creation ───────────────────────────── */

  createPreview() {
    this.removePreview();
    const selection = this.ui?.selection || { name: 'Rowan', sex: 'feminine', race: 'human', beastType: 'dog', classId: 'warrior', skin: 0, cloth: 0 };
    const palette = paletteFromIndices(selection.skin ?? 0, selection.cloth ?? 0);
    this.previewModel = createCharacter({
      ...selection,
      skin: palette.skin,
      cloth: palette.cloth,
      role: 'hero',
    });
    const y = this.world.heightAt(PLAYER_SPAWN.x, PLAYER_SPAWN.z);
    this.previewModel.position.set(PLAYER_SPAWN.x, y, PLAYER_SPAWN.z);
    this.previewModel.rotation.y = Math.PI;
    this.scene.add(this.previewModel);
    this.previewLight = new THREE.PointLight(0xffd9a0, 2.1, 13, 2);
    this.previewLight.position.set(PLAYER_SPAWN.x + 2.4, y + 3.4, PLAYER_SPAWN.z + 3.4);
    this.scene.add(this.previewLight);
  }

  removePreview() {
    if (this.previewModel) {
      this.scene.remove(this.previewModel);
      disposeObject(this.previewModel);
      this.previewModel = null;
    }
    if (this.previewLight) {
      this.scene.remove(this.previewLight);
      this.previewLight = null;
    }
  }

  previewCharacter(selection) {
    if (this.started) return;
    const palette = paletteFromIndices(selection.skin ?? 0, selection.cloth ?? 0);
    const old = this.previewModel;
    this.previewModel = createCharacter({
      ...selection,
      skin: palette.skin,
      cloth: palette.cloth,
      role: 'hero',
    });
    const y = this.world.heightAt(PLAYER_SPAWN.x, PLAYER_SPAWN.z);
    this.previewModel.position.set(PLAYER_SPAWN.x, y, PLAYER_SPAWN.z);
    this.previewModel.rotation.y = Math.PI;
    this.scene.add(this.previewModel);
    if (old) {
      this.scene.remove(old);
      disposeObject(old);
    }
  }

  updatePreview(dt) {
    if (!this.previewModel) return;
    const time = this.elapsed;
    animateHumanoid(this.previewModel, time, 0, 0, false);
    const angle = Math.sin(time * 0.12) * 0.16 + 0.12;
    const radius = 6.4;
    const x = PLAYER_SPAWN.x + Math.sin(angle) * radius;
    const z = PLAYER_SPAWN.z + Math.cos(angle) * radius;
    const ground = this.world.heightAt(x, z);
    const targetY = this.world.heightAt(PLAYER_SPAWN.x, PLAYER_SPAWN.z) + 1.45;
    this.camera.position.lerp(new THREE.Vector3(x, Math.max(ground + 2.6, targetY + 1.35), z), 1 - Math.exp(-dt * 3.2));
    this.camera.lookAt(PLAYER_SPAWN.x, targetY, PLAYER_SPAWN.z);
    if (this.previewLight) {
      this.previewLight.position.set(PLAYER_SPAWN.x + Math.sin(time * 0.35) * 2.8, this.world.heightAt(PLAYER_SPAWN.x, PLAYER_SPAWN.z) + 3.6, PLAYER_SPAWN.z + 3.2);
    }
    this.timeOfDay = 9.2 + Math.sin(time * 0.02) * 0.6;
    this.world.update(dt, time, this.timeOfDay, WEATHER.clear, { x: PLAYER_SPAWN.x, y: 0, z: PLAYER_SPAWN.z });
    this.updateRuneVisuals(dt);
    this.world.chests.forEach(chest => this.world.updateChest(chest, dt));
  }

  /* ── Start / continue ──────────────────────────────────────── */

  startGame(character) {
    if (this.started) return;
    this.started = true;
    this.previewMode = false;
    this.removePreview();
    this.player = new Player(character, this);
    this.player.position.set(PLAYER_SPAWN.x, this.world.heightAt(PLAYER_SPAWN.x, PLAYER_SPAWN.z), PLAYER_SPAWN.z);
    this.player.root.position.copy(this.player.position);
    this.player.facing = 0;
    this.player.root.rotation.y = 0;
    this.scene.add(this.player.root);
    this.cameraYaw = 0;
    this.cameraPitch = 0.32;
    this.cameraDistance = 8.4;
    this.timeOfDay = 9.2;
    this.weather = WEATHER.clear;
    this.world.setWeather('clear');
    this.ui.setWeatherVisual(this.weather);
    this.ui.togglePixelState(this.pixelFilter);
    this.ui.toggleSoundState(this.audio.enabled);
    this.ui.updateZone({ name: BIOMES.town.name }, BIOMES.town);
    this.ui.showToast('AETHERFALL', 'The road is yours. Follow the field notes.', 'reward', '✦');
    this.updateCamera(1, true);
    this.refreshNpcMarkers();
    if (this.pendingSave) {
      const save = this.pendingSave;
      this.pendingSave = null;
      this.applySave(save);
    }
  }

  restoreSaveMeta() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return;
      const save = JSON.parse(raw);
      if (!save || save.version !== SAVE_VERSION || !save.character || !save.player) return;
      this.savedGame = save;
      const wrap = document.querySelector('.start-wrap');
      if (!wrap) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.id = 'continue-button';
      button.className = 'pixel-button muted';
      button.style.cssText = 'font-size:7px;padding:8px 14px;margin-top:2px;';
      button.textContent = `Continue · Level ${save.player.level}`;
      button.addEventListener('click', () => this.continueSavedGame(save));
      const hint = wrap.querySelector('span');
      if (hint) wrap.insertBefore(button, hint); else wrap.appendChild(button);
    } catch {
      /* A corrupt save simply does not exist. */
    }
  }

  continueSavedGame(save) {
    if (this.started) return;
    this.audio.init();
    this.audio.sfx('ui');
    this.ui.setCharacter(save.character);
    this.pendingSave = save;
    this.ui.startGame();
  }

  save() {
    if (!this.started || !this.player) return false;
    try {
      const p = this.player;
      const data = {
        version: SAVE_VERSION,
        savedAt: Date.now(),
        character: { ...p.character },
        player: {
          level: p.level,
          xp: p.xp,
          gold: p.gold,
          health: p.health,
          energy: p.energy,
          potions: p.potions,
          kills: p.kills,
          position: { x: p.position.x, y: p.position.y, z: p.position.z },
          equipment: {
            weapon: p.equipment.weapon,
            armor: p.equipment.armor,
            trinket: p.equipment.trinket,
          },
          inventory: p.inventory,
        },
        quests: Object.values(this.quests).map(q => ({ id: q.id, state: q.state, progress: q.progress, ready: q.ready })),
        completed: [...this.completedQuests],
        timeOfDay: this.timeOfDay,
        weather: this.weather.id,
        waypoint: this.waypoint,
        chests: this.world.chests.map(c => ({ id: c.id, opened: c.opened, locked: c.locked })),
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(data));
      this.savedGame = data;
      return true;
    } catch {
      return false;
    }
  }

  applySave(save) {
    if (!this.player || !save?.player) return;
    const p = this.player;
    const s = save.player;
    p.level = Math.max(1, s.level || 1);
    p.xp = s.xp || 0;
    p.xpNext = xpForLevel(p.level);
    p.gold = s.gold || 0;
    p.potions = s.potions || 0;
    p.kills = s.kills || 0;
    p.equipment.weapon = s.equipment?.weapon || p.equipment.weapon;
    p.equipment.armor = s.equipment?.armor || p.equipment.armor;
    p.equipment.trinket = s.equipment?.trinket || null;
    p.inventory = Array.isArray(s.inventory) ? s.inventory : [];
    p.recalcStats(false);
    p.health = clamp(s.health || p.maxHealth, 1, p.maxHealth);
    p.energy = clamp(s.energy || p.maxEnergy, 0, p.maxEnergy);
    if (s.position) {
      p.position.set(s.position.x, this.world.heightAt(s.position.x, s.position.z), s.position.z);
      p.root.position.copy(p.position);
    }
    if (p.equipment.weapon) updateWeapon(p.root, p.classId, p.equipment.weapon);
    if (save.quests) {
      for (const qs of save.quests) {
        const quest = this.quests[qs.id];
        if (!quest) continue;
        quest.state = qs.state || 'available';
        quest.progress = qs.progress || {};
        quest.ready = !!qs.ready;
      }
    }
    this.completedQuests = new Set(save.completed || []);
    for (const id of this.completedQuests) {
      if (this.quests[id]) this.quests[id].state = 'completed';
    }
    if (typeof save.timeOfDay === 'number') this.timeOfDay = save.timeOfDay;
    if (save.weather) {
      this.weather = WEATHER[save.weather] || WEATHER.clear;
      this.world.setWeather(this.weather.id);
      this.ui.setWeatherVisual(this.weather);
    }
    if (save.waypoint) this.waypoint = { ...save.waypoint };
    if (save.chests) {
      for (const cs of save.chests) {
        const chest = this.world.chests.find(c => c.id === cs.id);
        if (!chest) continue;
        chest.locked = !!cs.locked;
        chest.opened = !!cs.opened;
        if (chest.opened) {
          chest.opening = false;
          chest.open = true;
          chest.root.userData.lid.rotation.x = -1.55;
          if (!chest.locked) chest.root.userData.lock.visible = false;
        }
      }
    }
    this.refreshNpcMarkers();
    this.ui.questRenderKey = '';
    this.ui.showToast('JOURNEY RESUMED', `${p.name} · Level ${p.level} · ${p.gold} gold`, 'reward', '◆');
    this.updateCamera(1, true);
  }

  /* ── Quests ────────────────────────────────────────────────── */

  initQuests() {
    for (const def of Object.values(QUESTS)) {
      const giver = NPC_DEFS.find(n => n.id === def.giver);
      this.quests[def.id] = {
        id: def.id,
        def,
        state: 'available',
        progress: Object.fromEntries(def.objectives.map(o => [o.target, 0])),
        ready: false,
        giverName: giver?.name || 'A stranger',
        zone: giver?.zone || 'Aetherfall',
      };
    }
  }

  getActiveQuests() {
    return Object.values(this.quests)
      .filter(q => q.state === 'active')
      .sort((a, b) => Number(b.ready) - Number(a.ready) || a.def.level - b.def.level);
  }

  getCompletedQuests() {
    return Object.values(this.quests)
      .filter(q => q.state === 'completed')
      .sort((a, b) => a.def.level - b.def.level);
  }

  acceptQuest(id) {
    const quest = this.quests[id];
    if (!quest || quest.state !== 'available') return false;
    quest.state = 'active';
    quest.progress = Object.fromEntries(quest.def.objectives.map(o => [o.target, 0]));
    quest.ready = false;
    this.ui.showToast('OATH SWORN', quest.def.title, 'reward', '✦');
    this.audio.sfx('quest');
    this.ui.questRenderKey = '';
    this.refreshNpcMarkers();
    return true;
  }

  registerKill(target, count = 1) {
    for (const quest of Object.values(this.quests)) {
      if (quest.state !== 'active') continue;
      let changed = false;
      for (const objective of quest.def.objectives) {
        if (objective.type !== 'kill' || objective.target !== target) continue;
        quest.progress[objective.target] = Math.min(objective.count, (quest.progress[objective.target] || 0) + count);
        changed = true;
      }
      if (!changed) continue;
      const ready = quest.def.objectives.every(o => (quest.progress[o.target] || 0) >= o.count);
      if (ready && !quest.ready) {
        quest.ready = true;
        this.soundQuestReady(quest);
      }
    }
    this.ui.questRenderKey = '';
    this.refreshNpcMarkers();
  }

  registerPuzzle(biome) {
    for (const quest of Object.values(this.quests)) {
      if (quest.state !== 'active') continue;
      let changed = false;
      for (const objective of quest.def.objectives) {
        if (objective.type !== 'puzzle' || objective.target !== biome) continue;
        quest.progress[objective.target] = Math.min(objective.count, (quest.progress[objective.target] || 0) + 1);
        changed = true;
      }
      if (!changed) continue;
      const ready = quest.def.objectives.every(o => (quest.progress[o.target] || 0) >= o.count);
      if (ready && !quest.ready) {
        quest.ready = true;
        this.soundQuestReady(quest);
      }
    }
    this.ui.questRenderKey = '';
    this.refreshNpcMarkers();
  }

  soundQuestReady(quest) {
    this.audio.sfx('quest');
    this.ui.showToast('OATH FULFILLED', `Return to ${quest.giverName}.`, 'reward', '?');
  }

  turnInQuest(id) {
    const quest = this.quests[id];
    if (!quest || quest.state !== 'active' || !quest.ready) return false;
    quest.state = 'completed';
    this.completedQuests.add(id);
    const p = this.player;
    const rewards = quest.def.rewards;
    const gold = Math.round((rewards.gold || 0) * (p.raceBonuses.gold || 1));
    const xp = Math.round((rewards.xp || 0) * (p.raceBonuses.xp || 1));
    p.gold += gold;
    p.gainXp(xp);
    let item = null;
    if (rewards.item) {
      item = makeQuestRelic(p.classId, p.level);
      p.inventory.push(item);
    }
    this.audio.sfx('level');
    this.ui.showToast('OATH COMPLETE', `${quest.def.title} · ◉ ${gold} · ✦ ${xp}${item ? ` · ${item.name}` : ''}`, 'reward', '◆');
    this.ui.questRenderKey = '';
    this.refreshNpcMarkers();
    return true;
  }

  refreshNpcMarkers() {
    for (const npc of this.npcs) npc.refreshMarker();
  }

  /* ── NPCs ──────────────────────────────────────────────────── */

  createNpcs() {
    this.markerTextures = {
      quest: createNpcMarker('quest').material.map,
      complete: createNpcMarker('complete').material.map,
      vendor: createNpcMarker('vendor').material.map,
    };
    for (const def of NPC_DEFS) {
      const npc = new NPC(def, this);
      this.npcs.push(npc);
    }
  }

  /* ── Enemies and bosses ────────────────────────────────────── */

  spawnEnemies() {
    for (const spawn of this.world.enemySpawns) {
      this.enemies.push(new Enemy(spawn, this, null));
    }
    for (const spawn of this.world.bossSpawns) {
      this.enemies.push(new Enemy(spawn, this, spawn));
    }
  }

  /* ── Interactions ──────────────────────────────────────────── */

  updateInteractions() {
    const player = this.player;
    if (!player || player.dead || this.uiOpen) { this.nearbyInteraction = null; return; }
    let best = null;
    let bestDistance = Infinity;
    const px = player.position.x, pz = player.position.z;
    for (const npc of this.npcs) {
      const d = distance2(px, pz, npc.root.position.x, npc.root.position.z);
      if (d < 3.15 && d < bestDistance) {
        bestDistance = d;
        best = { type: 'npc', target: npc, label: `Speak with ${npc.def.name}` };
      }
    }
    for (const chest of this.world.chests) {
      if (chest.opened) continue;
      const d = distance2(px, pz, chest.x, chest.z);
      if (d < 2.5 && d < bestDistance) {
        bestDistance = d;
        best = {
          type: 'chest',
          target: chest,
          label: chest.locked ? `Sealed · ${chest.name}` : `Open · ${chest.name}`,
        };
      }
    }
    for (const rune of this.world.puzzleRunes) {
      const puzzle = this.world.puzzles[rune.userData.puzzleId];
      if (!puzzle || puzzle.solved || rune.userData.lit) continue;
      const d = distance2(px, pz, rune.userData.x, rune.userData.z);
      if (d < 2.45 && d < bestDistance) {
        bestDistance = d;
        best = { type: 'rune', target: rune, label: `Touch · ${rune.userData.name}` };
      }
    }
    this.nearbyInteraction = best;
  }

  interact() {
    if (!this.started || this.uiOpen || !this.player || this.player.dead) return;
    const target = this.nearbyInteraction;
    if (!target) return;
    if (target.type === 'npc') {
      this.audio.sfx('ui');
      target.target.facePlayer(this.player.position);
      this.ui.openDialogue(target.target);
    } else if (target.type === 'chest') {
      this.openChest(target.target);
    } else if (target.type === 'rune') {
      this.activateRune(target.target);
    }
  }

  openChest(chest) {
    if (chest.opened) return;
    if (chest.locked) {
      this.audio.sfx('error');
      const puzzle = Object.values(this.world.puzzles).find(p => p.chest === chest);
      this.ui.showToast('SEALED', puzzle ? `${puzzle.name}: ${puzzle.hint}` : 'Old magic holds this lid shut.', 'danger', '◆');
      return;
    }
    chest.opened = true;
    chest.opening = true;
    const level = chest.level || 3;
    const gold = Math.round((20 + level * 13) * (this.player.raceBonuses.gold || 1));
    const xp = 18 + level * 9;
    this.player.gold += gold;
    this.player.gainXp(Math.round(xp * (this.player.raceBonuses.xp || 1)));
    const gear = CLASS_GEAR[this.player.classId];
    const pool = Math.random() < 0.58 ? gear.weapons : gear.armor;
    const template = pool[Math.min(pool.length - 1, Math.floor(level / 2.4))];
    const item = makeItem(template, level, { classId: this.player.classId, rarity: rarityForLevel(level, 1) });
    if (Math.random() < 0.25) {
      const trinket = makeTrinket(TRINKETS[Math.min(TRINKETS.length - 1, Math.floor(level / 3))], level);
      this.player.inventory.push(trinket);
    }
    this.player.inventory.push(item);
    if (Math.random() < 0.55) this.player.potions += 1;
    this.player.spawnBurst(new THREE.Vector3(chest.x, chest.root.position.y + 1.0, chest.z), 0xe9b85f);
    this.audio.sfx('chest');
    this.ui.showToast('CHEST OPENED', `${chest.name} · ◉ ${gold} · ${item.name}`, 'reward', item.icon || '◆');
    this.ui.questRenderKey = '';
    this.updateInteractions();
  }

  activateRune(rune) {
    const result = this.world.tryActivateRune(rune);
    if (!result || result.result === 'ignored') {
      this.ui.showToast('THE STONE SLEEPS', 'It has already answered.', 'muted', '✦');
      return;
    }
    if (result.result === 'lit') {
      this.audio.sfx('magic');
      this.player.spawnBurst(new THREE.Vector3(rune.userData.x, this.world.heightAt(rune.userData.x, rune.userData.z) + 1.0, rune.userData.z), elementColor(rune.userData.element));
    } else if (result.result === 'reset') {
      this.audio.sfx('error');
      this.ui.showToast('THE STONES DARKEN', 'Wrong order. Root. Ember. Dawn — or Frost. Storm. Hollow.', 'danger', '☠');
    }
    this.updateInteractions();
  }

  onRuneLit(puzzle, rune) {
    this.ui.showToast('RUNESTONE WAKES', `${rune.userData.name} · ${puzzle.progress}/${puzzle.order.length}`, 'reward', '✦');
  }

  onPuzzleSolved(puzzle) {
    this.audio.sfx('quest');
    this.ui.showToast('PUZZLE SOLVED', `${puzzle.name} yields its vault.`, 'reward', '◆');
    this.registerPuzzle(puzzle.biome);
    if (puzzle.chest) {
      puzzle.chest.locked = false;
      this.player.spawnBurst(new THREE.Vector3(puzzle.chest.x, puzzle.chest.root.position.y + 1.2, puzzle.chest.z), 0xf4dc9c);
    }
  }

  onLightning() {
    this.ui.flashLightning();
    this.audio.sfx('thunder');
  }

  /* ── Vendors and items ─────────────────────────────────────── */

  openVendor(npc) {
    this.activeVendorNpc = npc;
    if (!npc.shopStock || npc.shopLevel !== this.player.level) {
      npc.shopStock = generateShopStock(npc.def.vendor, this.player, npc.def.zone === 'Aurelune' ? 5 : 1);
      npc.shopLevel = this.player.level;
    }
    return { stock: npc.shopStock };
  }

  buyItem(item) {
    const npc = this.activeVendorNpc;
    if (!npc || !item || this.player.gold < item.price) return false;
    const index = npc.shopStock.indexOf(item);
    if (index === -1) return false;
    this.player.gold -= item.price;
    npc.shopStock.splice(index, 1);
    if (item.consumable) {
      if (item.id === 'health_potion') this.player.potions += 1;
      else this.player.inventory.push({ ...item, consumable: true });
    } else {
      this.player.inventory.push(item);
    }
    return true;
  }

  equipItem(index) {
    const item = this.player.inventory[index];
    if (!item || item.consumable) return false;
    const slot = item.slot || (item.trinket ? 'trinket' : item.type);
    if (!['weapon', 'armor', 'trinket'].includes(slot)) return false;
    const old = this.player.equipment[slot];
    this.player.equipment[slot] = item;
    this.player.inventory.splice(index, 1);
    if (old) this.player.inventory.push(old);
    this.player.recalcStats(true);
    if (slot === 'weapon') updateWeapon(this.player.root, this.player.classId, item);
    this.audio.sfx('ui');
    this.ui.showToast('EQUIPPED', item.name, 'reward', item.icon || '◆');
    return true;
  }

  useConsumable(index) {
    const item = this.player.inventory[index];
    if (!item || !item.consumable) return false;
    let message = item.name;
    if (item.effect === 'heal') {
      this.player.heal(this.player.maxHealth * (item.value || 0.45));
    } else if (item.effect === 'energy') {
      this.player.energy = Math.min(this.player.maxEnergy, this.player.energy + this.player.maxEnergy * (item.value || 0.55));
    } else if (item.effect === 'bomb') {
      const point = this.player.position.clone();
      this.dealAreaDamage(point, 6.2, 1.0, 'fire', { flat: 45 + this.player.level * 5, label: item.name });
      this.player.spawnPulse(point, 0xf17b4f, 6.2, 0.7);
    } else if (item.effect === 'ward') {
      this.player.applyStatus({
        id: 'ward_brew', name: 'Ironbark', icon: '♨', remaining: 20, buff: true,
        armor: 30, onExpire: () => this.player.recalcStats(false),
      });
      this.player.recalcStats(false);
      message = `${item.name} · +30 armor`;
    }
    this.player.inventory.splice(index, 1);
    this.audio.sfx('potion');
    this.ui.showToast('CONSUMED', message, 'reward', item.icon || '◆');
    return true;
  }

  usePotion() {
    if (!this.player || this.player.dead) return false;
    if (this.player.potions <= 0) {
      this.ui.showToast('EMPTY FLASK', 'Buy more from an apothecary.', 'danger', '♜');
      this.audio.sfx('error');
      return false;
    }
    if (this.player.health >= this.player.maxHealth - 1) {
      this.ui.showToast('ALREADY WHOLE', 'Save the draught for a worse hour.', 'muted', '♜');
      return false;
    }
    this.player.potions -= 1;
    this.player.heal(this.player.maxHealth * 0.45);
    this.player.spawnBurst(this.player.position.clone().add(new THREE.Vector3(0, 1.2, 0)), 0xf4dc9c);
    this.audio.sfx('potion');
    return true;
  }

  setWaypoint(x, z) {
    this.waypoint = { x, z };
  }

  togglePixelFilter() {
    this.pixelFilter = !this.pixelFilter;
    this.renderer.domElement.style.imageRendering = this.pixelFilter ? 'pixelated' : 'auto';
    this.ui.togglePixelState(this.pixelFilter);
    this.resize();
  }

  toggleSound() {
    this.audio.setMuted(this.audio.enabled);
    this.ui.toggleSoundState(this.audio.enabled);
  }

  /* ── World simulation ──────────────────────────────────────── */

  changeWeather(id, silent = false) {
    const weather = WEATHER[id] || WEATHER.clear;
    if (this.weather.id === weather.id && !silent) return;
    this.weather = weather;
    this.world.setWeather(weather.id);
    this.ui.setWeatherVisual(weather);
    if (!silent && this.started) {
      this.ui.showToast('THE SKY TURNS', `${weather.icon} ${weather.name}`, 'muted', weather.icon);
    }
  }

  pickWeather() {
    const entries = Object.values(WEATHER);
    const total = entries.reduce((sum, w) => sum + w.weight, 0);
    let roll = Math.random() * total;
    for (const weather of entries) {
      roll -= weather.weight;
      if (roll <= 0) return weather;
    }
    return WEATHER.clear;
  }

  updateCamera(dt, snap = false) {
    if (!this.started || !this.player) return;
    const p = this.player;
    const target = new THREE.Vector3(p.position.x, p.position.y + 1.45, p.position.z);
    const cosPitch = Math.cos(this.cameraPitch);
    const offset = new THREE.Vector3(
      Math.sin(this.cameraYaw) * cosPitch * this.cameraDistance,
      Math.sin(this.cameraPitch) * this.cameraDistance,
      Math.cos(this.cameraYaw) * cosPitch * this.cameraDistance,
    );
    const desired = target.clone().add(offset);
    const ground = this.world.heightAt(desired.x, desired.z);
    if (desired.y < ground + 0.55) desired.y = ground + 0.55;
    if (snap) this.camera.position.copy(desired);
    else this.camera.position.lerp(desired, 1 - Math.exp(-dt * 9));
    this.camera.lookAt(target);
  }

  updateRuneVisuals(dt) {
    for (const rune of this.world.puzzleRunes) {
      const data = rune.userData;
      if (data.lit && data.ring) {
        data.ring.rotation.z += dt * 1.4;
        if (data.light) data.light.intensity = 1.8 + Math.sin(this.elapsed * 4 + data.x) * 0.4;
      }
    }
  }

  updateTimers(dt) {
    for (let i = this.timers.length - 1; i >= 0; i--) {
      const timer = this.timers[i];
      timer.time -= dt;
      if (timer.time <= 0) {
        this.timers.splice(i, 1);
        try { timer.fn(); } catch (error) { console.error(error); }
      }
    }
  }

  after(seconds, fn) {
    this.timers.push({ time: seconds, fn });
  }

  updateEffects(dt) {
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const effect = this.effects[i];
      effect.life -= dt;
      const t = 1 - Math.max(0, effect.life) / effect.duration;
      if (effect.type === 'pulse') {
        const scale = 0.3 + t * 2.7;
        effect.mesh.scale.setScalar(effect.radius / 1.4 * scale);
        effect.mesh.material.opacity = Math.max(0, (1 - t) * 0.72);
      } else if (effect.type === 'glow') {
        effect.sprite.material.opacity = Math.max(0, (1 - t) * (effect.opacity ?? 0.9));
        effect.sprite.scale.setScalar((effect.size || 2) * (0.55 + t * 1.4));
      }
      if (effect.life <= 0) {
        this.scene.remove(effect.object);
        if (effect.mesh?.geometry) effect.mesh.geometry.dispose();
        if (effect.mesh?.material) effect.mesh.material.dispose();
        if (effect.sprite?.material) effect.sprite.material.dispose();
        this.effects.splice(i, 1);
      }
    }
  }

  spawnPulse(point, color, radius = 4, duration = 0.55) {
    const mesh = new THREE.Mesh(
      new THREE.RingGeometry(0.7, 1.0, 36),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false }),
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(point.x, point.y + 0.12, point.z);
    mesh.renderOrder = 8;
    this.scene.add(mesh);
    this.effects.push({ type: 'pulse', object: mesh, mesh, life: duration, duration, radius });
  }

  spawnGlow(point, color, size = 2.4, duration = 0.7, opacity = 0.9) {
    const sprite = createGlowSprite('#' + color.toString(16).padStart(6, '0'), size);
    sprite.position.copy(point);
    sprite.material.opacity = opacity;
    this.scene.add(sprite);
    this.effects.push({ type: 'glow', object: sprite, sprite, life: duration, duration, size, opacity });
  }

  scheduleTelegraph(point, radius, color, delay, onHit) {
    this.spawnPulse(point, color, radius, Math.max(0.35, delay));
    this.after(delay, () => {
      this.spawnPulse(point, color, radius * 1.12, 0.35);
      onHit?.();
    });
  }

  dealAreaDamage(point, radius, mult, element, options = {}) {
    let hits = 0;
    for (const enemy of this.enemies) {
      if (enemy.dead) continue;
      const d = distance2(point.x, point.z, enemy.root.position.x, enemy.root.position.z);
      if (d > radius + enemy.radius) continue;
      const roll = options.flat
        ? { amount: Math.round(options.flat * (0.92 + Math.random() * 0.16)), crit: false }
        : this.player.rollDamage(mult);
      this.player.damageEnemy(enemy, roll.amount, element, roll.crit, options.label || 'Spell');
      hits++;
    }
    return hits;
  }

  spawnPlayerProjectile(target, amount, element, crit, kind) {
    const p = this.player;
    const start = new THREE.Vector3(p.position.x, p.position.y + 1.5, p.position.z);
    let direction;
    let destination = null;
    if (target && !target.dead) {
      destination = new THREE.Vector3(target.root.position.x, target.root.position.y + (target.height || 1.2) * 0.55, target.root.position.z);
      direction = destination.clone().sub(start).normalize();
    } else {
      direction = new THREE.Vector3(-Math.sin(p.facing), 0, -Math.cos(p.facing));
      destination = start.clone().add(direction.clone().multiplyScalar(16));
    }
    const mesh = createProjectileMesh(kind, element);
    mesh.position.copy(start);
    if (kind === 'arrow') mesh.rotation.y = Math.atan2(direction.x, direction.z) + Math.PI;
    this.scene.add(mesh);
    this.projectiles.push({
      mesh, owner: 'player', element, amount, crit, life: 2.8,
      speed: kind === 'arrow' ? 34 : 24, direction, target, radius: 0.75,
      trail: 0,
    });
  }

  spawnEnemyProjectile(enemy, player) {
    const start = new THREE.Vector3(enemy.root.position.x, enemy.root.position.y + (enemy.height || 1.2) * 0.65, enemy.root.position.z);
    const destination = new THREE.Vector3(player.position.x, player.position.y + 1.15, player.position.z);
    const direction = destination.clone().sub(start).normalize();
    const mesh = createProjectileMesh(enemy.isBoss ? 'orb' : 'orb', enemy.element);
    mesh.position.copy(start);
    this.scene.add(mesh);
    this.projectiles.push({
      mesh, owner: 'enemy', element: enemy.element, amount: enemy.damage, crit: false,
      life: 4.2, speed: enemy.isBoss ? 18 : 14, direction, target: null, radius: 0.9,
    });
  }

  updateProjectiles(dt) {
    const player = this.player;
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const proj = this.projectiles[i];
      proj.life -= dt;
      let remove = proj.life <= 0;
      if (proj.owner === 'player' && proj.target && !proj.target.dead) {
        const aim = new THREE.Vector3(
          proj.target.root.position.x,
          proj.target.root.position.y + (proj.target.height || 1.2) * 0.55,
          proj.target.root.position.z,
        ).sub(proj.mesh.position).normalize();
        proj.direction.lerp(aim, Math.min(1, dt * 7)).normalize();
      }
      proj.mesh.position.addScaledVector(proj.direction, proj.speed * dt);
      proj.mesh.rotation.z += dt * 7;
      const ground = this.world.heightAt(proj.mesh.position.x, proj.mesh.position.z);
      if (proj.mesh.position.y < ground - 0.4) remove = true;
      if (proj.owner === 'player') {
        for (const enemy of this.enemies) {
          if (enemy.dead) continue;
          const dx = enemy.root.position.x - proj.mesh.position.x;
          const dz = enemy.root.position.z - proj.mesh.position.z;
          const dy = (enemy.root.position.y + (enemy.height || 1.2) * 0.55) - proj.mesh.position.y;
          if (Math.hypot(dx, dz) < enemy.radius + proj.radius && Math.abs(dy) < 1.8) {
            player.damageEnemy(enemy, proj.amount, proj.element, proj.crit, 'Shot');
            remove = true;
            break;
          }
        }
      } else if (!player.dead) {
        const dx = player.position.x - proj.mesh.position.x;
        const dz = player.position.z - proj.mesh.position.z;
        const dy = (player.position.y + 1.1) - proj.mesh.position.y;
        if (Math.hypot(dx, dz) < 0.85 + proj.radius && Math.abs(dy) < 1.9) {
          player.takeDamage(proj.amount, proj.element, 'Spell');
          remove = true;
        }
      }
      if (remove) {
        this.scene.remove(proj.mesh);
        disposeObject(proj.mesh);
        this.projectiles.splice(i, 1);
      }
    }
  }

  updateEnemySeparation() {
    const alive = this.enemies.filter(e => !e.dead);
    for (let i = 0; i < alive.length; i++) {
      for (let j = i + 1; j < alive.length; j++) {
        const a = alive[i], b = alive[j];
        const dx = b.root.position.x - a.root.position.x;
        const dz = b.root.position.z - a.root.position.z;
        const min = (a.radius + b.radius) * 0.82;
        const d = Math.hypot(dx, dz);
        if (d > 0.0001 && d < min) {
          const push = (min - d) * 0.5;
          const nx = dx / d, nz = dz / d;
          a.root.position.x -= nx * push;
          a.root.position.z -= nz * push;
          b.root.position.x += nx * push;
          b.root.position.z += nz * push;
        }
      }
    }
  }

  onBossAggro(boss) {
    this.activeBoss = boss;
    this.ui.showToast('A GREAT PRESENCE', `${boss.name} — ${boss.title}`, 'danger', '☠');
    this.audio.sfx('thunder');
  }

  onEnemyKilled(enemy) {
    const p = this.player;
    p.kills += 1;
    const gold = Math.round(enemy.gold * (p.raceBonuses.gold || 1));
    p.gold += gold;
    p.gainXp(Math.round(enemy.xp * (p.raceBonuses.xp || 1)));
    if (enemy.isBoss) {
      this.activeBoss = null;
      this.registerKill(`boss_${enemy.id}`);
      this.ui.showToast('BOSS FALLEN', `${enemy.name} · ◉ ${gold} · ✦ ${enemy.xp}`, 'reward', '☠');
      this.audio.sfx('level');
      if (Math.random() < 0.8) {
        const gear = CLASS_GEAR[p.classId];
        const template = gear.weapons[Math.min(gear.weapons.length - 1, 2 + Math.floor(p.level / 5))];
        const item = makeItem(template, p.level + 1, { classId: p.classId, rarity: 'epic' });
        p.inventory.push(item);
        this.ui.showToast('BOSS RELIC', item.name, 'reward', item.icon || '◆');
      }
    } else {
      this.registerKill(enemy.def.id);
      if (enemy.def.elite && Math.random() < 0.28) {
        this.ui.showToast('ELITE DROP', `${enemy.name} · ◉ ${gold}`, 'reward', '◉');
      }
    }
  }

  onPlayerDeath() {
    this.deathTimer = 5;
    this.ui.showDeath(5);
    this.audio.sfx('death');
  }

  respawn() {
    if (!this.player) return;
    const p = this.player;
    p.dead = false;
    p.health = Math.max(1, Math.round(p.maxHealth * 0.65));
    p.energy = Math.round(p.maxEnergy * 0.5);
    p.statuses = [];
    p.position.set(PLAYER_SPAWN.x, this.world.heightAt(PLAYER_SPAWN.x, PLAYER_SPAWN.z), PLAYER_SPAWN.z);
    p.root.position.copy(p.position);
    p.root.rotation.z = 0;
    p.invulnerable = 1.4;
    p.recalcStats(false);
    this.deathTimer = 0;
    this.cameraYaw = 0;
    this.updateCamera(1, true);
    this.ui.hideDeath();
    this.ui.showToast('THE THREAD HOLDS', 'The dawnstone pulls you back to Hearthvale.', 'reward', '✦');
    this.audio.sfx('quest');
  }

  update(dt) {
    this.elapsed += dt;
    if (!this.started) {
      this.updatePreview(dt);
      return;
    }
    const player = this.player;
    if (this.uiOpen) {
      this.updateEffects(dt);
      this.updateTimers(dt);
      if (player.dead && this.deathTimer > 0) {
        this.deathTimer -= dt;
        this.ui.updateDeath(this.deathTimer);
        if (this.deathTimer <= 0) this.respawn();
      }
      this.world.update(dt * 0.18, this.elapsed, this.timeOfDay, this.weather, player.position);
      this.updateRuneVisuals(dt);
      this.world.chests.forEach(chest => this.world.updateChest(chest, dt));
      this.updateCamera(dt);
      return;
    }

    // Time and weather.
    this.timeOfDay = (this.timeOfDay + dt * (24 / 660)) % 24;
    this.weatherTimer -= dt;
    if (this.weatherTimer <= 0) {
      this.weatherTimer = 78 + Math.random() * 72;
      this.changeWeather(this.pickWeather().id);
    }

    player.update(dt);
    for (const npc of this.npcs) npc.update(dt, this.elapsed, player);
    for (const enemy of this.enemies) enemy.update(dt, player);
    this.updateEnemySeparation();
    this.updateProjectiles(dt);
    this.updateEffects(dt);
    this.updateTimers(dt);

    let nearestBoss = null;
    let nearestBossDistance = Infinity;
    for (const enemy of this.enemies) {
      if (!enemy.isBoss || enemy.dead) continue;
      const d = distance2(player.position.x, player.position.z, enemy.root.position.x, enemy.root.position.z);
      if (d < 24 && d < nearestBossDistance) { nearestBossDistance = d; nearestBoss = enemy; }
    }
    this.activeBoss = nearestBoss;

    this.world.update(dt, this.elapsed, this.timeOfDay, this.weather, player.position);
    this.world.updateTraps(dt, player);
    this.world.chests.forEach(chest => this.world.updateChest(chest, dt));
    this.updateRuneVisuals(dt);
    this.updateInteractions();
    this.updateCamera(dt);

    const biome = this.world.biomeAt(player.position.x, player.position.z);
    const zoneName = biome.id === 'town' ? BIOMES.town.name : biome.id === 'city' ? BIOMES.city.name : biome.name;
    this.ui.updateZone({ name: zoneName }, biome);
    this.ui.updateHUD(dt);

    this.autosaveTimer -= dt;
    if (this.autosaveTimer <= 0) {
      this.autosaveTimer = 45;
      this.save();
    }
  }

  animate() {
    this.renderer.setAnimationLoop(() => {
      const dt = Math.min(0.05, this.clock.getDelta());
      this.update(dt);
      this.renderer.render(this.scene, this.camera);
    });
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / Math.max(1, height);
    this.camera.updateProjectionMatrix();
    const scale = this.pixelFilter ? (width < 780 ? 0.64 : this.renderScale) : Math.min(1, window.devicePixelRatio || 1);
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(Math.max(1, Math.floor(width * scale)), Math.max(1, Math.floor(height * scale)), false);
  }

  /* ── Input ─────────────────────────────────────────────────── */

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('keydown', (event) => this.onKeyDown(event));
    window.addEventListener('keyup', (event) => this.onKeyUp(event));
    window.addEventListener('blur', () => this.keys.clear());
    window.addEventListener('beforeunload', () => { if (this.started) this.save(); });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.started) this.save();
      this.keys.clear();
      this.touchMove.set(0, 0);
    });

    const canvas = this.renderer.domElement;
    canvas.addEventListener('contextmenu', event => event.preventDefault());
    canvas.addEventListener('pointerdown', (event) => {
      if (!this.started || this.uiOpen || event.button === 2) return;
      this.pointer.down = true;
      this.pointer.id = event.pointerId;
      this.pointer.x = event.clientX;
      this.pointer.y = event.clientY;
      this.pointer.moved = 0;
      this.pointer.start = performance.now();
      this.pointer.button = event.button;
      canvas.setPointerCapture?.(event.pointerId);
    });
    canvas.addEventListener('pointermove', (event) => {
      if (!this.pointer.down || event.pointerId !== this.pointer.id || this.uiOpen) return;
      const dx = event.clientX - this.pointer.x;
      const dy = event.clientY - this.pointer.y;
      this.pointer.moved += Math.abs(dx) + Math.abs(dy);
      this.pointer.x = event.clientX;
      this.pointer.y = event.clientY;
      if (this.pointer.moved > 5) {
        this.cameraYaw -= dx * 0.0055;
        this.cameraPitch = clamp(this.cameraPitch + dy * 0.0042, 0.06, 1.18);
      }
    });
    const endPointer = (event) => {
      if (event.pointerId !== this.pointer.id) return;
      const wasClick = this.pointer.down && this.pointer.moved < 7 && performance.now() - this.pointer.start < 520;
      this.pointer.down = false;
      this.pointer.id = null;
      if (wasClick && this.started && !this.uiOpen && this.player && !this.player.dead) {
        this.player.basicAttack();
      }
    };
    canvas.addEventListener('pointerup', endPointer);
    canvas.addEventListener('pointercancel', (event) => {
      if (event.pointerId === this.pointer.id) {
        this.pointer.down = false;
        this.pointer.id = null;
      }
    });
    canvas.addEventListener('wheel', (event) => {
      if (!this.started || this.uiOpen) return;
      event.preventDefault();
      this.cameraDistance = clamp(this.cameraDistance + event.deltaY * 0.006, 4.2, 15);
    }, { passive: false });
    window.addEventListener('gamepadconnected', () => this.ui.showToast('CONTROLLER', 'A gamepad answers the call.', 'muted', '◆'));
  }

  onKeyDown(event) {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
    const key = event.key.toLowerCase();
    this.keys.add(key);
    if (!this.started || !this.player) return;
    if (key === 'escape') {
      if (this.ui.currentModal) return;
      if (!this.player.dead) this.ui.openPause();
      event.preventDefault();
      return;
    }
    if (this.uiOpen) return;
    if (this.player.dead) return;
    if (event.repeat) return;
    if (key === ' ') { event.preventDefault(); this.player.dodge(); }
    if (key === 'f') this.player.useAbility();
    if (key === 'r') this.usePotion();
    if (key === 'e') this.interact();
    if (key === 'i') this.ui.openInventory();
    if (key === 'j') this.ui.openJournal();
    if (key === 'm') this.ui.openWorldMap();
    if (key === 'p') this.ui.openPause();
    if (key === 'h') this.ui.showToast('CONTROLS', 'WASD move · drag to look · click to strike · E interact.', 'muted', '✦');
  }

  onKeyUp(event) {
    this.keys.delete(event.key.toLowerCase());
  }

  getMoveInput() {
    let forward = 0, right = 0;
    if (this.keys.has('w') || this.keys.has('arrowup')) forward += 1;
    if (this.keys.has('s') || this.keys.has('arrowdown')) forward -= 1;
    if (this.keys.has('d') || this.keys.has('arrowright')) right += 1;
    if (this.keys.has('a') || this.keys.has('arrowleft')) right -= 1;
    const stick = this.touchMove;
    if (stick.lengthSq() > 0.012) {
      right += stick.x;
      forward += -stick.y;
    }
    const length = Math.hypot(forward, right);
    if (length > 1) { forward /= length; right /= length; }
    if (Math.abs(forward) < 0.02 && Math.abs(right) < 0.02) return { x: 0, z: 0, moving: false };
    const sin = Math.sin(this.cameraYaw), cos = Math.cos(this.cameraYaw);
    const dx = -sin * forward + cos * right;
    const dz = -cos * forward - sin * right;
    const len = Math.hypot(dx, dz) || 1;
    return { x: dx / len, z: dz / len, moving: true, strength: Math.min(1, length) };
  }

  pollGamepad() {
    if (!this.started || this.uiOpen || !navigator.getGamepads) return null;
    const pad = [...navigator.getGamepads()].find(Boolean);
    if (!pad) return null;
    const x = Math.abs(pad.axes[0]) > 0.16 ? pad.axes[0] : 0;
    const y = Math.abs(pad.axes[1]) > 0.16 ? pad.axes[1] : 0;
    if (x || y) return { x, z: y, moving: true };
    return null;
  }
}

/* ═══════════════════════════════════════════════════════════════
   PLAYER
   ═══════════════════════════════════════════════════════════════ */

class Player {
  constructor(character, game) {
    this.game = game;
    this.character = { ...character };
    const { race, beast, cls } = defaultStats(character);
    this.race = race.id;
    this.raceName = race.name;
    this.beastType = character.beastType || 'dog';
    this.beastName = beast?.name || '';
    this.classId = cls.id;
    this.className = cls.name;
    this.name = (character.name || 'Wanderer').slice(0, 18) || 'Wanderer';
    this.sex = character.sex || 'feminine';
    this.raceBonuses = { ...race.bonuses };
    this.beastBonuses = beast ? { ...beast.bonuses } : {};
    this.skin = character.skin;
    this.cloth = character.cloth;

    this.level = 1;
    this.xp = 0;
    this.xpNext = xpForLevel(1);
    this.gold = 60;
    this.potions = 3;
    this.kills = 0;
    this.dead = false;
    this.health = 1;
    this.maxHealth = 1;
    this.energy = 0;
    this.maxEnergy = 0;
    this.attackPower = 1;
    this.armor = 0;
    this.critChance = 0;
    this.lifesteal = 0;
    this.speed = 5;
    this.resist = {};
    this.statuses = [];
    this.facing = 0;
    this.attackAnim = 0;
    this.cooldowns = { attack: 0, ability: 0, dodge: 0 };
    this.attackCooldown = cls.attackSpeed;
    this.abilityCooldown = cls.ability.cooldown;
    this.invulnerable = 0;
    this.dashTime = 0;
    this.dashDirection = new THREE.Vector3();
    this.footstepTimer = 0;
    this.energyRegen = 4.2;
    this.position = new THREE.Vector3(PLAYER_SPAWN.x, 0, PLAYER_SPAWN.z);

    this.equipment = {
      weapon: makeStarterWeapon(cls.id),
      armor: makeStarterArmor(cls.id),
      trinket: null,
    };
    this.inventory = [];

    const palette = paletteFromIndices(character.skin ?? 0, character.cloth ?? 0);
    this.root = createCharacter({
      ...character,
      skin: palette.skin,
      cloth: palette.cloth,
      role: 'hero',
      weapon: this.equipment.weapon,
    });
    this.root.userData.rig.idle = Math.random() * 10;
    this.root.position.copy(this.position);
    this.recalcStats(false);
    this.health = this.maxHealth;
    this.energy = this.maxEnergy;
  }

  recalcStats(preserveHealth = true) {
    const { race, beast, cls } = defaultStats(this.character);
    const oldMax = this.maxHealth || 0;
    const oldHealth = this.health || 0;
    const weapon = this.equipment.weapon;
    const armorItem = this.equipment.armor;
    const trinket = this.equipment.trinket;
    const level = this.level;
    const wardArmor = this.statuses.reduce((sum, status) => sum + (status.armor || 0), 0);

    const baseHealth = cls.health + (race.bonuses.health || 0) + (beast?.bonuses.health || 0) + (level - 1) * 14;
    const baseEnergy = cls.energy + (race.bonuses.spirit || 0) + (level - 1) * 3;
    const baseArmor = cls.armor + (race.bonuses.armor || 0) + (level - 1) * 1.15;
    const basePower = cls.power + (race.bonuses.power || 0) + (beast?.bonuses.power || 0) + (level - 1) * 2.1;

    this.maxHealth = Math.round(baseHealth + (armorItem?.health || 0) + (trinket?.health || 0));
    this.maxEnergy = Math.round(baseEnergy);
    this.armor = Math.round(baseArmor + (armorItem?.armor || 0) + (trinket?.armor || 0) + wardArmor);
    const weaponPower = (weapon?.damage || 0) + (weapon?.elementPower || 0) * 0.35;
    this.attackPower = Math.round(basePower + weaponPower + (trinket?.power || 0));
    this.critChance = clamp(cls.crit + (race.bonuses.crit || 0) + (beast?.bonuses.crit || 0) + (weapon?.crit || 0) + (trinket?.crit || 0), 0.02, 0.7);
    this.lifesteal = clamp((race.bonuses.lifesteal || 0) + (trinket?.lifesteal || 0), 0, 0.45);
    this.speed = cls.speed + (race.bonuses.speed || 0) + (beast?.bonuses.speed || 0);
    this.attackCooldown = cls.attackSpeed;
    this.abilityCooldown = cls.ability.cooldown;
    this.resist = { ...(race.bonuses.resist || {}) };
    for (const item of [weapon, armorItem, trinket]) {
      if (!item?.resist) continue;
      for (const [key, value] of Object.entries(item.resist)) {
        this.resist[key] = (this.resist[key] || 0) + value;
      }
    }
    this.xpNext = xpForLevel(this.level);
    if (preserveHealth && oldMax > 0) {
      const gain = this.maxHealth - oldMax;
      this.health = clamp(oldHealth + Math.max(0, gain), 1, this.maxHealth);
    }
    this.health = clamp(this.health || 1, 0, this.maxHealth);
    this.energy = clamp(this.energy || 0, 0, this.maxEnergy);
  }

  rebuildModel() {
    if (this.root?.parent) this.root.parent.remove(this.root);
    const palette = paletteFromIndices(this.character.skin ?? 0, this.character.cloth ?? 0);
    this.root = createCharacter({
      ...this.character,
      skin: palette.skin,
      cloth: palette.cloth,
      role: 'hero',
      weapon: this.equipment.weapon,
    });
    this.root.position.copy(this.position);
    this.root.rotation.y = this.facing;
    this.game.scene.add(this.root);
  }

  rollDamage(mult = 1) {
    const crit = Math.random() < this.critChance;
    const variance = 0.9 + Math.random() * 0.2;
    return { amount: Math.round(this.attackPower * mult * variance * (crit ? 1.8 : 1)), crit };
  }

  damageEnemy(enemy, amount, element, crit, source = 'Strike') {
    if (!enemy || enemy.dead) return 0;
    let final = amount;
    if (enemy.element === element) final *= 0.78;
    else if (oppositeElement(enemy.element) === element) final *= 1.18;
    final = Math.max(1, Math.round(final));
    enemy.takeDamage(final, element, crit, this);
    if (this.lifesteal > 0) this.heal(final * this.lifesteal, true);
    return final;
  }

  heal(amount, quiet = false) {
    if (this.dead) return 0;
    const healFactor = this.raceBonuses.heal || 1;
    const value = Math.max(1, Math.round(amount * healFactor));
    const before = this.health;
    this.health = Math.min(this.maxHealth, this.health + value);
    const gained = Math.round(this.health - before);
    if (gained > 0 && !quiet) {
      const point = this.position.clone().add(new THREE.Vector3(0, 1.7, 0));
      this.game.ui.showDamage(point, gained, { heal: true, element: 'holy' });
    }
    return gained;
  }

  takeDamage(raw, element = 'physical', source = '') {
    if (this.dead) return 0;
    if (this.invulnerable > 0) return 0;
    const armorReduction = this.armor / (this.armor + 95);
    const resist = element === 'physical' ? 0 : clamp(this.resist[element] || 0, 0, 0.6);
    const amount = Math.max(1, Math.round(raw * (1 - armorReduction) * (1 - resist)));
    this.health = Math.max(0, this.health - amount);
    this.invulnerable = 0.12;
    const point = this.position.clone().add(new THREE.Vector3(0, 1.55, 0));
    this.game.ui.showDamage(point, amount, { element });
    this.game.ui.flashDamage();
    this.game.audio.sfx('hit');
    if (element === 'fire' && Math.random() < 0.18) this.applyStatus({ id: 'burn', name: 'Burning', icon: '🜂', remaining: 3, dps: 3 + this.level, tick: 1 });
    if (element === 'ice' && Math.random() < 0.16) this.applyStatus({ id: 'chill', name: 'Chilled', icon: '❄', remaining: 3, slow: 0.72 });
    if (element === 'lightning' && Math.random() < 0.1) this.applyStatus({ id: 'shock', name: 'Shocked', icon: 'ϟ', remaining: 2.5, slow: 0.86 });
    if (this.health <= 0) this.die(source);
    return amount;
  }

  applyStatus(status) {
    const existing = this.statuses.find(s => s.id === status.id);
    if (existing) {
      existing.remaining = Math.max(existing.remaining, status.remaining);
      Object.assign(existing, status);
    } else {
      this.statuses.push({ ...status, tickTimer: status.tick ?? 1 });
    }
  }

  die(source) {
    if (this.dead) return;
    this.dead = true;
    this.health = 0;
    this.invulnerable = 99;
    this.dashTime = 0;
    this.game.onPlayerDeath();
  }

  getSpeedMultiplier() {
    let mult = 1;
    for (const status of this.statuses) if (status.slow) mult *= status.slow;
    return mult;
  }

  update(dt) {
    const game = this.game;
    if (this.dead) {
      animateHumanoid(this.root, game.elapsed, 0, 0, true);
      return;
    }

    this.cooldowns.attack = Math.max(0, this.cooldowns.attack - dt);
    this.cooldowns.ability = Math.max(0, this.cooldowns.ability - dt);
    this.cooldowns.dodge = Math.max(0, this.cooldowns.dodge - dt);
    this.invulnerable = Math.max(0, this.invulnerable - dt);
    this.energy = Math.min(this.maxEnergy, this.energy + this.energyRegen * dt);
    this.attackAnim = Math.max(0, this.attackAnim - dt * 4.2);

    for (let i = this.statuses.length - 1; i >= 0; i--) {
      const status = this.statuses[i];
      status.remaining -= dt;
      if (status.dps) {
        status.tickTimer = (status.tickTimer || 1) - dt;
        if (status.tickTimer <= 0) {
          status.tickTimer += 1;
          this.health = Math.max(0, this.health - Math.round(status.dps));
          const point = this.position.clone().add(new THREE.Vector3(0, 1.65, 0));
          game.ui.showDamage(point, Math.round(status.dps), { element: status.id === 'burn' ? 'fire' : 'shadow' });
          if (this.health <= 0) { this.die(status.name); break; }
        }
      }
      if (status.remaining <= 0) {
        this.statuses.splice(i, 1);
        if (status.id === 'ward_brew') this.recalcStats(false);
        if (typeof status.onExpire === 'function') status.onExpire();
      }
    }

    const input = game.getMoveInput();
    const gamepad = game.pollGamepad?.();
    let moveX = input.x, moveZ = input.z, moving = input.moving;
    if (!moving && gamepad) {
      const sin = Math.sin(game.cameraYaw), cos = Math.cos(game.cameraYaw);
      const dx = sin * gamepad.x + cos * gamepad.z;
      const dz = cos * gamepad.x - sin * gamepad.z;
      const len = Math.hypot(dx, dz) || 1;
      moveX = dx / len; moveZ = dz / len; moving = true;
    }

    let animSpeed = 0;
    if (this.dashTime > 0) {
      this.dashTime -= dt;
      const step = this.speed * 3.4 * dt;
      this.moveWithCollision(this.dashDirection.x * step, this.dashDirection.z * step);
      animSpeed = this.speed * 1.5;
    } else if (moving) {
      const speed = this.speed * this.getSpeedMultiplier();
      this.moveWithCollision(moveX * speed * dt, moveZ * speed * dt);
      this.facing = Math.atan2(-moveX, -moveZ);
      animSpeed = speed;
      this.footstepTimer -= dt;
      if (this.footstepTimer <= 0) {
        this.footstepTimer = 0.33;
        game.audio.sfx('footstep');
      }
    } else {
      this.footstepTimer = 0;
    }

    const ground = game.world.heightAt(this.position.x, this.position.z);
    this.position.y = Math.abs(this.position.y - ground) > 3
      ? ground
      : this.position.y + (ground - this.position.y) * Math.min(1, dt * 18);
    this.root.position.copy(this.position);
    this.root.rotation.y = approachAngle(this.root.rotation.y, this.facing, dt * 18);
    animateHumanoid(this.root, game.elapsed, animSpeed, this.attackAnim, false);
  }

  moveWithCollision(dx, dz) {
    const game = this.game;
    const limit = WORLD_LIMIT;
    const radius = 0.42;
    const blocked = (x, z) => {
      if (Math.abs(x) > limit || Math.abs(z) > limit) return true;
      if (game.world.heightAt(x, z) < WATER_LEVEL + 0.08) return true;
      for (const collider of game.world.colliders) {
        if (collider.r > 8) continue;
        if (distance2(x, z, collider.x, collider.z) < collider.r + radius) return true;
      }
      return false;
    };
    const nx = clamp(this.position.x + dx, -limit, limit);
    const nz = clamp(this.position.z + dz, -limit, limit);
    if (!blocked(nx, nz)) {
      this.position.x = nx;
      this.position.z = nz;
      return;
    }
    if (Math.abs(dx) > 0.0001 && !blocked(nx, this.position.z)) this.position.x = nx;
    if (Math.abs(dz) > 0.0001 && !blocked(this.position.x, nz)) this.position.z = nz;
  }

  spawnBurst(point, color) {
    this.game.spawnGlow(point, color, 2.2, 0.55, 0.9);
  }

  spawnPulse(point, color, radius, duration) {
    this.game.spawnPulse(point, color, radius, duration);
  }

  gainXp(amount) {
    if (amount <= 0) return;
    this.xp += Math.round(amount);
    let leveled = false;
    while (this.xp >= this.xpNext) {
      this.xp -= this.xpNext;
      this.level += 1;
      leveled = true;
      this.recalcStats(false);
      this.health = this.maxHealth;
      this.energy = this.maxEnergy;
      this.game.ui.showLevelUp(this.level, `Vitality ${this.maxHealth} · Attack ${this.attackPower} · Armor ${this.armor}`);
      this.game.audio.sfx('level');
    }
    if (leveled) {
      this.game.ui.showToast('LEVEL ' + this.level, 'New power settles into your bones.', 'reward', '✦');
      this.game.ui.questRenderKey = '';
    }
  }

  faceToward(x, z) {
    const dx = x - this.position.x;
    const dz = z - this.position.z;
    if (Math.hypot(dx, dz) > 0.01) this.facing = Math.atan2(-dx, -dz);
  }

  nearestEnemy(range = 30) {
    let best = null;
    let bestDistance = range;
    for (const enemy of this.game.enemies) {
      if (enemy.dead) continue;
      const d = distance2(this.position.x, this.position.z, enemy.root.position.x, enemy.root.position.z);
      if (d < bestDistance) { bestDistance = d; best = enemy; }
    }
    return best;
  }

  basicAttack() {
    if (this.dead || this.game.uiOpen || this.cooldowns.attack > 0) return;
    const cls = CLASSES[this.classId];
    this.cooldowns.attack = this.attackCooldown;
    this.attackAnim = 1;
    const element = this.equipment.weapon?.element || cls.element;
    const ranged = cls.range > 5;
    if (ranged) {
      const target = this.nearestEnemy(cls.range + 4);
      if (target) this.faceToward(target.root.position.x, target.root.position.z);
      const roll = this.rollDamage(1);
      const kind = this.classId === 'archer' ? 'arrow' : this.classId === 'priest' ? 'holy' : 'orb';
      this.game.spawnPlayerProjectile(target, roll.amount, element, roll.crit, kind);
      this.game.audio.sfx(this.classId === 'archer' ? 'bow' : this.classId === 'priest' ? 'holy' : 'magic');
      if (!target) this.game.spawnGlow(this.position.clone().add(new THREE.Vector3(-Math.sin(this.facing) * 2, 1.4, -Math.cos(this.facing) * 2)), elementColor(element), 1.4, 0.35, 0.6);
      return;
    }
    this.game.audio.sfx('swing');
    const forward = new THREE.Vector3(-Math.sin(this.facing), 0, -Math.cos(this.facing));
    let hitAny = false;
    for (const enemy of this.game.enemies) {
      if (enemy.dead) continue;
      const dx = enemy.root.position.x - this.position.x;
      const dz = enemy.root.position.z - this.position.z;
      const d = Math.hypot(dx, dz);
      if (d > cls.range + enemy.radius * 0.5) continue;
      const dot = (dx * forward.x + dz * forward.z) / (d || 1);
      if (dot < -0.08) continue;
      const roll = this.rollDamage(1);
      this.damageEnemy(enemy, roll.amount, element, roll.crit, 'Strike');
      hitAny = true;
    }
    if (!hitAny) {
      const point = this.position.clone().add(new THREE.Vector3(forward.x * 1.4, 0.8, forward.z * 1.4));
      this.game.spawnGlow(point, elementColor(element), 1.1, 0.28, 0.55);
    }
  }

  useAbility() {
    if (this.dead || this.game.uiOpen) return;
    const cls = CLASSES[this.classId];
    if (this.cooldowns.ability > 0) return;
    if (this.energy < cls.ability.cost) {
      this.game.ui.showToast('NOT ENOUGH SPIRIT', `${cls.ability.name} needs ${cls.ability.cost} spirit.`, 'danger', '✦');
      this.game.audio.sfx('error');
      return;
    }
    this.energy -= cls.ability.cost;
    this.cooldowns.ability = cls.ability.cooldown;
    this.attackAnim = 1;
    const element = this.equipment.weapon?.element || cls.element;
    const forward = new THREE.Vector3(-Math.sin(this.facing), 0, -Math.cos(this.facing));
    const nearest = this.nearestEnemy(22);

    if (this.classId === 'warrior') {
      this.game.spawnPulse(this.position, elementColor('physical'), 5.2, 0.6);
      let hits = 0;
      for (const enemy of this.game.enemies) {
        if (enemy.dead) continue;
        if (distance2(this.position.x, this.position.z, enemy.root.position.x, enemy.root.position.z) > 5.3 + enemy.radius) continue;
        const roll = this.rollDamage(1.75);
        this.damageEnemy(enemy, roll.amount, element, roll.crit, 'Whirlwind');
        hits++;
      }
      this.game.audio.sfx('swing');
      this.game.ui.showToast('WHIRLWIND', hits ? `${hits} foes struck.` : 'The steel sings alone.', 'muted', '⟳');
    } else if (this.classId === 'rogue') {
      const dir = forward.clone();
      this.dashDirection.copy(dir);
      this.dashTime = 0.2;
      this.invulnerable = 0.45;
      this.game.audio.sfx('dodge');
      this.game.spawnPulse(this.position, elementColor('shadow'), 3.2, 0.45);
      for (const enemy of this.game.enemies) {
        if (enemy.dead) continue;
        const dx = enemy.root.position.x - this.position.x;
        const dz = enemy.root.position.z - this.position.z;
        const dot = (dx * dir.x + dz * dir.z) / (Math.hypot(dx, dz) || 1);
        if (dot > 0.55 && distance2(this.position.x, this.position.z, enemy.root.position.x, enemy.root.position.z) < 6.4) {
          const roll = this.rollDamage(1.65);
          this.damageEnemy(enemy, roll.amount, element, roll.crit, 'Shadowstep');
        }
      }
      this.game.ui.showToast('SHADOWSTEP', 'Through the dark, and out the other side.', 'muted', '⌁');
    } else if (this.classId === 'archer') {
      const center = nearest ? nearest.root.position.clone() : this.position.clone().add(forward.clone().multiplyScalar(9));
      center.y = this.game.world.heightAt(center.x, center.z);
      this.game.spawnPulse(center, elementColor('wind'), 4.8, 0.55);
      this.game.after(0.42, () => {
        this.game.spawnPulse(center, elementColor('wind'), 5.2, 0.4);
        for (let i = 0; i < 4; i++) {
          this.game.after(i * 0.09, () => this.game.dealAreaDamage(center, 4.4, 0.7, element, { label: 'Rain of Arrows' }));
        }
      });
      this.game.audio.sfx('bow');
      this.game.ui.showToast('RAIN OF ARROWS', 'The sky answers in fletching.', 'muted', '⇊');
    } else if (this.classId === 'wizard') {
      const center = nearest ? nearest.root.position.clone() : this.position.clone().add(forward.clone().multiplyScalar(10));
      center.y = this.game.world.heightAt(center.x, center.z);
      this.game.spawnPulse(center, elementColor('fire'), 6.0, 0.75);
      this.game.after(0.55, () => {
        this.game.spawnPulse(center, elementColor('fire'), 6.4, 0.45);
        this.game.spawnGlow(center.clone().add(new THREE.Vector3(0, 3, 0)), elementColor('fire'), 4.5, 0.55, 1);
        this.game.dealAreaDamage(center, 6.4, 2.2, element, { label: 'Starfall' });
      });
      this.game.audio.sfx('magic');
      this.game.ui.showToast('STARFALL', 'A small, obedient star falls.', 'muted', '☄');
    } else {
      const healed = this.heal(this.maxHealth * 0.32);
      this.game.spawnPulse(this.position, elementColor('holy'), 6.2, 0.75);
      this.game.spawnGlow(this.position.clone().add(new THREE.Vector3(0, 2.4, 0)), elementColor('holy'), 3.4, 0.7, 1);
      for (const enemy of this.game.enemies) {
        if (enemy.dead) continue;
        if (distance2(this.position.x, this.position.z, enemy.root.position.x, enemy.root.position.z) > 6.2 + enemy.radius) continue;
        const roll = this.rollDamage(1.15);
        this.damageEnemy(enemy, roll.amount, 'holy', roll.crit, 'Sanctuary');
      }
      this.game.audio.sfx('holy');
      this.game.ui.showToast('SANCTUARY', `+${healed} vitality · shadows seared.`, 'reward', '✺');
    }
  }

  dodge() {
    if (this.dead || this.game.uiOpen || this.cooldowns.dodge > 0) return;
    const input = this.game.getMoveInput();
    let dir = new THREE.Vector3(input.x, 0, input.z);
    if (!input.moving) dir.set(-Math.sin(this.facing), 0, -Math.cos(this.facing));
    dir.normalize();
    this.dashDirection.copy(dir);
    this.dashTime = 0.24;
    this.cooldowns.dodge = 0.9;
    this.invulnerable = 0.42;
    this.attackAnim = 0.5;
    this.game.audio.sfx('dodge');
    this.game.spawnGlow(this.position.clone().add(new THREE.Vector3(0, 0.7, 0)), 0x9fd8cf, 1.5, 0.35, 0.6);
  }
}

/* ═══════════════════════════════════════════════════════════════
   NPCs
   ═══════════════════════════════════════════════════════════════ */

function hexColor(value, fallback = 0x8b9491) {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = Number.parseInt(value.replace('#', ''), 16);
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}

const NPC_CLASS = {
  quest: 'priest',
  vendor: 'rogue',
};

class NPC {
  constructor(def, game) {
    this.def = def;
    this.game = game;
    this.id = def.id;
    const world = game.world;
    const x = def.pos[0];
    const z = def.pos[1];
    const palette = def.palette ? def.palette.map(color => hexColor(color)) : null;
    const classId = def.classId || NPC_CLASS[def.role] || 'warrior';
    this.root = createCharacter({
      race: def.race || 'human',
      beastType: def.beastType,
      sex: def.sex || 'feminine',
      classId,
      role: 'npc',
      palette,
      vendor: def.vendor,
      questId: def.questId,
    });
    this.root.position.set(x, world.heightAt(x, z), z);
    this.root.rotation.y = def.rotation ?? Math.PI * (0.65 + Math.random() * 0.4);
    this.baseRotation = this.root.rotation.y;
    game.scene.add(this.root);

    this.marker = createNpcMarker(def.questId ? 'quest' : 'vendor');
    if (game.markerTextures) {
      const initial = def.questId ? game.markerTextures.quest : game.markerTextures.vendor;
      this.marker.material.map = initial;
      this.marker.material.needsUpdate = true;
    }
    this.marker.position.y = 2.45;
    this.root.add(this.marker);
    this.markerKind = '';
    this.markerPhase = Math.random() * Math.PI * 2;
    this.refreshMarker();
  }

  refreshMarker() {
    const quest = this.def.questId ? this.game.quests[this.def.questId] : null;
    let kind = null;
    if (quest) {
      if (quest.state === 'available') kind = 'quest';
      else if (quest.state === 'active') kind = quest.ready ? 'complete' : 'quest';
      else kind = null;
    } else if (this.def.vendor) {
      kind = 'vendor';
    }
    this.marker.visible = !!kind;
    if (!kind) return;
    const texture = this.game.markerTextures?.[kind];
    if (texture && this.marker.material.map !== texture) {
      this.marker.material.map = texture;
      this.marker.material.needsUpdate = true;
    }
    const active = quest?.state === 'active' && !quest.ready;
    this.marker.material.opacity = active ? 0.45 : 1;
    this.marker.scale.setScalar(kind === 'complete' ? 0.72 : 0.62);
    this.markerKind = kind;
  }

  facePlayer(playerPos) {
    const dx = playerPos.x - this.root.position.x;
    const dz = playerPos.z - this.root.position.z;
    if (Math.hypot(dx, dz) > 0.001) this.root.rotation.y = Math.atan2(-dx, -dz);
  }

  update(dt, time, player) {
    animateHumanoid(this.root, time + this.markerPhase, 0, 0, false);
    const dx = player.position.x - this.root.position.x;
    const dz = player.position.z - this.root.position.z;
    const distance = Math.hypot(dx, dz);
    if (distance < 4.6 && !player.dead) {
      this.root.rotation.y = approachAngle(this.root.rotation.y, Math.atan2(-dx, -dz), dt * 4.5);
    } else {
      this.root.rotation.y = approachAngle(this.root.rotation.y, this.baseRotation, dt * 0.8);
    }
    if (this.marker.visible) {
      this.marker.position.y = 2.45 + Math.sin(time * 2.1 + this.markerPhase) * 0.09;
    }
  }
}

/* ═══════════════════════════════════════════════════════════════
   ENEMIES & BOSSES
   ═══════════════════════════════════════════════════════════════ */

let enemySerial = 0;

const BOSS_SPECIAL = {
  thornmaw: 'slam',
  pyreclaw: 'slam',
  gravewarden: 'volley',
  tidecolossus: 'slam',
  gloomroot: 'slam',
};

class Enemy {
  constructor(spawn, game, bossDef = null) {
    this.game = game;
    this.spawn = { x: spawn.x, z: spawn.z };
    this.isBoss = !!bossDef;
    this.def = bossDef || ENEMY_TYPES[spawn.type] || ENEMY_TYPES.slime;
    this.level = Math.max(1, spawn.level || this.def.level || 1);
    this.element = bossDef?.element || spawn.element || 'physical';
    this.name = this.def.name;
    this.title = this.def.title || '';
    this.id = bossDef ? `boss_${bossDef.id}` : `foe_${++enemySerial}`;

    const levelScale = 1 + (this.level - 1) * (this.isBoss ? 0.07 : 0.19);
    this.maxHealth = Math.round((this.def.hp || 50) * levelScale);
    this.health = this.maxHealth;
    this.damage = Math.max(1, Math.round((this.def.damage || 5) * (1 + (this.level - 1) * 0.12)));
    this.xp = Math.round((this.def.xp || 12) * (1 + (this.level - 1) * 0.14));
    this.gold = Math.round((this.def.gold || 3) * (1 + (this.level - 1) * 0.12));
    this.radius = this.def.radius || 0.65;
    this.speed = this.def.speed || 3;
    this.range = this.def.range || 1.8;
    this.ranged = !!this.def.ranged || this.range > 5.5;
    this.aggroRange = (this.def.aggro || 12) * (this.isBoss ? 1.12 : 1);
    this.attackInterval = this.def.attackCooldown || 1.8;
    this.windupTime = this.def.windup || 0.45;

    this.root = createEnemyModel(this.def, this.element, this.isBoss, bossDef);
    const y = game.world.heightAt(this.spawn.x, this.spawn.z);
    this.root.position.set(this.spawn.x, y, this.spawn.z);
    this.root.rotation.y = Math.random() * TAU;
    this.root.userData.enemy = this;
    game.scene.add(this.root);
    this.height = Math.max(
      1.1,
      (this.def.height || (this.isBoss ? 2.2 : 1.35)) * (this.isBoss ? 1.35 : 1) * Math.min(1.7, this.def.scale || 1),
    );
    this.baseScale = this.isBoss ? Math.min(2.5, this.root.scale.x) : this.root.scale.x;
    this.root.scale.setScalar(this.baseScale);

    this.dead = false;
    this.dying = 0;
    this.respawnTimer = 0;
    this.aggroed = false;
    this.attackCooldown = Math.random() * this.attackInterval * 0.8;
    this.attacking = 0;
    this.attackTotal = this.windupTime;
    this.specialTimer = 5 + Math.random() * 4;
    this.specialKind = BOSS_SPECIAL[bossDef?.id] || 'slam';
    this.bob = Math.random() * 10;
    this.hitWobble = 0;
    this.homeDistance = 0;
    this.lastDamageSource = '';
  }

  takeDamage(amount, element = 'physical', crit = false, source = null) {
    if (this.dead) return 0;
    const value = Math.max(1, Math.round(amount));
    this.health = Math.max(0, this.health - value);
    this.aggroed = true;
    this.hitWobble = 0.16;
    const point = new THREE.Vector3(
      this.root.position.x,
      this.root.position.y + this.height * 0.55,
      this.root.position.z,
    );
    this.game.ui.showDamage(point, value, { element, crit });
    this.game.spawnGlow(point, elementColor(element), crit ? 1.8 : 1.15, 0.28, 0.7);
    this.game.audio.sfx(crit ? 'crit' : 'hit');
    if (this.health <= 0) this.die(source);
    return value;
  }

  die(source = null) {
    if (this.dead) return;
    this.dead = true;
    this.health = 0;
    this.dying = 0.9;
    this.attacking = 0;
    this.aggroed = false;
    this.respawnTimer = this.isBoss ? 40 + Math.random() * 15 : 5 + Math.random() * 5;
    const point = this.root.position.clone().add(new THREE.Vector3(0, this.height * 0.45, 0));
    this.game.spawnGlow(point, elementColor(this.element), this.isBoss ? 7 : 2.8, this.isBoss ? 1.1 : 0.6, 0.95);
    if (this.isBoss) this.game.spawnPulse(this.root.position, elementColor(this.element), 10, 1.2);
    this.game.audio.sfx(this.isBoss ? 'death' : 'hit');
    this.game.onEnemyKilled(this);
  }

  respawn() {
    this.dead = false;
    this.dying = 0;
    this.health = this.maxHealth;
    this.root.visible = true;
    this.root.rotation.set(0, Math.random() * TAU, 0);
    this.root.position.set(this.spawn.x, this.game.world.heightAt(this.spawn.x, this.spawn.z), this.spawn.z);
    this.attackCooldown = 1.2;
    this.attacking = 0;
    this.specialTimer = 5 + Math.random() * 4;
    this.aggroed = false;
    this.game.spawnGlow(this.root.position.clone().add(new THREE.Vector3(0, 0.7, 0)), elementColor(this.element), 1.6, 0.5, 0.7);
  }

  releaseAttack(player) {
    const distance = distance2(this.root.position.x, this.root.position.z, player.position.x, player.position.z);
    if (player.dead) return;
    this.game.audio.sfx(this.ranged ? 'magic' : 'swing');
    if (this.ranged) {
      if (distance < this.range * 1.35) this.game.spawnEnemyProjectile(this, player);
    } else if (distance < this.range + 0.85) {
      player.takeDamage(this.damage, this.element, this.def.name);
      const point = player.position.clone().add(new THREE.Vector3(0, 1.1, 0));
      this.game.spawnGlow(point, elementColor(this.element), 1.25, 0.3, 0.7);
    }
  }

  bossSpecial(player) {
    if (player.dead) return;
    const target = player.position.clone();
    const label = this.specialKind === 'volley' ? 'Grave Volley' : 'Sundering Blow';
    this.game.spawnPulse(target, elementColor(this.element), 4.8, 1.05);
    this.game.audio.sfx(this.specialKind === 'volley' ? 'magic' : 'thunder');
    this.game.scheduleTelegraph(target, 4.4, elementColor(this.element), 1.05, () => {
      if (this.dead || player.dead) return;
      if (distance2(target.x, target.z, player.position.x, player.position.z) > 4.6) return;
      player.takeDamage(Math.round(this.damage * 1.45), this.element, `${this.name} · ${label}`);
      this.game.spawnPulse(player.position, elementColor(this.element), 3.2, 0.45);
    });
    if (this.specialKind === 'volley') {
      for (let i = 0; i < 3; i++) {
        this.game.after(0.45 + i * 0.22, () => {
          if (!this.dead && !player.dead) this.game.spawnEnemyProjectile(this, player);
        });
      }
    }
  }

  update(dt, player) {
    if (this.dead) {
      this.respawnTimer -= dt;
      if (this.dying > 0) {
        this.dying -= dt;
        this.root.rotation.z = Math.min(Math.PI * 0.48, this.root.rotation.z + dt * 3.4);
        this.root.position.y -= dt * 0.18;
        if (this.dying <= 0) this.root.visible = false;
      }
      if (this.respawnTimer <= 0) this.respawn();
      return;
    }

    this.bob += dt;
    this.hitWobble = Math.max(0, this.hitWobble - dt * 5);
    this.attackCooldown = Math.max(0, this.attackCooldown - dt);
    this.specialTimer = Math.max(0, this.specialTimer - dt);

    const dx = player.position.x - this.root.position.x;
    const dz = player.position.z - this.root.position.z;
    const distance = Math.hypot(dx, dz);
    const homeDistance = distance2(this.root.position.x, this.root.position.z, this.spawn.x, this.spawn.z);
    if (!this.aggroed && !player.dead && distance < this.aggroRange) {
      this.aggroed = true;
      if (this.isBoss) this.game.onBossAggro(this);
    }
    if (this.aggroed && (player.dead || distance > 34 || homeDistance > 42)) this.aggroed = false;

    let moving = 0;
    let targetX = this.spawn.x;
    let targetZ = this.spawn.z;
    if (this.aggroed) {
      targetX = player.position.x;
      targetZ = player.position.z;
    } else if (homeDistance < 0.8) {
      targetX = this.root.position.x;
      targetZ = this.root.position.z;
    }

    const toX = targetX - this.root.position.x;
    const toZ = targetZ - this.root.position.z;
    const toLength = Math.hypot(toX, toZ) || 1;

    // Attack windup pauses movement and telegraphs the blow.
    if (this.attacking > 0) {
      this.attacking -= dt;
      if (this.attacking <= 0) {
        this.attacking = 0;
        this.releaseAttack(player);
        this.attackCooldown = this.attackInterval;
      }
    } else {
      const wantsAttack = this.aggroed && !player.dead && distance < (this.ranged ? this.range : this.range + 0.9);
      if (wantsAttack && this.attackCooldown <= 0) {
        this.attacking = this.windupTime;
        this.attackTotal = this.windupTime;
        this.game.spawnPulse(this.root.position, elementColor(this.element), this.radius + 1.1, this.windupTime);
      } else if (this.aggroed && !player.dead && distance > (this.ranged ? this.range * 0.72 : this.range * 0.7)) {
        const step = Math.min(this.speed * dt, Math.max(0, distance - (this.ranged ? this.range * 0.68 : this.range * 0.72)));
        const nx = this.root.position.x + (toX / toLength) * step;
        const nz = this.root.position.z + (toZ / toLength) * step;
        if (this.game.world.heightAt(nx, nz) > WATER_LEVEL + 0.15) {
          this.root.position.x = nx;
          this.root.position.z = nz;
          moving = step / Math.max(dt, 0.0001);
        }
      } else if (!this.aggroed && homeDistance >= 0.8) {
        const step = Math.min(this.speed * 0.55 * dt, homeDistance);
        this.root.position.x += (toX / toLength) * step;
        this.root.position.z += (toZ / toLength) * step;
        moving = step / Math.max(dt, 0.0001);
      }
    }

    // Face the player while engaged, otherwise face the walk direction.
    if (this.aggroed && !player.dead) {
      this.root.rotation.y = approachAngle(this.root.rotation.y, Math.atan2(-dx, -dz), dt * 8);
    } else if (moving > 0.05) {
      this.root.rotation.y = approachAngle(this.root.rotation.y, Math.atan2(-toX, -toZ), dt * 7);
    }

    // Bosses periodically unleash a telegraphed area attack.
    if (this.isBoss && this.aggroed && !player.dead && this.specialTimer <= 0) {
      this.specialTimer = 8 + Math.random() * 5;
      this.bossSpecial(player);
    }

    const ground = this.game.world.heightAt(this.root.position.x, this.root.position.z);
    this.root.position.y += (ground - this.root.position.y) * Math.min(1, dt * 14);
    const wobble = this.hitWobble > 0 ? Math.sin(this.bob * 55) * 0.07 : 0;
    this.root.position.x += wobble * dt * 0.4;
    const attackProgress = this.attacking > 0 ? 1 - this.attacking / Math.max(0.001, this.attackTotal) : 0;
    animateEnemy(this.root, this.bob, moving / Math.max(1, this.speed), attackProgress);
    this.root.scale.setScalar(this.baseScale * (1 + Math.sin(this.bob * 2.4) * 0.012 + (this.attacking > 0 ? 0.035 : 0)));
  }
}


