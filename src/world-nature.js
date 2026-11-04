import * as THREE from 'three';
import { BIOMES, WATER_LEVEL, mulberry32, distance2, valueNoise } from './data.js';
import { material, box, cone, cylinder, sphere, shade, mixColor, createGlowSprite } from './entities.js';

const TOWN = { x: 0, z: 13 };
const CITY = { x: 58, z: 4 };
const CAVE = { x: 72, z: -43 };
const LAKE = { x: -72, z: 51 };

const dummy = new THREE.Object3D();
const tmpColor = new THREE.Color();

function inSettlement(x, z, pad = 30) {
  return distance2(x, z, TOWN.x, TOWN.z) < pad || distance2(x, z, CITY.x, CITY.z) < pad;
}

function pickSpots(world, rng, count, cx, cz, radius, filter, attempts = count * 30) {
  const spots = [];
  for (let i = 0; i < attempts && spots.length < count; i++) {
    const a = rng() * Math.PI * 2;
    const r = Math.sqrt(rng()) * radius;
    const x = cx + Math.cos(a) * r;
    const z = cz + Math.sin(a) * r;
    if (Math.abs(x) > 132 || Math.abs(z) > 132) continue;
    if (inSettlement(x, z)) continue;
    if (world.blockedByClearing(x, z, 0.8)) continue;
    const h = world.heightAt(x, z);
    if (h < WATER_LEVEL + 0.45) continue;
    if (Math.abs(world.heightAt(x + 1.4, z) - h) > 2.7 || Math.abs(world.heightAt(x, z + 1.4) - h) > 2.7) continue;
    const biome = world.biomeAt(x, z);
    if (!filter(biome, x, z, h)) continue;
    spots.push({ x, z, y: h, biome });
  }
  return spots;
}

function addInstanced(world, geometry, mat, items, cast = true, receive = true) {
  if (!items.length) return null;
  const mesh = new THREE.InstancedMesh(geometry, mat, items.length);
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  const colors = [];
  items.forEach((item, i) => {
    dummy.position.set(item.x, item.y, item.z);
    dummy.rotation.set(item.rx || 0, item.ry || 0, item.rz || 0);
    dummy.scale.set(item.sx || 1, item.sy || 1, item.sz || 1);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    if (item.color !== undefined) colors.push(item.color);
  });
  mesh.instanceMatrix.needsUpdate = true;
  if (colors.length === items.length) {
    items.forEach((item, i) => mesh.setColorAt(i, tmpColor.setHex(item.color)));
    mesh.instanceColor.needsUpdate = true;
    mat.vertexColors = true;
  }
  world.scene.add(mesh);
  return mesh;
}

function conifers(world, spots, rng, collider = true) {
  if (!spots.length) return;
  const trunkGeo = new THREE.CylinderGeometry(0.16, 0.26, 2.0, 5);
  trunkGeo.translate(0, 1.0, 0);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true });
  addInstanced(world, trunkGeo, trunkMat, spots.map(s => {
    const sc = 0.72 + rng() * 0.8;
    if (collider) world.addCollider(s.x, s.z, 0.42);
    return { x: s.x, y: s.y, z: s.z, sx: sc * 0.8, sy: sc, sz: sc * 0.8, color: shade(0x5a4029, (rng() - 0.5) * 0.22), sc };
  }));
  const greens = [0x315b38, 0x3b6b40, 0x2b5033, 0x426f45, 0x365f3b];
  for (let layer = 0; layer < 3; layer++) {
    const geo = new THREE.ConeGeometry(1.0, 2.8, 7);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true });
    const items = spots.map((s, i) => {
      const sc = 0.72 + ((i * 0.618) % 1) * 0.8;
      const scale = sc * [1.18, 0.93, 0.64][layer];
      return {
        x: s.x, y: s.y + [2.35, 3.55, 4.65][layer] * sc, z: s.z,
        sx: scale, sy: sc * (layer === 0 ? 1 : 0.9), sz: scale,
        ry: rng() * Math.PI, color: greens[(i + layer) % greens.length],
      };
    });
    addInstanced(world, geo, mat, items);
  }
}

function broadleaf(world, spots, rng, collider = true) {
  if (!spots.length) return;
  const trunkGeo = new THREE.CylinderGeometry(0.18, 0.3, 3.2, 5);
  trunkGeo.translate(0, 1.6, 0);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6b4a2d, roughness: 1, flatShading: true });
  addInstanced(world, trunkGeo, trunkMat, spots.map(s => {
    const sc = 0.8 + rng() * 0.65;
    if (collider) world.addCollider(s.x, s.z, 0.45);
    return { x: s.x, y: s.y, z: s.z, sx: sc, sy: sc, sz: sc, color: shade(0x6b4a2d, (rng() - 0.5) * 0.18) };
  }));
  const crownGeo = new THREE.IcosahedronGeometry(1.85, 0);
  const crownMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true });
  const crownColors = [0x4d7b3d, 0x588a44, 0x426d38, 0x618d49, 0x4b7540];
  addInstanced(world, crownGeo, crownMat, spots.map((s, i) => {
    const sc = 0.8 + ((i * 0.37) % 1) * 0.55;
    return { x: s.x, y: s.y + 3.25 * sc, z: s.z, sx: sc * 1.06, sy: sc * 0.9, sz: sc, ry: rng() * Math.PI, color: crownColors[i % crownColors.length] };
  }));
  addInstanced(world, crownGeo, crownMat, spots.slice(0, Math.ceil(spots.length * 0.7)).map((s, i) => {
    const sc = 0.55 + ((i * 0.71) % 1) * 0.3;
    return { x: s.x + 0.6, y: s.y + 4.05 + sc, z: s.z - 0.4, sx: sc, sy: sc * 0.8, sz: sc, ry: rng(), color: crownColors[(i + 2) % crownColors.length] };
  }));
}

