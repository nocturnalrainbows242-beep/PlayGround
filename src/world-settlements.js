import * as THREE from 'three';
import { material, box, cone, cylinder, sphere, createGlowSprite } from './entities.js';

const TOWN = { x: 0, z: 13 };
const CITY = { x: 58, z: 4 };

function canvasLabel(text, color = '#f1e3bf', bg = '#15251f') {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, 512, 128);
  ctx.strokeStyle = '#b58b47'; ctx.lineWidth = 6; ctx.strokeRect(6, 6, 500, 116);
  ctx.font = '34px "Press Start 2P", monospace';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = color;
  ctx.fillText(text, 256, 68);
  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  return tex;
}

function lantern(world, x, z, options = {}) {
  const y = world.heightAt(x, z);
  const group = new THREE.Group();
  group.position.set(x, y, z);
  const wood = material(0x4f3824);
  const metal = material(0x3d4544, { metalness: 0.5 });
  const pole = cylinder(0.055, 0.075, options.height || 3.2, 5, wood, 0, (options.height || 3.2) / 2, 0);
  group.add(pole);
  group.add(box(0.5, 0.06, 0.06, metal, 0.2, (options.height || 3.2) - 0.1, 0));
  const cage = box(0.28, 0.36, 0.28, material(0x2b2b26, { metalness: 0.35, transparent: true, opacity: 0.9 }), 0.4, (options.height || 3.2) - 0.42, 0);
  group.add(cage);
  const lightMat = material(0xffc56a, { emissive: 0xffb756, emissiveIntensity: 1.8, transparent: true, opacity: 0.92 });
  const glow = box(0.16, 0.22, 0.16, lightMat, 0.4, (options.height || 3.2) - 0.42, 0);
  group.add(glow);
  group.add(box(0.34, 0.05, 0.34, metal, 0.4, (options.height || 3.2) - 0.23, 0));
  const sprite = createGlowSprite('#ffc46a', 1.35);
  sprite.position.set(0.4, (options.height || 3.2) - 0.4, 0);
  sprite.material.opacity = 0.45;
  group.add(sprite);
  world.scene.add(group);
  if (options.withLight !== false) {
    const light = new THREE.PointLight(0xffbd68, 1.3, options.range || 11, 2);
    light.position.set(0.4, (options.height || 3.2) - 0.4, 0);
    light.castShadow = false;
    group.add(light);
    world.lanterns.push({ light, sprite, base: options.intensity || 1.15, offset: Math.random() * 8 });
  }
  return group;
}

function campfire(world, x, z, scale = 1) {
  const y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); world.scene.add(group);
  const stone = material(0x66645c);
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    group.add(sphere(0.15 * scale, stone, Math.cos(a) * 0.48 * scale, 0.08, Math.sin(a) * 0.48 * scale, 5, 3));
  }
  const logs = material(0x4a2f1c);
  for (let i = 0; i < 3; i++) {
    const log = box(0.12 * scale, 0.12 * scale, 0.78 * scale, logs, 0, 0.12, 0);
    log.rotation.y = i * Math.PI / 3; group.add(log);
  }
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.26 * scale, 0.8 * scale, 5), material(0xf28a40, { emissive: 0xf06e20, emissiveIntensity: 2.1, transparent: true, opacity: 0.85 }));
  flame.position.y = 0.62 * scale; group.add(flame);
  flame.userData.offset = Math.random() * 8; world.flames.push(flame);
  const light = new THREE.PointLight(0xff8c3e, 1.8, 8, 2);
  light.position.y = 1; group.add(light);
  world.lanterns.push({ light, sprite: null, base: 1.5, offset: Math.random() * 7 });
}

function gableRoof(w, d, h, mat) {
  const geometry = new THREE.BufferGeometry();
  const hw = w / 2, hd = d / 2;
  const vertices = new Float32Array([
    -hw, 0, -hd,  hw, 0, -hd,  hw, 0, hd,  -hw, 0, hd,  0, h, -hd,  0, h, hd,
  ]);
  const indices = [0, 3, 5, 0, 5, 4, 1, 4, 5, 1, 5, 2, 1, 0, 4, 3, 2, 5];
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.castShadow = true; mesh.receiveShadow = true;
  return mesh;
}

