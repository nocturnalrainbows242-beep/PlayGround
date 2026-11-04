import * as THREE from 'three';
import {
  BIOMES, BIOME_KEYS, WORLD_SIZE, WORLD_LIMIT, WATER_LEVEL, BOSSES, WEATHER,
  clamp, lerp, smoothstep, fbm, distance2, mulberry32, valueNoise,
} from './data.js';
import {
  material, box, cone, cylinder, sphere, createChestModel, createRuneModel,
  createGlowSprite, glowTexture,
} from './entities.js';
import { buildSettlements, buildRoads } from './world-settlements.js';
import { buildWilds } from './world-wilds.js';

export const TOWN = { x: 0, z: 13, flat: 0.55 };
export const CITY = { x: 58, z: 4, flat: 0.62 };
export const CAVE = { x: 72, z: -43, flat: 1.15 };
export const LAKE = { x: -72, z: 51 };
export const VOLCANO = { x: -84, z: -68 };
export const PLAYER_SPAWN = { x: 0, z: 38 };

function canvasTexture(size, draw, repeat = 1) {
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  draw(ctx, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat, repeat);
  tex.anisotropy = 1;
  return tex;
}

function makeDetailTexture() {
  return canvasTexture(32, (ctx, s) => {
    ctx.fillStyle = '#d7d7ce'; ctx.fillRect(0, 0, s, s);
    const rng = mulberry32(308);
    for (let i = 0; i < 90; i++) {
      const x = Math.floor(rng() * s), y = Math.floor(rng() * s);
      const v = Math.floor(158 + rng() * 84);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(x, y, rng() > .8 ? 2 : 1, 1);
    }
    for (let i = 0; i < 20; i++) {
      const x = Math.floor(rng() * s), y = Math.floor(rng() * s);
      ctx.fillStyle = 'rgba(48,42,31,.26)';
      ctx.fillRect(x, y, 1, 1);
    }
  }, 58);
}

function makeWaterTexture() {
  return canvasTexture(32, (ctx, s) => {
    ctx.fillStyle = '#c9e3e2'; ctx.fillRect(0, 0, s, s);
    const rng = mulberry32(909);
    for (let i = 0; i < 18; i++) {
      const y = Math.floor(rng() * s);
      ctx.fillStyle = rng() > .5 ? 'rgba(255,255,255,.4)' : 'rgba(56,105,115,.22)';
      ctx.fillRect(Math.floor(rng() * s), y, 3 + Math.floor(rng() * 9), 1);
    }
  }, 30);
}

function makePathTexture() {
  return canvasTexture(16, (ctx, s) => {
    ctx.fillStyle = '#b9a274'; ctx.fillRect(0, 0, s, s);
    const rng = mulberry32(55);
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = rng() > .55 ? 'rgba(74,64,45,.34)' : 'rgba(244,225,176,.26)';
      ctx.fillRect(Math.floor(rng() * s), Math.floor(rng() * s), 1 + Math.floor(rng() * 2), 1);
    }
  }, 2);
}

function makeRoofTexture() {
  return canvasTexture(16, (ctx, s) => {
    ctx.fillStyle = '#d0d0c8'; ctx.fillRect(0, 0, s, s);
    for (let y = 0; y < s; y += 4) {
      for (let x = 0; x < s; x += 4) {
        ctx.fillStyle = (x / 4 + y / 4) % 2 ? '#e6e6dc' : '#c5c5ba';
        ctx.fillRect(x, y, 4, 4);
      }
      ctx.fillStyle = 'rgba(0,0,0,.18)';
      ctx.fillRect(0, y + 3, s, 1);
    }
  }, 4);
}

export class World {
  constructor(game) {
    this.game = game;
    this.scene = game.scene;
    this.rng = mulberry32(424242);
    this.colliders = [];
    this.windows = [];
    this.lanterns = [];
    this.flames = [];
    this.chests = [];
    this.traps = [];
    this.puzzles = {};
    this.puzzleRunes = [];
    this.enemySpawns = [];
    this.bossSpawns = [];
    this.npcSpots = [];
    this.waterMats = [];
    this.clouds = [];
    this.stars = null;
    this.currentWeather = WEATHER.clear;
    this.dayFactor = 1;
    this.nightFactor = 0;
    this.sunHeight = 1;
    this.timeOfDay = 9;
    this.lightning = 0;
    this.lightningTimer = 8;
    this.rainGroup = null;
    this.snowGroup = null;
    this.ashGroup = null;
    this.ripples = [];
    this.worldTime = 0;
    this.mapCanvas = null;
    this.clearings = [];
    this.build();
  }