function sceneryDetails(world, rng) {
  const grassSpots = pickSpots(world, rng, 700, 0, 10, 122, (b) => ['meadow', 'forest', 'graveyard', 'highlands', 'lake'].includes(b.id));
  const grassGeo = new THREE.ConeGeometry(0.06, 0.7, 3);
  grassGeo.translate(0, 0.35, 0);
  const grassMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true });
  addInstanced(world, grassGeo, grassMat, grassSpots.map((s, i) => ({
    x: s.x, y: s.y, z: s.z, sx: 1 + rng() * 1.2, sy: 0.65 + rng() * 1.25, sz: 1 + rng() * 0.8,
    ry: rng() * 3.1, color: shade(s.biome.id === 'graveyard' ? 0x77806a : 0x6c973e, (rng() - 0.5) * 0.24),
  })), false, false);

  const flowers = pickSpots(world, rng, 260, -5, 10, 90, (b) => b.id === 'meadow' || b.id === 'forest');
  const flowerGeo = new THREE.BoxGeometry(0.09, 0.14, 0.09);
  const flowerMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 });
  const petals = [0xf2d98f, 0xd58c96, 0xb89add, 0xf4e8c8, 0x96d1b3, 0xe6a15e];
  addInstanced(world, flowerGeo, flowerMat, flowers.map((s, i) => ({
    x: s.x, y: s.y + 0.31, z: s.z, sx: 1, sy: 1, sz: 1, ry: rng() * 4, color: petals[i % petals.length],
  })), false, false);

  const mushrooms = pickSpots(world, rng, 55, BIOMES.forest.center[0], BIOMES.forest.center[1], 48, (b) => b.id === 'forest' || b.id === 'graveyard');
  const stemGeo = new THREE.CylinderGeometry(0.035, 0.05, 0.24, 4); stemGeo.translate(0, 0.12, 0);
  addInstanced(world, stemGeo, material(0xd8c9a7), mushrooms.map(s => ({ x: s.x, y: s.y, z: s.z, sx: 1, sy: 1, sz: 1 })), false, false);
  const capGeo = new THREE.SphereGeometry(0.12, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2);
  const capMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
  addInstanced(world, capGeo, capMat, mushrooms.map((s, i) => ({ x: s.x, y: s.y + 0.22, z: s.z, sx: 1, sy: 0.75, sz: 1, color: i % 3 === 0 ? 0xa5413d : 0x8b5b3c })), false, false);

  const rocks = pickSpots(world, rng, 135, 0, 0, 126, (b, x, z, h) => ['highlands', 'volcano', 'beach', 'graveyard', 'meadow', 'cave'].includes(b.id));
  const rockGeo = new THREE.DodecahedronGeometry(0.7, 0);
  const rockMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true });
  addInstanced(world, rockGeo, rockMat, rocks.map(s => {
    const sc = 0.5 + rng() * 1.75;
    if (sc > 1.35) world.addCollider(s.x, s.z, sc * 0.65);
    return { x: s.x, y: s.y + sc * 0.35, z: s.z, sx: sc * (1 + rng() * 0.3), sy: sc * (0.6 + rng() * 0.6), sz: sc, ry: rng() * 6, rx: rng() * 0.2, color: shade(s.biome.id === 'volcano' ? 0x4b413c : 0x77786c, (rng() - 0.5) * 0.2) };
  }));

  const bushes = pickSpots(world, rng, 95, 0, 5, 118, (b) => ['meadow', 'forest', 'graveyard'].includes(b.id));
  const bushGeo = new THREE.IcosahedronGeometry(0.7, 0);
  const bushMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true });
  addInstanced(world, bushGeo, bushMat, bushes.map((s, i) => ({
    x: s.x, y: s.y + 0.45, z: s.z, sx: 1 + rng() * 0.6, sy: 0.65 + rng() * 0.4, sz: 1 + rng() * 0.5, ry: rng() * 5,
    color: i % 3 === 0 ? 0x5d7a3e : 0x496b39,
  })));

  // Fireflies in the meadows and deep wood.
  for (let i = 0; i < 26; i++) {
    const x = -70 + rng() * 145, z = -70 + rng() * 110;
    if (inSettlement(x, z, 24) || world.biomeAt(x, z).id === 'city') continue;
    const y = world.heightAt(x, z);
    if (y < WATER_LEVEL + 0.5) continue;
    const glow = createGlowSprite('#d7e98b', 0.17 + rng() * 0.12);
    glow.position.set(x, y + 0.8 + rng() * 1.4, z);
    glow.material.opacity = 0.5;
    world.scene.add(glow);
    world.flames.push(glow);
  }
}