function house(world, options) {
  const {
    x, z, w = 7, d = 5, h = 2.6, rot = 0, wall = 0xd4c49c, roof = 0x8e4a3e,
    trim = 0x5c3b24, floors = 1, shopSign = null, open = false,
  } = options;
  const y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); group.rotation.y = rot;
  world.scene.add(group);
  const totalH = h * floors;
  const foundation = box(w + 0.35, 0.3, d + 0.35, material(0x716a59), 0, 0.15, 0);
  group.add(foundation);
  const wallMat = material(wall);
  const trimMat = material(trim);
  const roofMat = material(roof);
  group.add(box(w, totalH, d, wallMat, 0, totalH / 2 + 0.25, 0));
  // timber frame
  for (const sx of [-w / 2 + 0.08, w / 2 - 0.08]) {
    for (const sz of [-d / 2 + 0.03, d / 2 - 0.03]) {
      group.add(box(0.16, totalH, 0.16, trimMat, sx, totalH / 2 + 0.25, sz));
    }
  }
  for (let f = 0; f <= floors; f++) {
    group.add(box(w + 0.05, 0.13, d + 0.05, trimMat, 0, 0.25 + f * h, 0));
  }
  group.add(box(w + 0.05, 0.13, d + 0.05, trimMat, 0, totalH + 0.24, 0));

  // windows
  const windows = [];
  for (let f = 0; f < floors; f++) {
    const wy = 0.25 + h * f + h * 0.62;
    for (const side of [-1, 1]) {
      const weak = box(0.9, 0.78, 0.05, material(0x807a63), side * (w * 0.28), wy, d / 2 + 0.035);
      group.add(weak);
      const glass = new THREE.MeshStandardMaterial({ color: 0x879188, emissive: 0xffc76d, emissiveIntensity: 0.18, roughness: 0.4 });
      const win = box(0.7, 0.58, 0.055, glass, side * (w * 0.28), wy, d / 2 + 0.07);
      group.add(win);
      group.add(box(0.75, 0.06, 0.06, trimMat, side * (w * 0.28), wy + 0.34, d / 2 + 0.09));
      group.add(box(0.06, 0.62, 0.06, trimMat, side * (w * 0.28), wy, d / 2 + 0.09));
      world.windows.push({ material: glass });
      windows.push(glass);
      if (w > 8) {
        const sideGlass = new THREE.MeshStandardMaterial({ color: 0x879188, emissive: 0xffc76d, emissiveIntensity: 0.16, roughness: 0.4 });
        group.add(box(0.05, 0.58, 0.7, sideGlass, w / 2 + 0.035, wy, -d * 0.2));
        world.windows.push({ material: sideGlass });
      }
    }
  }

  // door on the +z face
  group.add(box(1.05, 1.85, 0.12, material(0x4a2f1f), 0, 1.22, d / 2 + 0.08));
  group.add(box(0.17, 0.17, 0.06, material(0xd5a44c, { metalness: 0.6 }), 0.3, 1.23, d / 2 + 0.15));
  group.add(box(1.35, 0.16, 0.2, trimMat, 0, 2.16, d / 2 + 0.1));
  if (shopSign) {
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.7, 0.68), new THREE.MeshBasicMaterial({ map: canvasLabel(shopSign, '#f1e3bf', '#3c2b1c'), side: THREE.DoubleSide }));
    sign.position.set(0, totalH + 0.45, d / 2 + 0.1);
    group.add(sign);
  }

  // roof
  const roofGroup = new THREE.Group();
  roofGroup.position.y = totalH + 0.3;
  const roofMesh = gableRoof(w + 1.3, d + 1.1, 1.7 + totalH * 0.12, roofMat);
  roofGroup.add(roofMesh);
  roofGroup.add(box(w + 1.5, 0.1, d + 1.25, trimMat, 0, 0.03, 0));
  group.add(roofGroup);
  // chimney
  group.add(box(0.6, 1.45, 0.6, material(0x6c5b4b), -w * 0.27, totalH + 1.1, d * 0.16));
  group.add(box(0.75, 0.15, 0.75, material(0x51473d), -w * 0.27, totalH + 1.85, d * 0.16));
  if (!open) world.addCollider(x, z, Math.max(w, d) * 0.54);
  return group;
}