  addCollider(x, z, r, type = 'solid') {
    this.colliders.push({ x, z, r, type });
  }

  addClearing(x, z, r) {
    this.clearings.push({ x, z, r });
  }

  blockedByClearing(x, z, pad = 0) {
    for (const c of this.clearings) if (distance2(x, z, c.x, c.z) < c.r + pad) return true;
    return false;
  }

  heightAt(x, z) {
    let h = 0.15 + fbm(x * 0.019, z * 0.019, 8) * 2.55 + (valueNoise(x * 0.061, z * 0.061, 4) - 0.5) * 0.52;
    // Whisperwood shoulders
    const forestD = distance2(x, z, BIOMES.forest.center[0], BIOMES.forest.center[1]);
    h += smoothstep(55, 12, forestD) * 1.25 + fbm(x * 0.045, z * 0.045, 17) * smoothstep(60, 15, forestD) * 1.4;
    // Stormcrag highlands
    const highD = distance2(x, z, BIOMES.highlands.center[0], BIOMES.highlands.center[1]);
    h += smoothstep(55, 8, highD) * 8.6 + fbm(x * 0.07, z * 0.07, 22) * 2.8 * smoothstep(55, 8, highD);
    // Cinderwake volcano
    const volD = distance2(x, z, VOLCANO.x, VOLCANO.z);
    const cone = Math.max(0, 1 - volD / 62);
    h += Math.pow(cone, 1.6) * 15.5;
    if (volD < 13) h -= (1 - volD / 13) * 7.6;
    h += fbm(x * 0.09, z * 0.09, 31) * 1.5 * cone;
    // Mirrormere basin
    const lakeD = distance2(x, z, LAKE.x, LAKE.z);
    h -= (1 - smoothstep(12, 35, lakeD)) * 4.7;
    // Eastern sea shelf
    h -= smoothstep(108, 135, x) * 6.5;
    h -= smoothstep(112, 135, z) * 2.4;
    // Grave terraces
    const graveD = distance2(x, z, BIOMES.graveyard.center[0], BIOMES.graveyard.center[1]);
    h = lerp(h, 0.7 + fbm(x * 0.06, z * 0.06, 43) * 0.65, (1 - smoothstep(17, 31, graveD)) * 0.8);
    // Cave floor, kept level and dark
    const caveD = distance2(x, z, CAVE.x, CAVE.z);
    h = lerp(h, CAVE.flat + fbm(x * 0.1, z * 0.1, 66) * 0.24, 1 - smoothstep(10, 16, caveD));
    // Settlements are level, with soft outskirts
    const townD = distance2(x, z, TOWN.x, TOWN.z);
    h = lerp(h, TOWN.flat, 1 - smoothstep(21, 29.5, townD));
    const cityD = distance2(x, z, CITY.x, CITY.z);
    h = lerp(h, CITY.flat, 1 - smoothstep(22, 30.5, cityD));
    // Keep the spawn approach flat and readable
    if (Math.abs(x) < 9 && z > 25 && z < 43) h = lerp(h, 0.55, 0.7);
    return h;
  }

  biomeAt(x, z) {
    const townD = distance2(x, z, TOWN.x, TOWN.z);
    if (townD < 24) return BIOMES.town;
    const cityD = distance2(x, z, CITY.x, CITY.z);
    if (cityD < 23) return BIOMES.city;
    const caveD = distance2(x, z, CAVE.x, CAVE.z);
    if (caveD < 16) return BIOMES.cave;
    const lakeD = distance2(x, z, LAKE.x, LAKE.z);
    if (lakeD < 31) return BIOMES.lake;
    let best = BIOMES.meadow, bestScore = Infinity;
    for (const key of BIOME_KEYS) {
      const b = BIOMES[key];
      if (key === 'lake' || key === 'cave') continue;
      const d = distance2(x, z, b.center[0], b.center[1]) / b.radius;
      if (d < bestScore) { bestScore = d; best = b; }
    }
    return best;
  }

  zoneName(x, z) {
    const biome = this.biomeAt(x, z);
    return { biome, town: biome.id === 'town', city: biome.id === 'city' };
  }

  build() {
    this.scene.fog = new THREE.FogExp2(0xadc4b2, 0.0032);
    this.createSky();
    this.createLights();
    this.createTerrain();
    this.createWater();
    buildRoads(this);
    buildSettlements(this);
    buildWilds(this);
    this.createWeatherParticles();
    this.createMapCanvas();
  }