function palm(world, x, z, rng) {
  const y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); group.scale.setScalar(0.85 + rng() * 0.45); world.scene.add(group);
  const trunkMat = material(0x6f5032);
  let px = 0, pz = 0;
  for (let i = 0; i < 5; i++) {
    const seg = cylinder(0.12 - i * 0.012, 0.17 - i * 0.012, 1.1, 5, trunkMat, px, 0.5 + i * 1.0, pz);
    seg.rotation.z = 0.07 + i * 0.018; seg.rotation.x = 0.03 * i;
    group.add(seg); px += 0.08; pz += 0.02;
  }
  const topY = 5.2, leafMat = material(0x4e7b42, { side: THREE.DoubleSide });
  for (let i = 0; i < 7; i++) {
    const angle = (i / 7) * Math.PI * 2;
    const leaf = new THREE.Group(); leaf.position.set(px, topY, pz); leaf.rotation.y = angle; group.add(leaf);
    for (let j = 0; j < 2; j++) {
      const frond = box(0.42, 0.045, 1.9 - j * 0.4, leafMat, 0, 0.02 - j * 0.16, 0.9 + j * 0.3);
      frond.rotation.x = 0.36 + j * 0.12; leaf.add(frond);
    }
  }
  for (let i = 0; i < 3; i++) group.add(sphere(0.11, material(0x5e4224), px + Math.cos(i * 2) * 0.18, topY - 0.2, pz + Math.sin(i * 2) * 0.18, 5, 3));
  world.addCollider(x, z, 0.38);
}

function deadTree(world, x, z, rng) {
  const y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); group.rotation.y = rng() * Math.PI; world.scene.add(group);
  const bark = material(0x5b564d);
  const trunk = cylinder(0.12, 0.3, 3.6, 5, bark, 0, 1.8, 0); trunk.rotation.z = (rng() - 0.5) * 0.18; group.add(trunk);
  for (let i = 0; i < 5; i++) {
    const branch = cylinder(0.04, 0.1, 1.4 + rng() * 1.0, 4, bark, 0, 2.0 + i * 0.3, 0);
    const a = rng() * Math.PI * 2;
    branch.rotation.z = Math.PI / 2 + (rng() - 0.5) * 0.5;
    branch.rotation.y = a;
    branch.position.x = Math.cos(a) * 0.55;
    branch.position.z = Math.sin(a) * 0.55;
    group.add(branch);
  }
  world.addCollider(x, z, 0.4);
}

function windmill(world) {
  const x = 29, z = -12, y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); world.scene.add(group);
  group.add(cylinder(2.0, 2.6, 7.5, 8, material(0xc1b08b), 0, 3.75, 0));
  group.add(cylinder(2.2, 2.4, 0.4, 8, material(0x7e6f56), 0, 7.6, 0));
  group.add(cone(2.7, 2.4, 8, material(0x69483a), 0, 9.0, 0));
  group.add(box(1.1, 2.0, 0.14, material(0x533722), 0, 1.0, 2.05));
  const windows = new THREE.MeshStandardMaterial({ color: 0x6f7b71, emissive: 0xffc36a, emissiveIntensity: 0.2 });
  for (const zz of [-1.2, -2.2]) group.add(box(0.6, 0.65, 0.08, windows, 0, 4.2 + zz, 2.42));
  world.windows.push({ material: windows });
  const hub = new THREE.Group(); hub.position.set(0, 7.0, 2.6); group.add(hub);
  hub.add(cylinder(0.24, 0.3, 0.5, 8, material(0x4c3827), 0, 0, 0));
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Group(); blade.rotation.z = i * Math.PI / 2; hub.add(blade);
    blade.add(box(0.18, 3.4, 0.1, material(0x6a4b31), 0, 1.7, 0));
    for (let j = 1; j < 4; j++) blade.add(box(0.75, 0.65, 0.06, material(0xcdbf9e), 0.38, j * 0.8, 0));
  }
  world.windmillBlades = hub;
  world.addCollider(x, z, 2.8);
}

function lavaShelf(world, x, z, radius, rng) {
  const y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); world.scene.add(group);
  const mat = new THREE.MeshStandardMaterial({ color: 0xd3552e, emissive: 0xff4c12, emissiveIntensity: 2.4, roughness: 0.3, transparent: true, opacity: 0.92 });
  const pool = new THREE.Mesh(new THREE.CircleGeometry(radius, 14), mat);
  pool.rotation.x = -Math.PI / 2; pool.position.y = 0.12; group.add(pool);
  const rim = material(0x3b2d28);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const rock = sphere(radius * 0.14, rim, Math.cos(a) * radius, 0.1, Math.sin(a) * radius, 5, 3);
    rock.scale.y = 0.6; group.add(rock);
  }
  const glow = createGlowSprite('#ff7a37', radius * 2.3); glow.position.y = 0.5; glow.material.opacity = 0.42; group.add(glow);
  const light = new THREE.PointLight(0xff5a24, 1.2, radius * 4, 2); light.position.y = 1.2; group.add(light);
  for (let i = 0; i < 4; i++) {
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.6, 4), material(0xff813b, { emissive: 0xff5b22, emissiveIntensity: 2, transparent: true, opacity: 0.6 }));
    flame.position.set((rng() - 0.5) * radius, 0.35, (rng() - 0.5) * radius); group.add(flame);
    flame.userData.offset = rng() * 9; world.flames.push(flame);
  }
}

