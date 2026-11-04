import * as THREE from 'three';
import { BIOMES, BOSSES, WATER_LEVEL, mulberry32, distance2, pickWeighted } from './data.js';
import { material, box, cone, cylinder, sphere, createChestModel, createRuneModel, createGlowSprite } from './entities.js';

const TOWN = { x: 0, z: 13 };
const CITY = { x: 58, z: 4 };

export const CHEST_DEFS = [
  { id: 'chest_meadow', x: 26, z: -3, level: 2, name: 'Wayfarer\'s Cache', biome: 'meadow' },
  { id: 'chest_city', x: 41.2, z: 19.0, level: 4, name: 'Alley Cache', biome: 'city' },
  { id: 'chest_forest', x: -15, z: -80, level: 5, name: 'Rootbound Vault', biome: 'forest', locked: 'forest' },
  { id: 'chest_grave', x: -59, z: -28, level: 6, name: 'Mourner\'s Chest', biome: 'graveyard' },
  { id: 'chest_beach', x: 106, z: 67, level: 5, name: 'Wrecked Strongbox', biome: 'beach' },
  { id: 'chest_volcano', x: -97, z: -57, level: 7, name: 'Cinder Hoard', biome: 'volcano' },
  { id: 'chest_highlands', x: 94, z: -82, level: 7, name: 'Stormcache', biome: 'highlands' },
  { id: 'chest_cave', x: 72, z: -50.5, level: 8, name: 'Gloomroot Reliquary', biome: 'cave', locked: 'cave' },
];

export const PUZZLE_DEFS = {
  forest: {
    id: 'forest', name: 'Whisperwood Runestones', order: ['earth', 'fire', 'holy'],
    hint: 'Root. Ember. Dawn.', chestId: 'chest_forest', biome: 'forest',
    runes: [
      { x: -28, z: -75, element: 'earth', name: 'Root Rune' },
      { x: -4, z: -67, element: 'fire', name: 'Ember Rune' },
      { x: -12, z: -92, element: 'holy', name: 'Dawn Rune' },
    ],
  },
  cave: {
    id: 'cave', name: 'Gloomroot Resonance', order: ['ice', 'lightning', 'shadow'],
    hint: 'Frost. Storm. Hollow.', chestId: 'chest_cave', biome: 'cave',
    runes: [
      { x: 64, z: -37.5, element: 'ice', name: 'Frost Crystal' },
      { x: 80, z: -37.5, element: 'lightning', name: 'Storm Crystal' },
      { x: 77.5, z: -50, element: 'shadow', name: 'Hollow Crystal' },
    ],
  },
};

const SPAWN_GROUPS = [
  { x: 25, z: 28, biome: 'meadow', count: 3, level: [1, 2] },
  { x: -27, z: 26, biome: 'meadow', count: 2, level: [1, 2] },
  { x: 23, z: 47, biome: 'meadow', count: 3, level: [1, 2] },
  { x: -3, z: -55, biome: 'forest', count: 3, level: [2, 4] },
  { x: 18, z: -78, biome: 'forest', count: 3, level: [2, 4] },
  { x: -39, z: -91, biome: 'forest', count: 4, level: [3, 4] },
  { x: -8, z: -104, biome: 'forest', count: 2, level: [2, 3] },
  { x: -43, z: -6, biome: 'graveyard', count: 3, level: [3, 5] },
  { x: -62, z: -12, biome: 'graveyard', count: 3, level: [3, 5] },
  { x: -42, z: -30, biome: 'graveyard', count: 2, level: [4, 5] },
  { x: 84, z: 43, biome: 'beach', count: 3, level: [3, 5] },
  { x: 104, z: 61, biome: 'beach', count: 2, level: [4, 6] },
  { x: 80, z: 73, biome: 'beach', count: 4, level: [3, 5] },
  { x: -63, z: 41, biome: 'lake', count: 3, level: [3, 5] },
  { x: -82, z: 62, biome: 'lake', count: 2, level: [4, 6] },
  { x: -55, z: 63, biome: 'lake', count: 3, level: [3, 5] },
  { x: 76, z: -58, biome: 'highlands', count: 3, level: [4, 6] },
  { x: 93, z: -77, biome: 'highlands', count: 3, level: [5, 7] },
  { x: 61, z: -75, biome: 'highlands', count: 2, level: [4, 6] },
  { x: -76, z: -60, biome: 'volcano', count: 3, level: [4, 6] },
  { x: -95, z: -74, biome: 'volcano', count: 4, level: [5, 7] },
  { x: -68, z: -84, biome: 'volcano', count: 2, level: [4, 6] },
  { x: 66, z: -37, biome: 'cave', count: 3, level: [5, 7] },
  { x: 78, z: -49, biome: 'cave', count: 2, level: [5, 7] },
];