  createSky() {
    const geo = new THREE.SphereGeometry(430, 24, 16);
    this.skyUniforms = {
      topColor: { value: new THREE.Color(0x5795b8) },
      horizonColor: { value: new THREE.Color(0xd8d1a2) },
      bottomColor: { value: new THREE.Color(0x789177) },
      sunColor: { value: new THREE.Color(0xffdc9f) },
      sunDirection: { value: new THREE.Vector3(0.3, 0.8, 0.3) },
      sunPower: { value: 1 },
    };
    const skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: this.skyUniforms,
      vertexShader: `
        varying vec3 vWorldDirection;
        void main() {
          vWorldDirection = normalize((modelMatrix * vec4(position, 1.0)).xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 bottomColor;
        uniform vec3 sunColor;
        uniform vec3 sunDirection;
        uniform float sunPower;
        varying vec3 vWorldDirection;
        void main() {
          vec3 dir = normalize(vWorldDirection);
          float h = dir.y;
          vec3 col = mix(bottomColor, horizonColor, smoothstep(-0.18, 0.08, h));
          col = mix(col, topColor, smoothstep(0.02, 0.75, h));
          float sunDot = max(dot(dir, normalize(sunDirection)), 0.0);
          col += sunColor * (pow(sunDot, 700.0) * 1.8 + pow(sunDot, 22.0) * 0.18) * sunPower;
          float band = sin((h + 0.08) * 80.0) * 0.004;
          col += band * smoothstep(-0.05, 0.3, h);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.sky = new THREE.Mesh(geo, skyMat);
    this.sky.frustumCulled = false;
    this.scene.add(this.sky);

    const starGeo = new THREE.BufferGeometry();
    const positions = [];
    const rng = mulberry32(881);
    for (let i = 0; i < 1100; i++) {
      const theta = rng() * Math.PI * 2;
      const phi = Math.acos(rng() * 0.92);
      const r = 360;
      const x = Math.sin(phi) * Math.cos(theta) * r;
      const y = Math.cos(phi) * r;
      const z = Math.sin(phi) * Math.sin(theta) * r;
      if (y > 5) positions.push(x, y, z);
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xf2e9c8, size: 1.65, transparent: true, opacity: 0, sizeAttenuation: true, depthWrite: false });
    this.stars = new THREE.Points(starGeo, starMat);
    this.stars.frustumCulled = false;
    this.scene.add(this.stars);

    this.sunSprite = createGlowSprite('#ffd78b', 42);
    this.sunSprite.material.opacity = 0.6;
    this.scene.add(this.sunSprite);
    this.moonSprite = createGlowSprite('#d4e5ea', 19);
    this.moonSprite.material.opacity = 0.7;
    this.scene.add(this.moonSprite);

    const cloudMat = new THREE.MeshStandardMaterial({ color: 0xe8eee2, roughness: 1, transparent: true, opacity: 0.54, depthWrite: false, flatShading: true });
    this.cloudMat = cloudMat;
    const rng2 = mulberry32(922);
    for (let i = 0; i < 9; i++) {
      const cloud = new THREE.Group();
      const count = 4 + Math.floor(rng2() * 4);
      for (let j = 0; j < count; j++) {
        const puff = new THREE.Mesh(new THREE.IcosahedronGeometry(3.4 + rng2() * 4.2, 0), cloudMat);
        puff.position.set((j - count / 2) * 3.5 + rng2() * 2, rng2() * 2.2, (rng2() - 0.5) * 5);
        puff.scale.y = 0.6;
        cloud.add(puff);
      }
      cloud.position.set((rng2() - 0.5) * 220, 43 + rng2() * 21, (rng2() - 0.5) * 220);
      cloud.userData.speed = 0.4 + rng2() * 0.5;
      this.clouds.push(cloud);
      this.scene.add(cloud);
    }
  }

  createLights() {
    this.hemi = new THREE.HemisphereLight(0xbcd4dc, 0x30402f, 0.8);
    this.scene.add(this.hemi);
    this.ambient = new THREE.AmbientLight(0xaab6a2, 0.16);
    this.scene.add(this.ambient);
    this.sun = new THREE.DirectionalLight(0xffe0ae, 2.4);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.camera.near = 1;
    this.sun.shadow.camera.far = 150;
    this.sun.shadow.camera.left = -48;
    this.sun.shadow.camera.right = 48;
    this.sun.shadow.camera.top = 48;
    this.sun.shadow.camera.bottom = -48;
    this.sun.shadow.bias = -0.0005;
    this.sun.shadow.normalBias = 0.03;
    this.sunTarget = new THREE.Object3D();
    this.scene.add(this.sunTarget);
    this.sun.target = this.sunTarget;
    this.scene.add(this.sun);
    this.moon = new THREE.DirectionalLight(0x9dbcd8, 0.35);
    this.scene.add(this.moon);

    // Distant mountain ring gives the horizon weight.
    const rng = mulberry32(770);
    const mountainMat = new THREE.MeshStandardMaterial({ color: 0x53625e, roughness: 1, flatShading: true });
    for (let i = 0; i < 22; i++) {
      const a = (i / 22) * Math.PI * 2 + rng() * 0.15;
      const r = 178 + rng() * 34;
      const h = 24 + rng() * 42;
      const m = cone(20 + rng() * 24, h, 5, mountainMat, Math.cos(a) * r, h * 0.32 - 3, Math.sin(a) * r);
      m.rotation.y = rng() * Math.PI;
      m.castShadow = false; m.receiveShadow = false;
      this.scene.add(m);
    }
  }

  createTerrain() {
    const segments = 168;
    const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, segments, segments);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const colors = [];
    const rng = mulberry32(1212);
    const color = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const y = this.heightAt(x, z);
      pos.setY(i, y);
      const biome = this.biomeAt(x, z);
      const d = distance2(x, z, biome.center[0], biome.center[1]);
      const edge = clamp(d / biome.radius, 0, 1);
      color.setHex(biome.ground);
      const n = valueNoise(x * 0.21, z * 0.21, 3) - 0.5;
      const n2 = valueNoise(x * 0.045, z * 0.045, 9) - 0.5;
      color.offsetHSL(n * 0.012, n2 * 0.03, n * 0.075 + n2 * 0.045);
      if (y < WATER_LEVEL + 1) color.lerp(new THREE.Color(0x807a5b), 0.28);
      if (y < WATER_LEVEL) color.lerp(new THREE.Color(0x2e5151), 0.55);
      if (biome.id === 'volcano') {
        const vein = valueNoise(x * 0.14, z * 0.14, 17);
        if (vein > 0.72) color.lerp(new THREE.Color(0x8f3d30), (vein - 0.72) * 1.8);
      }
      if (biome.id === 'highlands' && y > 8) color.lerp(new THREE.Color(0xb3b1a4), clamp((y - 8) / 10, 0, 0.5));
      if (biome.id === 'graveyard' && valueNoise(x * 0.7, z * 0.7, 12) > 0.7) color.offsetHSL(0, -0.03, -0.08);
      colors.push(color.r, color.g, color.b);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true, map: makeDetailTexture(), roughness: 1, metalness: 0,
      flatShading: false,
    });
    this.terrain = new THREE.Mesh(geo, mat);
    this.terrain.receiveShadow = true;
    this.terrain.castShadow = false;
    this.scene.add(this.terrain);
  }

  createWater() {
    const geo = new THREE.PlaneGeometry(WORLD_SIZE + 18, WORLD_SIZE + 18, 1, 1);
    geo.rotateX(-Math.PI / 2);
    this.waterTex = makeWaterTexture();
    const mat = new THREE.MeshStandardMaterial({
      color: 0x3b7883, map: this.waterTex, transparent: true, opacity: 0.82,
      roughness: 0.18, metalness: 0.18, emissive: 0x0b2529, emissiveIntensity: 0.24,
    });
    this.waterMat = mat;
    this.water = new THREE.Mesh(geo, mat);
    this.water.position.y = WATER_LEVEL;
    this.water.receiveShadow = true;
    this.scene.add(this.water);
    this.waterMats.push(mat);

    // Shore foam rings at Mirrormere and the coast.
    const foamMat = new THREE.MeshBasicMaterial({ color: 0xbfded8, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false });
    for (const [x, z, r] of [[LAKE.x, LAKE.z, 24], [126, 58, 27], [122, 95, 22]]) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(r - 0.6, r, 32), foamMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(x, WATER_LEVEL + 0.02, z);
      this.scene.add(ring);
    }
  }

  createWeatherParticles() {
    const rng = mulberry32(663);
    const makeLines = (count, color, opacity, size) => {
      const positions = new Float32Array(count * 6);
      const speeds = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        const x = (rng() - 0.5) * 49, y = rng() * 24, z = (rng() - 0.5) * 49;
        positions[i * 6] = x; positions[i * 6 + 1] = y; positions[i * 6 + 2] = z;
        positions[i * 6 + 3] = x + 0.04; positions[i * 6 + 4] = y - 0.65; positions[i * 6 + 5] = z;
        speeds[i] = 14 + rng() * 12;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false });
      const lines = new THREE.LineSegments(geo, mat);
      lines.frustumCulled = false;
      lines.userData.speeds = speeds;
      lines.visible = false;
      this.scene.add(lines);
      return lines;
    };
    const makePoints = (count, color, size, opacity) => {
      const positions = new Float32Array(count * 3);
      const seeds = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (rng() - 0.5) * 48;
        positions[i * 3 + 1] = rng() * 22;
        positions[i * 3 + 2] = (rng() - 0.5) * 48;
        seeds[i] = rng() * Math.PI * 2;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({ color, size, transparent: true, opacity, depthWrite: false, sizeAttenuation: true, map: glowTexture('#ffffff'), alphaTest: 0.15 });
      const points = new THREE.Points(geo, mat);
      points.frustumCulled = false;
      points.visible = false;
      points.userData.seeds = seeds;
      this.scene.add(points);
      return points;
    };
    this.rainGroup = makeLines(850, 0xa6c6cb, 0.46, 0.1);
    this.snowGroup = makePoints(620, 0xe6eef0, 0.13, 0.54);
    this.ashGroup = makePoints(520, 0xd98f61, 0.11, 0.38);
  }

  createMapCanvas() {
    const size = 272;
    const canvas = document.createElement('canvas');
    canvas.width = size; canvas.height = size;
    const ctx = canvas.getContext('2d');
    const image = ctx.createImageData(size, size);
    for (let py = 0; py < size; py++) {
      for (let px = 0; px < size; px++) {
        const x = (px / size) * WORLD_SIZE - WORLD_SIZE / 2;
        const z = (py / size) * WORLD_SIZE - WORLD_SIZE / 2;
        const h = this.heightAt(x, z);
        const biome = this.biomeAt(x, z);
        let c = new THREE.Color(biome.map);
        if (h < WATER_LEVEL) c = new THREE.Color(0x2c5663);
        else {
          if (h > 8) c.lerp(new THREE.Color(0x9a9f95), clamp((h - 8) / 16, 0, 0.6));
          const shade = clamp(0.5 + (h - this.heightAt(x - 2, z - 2)) * 0.12, 0.72, 1.12);
          c.multiplyScalar(shade);
          if (biome.id === 'volcano') {
            const lava = valueNoise(x * 0.13, z * 0.13, 71);
            if (lava > 0.74) c.lerp(new THREE.Color(0xd25e36), 0.55);
          }
        }
        const n = (valueNoise(x * 0.8, z * 0.8, 19) - 0.5) * 0.09;
        c.offsetHSL(0, 0, n);
        const idx = (py * size + px) * 4;
        image.data[idx] = Math.round(c.r * 255);
        image.data[idx + 1] = Math.round(c.g * 255);
        image.data[idx + 2] = Math.round(c.b * 255);
        image.data[idx + 3] = 255;
      }
    }
    ctx.putImageData(image, 0, 0);
    // biome borders and settlements
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = '#f1e3bf';
    ctx.lineWidth = 1;
    for (const id of ['town', 'city']) {
      const b = BIOMES[id];
      const cx = ((b.center[0] + WORLD_SIZE / 2) / WORLD_SIZE) * size;
      const cy = ((b.center[1] + WORLD_SIZE / 2) / WORLD_SIZE) * size;
      ctx.beginPath(); ctx.arc(cx, cy, 12, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    this.mapCanvas = canvas;
  }

  setWeather(weatherId) {
    this.currentWeather = WEATHER[weatherId] || WEATHER.clear;
    this.weatherTransition = 0;
  }

  setTime(hour) {
    this.timeOfDay = hour;
  }

  tryActivateRune(rune) {
    const puzzle = this.puzzles[rune.userData.puzzleId];
    if (!puzzle || puzzle.solved || rune.userData.lit) return { result: 'ignored' };
    const expected = puzzle.order[puzzle.progress];
    if (rune.userData.element === expected) {
      rune.userData.lit = true;
      const obj = rune.userData.runeObject;
      obj.userData.lit = true;
      obj.userData.light.intensity = 2.2;
      obj.userData.glyph.material.emissiveIntensity = 2.4;
      obj.userData.ring.scale.setScalar(1.35);
      puzzle.progress++;
      if (puzzle.progress >= puzzle.order.length) {
        puzzle.solved = true;
        if (puzzle.chest) {
          puzzle.chest.locked = false;
          puzzle.chest.root.userData.locked = false;
          puzzle.chest.root.userData.lock.visible = false;
          puzzle.chest.root.userData.lid.children.forEach(c => {
            if (c.material?.emissive) c.material.emissiveIntensity = 0.8;
          });
        }
        this.game.onPuzzleSolved?.(puzzle);
        return { result: 'solved' };
      }
      this.game.onRuneLit?.(puzzle, rune);
      return { result: 'lit', progress: puzzle.progress, total: puzzle.order.length };
    }
    puzzle.progress = 0;
    for (const r of puzzle.runes) {
      r.userData.lit = false;
      r.userData.runeObject.userData.lit = false;
      r.userData.runeObject.userData.light.intensity = 0;
      r.userData.runeObject.userData.glyph.material.emissiveIntensity = 0.45;
      r.userData.runeObject.userData.ring.scale.setScalar(1);
    }
    return { result: 'reset' };
  }

  update(dt, elapsed, hour, weather, playerPos) {
    this.worldTime = elapsed;
    this.timeOfDay = hour;
    this.currentWeather = weather || this.currentWeather;
    const w = this.currentWeather;
    const angle = ((hour - 6) / 24) * Math.PI * 2;
    const sunDir = new THREE.Vector3(Math.cos(angle) * 0.82, Math.sin(angle), 0.32).normalize();
    this.sunHeight = sunDir.y;
    const dayFactor = clamp(sunDir.y * 3.2 + 0.16, 0, 1);
    const twilight = clamp(1 - Math.abs(sunDir.y) * 5, 0, 1) * (sunDir.y > -0.2 ? 1 : 0);
    this.dayFactor = dayFactor;
    this.nightFactor = 1 - dayFactor;
    const weatherDim = w.light;
    const overcast = clamp((1 - weatherDim) * 1.2, 0, 0.8);

    // Sky palette
    const nightTop = new THREE.Color(0x07131f);
    const dayTop = new THREE.Color(0x4e91b9);
    const nightHorizon = new THREE.Color(0x162a36);
    const dayHorizon = new THREE.Color(0xd5d2a5);
    const dawnHorizon = new THREE.Color(0xd98b63);
    const top = nightTop.clone().lerp(dayTop, dayFactor);
    const horizon = nightHorizon.clone().lerp(dayHorizon, dayFactor).lerp(dawnHorizon, twilight * 0.58);
    const bottom = new THREE.Color(0x6e8271).lerp(new THREE.Color(0x18201e), 1 - dayFactor);
    top.lerp(new THREE.Color(0x526369), overcast * 0.6);
    horizon.lerp(new THREE.Color(0x8b948d), overcast * 0.55);
    this.skyUniforms.topColor.value.copy(top);
    this.skyUniforms.horizonColor.value.copy(horizon);
    this.skyUniforms.bottomColor.value.copy(bottom);
    this.skyUniforms.sunColor.value.setHex(twilight > 0.3 ? 0xff9d63 : 0xffe1a8);
    this.skyUniforms.sunDirection.value.copy(sunDir);
    this.skyUniforms.sunPower.value = dayFactor;
    this.stars.material.opacity = clamp((0.16 - sunDir.y) * 4.5, 0, 0.92) * (1 - overcast * 0.7);

    // Lighting
    const lightningBoost = this.lightning * 2.5;
    this.sun.intensity = (0.2 + dayFactor * 2.35) * weatherDim + lightningBoost;
    this.sun.color.setHex(twilight > 0.35 ? 0xffad75 : 0xffe3b1);
    this.moon.intensity = (1 - dayFactor) * 0.38 * weatherDim;
    this.hemi.intensity = (0.16 + dayFactor * 0.78) * (0.75 + w.ambient * 0.35) + lightningBoost * 0.3;
    this.hemi.color.setHex(twilight > 0.3 ? 0xc1a58f : 0xacc9d4);
    this.hemi.groundColor.setHex(0x2b3b2d);
    this.ambient.intensity = 0.07 + (1 - dayFactor) * 0.11 + overcast * 0.04;

    // sun shadow follows the player
    if (playerPos) {
      this.sun.position.set(playerPos.x + sunDir.x * 72, 78 + sunDir.y * 18, playerPos.z + sunDir.z * 72);
      this.sunTarget.position.set(playerPos.x, 0, playerPos.z);
      this.sunTarget.updateMatrixWorld();
    }
    this.sunSprite.position.copy(sunDir).multiplyScalar(360);
    this.sunSprite.position.y += 8;
    this.sunSprite.visible = sunDir.y > -0.08;
    this.sunSprite.material.opacity = clamp(dayFactor * 0.6, 0, 0.65);
    this.moonSprite.position.copy(sunDir).multiplyScalar(-360);
    this.moonSprite.visible = sunDir.y < 0.1;
    this.moonSprite.material.opacity = clamp(-sunDir.y + 0.12, 0, 0.65);

    this.scene.fog.density = w.fog * (1.1 - dayFactor * 0.22);
    this.scene.fog.color.copy(horizon).lerp(new THREE.Color(0x263437), 0.28 + (1 - dayFactor) * 0.22);

    // Windows and lanterns
    const lampOn = clamp((0.42 - dayFactor) * 2.4, 0.08, 1) + (overcast * 0.25);
    for (const win of this.windows) {
      win.material.emissiveIntensity = 0.12 + lampOn * 2.5;
      win.material.color.setHex(lampOn > 0.45 ? 0xffd898 : 0x6b7a78);
    }
    for (const lantern of this.lanterns) {
      const flicker = 0.86 + Math.sin(elapsed * 8 + lantern.offset) * 0.08 + Math.sin(elapsed * 23 + lantern.offset) * 0.04;
      lantern.light.intensity = lantern.base * lampOn * flicker * (1 + this.lightning * 0.1);
      if (lantern.sprite) lantern.sprite.material.opacity = 0.35 + lampOn * 0.55;
    }
    for (const flame of this.flames) {
      flame.scale.setScalar(1 + Math.sin(elapsed * 10 + flame.userData.offset) * 0.08);
      flame.material.opacity = 0.5 + Math.sin(elapsed * 9 + flame.userData.offset) * 0.16;
    }
    if (this.windmillBlades) {
      this.windmillBlades.rotation.z -= dt * (0.38 + w.wind * 0.55);
    }

    // Clouds
    for (const cloud of this.clouds) {
      cloud.position.x += cloud.userData.speed * dt * (0.5 + w.wind);
      if (cloud.position.x > 145) cloud.position.x = -145;
      cloud.position.z += Math.sin(elapsed * 0.1 + cloud.position.x) * dt * 0.12;
      cloud.visible = dayFactor > 0.1;
    }
    this.cloudMat.opacity = 0.38 + dayFactor * 0.24 - overcast * 0.1;
    this.cloudMat.color.setHex(dayFactor > 0.4 ? 0xe9eee5 : 0x46545a);

    // Water
    this.waterTex.offset.x += dt * 0.004;
    this.waterTex.offset.y += dt * 0.0017;
    this.waterMat.color.setHex(dayFactor > 0.3 ? 0x3b7883 : 0x1e3f4b);
    this.waterMat.emissiveIntensity = 0.1 + (1 - dayFactor) * 0.18;

    // Lightning
    if (w.id === 'storm') {
      this.lightningTimer -= dt;
      if (this.lightningTimer <= 0) {
        this.lightning = 1;
        this.lightningTimer = 6 + Math.random() * 11;
        this.game.onLightning?.();
      }
    }
    this.lightning *= Math.max(0, 1 - dt * 5.5);

    this.updateWeatherParticles(dt, elapsed, w, playerPos);
  }

  updateWeatherParticles(dt, elapsed, w, playerPos) {
    const center = playerPos || { x: 0, z: 0 };
    const isRain = w.rain, isSnow = w.snow, isAsh = w.ash;
    this.rainGroup.visible = isRain;
    this.snowGroup.visible = isSnow;
    this.ashGroup.visible = isAsh;
    this.rainGroup.position.set(center.x, 0, center.z);
    this.snowGroup.position.set(center.x, 0, center.z);
    this.ashGroup.position.set(center.x, 0, center.z);

    if (isRain) {
      const arr = this.rainGroup.geometry.attributes.position.array;
      const speeds = this.rainGroup.userData.speeds;
      for (let i = 0; i < speeds.length; i++) {
        const fall = speeds[i] * dt;
        arr[i * 6 + 1] -= fall; arr[i * 6 + 4] -= fall;
        arr[i * 6] -= dt * 5.3 * w.wind; arr[i * 6 + 3] -= dt * 5.3 * w.wind;
        if (arr[i * 6 + 1] < 0) {
          const y = 22 + Math.random() * 8;
          arr[i * 6 + 1] = y; arr[i * 6 + 4] = y - 0.6;
          const x = (Math.random() - 0.5) * 48, z = (Math.random() - 0.5) * 48;
          arr[i * 6] = x; arr[i * 6 + 2] = z;
          arr[i * 6 + 3] = x + 0.04; arr[i * 6 + 5] = z;
        }
      }
      this.rainGroup.geometry.attributes.position.needsUpdate = true;
      this.rainGroup.material.opacity = 0.34 + Math.sin(elapsed * 0.7) * 0.06;
    }
    if (isSnow) {
      const arr = this.snowGroup.geometry.attributes.position.array;
      const seeds = this.snowGroup.userData.seeds;
      for (let i = 0; i < seeds.length; i++) {
        arr[i * 3 + 1] -= dt * (1.8 + (i % 5) * 0.2);
        arr[i * 3] += Math.sin(elapsed * 1.2 + seeds[i]) * dt * 0.75;
        if (arr[i * 3 + 1] < 0) arr[i * 3 + 1] = 20 + Math.random() * 4;
      }
      this.snowGroup.geometry.attributes.position.needsUpdate = true;
    }
    if (isAsh) {
      const arr = this.ashGroup.geometry.attributes.position.array;
      const seeds = this.ashGroup.userData.seeds;
      for (let i = 0; i < seeds.length; i++) {
        arr[i * 3 + 1] += Math.sin(elapsed * 0.8 + seeds[i]) * dt * 0.24;
        arr[i * 3] += Math.sin(elapsed * 0.5 + seeds[i]) * dt * 0.35;
        arr[i * 3 + 1] -= dt * 0.35;
        if (arr[i * 3 + 1] < 0.3) arr[i * 3 + 1] = 18 + Math.random() * 6;
      }
      this.ashGroup.geometry.attributes.position.needsUpdate = true;
    }
  }

  updateChest(chest, dt) {
    if (!chest.opening && !chest.open) return;
    const lid = chest.root.userData.lid;
    if (chest.opening) {
      lid.rotation.x = Math.max(-1.55, lid.rotation.x - dt * 4.2);
      if (lid.rotation.x <= -1.55) { lid.rotation.x = -1.55; chest.opening = false; chest.open = true; }
    }
  }

  updateTraps(dt, player) {
    for (const trap of this.traps) {
      trap.timer -= dt;
      const d = distance2(player.position.x, player.position.z, trap.x, trap.z);
      const inRange = d < trap.radius + 0.4;
      const cycle = trap.period;
      const phase = ((this.worldTime + trap.phase) % cycle) / cycle;
      const warning = inRange && phase < 0.28;
      const active = inRange && phase >= 0.28 && phase < 0.5;
      if (trap.ring) {
        trap.ring.material.opacity = warning ? 0.34 + Math.sin(this.worldTime * 18) * 0.15 : active ? 0.5 : 0.05;
        trap.ring.scale.setScalar(1 + (warning ? 0.05 : 0));
      }
      if (trap.flame) {
        const flare = active ? 0.78 : warning ? 0.3 : 0.03;
        trap.flame.material.opacity = lerp(trap.flame.material.opacity, flare, clamp(dt * 10, 0, 1));
        trap.flame.scale.y = 0.55 + (active ? 0.55 : warning ? 0.18 : 0) + Math.sin(this.worldTime * 16) * 0.08;
        trap.flame.visible = trap.flame.material.opacity > 0.02;
      }
      if (trap.spikes) {
        const target = active ? 1 : 0;
        trap.spikeHeight = lerp(trap.spikeHeight || 0, target, clamp(dt * 14, 0, 1));
        trap.spikes.position.y = (trap.spikeHeight || 0) * 0.9;
        trap.spikes.visible = trap.spikeHeight > 0.02;
      }
      if (active && !trap.hitThisCycle) {
        trap.hitThisCycle = true;
        player.takeDamage(trap.damage, trap.element, trap.name || 'Trap');
        this.game.ui?.showToast('TRAP', `${trap.name} catches you for ${trap.damage} damage.`, 'danger', '☠');
      }
      if (!active) trap.hitThisCycle = false;
    }
  }
}