function basaltSpire(world, x, z, rng) {
  const y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); group.rotation.y = rng() * 6; world.scene.add(group);
  const rock = material(0x3b3432);
  let yy = 0;
  for (let i = 0; i < 4; i++) {
    const h = 1.4 + rng() * 1.8;
    const block = cylinder(0.4 + rng() * 0.35, 0.7 + rng() * 0.3, h, 5, rock, (rng() - 0.5) * 0.5, yy + h / 2, (rng() - 0.5) * 0.5);
    block.rotation.z = (rng() - 0.5) * 0.2; group.add(block); yy += h * 0.75;
  }
  if (rng() > 0.5) {
    const vein = box(0.08, yy * 0.7, 0.06, material(0xff6e36, { emissive: 0xff4715, emissiveIntensity: 1.8 }), 0, yy * 0.5, 0.55);
    group.add(vein);
  }
  world.addCollider(x, z, 1.0);
}

function beachProps(world, rng) {
  const palmSpots = pickSpots(world, rng, 22, 94, 58, 31, (b) => b.id === 'beach');
  for (const s of palmSpots) palm(world, s.x, s.z, rng);
  // Shipwreck around the strongbox.
  const wx = 106, wz = 67, wy = world.heightAt(wx, wz);
  const wreck = new THREE.Group(); wreck.position.set(wx, wy, wz); wreck.rotation.y = -0.3; world.scene.add(wreck);
  const wood = material(0x5b4631);
  const darkWood = material(0x3d2f22);
  wreck.add(box(7.4, 0.5, 3.4, darkWood, 0, 0.35, 0));
  for (const side of [-1, 1]) {
    for (let i = 0; i < 4; i++) {
      const plank = box(7.0 - i * 0.8, 0.85, 0.25, wood, 0, 0.55 + i * 0.2, side * (2.0 - i * 0.3));
      plank.rotation.z = (rng() - 0.5) * 0.04;
      plank.rotation.x = side * (0.3 - i * 0.04);
      wreck.add(plank);
    }
  }
  const mast = cylinder(0.14, 0.22, 8.0, 6, darkWood, 2.1, 4.0, 0); mast.rotation.z = -0.16; wreck.add(mast);
  const sail = new THREE.Mesh(new THREE.PlaneGeometry(3.8, 3.2), material(0xd4c7a3, { side: THREE.DoubleSide, transparent: true, opacity: 0.62 }));
  sail.position.set(1.1, 5.4, 0.12); sail.rotation.y = 0.2; sail.rotation.z = 0.18; wreck.add(sail);
  for (let i = 0; i < 5; i++) {
    const barrel = cylinder(0.28, 0.3, 0.7, 7, material(0x6b4a2c), 2.8 + rng() * 2, 0.6, (rng() - 0.5) * 3);
    barrel.rotation.z = Math.PI / 2; wreck.add(barrel);
  }
  // Dock reaching into the water.
  for (let i = 0; i < 15; i++) {
    const dz = 33 + i * 1.15;
    const y = Math.max(WATER_LEVEL + 0.55, world.heightAt(114, dz) + 0.12);
    world.scene.add(box(2.1, 0.14, 0.95, material(i % 2 ? 0x876844 : 0x765a3c), 114, y, dz));
    if (i % 3 === 0) world.scene.add(cylinder(0.11, 0.14, 1.7, 5, material(0x4f3b27), 115.1, y - 0.75, dz));
  }
  // Sun-faded parasols.
  for (const [x, z, color] of [[86, 72, 0xc27254], [91, 50, 0x5f8a82], [111, 77, 0xd1b56e]]) {
    const y = world.heightAt(x, z);
    const group = new THREE.Group(); group.position.set(x, y, z); world.scene.add(group);
    group.add(cylinder(0.05, 0.07, 2.4, 5, material(0x795b3e), 0, 1.2, 0));
    group.add(cone(1.8, 0.7, 8, material(color), 0, 2.55, 0));
    group.add(cone(1.55, 0.3, 8, material(0xd7c9a7), 0, 2.42, 0));
  }
  // Tide pools.
  for (const [x, z, r] of [[84, 60, 2.2], [98, 76, 1.7], [118, 72, 2.8]]) {
    const y = world.heightAt(x, z);
    const pool = new THREE.Mesh(new THREE.CircleGeometry(r, 12), new THREE.MeshStandardMaterial({ color: 0x4e96a1, transparent: true, opacity: 0.55, roughness: 0.12, metalness: 0.2 }));
    pool.rotation.x = -Math.PI / 2; pool.position.set(x, Math.max(WATER_LEVEL + 0.03, y + 0.035), z); world.scene.add(pool);
  }
  // Shells.
  const shells = pickSpots(world, rng, 40, 95, 58, 30, (b) => b.id === 'beach');
  const shellGeo = new THREE.ConeGeometry(0.12, 0.1, 5);
  const shellMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 });
  addInstanced(world, shellGeo, shellMat, shells.map((s, i) => ({ x: s.x, y: s.y + 0.04, z: s.z, sx: 1, sy: 1, sz: 1, color: i % 2 ? 0xe8d6b4 : 0xc69283 })), false, false);
}