export function addFeatureClearings(world) {
  for (const chest of CHEST_DEFS) world.addClearing(chest.x, chest.z, 3.2);
  for (const puzzle of Object.values(PUZZLE_DEFS)) {
    for (const rune of puzzle.runes) world.addClearing(rune.x, rune.z, 3.0);
  }
  for (const boss of BOSSES) world.addClearing(boss.spawn[0], boss.spawn[1], 7.5);
  for (const group of SPAWN_GROUPS) world.addClearing(group.x, group.z, 4.2);
  // Permanent landmarks that should never be swallowed by trees.
  world.addClearing(28, -4, 3.4);
  world.addClearing(-59, -28, 4.2);
  world.addClearing(106, 67, 5.5);
  world.addClearing(-97, -57, 3.5);
  world.addClearing(94, -82, 3.5);
  world.addClearing(72, -43, 9.0);
}

export function buildEnemySpawns(world) {
  const rng = mulberry32(11991);
  for (const group of SPAWN_GROUPS) {
    const biome = BIOMES[group.biome];
    const table = biome.enemies;
    for (let i = 0; i < group.count; i++) {
      const a = rng() * Math.PI * 2;
      const r = 0.9 + rng() * 2.6;
      let x = group.x + Math.cos(a) * r;
      let z = group.z + Math.sin(a) * r;
      // Do not put a pack inside the town wall or under the sea.
      for (let guard = 0; guard < 4 && (world.heightAt(x, z) < WATER_LEVEL + 0.35 || distance2(x, z, TOWN.x, TOWN.z) < 25); guard++) {
        x = group.x + (rng() - 0.5) * 5;
        z = group.z + (rng() - 0.5) * 5;
      }
      const type = pickWeighted(rng, table);
      const level = group.level[0] + Math.floor(rng() * (group.level[1] - group.level[0] + 1));
      world.enemySpawns.push({
        x, z, y: world.heightAt(x, z), type, level,
        biome: biome.id, element: biome.element, group: `${group.x}_${group.z}`, rngSeed: rng(),
      });
    }
  }
  for (const boss of BOSSES) {
    world.bossSpawns.push({ ...boss, x: boss.spawn[0], z: boss.spawn[1], y: world.heightAt(boss.spawn[0], boss.spawn[1]) });
  }
}