function stall(world, x, z, color = 0x9b3f3b, rot = 0) {
  const y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); group.rotation.y = rot; world.scene.add(group);
  const wood = material(0x563822);
  const cloth = material(color);
  const cream = material(0xd9c79f);
  for (const sx of [-1.05, 1.05]) for (const sz of [-0.8, 0.8]) group.add(box(0.08, 2.2, 0.08, wood, sx, 1.1, sz));
  for (let i = 0; i < 6; i++) {
    group.add(box(0.36, 0.09, 2.05, i % 2 ? cloth : cream, -0.9 + i * 0.36, 2.2, 0));
  }
  group.add(box(2.2, 0.12, 0.85, wood, 0, 0.88, 0.03));
  group.add(box(2.2, 0.55, 0.08, wood, 0, 0.46, 0.45));
  for (let i = 0; i < 3; i++) {
    group.add(box(0.25, 0.25, 0.25, material(i === 0 ? 0x8c5e38 : i === 1 ? 0x55756a : 0x7b3f45), -0.6 + i * 0.55, 1.03, -0.1));
  }
  return group;
}

function well(world, x, z) {
  const y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); world.scene.add(group);
  group.add(cylinder(1.15, 1.2, 0.75, 10, material(0x7d7565), 0, 0.38, 0));
  group.add(cylinder(0.95, 1.0, 0.12, 10, material(0x2b5b60, { metalness: 0.15 }), 0, 0.72, 0));
  group.add(cylinder(1.24, 1.28, 0.12, 10, material(0x6d6557), 0, 0.78, 0));
  for (const sx of [-0.95, 0.95]) group.add(box(0.13, 2.2, 0.13, material(0x4a3221), sx, 1.72, 0));
  const roof = gableRoof(2.8, 1.8, 0.6, material(0x5b3b28));
  roof.position.y = 2.8; group.add(roof);
  group.add(cylinder(0.16, 0.16, 0.5, 6, material(0x3b2b1c), 0, 2.55, 0));
  group.add(box(0.18, 0.25, 0.18, material(0x76522c), 0, 2.3, 0.0));
  world.addCollider(x, z, 1.35);
}

function fountain(world, x, z) {
  const y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); world.scene.add(group);
  const stone = material(0x8b8674);
  group.add(cylinder(2.25, 2.45, 0.5, 14, stone, 0, 0.25, 0));
  group.add(cylinder(1.9, 2.1, 0.18, 14, material(0x3d8087, { transparent: true, opacity: 0.75, roughness: 0.1 }), 0, 0.52, 0));
  group.add(cylinder(0.4, 0.55, 1.5, 8, stone, 0, 1.15, 0));
  group.add(cylinder(0.85, 0.6, 0.28, 12, stone, 0, 1.95, 0));
  group.add(cylinder(0.6, 0.75, 0.12, 12, material(0x58a0a6, { transparent: true, opacity: 0.7 }), 0, 2.12, 0));
  const water = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.0, 10, 1, true), material(0x9ed3d2, { transparent: true, opacity: 0.25, side: THREE.DoubleSide }));
  water.position.y = 2.45; group.add(water);
  const glow = createGlowSprite('#b7e6dd', 2.1); glow.position.y = 2.2; group.add(glow);
  world.addCollider(x, z, 2.5);
}