function lakeProps(world, rng) {
  // Wooden pier from the southern shore.
  for (let i = 0; i < 18; i++) {
    const z = 24 + i * 1.2;
    const y = Math.max(WATER_LEVEL + 0.52, world.heightAt(-72, z) + 0.1);
    world.scene.add(box(2.2, 0.14, 1.0, material(i % 2 ? 0x866844 : 0x705537), -72, y, z));
    if (i % 4 === 0) {
      world.scene.add(cylinder(0.12, 0.15, 1.8, 5, material(0x4b3624), -73.1, y - 0.8, z));
      world.scene.add(cylinder(0.12, 0.15, 1.8, 5, material(0x4b3624), -70.9, y - 0.8, z));
    }
  }
  // Rope fence at the end of the pier.
  world.scene.add(box(2.2, 0.08, 0.08, material(0x53432f), -72, WATER_LEVEL + 1.4, 44.2));
  // Little rowboat.
  const boat = new THREE.Group(); boat.position.set(-66.5, WATER_LEVEL + 0.1, 43.5); boat.rotation.y = 0.5; world.scene.add(boat);
  const hull = material(0x60472f);
  boat.add(box(1.35, 0.35, 3.0, hull, 0, 0.1, 0));
  boat.add(box(1.0, 0.28, 2.35, material(0x34281d), 0, 0.08, 0));
  boat.add(box(0.15, 0.16, 2.9, material(0x8a6a45), -0.7, 0.24, 0));
  boat.add(box(0.15, 0.16, 2.9, material(0x8a6a45), 0.7, 0.24, 0));
  boat.add(cylinder(0.04, 0.04, 2.1, 4, material(0x896944), 0.1, 0.3, 0));
  // Lily pads.
  const lilyGeo = new THREE.CircleGeometry(0.42, 7);
  const lilyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, side: THREE.DoubleSide });
  const lilies = [];
  for (let i = 0; i < 42; i++) {
    const x = LAKE.x + (rng() - 0.5) * 38, z = LAKE.z + (rng() - 0.5) * 36;
    if (world.heightAt(x, z) > WATER_LEVEL - 0.3) continue;
    lilies.push({ x, y: WATER_LEVEL + 0.04, z, sx: 0.6 + rng() * 0.8, sy: 1, sz: 0.6 + rng() * 0.8, ry: rng() * 6, color: i % 6 === 0 ? 0x92a95c : 0x4f7e4e });
  }
  addInstanced(world, lilyGeo, lilyMat, lilies, false, false);
  // Reeds.
  const reeds = pickSpots(world, rng, 80, LAKE.x, LAKE.z, 38, (b, x, z, h) => b.id === 'lake' && h > WATER_LEVEL - 0.7 && h < WATER_LEVEL + 0.6);
  const reedGeo = new THREE.ConeGeometry(0.045, 1.3, 3); reedGeo.translate(0, 0.65, 0);
  addInstanced(world, reedGeo, material(0x6d8551), reeds.map(s => ({ x: s.x, y: s.y, z: s.z, sx: 0.7 + rng() * 0.8, sy: 0.8 + rng() * 1.2, sz: 0.7 + rng() * 0.8, ry: rng() * 3 })), false, false);
  // Shrine.
  const sx = -84, sz = 34, sy = world.heightAt(sx, sz);
  const shrine = new THREE.Group(); shrine.position.set(sx, sy, sz); world.scene.add(shrine);
  shrine.add(cylinder(1.7, 1.9, 0.35, 8, material(0x696f66), 0, 0.17, 0));
  for (const [dx, dz] of [[-1.1, -1.1], [1.1, -1.1], [-1.1, 1.1], [1.1, 1.1]]) shrine.add(box(0.18, 2.3, 0.18, material(0x4f594f), dx, 1.15, dz));
  shrine.add(cylinder(1.3, 1.45, 0.25, 8, material(0x5a615a), 0, 2.3, 0));
  shrine.add(sphere(0.22, material(0x9fdfd8, { emissive: 0x53b8b2, emissiveIntensity: 1.4 }), 0, 1.1, 0));
  const glow = createGlowSprite('#8ce1d8', 2.6); glow.position.y = 1.2; shrine.add(glow);
  world.addCollider(sx, sz, 1.7);
  // Low mist pads.
  for (let i = 0; i < 8; i++) {
    const glowMist = createGlowSprite('#b8c8bf', 2.4 + rng() * 2.5);
    glowMist.position.set(LAKE.x + (rng() - 0.5) * 34, WATER_LEVEL + 0.4, LAKE.z + (rng() - 0.5) * 30);
    glowMist.material.opacity = 0.08;
    world.scene.add(glowMist);
  }
}