export function buildFeatures(world) {
  const rng = mulberry32(7319);
  // ── chests ──────────────────────────────────────────────────
  for (const def of CHEST_DEFS) {
    const y = world.heightAt(def.x, def.z);
    const root = createChestModel(!!def.locked);
    root.position.set(def.x, y + 0.02, def.z);
    root.rotation.y = rng() * Math.PI * 2;
    world.scene.add(root);
    const chest = { ...def, root, x: def.x, z: def.z, locked: !!def.locked, opened: false, opening: false, open: false };
    if (def.locked) {
      const glow = createGlowSprite('#d8c887', 1.5); glow.position.set(0, 0.9, 0); root.add(glow);
      root.userData.locked = true;
    } else {
      const glow = createGlowSprite('#e9b85f', 1.2); glow.position.set(0, 0.6, 0); glow.material.opacity = 0.22; root.add(glow);
    }
    world.chests.push(chest);
  }

  // ── rune puzzles ────────────────────────────────────────────
  for (const def of Object.values(PUZZLE_DEFS)) {
    const puzzle = { ...def, runes: [], progress: 0, solved: false, chest: null };
    puzzle.chest = world.chests.find(c => c.id === def.chestId);
    for (const rdef of def.runes) {
      const y = world.heightAt(rdef.x, rdef.z);
      const model = createRuneModel(rdef.element);
      model.position.set(rdef.x, y, rdef.z);
      model.rotation.y = rng() * Math.PI;
      world.scene.add(model);
      model.userData.puzzleId = def.id;
      model.userData.element = rdef.element;
      model.userData.name = rdef.name;
      model.userData.lit = false;
      model.userData.runeObject = model;
      model.userData.x = rdef.x;
      model.userData.z = rdef.z;
      puzzle.runes.push(model);
      world.puzzleRunes.push(model);
      world.addCollider(rdef.x, rdef.z, 0.55);
    }
    world.puzzles[def.id] = puzzle;
  }

  // ── traps ───────────────────────────────────────────────────
  const makeSpikeTrap = (x, z, level) => {
    const y = world.heightAt(x, z);
    const root = new THREE.Group(); root.position.set(x, y, z); world.scene.add(root);
    root.add(box(2.25, 0.12, 2.25, material(0x514d45), 0, 0.06, 0));
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.18, 20), new THREE.MeshBasicMaterial({ color: 0xd85a57, transparent: true, opacity: 0.06, side: THREE.DoubleSide, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.13; root.add(ring);
    const spikes = new THREE.Group(); spikes.position.y = 0; root.add(spikes);
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      const spike = cone(0.12, 0.85, 4, material(0x777c74, { metalness: 0.5 }), Math.cos(a) * 0.5, 0.42, Math.sin(a) * 0.5);
      spikes.add(spike);
    }
    return { root, ring, spikes, x, z, radius: 1.2, period: 3.2, phase: rng() * 3, damage: 7 + level * 3, element: 'physical', name: 'Hidden spike trap', spikeHeight: 0 };
  };
  const makeVentTrap = (x, z, level, element = 'fire') => {
    const y = world.heightAt(x, z);
    const root = new THREE.Group(); root.position.set(x, y, z); world.scene.add(root);
    const color = element === 'lightning' ? 0xd3bd6a : 0xf07b3d;
    root.add(cylinder(1.15, 1.3, 0.18, 9, material(0x3a3431), 0, 0.09, 0));
    root.add(sphere(0.72, material(color, { emissive: color, emissiveIntensity: 1.2, transparent: true, opacity: 0.65 }), 0, 0.16, 0, 8, 4));
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.2, 1.65, 24), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.05, side: THREE.DoubleSide, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.04; root.add(ring);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.45, 2.0, 5), material(color, { emissive: color, emissiveIntensity: 1.8, transparent: true, opacity: 0.0 }));
    flame.position.y = 1.0; root.add(flame);
    return { root, ring, flame, x, z, radius: 1.5, period: 3.8, phase: rng() * 4, damage: 9 + level * 3, element, name: element === 'lightning' ? 'Storm vent' : 'Cinder vent' };
  };
  world.traps.push(
    makeSpikeTrap(75.5, -37, 5), makeSpikeTrap(67.5, -46, 5), makeSpikeTrap(-46, -21, 4),
    makeSpikeTrap(85, -62, 5),
    makeVentTrap(-80, -59, 6, 'fire'), makeVentTrap(-92, -76, 7, 'fire'),
    makeVentTrap(-66, 44, 4, 'ice'),
    makeVentTrap(88, -71, 6, 'lightning'),
  );
  // A trapped path through Gloomroot's entrance.
  world.traps.push(makeSpikeTrap(72, -35, 5));
}