function fenceLine(world, x1, z1, x2, z2, gap = 0) {
  const dx = x2 - x1, dz = z2 - z1;
  const length = Math.hypot(dx, dz);
  const angle = Math.atan2(dx, dz);
  const count = Math.floor(length / 2.2);
  const wood = material(0x563d29);
  for (let i = 0; i <= count; i++) {
    if (gap > 0 && i % gap === 0) continue;
    const t = i / count;
    const x = x1 + dx * t, z = z1 + dz * t;
    const y = world.heightAt(x, z);
    const group = new THREE.Group(); group.position.set(x, y, z); group.rotation.y = angle; world.scene.add(group);
    group.add(box(0.16, 1.25, 0.16, wood, 0, 0.62, 0));
    group.add(box(0.1, 0.1, 2.25, wood, 0, 0.9, 1.1));
    group.add(box(0.1, 0.1, 2.25, wood, 0, 0.45, 1.1));
  }
}

function banner(world, x, z, color = 0x7b3f45, rot = 0) {
  const y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); group.rotation.y = rot; world.scene.add(group);
  group.add(cylinder(0.045, 0.055, 3.2, 5, material(0x3f3a32), 0, 1.6, 0));
  group.add(box(0.06, 0.06, 2.4, material(0x3f3a32), 0, 3.0, 1.2));
  group.add(box(0.04, 1.7, 1.0, material(color), 0, 2.05, 1.55));
  const emblem = new THREE.Mesh(new THREE.CircleGeometry(0.3, 6), material(0xe9b85f, { side: THREE.DoubleSide, emissive: 0x594015, emissiveIntensity: 0.25 }));
  emblem.position.set(0, 2.0, 2.06); emblem.rotation.y = 0; group.add(emblem);
  return group;
}

function gate(world, x, z, width, label, color = 0x59402a) {
  const y = world.heightAt(x, z);
  const group = new THREE.Group(); group.position.set(x, y, z); world.scene.add(group);
  const wood = material(color);
  const stone = material(0x7b7564);
  for (const sx of [-width / 2, width / 2]) {
    group.add(box(0.65, 4.4, 0.65, stone, sx, 2.2, 0));
    group.add(box(0.9, 0.3, 0.9, material(0x928875), sx, 4.45, 0));
    group.add(box(0.5, 0.5, 0.5, material(0xe6a759, { emissive: 0xff8b35, emissiveIntensity: 1.2 }), sx, 4.8, 0));
  }
  group.add(box(width + 1.3, 0.5, 0.7, wood, 0, 4.4, 0));
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(width * 0.9, 4.5), 0.88), new THREE.MeshBasicMaterial({ map: canvasLabel(label), side: THREE.DoubleSide }));
  sign.position.set(0, 4.9, 0.36); group.add(sign);
  return group;
}

export function buildRoads(world) {
  const path = (points, width, color = 0xb9a274) => {
    const positions = [];
    const indices = [];
    for (let i = 0; i < points.length; i++) {
      const [x, z] = points[i];
      const [nx, nz] = points[Math.min(points.length - 1, i + 1)];
      const [px, pz] = points[Math.max(0, i - 1)];
      const dx = nx - px, dz = nz - pz;
      const len = Math.hypot(dx, dz) || 1;
      const ox = (-dz / len) * width / 2, oz = (dx / len) * width / 2;
      const y1 = world.heightAt(x + ox, z + oz) + 0.06;
      const y2 = world.heightAt(x - ox, z - oz) + 0.06;
      positions.push(x + ox, y1, z + oz, x - ox, y2, z - oz);
      if (i > 0) {
        const a = (i - 1) * 2;
        indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 1, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }));
    mesh.receiveShadow = true;
    world.scene.add(mesh);
  };
  path([[0, 40], [0, 33], [0, 24], [4, 19], [11, 16], [20, 18], [30, 21], [41, 23], [50, 26], [56, 29]], 4.4);
  path([[0, 10], [-7, 5], [-15, -3], [-24, -15], [-35, -28], [-41, -42], [-30, -52]], 3.1, 0xa99669);
  path([[58, 29], [67, 35], [78, 40], [90, 46], [101, 53]], 3.6);
  path([[-41, -42], [-58, -48], [-69, -57]], 2.4, 0x877b60);
}