function graveyardProps(world, rng) {
  const cx = -51, cz = -16;
  // Wrought fence with an open southern gate.
  const fenceMat = material(0x313735, { metalness: 0.55 });
  const stoneMat = material(0x77786c);
  const ring = [];
  for (let i = 0; i < 44; i++) {
    const a = (i / 44) * Math.PI * 2;
    const x = cx + Math.cos(a) * 16, z = cz + Math.sin(a) * 15;
    if (Math.sin(a) > 0.86 && Math.abs(Math.cos(a)) < 0.4) continue;
    const y = world.heightAt(x, z);
    const post = box(0.1, 1.9, 0.1, fenceMat, x, y + 0.95, z); post.rotation.y = a; world.scene.add(post);
    if (i % 5 === 0) world.scene.add(box(0.38, 2.2, 0.38, stoneMat, x, y + 1.1, z));
    ring.push([x, z, y]);
  }
  for (let i = 0; i < ring.length - 1; i++) {
    const [x1, z1, y1] = ring[i], [x2, z2, y2] = ring[i + 1];
    if (Math.hypot(x2 - x1, z2 - z1) > 3) continue;
    const midX = (x1 + x2) / 2, midZ = (z1 + z2) / 2;
    const bar = box(0.05, 0.05, Math.hypot(x2 - x1, z2 - z1) + 0.5, fenceMat, midX, (y1 + y2) / 2 + 1.3, midZ);
    bar.rotation.y = Math.atan2(x2 - x1, z2 - z1); world.scene.add(bar);
  }
  // Grave markers.
  const slabs = [];
  const crosses = [];
  for (let i = 0; i < 44; i++) {
    const a = rng() * Math.PI * 2;
    const r = 3 + rng() * 12;
    const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
    if (world.blockedByClearing(x, z, 0.3)) continue;
    const y = world.heightAt(x, z);
    if (rng() > 0.66) crosses.push({ x, z, y, ry: (rng() - 0.5) * 0.3 });
    else slabs.push({ x, z, y, ry: (rng() - 0.5) * 0.35 });
  }
  const slabGeo = new THREE.BoxGeometry(0.65, 1.15, 0.18);
  const stoneMat2 = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true });
  addInstanced(world, slabGeo, stoneMat2, slabs.map(s => ({ x: s.x, y: s.y + 0.55, z: s.z, sx: 0.8 + rng() * 0.5, sy: 0.8 + rng() * 0.65, sz: 1, ry: s.ry, color: shade(0x75766b, (rng() - 0.5) * 0.2) })));
  for (const s of crosses) {
    const y = s.y;
    const group = new THREE.Group(); group.position.set(s.x, y, s.z); group.rotation.y = s.ry; world.scene.add(group);
    group.add(box(0.17, 1.25, 0.16, stoneMat2, 0, 0.62, 0));
    group.add(box(0.65, 0.16, 0.16, stoneMat2, 0, 0.9, 0));
  }
  // Mausoleum.
  const mx = -63, mz = -28, my = world.heightAt(mx, mz);
  const maus = new THREE.Group(); maus.position.set(mx, my, mz); world.scene.add(maus);
  maus.add(box(5.8, 0.35, 5.2, stoneMat, 0, 0.17, 0));
  maus.add(box(5.1, 3.2, 4.5, material(0x797a6f), 0, 1.7, 0));
  maus.add(box(5.6, 0.35, 5.0, material(0x696a60), 0, 3.45, 0));
  maus.add(cone(0.05, 0.1, 4, stoneMat, 0, 3.6, 0));
  maus.add(box(1.2, 2.2, 0.18, material(0x292724), 0, 1.2, 2.3));
  for (const sx of [-2.1, 2.1]) maus.add(box(0.5, 3.0, 0.5, stoneMat, sx, 1.5, 2.15));
  maus.add(box(5.0, 0.5, 0.5, stoneMat, 0, 3.0, 2.15));
  world.addCollider(mx, mz, 3.2);
  // Candles and spectral lanterns.
  for (let i = 0; i < 12; i++) {
    const x = cx + (rng() - 0.5) * 26, z = cz + (rng() - 0.5) * 24, y = world.heightAt(x, z);
    world.scene.add(cylinder(0.035, 0.045, 0.22 + rng() * 0.25, 4, material(0xd8cfad), x, y + 0.15, z));
    const flame = sphere(0.035, material(0xffd98b, { emissive: 0xffb05b, emissiveIntensity: 2.2 }), x, y + 0.32, z, 4, 3);
    world.scene.add(flame);
  }
  const ghostGlow = createGlowSprite('#88d99b', 5); ghostGlow.position.set(cx + 5, world.heightAt(cx + 5, cz + 1) + 2.4, cz + 1); ghostGlow.material.opacity = 0.13; world.scene.add(ghostGlow);
  for (let i = 0; i < 8; i++) {
    const x = cx + (rng() - 0.5) * 25, z = cz + (rng() - 0.5) * 22;
    if (inSettlement(x, z, 20)) continue;
    deadTree(world, x, z, rng);
  }
}

function highlandsProps(world, rng) {
  for (let i = 0; i < 16; i++) {
    const x = 60 + rng() * 50, z = -95 + rng() * 55;
    if (distance2(x, z, CAVE.x, CAVE.z) < 15 || world.blockedByClearing(x, z, 1) || world.heightAt(x, z) < WATER_LEVEL + 0.5) continue;
    basaltSpire(world, x, z, rng);
  }
  // Standing stones.
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const x = 88 + Math.cos(a) * 7, z = -92 + Math.sin(a) * 7;
    const y = world.heightAt(x, z);
    const stone = box(0.8, 3.2 + rng() * 1.4, 0.55, material(0x72766e), x, y + 1.6, z);
    stone.rotation.z = (rng() - 0.5) * 0.2; stone.rotation.y = -a;
    world.scene.add(stone);
    if (i === 0) world.addCollider(x, z, 0.7);
  }
  // A storm-scarred crater.
  const sx = 85, sz = -82, sy = world.heightAt(sx, sz);
  const scar = new THREE.Mesh(new THREE.RingGeometry(2.2, 3.1, 14), new THREE.MeshBasicMaterial({ color: 0xd3bd6a, transparent: true, opacity: 0.22, side: THREE.DoubleSide }));
  scar.rotation.x = -Math.PI / 2; scar.position.set(sx, sy + 0.06, sz); world.scene.add(scar);
}

function caveProps(world, rng) {
  const floor = new THREE.Mesh(new THREE.CircleGeometry(14, 26), new THREE.MeshStandardMaterial({ color: 0x262a29, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(CAVE.x, CAVE.flat + 0.03, CAVE.z); floor.receiveShadow = true; world.scene.add(floor);
  // Ring of boulders with a wide southern entrance.
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2;
    if (Math.sin(a) > 0.55) continue;
    const radius = 11.5 + rng() * 2.8;
    const x = CAVE.x + Math.cos(a) * radius, z = CAVE.z + Math.sin(a) * radius;
    const y = world.heightAt(x, z);
    const rock = sphere(2.0 + rng() * 2.2, material(0x454b48), x, y + 1.6 + rng() * 2.2, z, 7, 5);
    rock.scale.y = 1.4 + rng(); world.scene.add(rock);
    world.addCollider(x, z, 2.1);
  }
  // Cave mouth pillars and lintel.
  for (const sx of [-4.8, 4.8]) {
    const x = CAVE.x + sx, z = CAVE.z + 10.2, y = world.heightAt(x, z);
    const pillar = cylinder(1.35, 1.8, 5.8, 6, material(0x414744), x, y + 2.9, z); world.scene.add(pillar);
    world.addCollider(x, z, 1.8);
  }
  const lintelY = world.heightAt(CAVE.x, CAVE.z + 10.2);
  const lintel = box(11.8, 1.6, 1.9, material(0x3d4340), CAVE.x, lintelY + 6.2, CAVE.z + 10.2); lintel.rotation.z = 0.03; world.scene.add(lintel);
  // Partial ceiling.
  for (const [ox, oz, scale] of [[-5, -5, 7], [4, -8, 8], [-7, 3, 6], [7, 2, 5]]) {
    const x = CAVE.x + ox, z = CAVE.z + oz, y = world.heightAt(x, z);
    const slab = sphere(scale, material(0x323735), x, y + 7.5, z, 6, 4);
    slab.scale.y = 0.32; world.scene.add(slab);
  }
  // Crystal clusters.
  const crystalColors = [0x7fd2d6, 0x9d83db, 0x9cb879, 0xd6a56a];
  for (let i = 0; i < 15; i++) {
    const a = rng() * Math.PI * 2, r = 3 + rng() * 8;
    const x = CAVE.x + Math.cos(a) * r, z = CAVE.z + Math.sin(a) * r;
    const y = world.heightAt(x, z);
    const group = new THREE.Group(); group.position.set(x, y, z); world.scene.add(group);
    const color = crystalColors[i % crystalColors.length];
    for (let j = 0; j < 3 + Math.floor(rng() * 3); j++) {
      const h = 0.7 + rng() * 2.3;
      const crystal = cone(0.16 + rng() * 0.18, h, 5, material(color, { emissive: color, emissiveIntensity: 0.9, transparent: true, opacity: 0.88 }), (rng() - 0.5) * 0.9, h / 2, (rng() - 0.5) * 0.9);
      crystal.rotation.z = (rng() - 0.5) * 0.4; crystal.rotation.x = (rng() - 0.5) * 0.4; group.add(crystal);
    }
    if (i % 4 === 0) {
      const light = new THREE.PointLight(color, 1.0, 9, 2); light.position.y = 1.4; group.add(light);
    }
  }
  // Torches at the entrance.
  for (const sx of [-6.6, 6.6]) {
    const x = CAVE.x + sx, z = CAVE.z + 8.7, y = world.heightAt(x, z);
    world.scene.add(cylinder(0.07, 0.1, 2.2, 5, material(0x463426), x, y + 1.1, z));
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.6, 5), material(0xffb05b, { emissive: 0xff7a28, emissiveIntensity: 2, transparent: true, opacity: 0.7 }));
    flame.position.set(x, y + 2.35, z); flame.userData.offset = rng() * 7; world.scene.add(flame); world.flames.push(flame);
    const light = new THREE.PointLight(0xffa057, 1.4, 10, 2); light.position.set(x, y + 2.5, z); world.scene.add(light);
    world.lanterns.push({ light, sprite: null, base: 1.2, offset: rng() * 8 });
  }
  // Bones.
  for (let i = 0; i < 10; i++) {
    const x = CAVE.x + (rng() - 0.5) * 15, z = CAVE.z + (rng() - 0.5) * 15, y = world.heightAt(x, z);
    const bone = cylinder(0.03, 0.05, 0.7 + rng(), 4, material(0xbdb49c), x, y + 0.08, z);
    bone.rotation.z = Math.PI / 2; bone.rotation.y = rng() * 6; world.scene.add(bone);
  }
}