export function buildSettlements(world) {
  // ── Hearthvale ──────────────────────────────────────────────
  const townY = world.heightAt(TOWN.x, TOWN.z) + 0.035;
  const plaza = new THREE.Mesh(new THREE.CircleGeometry(13.5, 28), new THREE.MeshStandardMaterial({ color: 0x998e72, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
  plaza.rotation.x = -Math.PI / 2; plaza.position.set(TOWN.x, townY, TOWN.z); plaza.receiveShadow = true; world.scene.add(plaza);
  const plazaInset = new THREE.Mesh(new THREE.RingGeometry(7.2, 7.7, 28), new THREE.MeshStandardMaterial({ color: 0x82765c, roughness: 1, side: THREE.DoubleSide }));
  plazaInset.rotation.x = -Math.PI / 2; plazaInset.position.set(TOWN.x, townY + 0.01, TOWN.z); world.scene.add(plazaInset);

  house(world, { x: -15.2, z: 14, w: 9.4, d: 6.3, h: 2.8, floors: 2, wall: 0xd4c39b, roof: 0x7a3e36, trim: 0x4d301f, rot: 0.06, shopSign: 'THE GILDED STAG' });
  house(world, { x: 15.2, z: 10.2, w: 7.6, d: 5.4, h: 2.65, wall: 0xb6ac8d, roof: 0x5b4c43, trim: 0x46301f, rot: -0.12, shopSign: 'COALFIST FORGE' });
  house(world, { x: -15.4, z: 28.6, w: 7.2, d: 5.4, h: 2.5, wall: 0xcfbb8d, roof: 0x8b5a3b, trim: 0x553622, rot: 0.14 });
  house(world, { x: 14.2, z: 28.0, w: 7.4, d: 5.2, h: 2.45, wall: 0xc7b98f, roof: 0x6e5544, trim: 0x503620, rot: -0.2 });
  house(world, { x: -2.2, z: -3.6, w: 8.3, d: 6.4, h: 3.2, floors: 2, wall: 0xc8c0a6, roof: 0x42514f, trim: 0x3f3b33, rot: 0.02, shopSign: 'LANTERN CHAPEL' });
  house(world, { x: -17.0, z: -2.4, w: 7.8, d: 5.6, h: 2.55, wall: 0xbda77e, roof: 0x735339, trim: 0x4d341f, rot: 0.34 });

  well(world, -0.4, 15.2);
  stall(world, 7.4, 23.7, 0x9b3f3b, -0.06);
  stall(world, -6.7, 23.4, 0x3f6b61, 0.05);
  stall(world, 11.8, 20.8, 0x7a5a32, -0.18);
  gate(world, 0, 33.8, 6.6, 'HEARTHVALE');
  campfire(world, -7.8, 9.0, 0.9);
  lantern(world, 4.4, 29.3, { height: 3.0, withLight: true, range: 10 });
  lantern(world, -6.0, 12.1, { height: 3.0, withLight: true, range: 10 });
  lantern(world, 9.6, 17.0, { height: 2.8, withLight: false });
  lantern(world, -11.5, 20.5, { height: 2.8, withLight: false });
  laneLanterns(world, [[2.4, 37], [-2.3, 36], [9.8, 27.5], [-10.5, 27.5]]);
  fenceLine(world, -22, 34, -8, 34, 4);
  fenceLine(world, 8, 34, 22, 34, 4);
  fenceLine(world, -23, 0, -23, 22, 5);
  // Notice board and crates around the market.
  const board = new THREE.Group(); const by = world.heightAt(3.9, 21.2); board.position.set(3.9, by, 21.2); world.scene.add(board);
  board.add(box(0.12, 1.7, 0.12, material(0x4b321f), -0.8, 0.85, 0));
  board.add(box(0.12, 1.7, 0.12, material(0x4b321f), 0.8, 0.85, 0));
  board.add(box(1.85, 1.15, 0.12, material(0x785637), 0, 1.35, 0));
  board.add(box(1.45, 0.78, 0.03, material(0xd1bf91), 0, 1.36, -0.08));
  for (let i = 0; i < 5; i++) board.add(box(1.0, 0.03, 0.01, material(0x6c563a), 0, 1.65 - i * 0.13, -0.11));
  for (let i = 0; i < 3; i++) {
    const cx = 4.8 + i * 0.55, cz = 19.8;
    const cy = world.heightAt(cx, cz);
    const crate = box(0.48, 0.48, 0.48, material(0x7d5b35), cx, cy + 0.24, cz); crate.rotation.y = i * 1.7; world.scene.add(crate);
    world.scene.add(box(0.55, 0.04, 0.04, material(0x4e3720), cx, cy + 0.3, cz));
  }
  // Memorial stones at the gate.
  for (let i = 0; i < 4; i++) {
    const x = -3.6 - i * 0.42, z = 35.3 + (i % 2) * 0.35;
    const y = world.heightAt(x, z);
    world.scene.add(box(0.38, 0.75 + i * 0.08, 0.28, material(0x6d6c5c), x, y + 0.38, z));
  }

  // ── Aurelune ───────────────────────────────────────────────
  const cityY = world.heightAt(CITY.x, CITY.z) + 0.04;
  const cityPlaza = new THREE.Mesh(new THREE.CircleGeometry(16.5, 32), new THREE.MeshStandardMaterial({ color: 0xaaa184, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
  cityPlaza.rotation.x = -Math.PI / 2; cityPlaza.position.set(CITY.x, cityY, CITY.z); cityPlaza.receiveShadow = true; world.scene.add(cityPlaza);
  for (const r of [6.5, 11.4]) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(r, r + 0.35, 32), new THREE.MeshStandardMaterial({ color: 0x82785f, roughness: 1, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.set(CITY.x, cityY + 0.015, CITY.z); world.scene.add(ring);
  }
  fountain(world, 58, 2.8);

  // City walls. The south wall has a gatehouse.
  const wallMat = material(0x8f866f);
  const wallDark = material(0x716a58);
  const wallSegment = (x, z, w, d) => {
    const y = world.heightAt(x, z);
    const wall = box(w, 3.1, d, wallMat, x, y + 1.55, z); world.scene.add(wall);
    world.scene.add(box(w + 0.3, 0.25, d + 0.3, wallDark, x, y + 3.15, z));
    const tx = Math.floor(w / 4), tz = Math.floor(d / 4);
    for (let i = 0; i < Math.max(tx, tz); i++) {
      const px = w > d ? x - w / 2 + 2 + i * 4 : x;
      const pz = d > w ? z - d / 2 + 2 + i * 4 : z;
      if (px < x + w / 2) world.scene.add(box(0.7, 0.6, d + 0.5, wallDark, px, y + 3.45, z));
      if (pz < z + d / 2) world.scene.add(box(w + 0.5, 0.6, 0.7, wallDark, x, y + 3.45, pz));
    }
  };
  wallSegment(58, 28.2, 24, 0.8);
  wallSegment(58, -21.8, 24, 0.8);
  wallSegment(38.2, 4, 0.8, 47);
  wallSegment(81.8, 4, 0.8, 47);
  // Thin overlapping colliders trace the wall footprint while leaving the
  // south gatehouse open. Large radius colliders previously sealed the plaza.
  const wallColliders = (x1, z1, x2, z2) => {
    const length = Math.hypot(x2 - x1, z2 - z1);
    const steps = Math.max(1, Math.ceil(length / 1.15));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      world.addCollider(x1 + (x2 - x1) * t, z1 + (z2 - z1) * t, 0.82);
    }
  };
  wallColliders(46.2, 28.2, 54.0, 28.2);
  wallColliders(62.0, 28.2, 69.8, 28.2);
  wallColliders(46.2, -21.8, 69.8, -21.8);
  wallColliders(38.2, -19.4, 38.2, 27.4);
  wallColliders(81.8, -19.4, 81.8, 27.4);
  gate(world, 58, 28.2, 7.6, 'AURELUNE', 0x4c5360);
  // Gate towers
  for (const sx of [-6.4, 6.4]) {
    const y = world.heightAt(58 + sx, 28.2);
    const tower = cylinder(1.15, 1.45, 7.2, 8, material(0x8d8671), 58 + sx, y + 3.6, 28.2); world.scene.add(tower);
    world.scene.add(cone(1.5, 2.4, 8, material(0x3c4a51), 58 + sx, y + 8.4, 28.2));
  }

  house(world, { x: 72.8, z: 4.6, w: 10.8, d: 9.2, h: 3.2, floors: 3, wall: 0xb8b29d, roof: 0x3c4e59, trim: 0x49463b, rot: 0.02, shopSign: 'THE SUN KEEP' });
  house(world, { x: 58, z: -14.7, w: 9.6, d: 7.4, h: 3.5, floors: 2, wall: 0xcfc7b2, roof: 0x425b60, trim: 0x4a4538, rot: 0, shopSign: 'TEMPLE OF FIRST LIGHT' });
  house(world, { x: 44.2, z: -10.8, w: 8.6, d: 6.5, h: 2.9, floors: 2, wall: 0xb1a88f, roof: 0x5d4a45, trim: 0x40382e, rot: 0.07, shopSign: 'TIDE-WATCH GUILD' });
  house(world, { x: 44.0, z: 10.5, w: 8.0, d: 6.0, h: 2.8, wall: 0xc7b790, roof: 0x74523d, trim: 0x48331f, rot: -0.06, shopSign: 'THE HONEST ANVIL' });
  house(world, { x: 69.4, z: 15.4, w: 8.4, d: 6.2, h: 2.9, wall: 0xb4a88d, roof: 0x5e4242, trim: 0x443325, rot: -0.1, shopSign: 'NIGHTWEAVE' });
  house(world, { x: 49.5, z: -18.0, w: 6.8, d: 5.2, h: 2.6, wall: 0xc6bca3, roof: 0x54605c, trim: 0x463d32, rot: 0.14 });

  // Spires and cathedral wings
  const spire = (x, z, h, color) => {
    const y = world.heightAt(x, z);
    world.scene.add(cylinder(0.55, 0.8, h, 6, material(color), x, y + h / 2, z));
    world.scene.add(cone(0.95, 2.8, 6, material(0x344b58), x, y + h + 1.4, z));
  };
  spire(54.2, -14.8, 8.2, 0xc6bea6);
  spire(61.8, -14.8, 8.2, 0xc6bea6);
  spire(72.8, 8.2, 10.8, 0xb2ad98);
  world.addCollider(58, -14.7, 5.6);
  world.addCollider(72.8, 4.6, 6.0);
  world.addCollider(44.2, -10.8, 4.9);
  world.addCollider(44.0, 10.5, 4.8);
  world.addCollider(69.4, 15.4, 4.9);
  world.addCollider(49.5, -18.0, 4.1);

  stall(world, 51.0, 6.6, 0x3f5f65, -0.1);
  stall(world, 62.8, 8.2, 0x7b3f45, 0.12);
  stall(world, 65.3, 0.8, 0x6f5a30, -0.4);
  campfire(world, 46.0, 16.4, 0.8);
  for (const [x, z] of [[48.5, 24.7], [67.8, 24.7], [50.0, 2.0], [66.0, 15.0]]) {
    lantern(world, x, z, { height: 3.4, withLight: true, range: 11 });
  }
  laneLanterns(world, [[58, 21], [45.5, 14], [70.0, 20.0], [42.2, 1.0]]);
  banner(world, 54.0, 25.0, 0x7b3f45, 0);
  banner(world, 62.0, 25.0, 0x3f5f65, Math.PI);
  banner(world, 75.7, 10.1, 0x7b3f45, -Math.PI / 2);
  banner(world, 40.7, 0.0, 0x3f5f65, Math.PI / 2);
  // Steps leading up to the Sun Keep.
  for (let i = 0; i < 4; i++) {
    const y = world.heightAt(67.4, 4.6) + i * 0.12;
    world.scene.add(box(5.0 - i * 0.4, 0.14, 0.55, material(0xa79c82), 67.4, y + 0.08, 4.6 + (3 - i) * 0.4));
  }
}

function laneLanterns(world, points) {
  for (const [x, z] of points) lantern(world, x, z, { height: 2.75, withLight: false });
}