export function buildNature(world) {
  const rng = mulberry32(91937);
  windmill(world);
  sceneryDetails(world, rng);

  // Whisperwood conifers — tall, dense, unmistakable.
  const forestConifers = pickSpots(world, rng, 155, BIOMES.forest.center[0], BIOMES.forest.center[1], 62, (b) => b.id === 'forest');
  conifers(world, forestConifers, rng);
  // Scattered conifers through the meadow and highlands.
  const highConifers = pickSpots(world, rng, 34, 80, -66, 43, (b) => b.id === 'highlands');
  conifers(world, highConifers, rng);
  const meadowConifers = pickSpots(world, rng, 16, 0, 20, 65, (b) => b.id === 'meadow');
  conifers(world, meadowConifers, rng);
  // Broadleaf copses.
  const broad = pickSpots(world, rng, 64, 2, 0, 80, (b) => b.id === 'meadow' || b.id === 'graveyard' || b.id === 'lake');
  broadleaf(world, broad, rng);
  const forestBroad = pickSpots(world, rng, 30, -12, -73, 48, (b) => b.id === 'forest');
  broadleaf(world, forestBroad, rng);

  // Volcano.
  for (const [x, z, r] of [[-69, -56, 4.2], [-93, -60, 3.6], [-74, -82, 4.8], [-100, -78, 3.1], [-84, -67.8, 4.5], [-61, -74, 2.7]]) {
    if (world.heightAt(x, z) > WATER_LEVEL) lavaShelf(world, x, z, r, rng);
  }
  for (let i = 0; i < 18; i++) {
    const x = -110 + rng() * 58, z = -105 + rng() * 55;
    if (world.biomeAt(x, z).id !== 'volcano' || world.blockedByClearing(x, z, 1) || inSettlement(x, z, 28)) continue;
    basaltSpire(world, x, z, rng);
  }
  for (let i = 0; i < 13; i++) {
    const x = -108 + rng() * 55, z = -106 + rng() * 58;
    if (world.biomeAt(x, z).id === 'volcano') deadTree(world, x, z, rng);
  }
  // Scorched ground details.
  for (let i = 0; i < 7; i++) {
    const x = -105 + rng() * 48, z = -102 + rng() * 54;
    if (world.biomeAt(x, z).id !== 'volcano') continue;
    const y = world.heightAt(x, z);
    const scorch = new THREE.Mesh(new THREE.CircleGeometry(1.1 + rng() * 2.0, 10), new THREE.MeshBasicMaterial({ color: 0x2b2422, transparent: true, opacity: 0.42, side: THREE.DoubleSide, depthWrite: false }));
    scorch.rotation.x = -Math.PI / 2; scorch.position.set(x, y + 0.05, z); world.scene.add(scorch);
  }

  beachProps(world, rng);
  lakeProps(world, rng);
  graveyardProps(world, rng);
  highlandsProps(world, rng);
  caveProps(world, rng);

  // Dead trees in the graveyard and stormcrag.
  for (let i = 0; i < 8; i++) {
    const x = 58 + rng() * 50, z = -103 + rng() * 48;
    if (world.biomeAt(x, z).id === 'highlands' && !world.blockedByClearing(x, z, 1)) deadTree(world, x, z, rng);
  }
  // A few distinctive boulders around the crossroads.
  for (const [x, z, s] of [[-9, 40, 1.8], [7, 42, 1.4], [35, 19, 2.1], [-37, 20, 1.7]]) {
    const y = world.heightAt(x, z);
    const boulder = sphere(s, material(0x74766b), x, y + s * 0.5, z, 6, 4);
    boulder.scale.set(1.3, 0.85, 1); boulder.rotation.y = rng() * 5; world.scene.add(boulder);
    world.addCollider(x, z, s * 0.9);
  }
}
