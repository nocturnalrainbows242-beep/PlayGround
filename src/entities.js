import * as THREE from 'three';
import { CLASSES, ELEMENTS, RARITIES } from './data.js';

const skinTones = [0xf0c8a3, 0xd39b74, 0xa96e4f, 0x754737, 0xe7e0d1];
const clothTones = [0x426e70, 0x7b3f45, 0x3f4f83, 0x6b5732, 0x4d5644];
const materialCache = new Map();
const shadowMaterials = new Set();

const _c = new THREE.Color();
const _c2 = new THREE.Color();

export function paletteFromIndices(skin = 0, cloth = 0) {
  return { skin: skinTones[skin % skinTones.length], cloth: clothTones[cloth % clothTones.length] };
}

export function material(color, options = {}) {
  const key = `${color}_${options.emissive || 0}_${options.emissiveIntensity || 0}_${options.roughness || 0}_${options.metalness || 0}_${options.transparent || 0}_${options.opacity || 1}_${options.flat === false ? 0 : 1}`;
  if (!options.unique && materialCache.has(key)) return materialCache.get(key);
  const mat = new THREE.MeshStandardMaterial({
    color,
    roughness: options.roughness ?? 0.86,
    metalness: options.metalness ?? 0.02,
    flatShading: options.flat !== false,
    emissive: options.emissive ?? 0x000000,
    emissiveIntensity: options.emissiveIntensity ?? 0,
    transparent: !!options.transparent,
    opacity: options.opacity ?? 1,
    side: options.side ?? THREE.FrontSide,
    depthWrite: options.depthWrite ?? true,
    vertexColors: !!options.vertexColors,
  });
  if (!options.unique) materialCache.set(key, mat);
  shadowMaterials.add(mat);
  return mat;
}

export function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function cone(r, h, segments, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, segments), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function cylinder(rt, rb, h, segments, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, segments), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function sphere(r, mat, x = 0, y = 0, z = 0, segments = 8, rings = 6) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, segments, rings), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function shade(hex, amount = 0) {
  _c.setHex(hex);
  if (amount > 0) _c.lerp(_c2.setHex(0xffffff), amount);
  else _c.lerp(_c2.setHex(0x000000), -amount);
  return _c.getHex();
}

export function elementColor(element) {
  return ELEMENTS[element]?.color || 0xe7dcc2;
}

export function mixColor(a, b, t) {
  return new THREE.Color(a).lerp(new THREE.Color(b), t).getHex();
}

export function createCharacter(config = {}) {
  const race = config.race || 'human';
  const beastType = config.beastType || 'dog';
  const sex = config.sex || 'feminine';
  const classId = config.classId || 'warrior';
  const cls = CLASSES[classId] || CLASSES.warrior;
  const skin = config.skin ?? skinTones[0];
  const cloth = config.cloth ?? clothTones[0];
  const role = config.role || 'hero';
  const palette = config.palette || null;
  const npc = role === 'npc';
  const mainCloth = palette ? palette[0] : cloth;
  const accent = palette ? palette[1] : mixColor(cloth, 0xe9b85f, 0.45);
  const skinColor = palette ? palette[2] : skin;
  const dark = shade(mainCloth, -0.42);
  const darkCloth = shade(mainCloth, -0.62);
  const leather = role === 'npc' ? shade(accent, -0.35) : 0x3c2a22;
  const clothMat = material(mainCloth);
  const darkMat = material(dark);
  const accentMat = material(accent);
  const skinMat = material(skinColor);
  const leatherMat = material(leather);
  const metalMat = material(0x8b9491, { metalness: 0.65, roughness: 0.4 });
  const goldMat = material(0xd5a44c, { metalness: 0.7, roughness: 0.36, emissive: 0x3a2405, emissiveIntensity: 0.25 });
  const eyeMat = material(race === 'demon' ? 0xff6a4d : 0x101820, { emissive: race === 'demon' ? 0x761106 : 0x000000, emissiveIntensity: race === 'demon' ? 0.8 : 0 });

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const shoulder = sex === 'masculine' ? 0.67 : 0.58;
  const hip = sex === 'feminine' ? 0.56 : 0.49;
  const torsoH = sex === 'feminine' ? 0.58 : 0.62;

  // hips and torso
  body.add(box(hip, 0.2, 0.31, darkMat, 0, 1.02, 0));
  const torso = box(shoulder, torsoH, 0.34, clothMat, 0, 1.35, 0);
  body.add(torso);
  body.add(box(shoulder * 0.92, 0.1, 0.36, leatherMat, 0, 1.08, 0));
  body.add(box(0.1, 0.1, 0.05, goldMat, 0, 1.09, -0.19));
  body.add(box(shoulder * 0.75, 0.08, 0.36, accentMat, 0, 1.51, 0));

  // neck + head
  const headPivot = new THREE.Group();
  headPivot.position.set(0, 1.71, 0);
  body.add(headPivot);
  headPivot.add(box(0.13, 0.13, 0.13, skinMat, 0, 0.01, 0));
  const head = box(0.39, 0.4, 0.35, skinMat, 0, 0.21, 0);
  headPivot.add(head);
  headPivot.add(box(0.045, 0.055, 0.04, eyeMat, -0.09, 0.23, -0.185));
  headPivot.add(box(0.045, 0.055, 0.04, eyeMat, 0.09, 0.23, -0.185));
  headPivot.add(box(0.07, 0.035, 0.045, material(shade(skinColor, -0.12)), 0, 0.13, -0.2));
  const mouth = box(0.1, 0.018, 0.01, material(shade(skinColor, -0.36)), 0, 0.085, -0.182);
  headPivot.add(mouth);

  // hair / class headwear
  const hairColor = config.hair ?? (race === 'beast' ? shade(skinColor, -0.28) : (race === 'angel' ? 0xe4d8ac : 0x35261d));
  const hairMat = material(hairColor);
  if (race !== 'demon' || true) {
    headPivot.add(box(0.42, 0.13, 0.39, hairMat, 0, 0.4, 0));
    headPivot.add(box(0.06, 0.25, 0.12, hairMat, -0.2, 0.23, 0.08));
    headPivot.add(box(0.06, 0.25, 0.12, hairMat, 0.2, 0.23, 0.08));
    if (sex === 'feminine' || classId === 'wizard') {
      headPivot.add(box(0.32, 0.38, 0.11, hairMat, 0, 0.13, 0.18));
    }
  }
  if (classId === 'rogue' && !npc) {
    headPivot.add(box(0.46, 0.27, 0.42, darkMat, 0, 0.33, 0.02));
    headPivot.add(box(0.5, 0.06, 0.44, accentMat, 0, 0.19, 0.03));
  }
  if (classId === 'archer' && !npc) {
    headPivot.add(cone(0.33, 0.3, 5, darkMat, 0, 0.5, 0.02));
    headPivot.add(box(0.5, 0.045, 0.48, leatherMat, 0, 0.34, 0.01));
  }
  if (classId === 'wizard' && !npc) {
    headPivot.add(cone(0.37, 0.7, 5, clothMat, 0, 0.64, 0.01));
    headPivot.add(box(0.48, 0.055, 0.44, goldMat, 0, 0.33, 0));
    headPivot.add(box(0.42, 0.08, 0.4, darkMat, 0, 0.19, 0.01));
  }
  if (classId === 'priest' && !npc) {
    headPivot.add(box(0.36, 0.03, 0.36, goldMat, 0, 0.37, -0.01));
    headPivot.add(cone(0.04, 0.14, 4, goldMat, 0, 0.46, -0.03));
  }

  // race features
  const extras = {};
  if (race === 'angel') {
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.022, 5, 20), goldMat.clone());
    halo.material.emissive = new THREE.Color(0xe8b75f);
    halo.material.emissiveIntensity = 1.3;
    halo.rotation.x = Math.PI / 2;
    halo.position.y = 2.15;
    body.add(halo);
    const wingMat = material(0xeee8d6, { emissive: 0x5d4e2a, emissiveIntensity: 0.16, side: THREE.DoubleSide });
    const wingRootL = new THREE.Group(); wingRootL.position.set(-0.25, 1.43, 0.19); body.add(wingRootL);
    const wingRootR = new THREE.Group(); wingRootR.position.set(0.25, 1.43, 0.19); body.add(wingRootR);
    for (const [side, rootWing] of [[-1, wingRootL], [1, wingRootR]]) {
      for (let i = 0; i < 3; i++) {
        const feather = box(0.16, 0.52 + i * 0.14, 0.045, wingMat, side * (0.1 + i * 0.09), 0.14 + i * 0.06, 0.03 + i * 0.045);
        feather.rotation.z = side * (-0.30 - i * 0.11);
        feather.rotation.x = -0.16;
        rootWing.add(feather);
      }
    }
    extras.wings = [wingRootL, wingRootR];
    extras.halo = halo;
  }
  if (race === 'demon') {
    const hornMat = material(0x2d2021, { roughness: 0.6 });
    const hornL = cone(0.075, 0.32, 4, hornMat, -0.15, 0.48, 0.02); hornL.rotation.z = 0.36; headPivot.add(hornL);
    const hornR = cone(0.075, 0.32, 4, hornMat, 0.15, 0.48, 0.02); hornR.rotation.z = -0.36; headPivot.add(hornR);
    const wingMat = material(0x5c2630, { side: THREE.DoubleSide, emissive: 0x26060b, emissiveIntensity: 0.2 });
    const wingL = new THREE.Group(); wingL.position.set(-0.3, 1.4, 0.18); body.add(wingL);
    const wingR = new THREE.Group(); wingR.position.set(0.3, 1.4, 0.18); body.add(wingR);
    for (const [side, w] of [[-1, wingL], [1, wingR]]) {
      const wing = new THREE.Mesh(new THREE.ConeGeometry(0.38, 0.7, 4, 1, true), wingMat);
      wing.position.set(side * 0.18, 0.15, 0.02); wing.rotation.z = side * -0.85; wing.rotation.x = -0.4; wing.scale.z = 0.25; w.add(wing);
    }
    extras.wings = [wingL, wingR];
    const tailRoot = new THREE.Group(); tailRoot.position.set(0, 0.97, 0.18); body.add(tailRoot);
    for (let i = 0; i < 4; i++) {
      const seg = cylinder(0.035 - i * 0.006, 0.045 - i * 0.006, 0.27, 4, material(0x55252a), 0, 0.05, i * 0.22);
      seg.rotation.x = -0.15 - i * 0.05;
      tailRoot.add(seg);
    }
    tailRoot.add(cone(0.07, 0.18, 4, material(0x742f37), 0, 0.14, 0.85));
    extras.tail = tailRoot;
  }
  if (race === 'beast') {
    const furColor = config.fur ?? (beastType === 'cat' ? 0x7b6145 : 0x594638);
    const furMat = material(furColor);
    if (beastType === 'cat') {
      const earL = cone(0.11, 0.27, 3, furMat, -0.14, 0.52, 0); earL.rotation.z = 0.2; headPivot.add(earL);
      const earR = cone(0.11, 0.27, 3, furMat, 0.14, 0.52, 0); earR.rotation.z = -0.2; headPivot.add(earR);
      headPivot.add(box(0.13, 0.07, 0.08, material(shade(furColor, -0.35)), -0.09, 0.5, -0.02));
      headPivot.add(box(0.13, 0.07, 0.08, material(shade(furColor, -0.35)), 0.09, 0.5, -0.02));
      headPivot.add(box(0.16, 0.11, 0.08, furMat, 0, 0.13, -0.22));
      const tail = new THREE.Group(); tail.position.set(0, 0.94, 0.18); body.add(tail);
      let last = tail;
      for (let i = 0; i < 4; i++) {
        const seg = cylinder(0.04 - i * 0.005, 0.05 - i * 0.004, 0.32, 4, furMat, 0, 0.06, i * 0.26);
        seg.rotation.x = -0.55; last.add(seg); last = seg;
      }
      extras.tail = tail;
    } else {
      const earL = cone(0.12, 0.2, 3, furMat, -0.17, 0.48, 0.01); earL.rotation.z = 0.65; headPivot.add(earL);
      const earR = cone(0.12, 0.2, 3, furMat, 0.17, 0.48, 0.01); earR.rotation.z = -0.65; headPivot.add(earR);
      headPivot.add(box(0.19, 0.13, 0.1, furMat, 0, 0.12, -0.23));
      headPivot.add(box(0.055, 0.045, 0.035, material(0x1b1411), 0, 0.15, -0.285));
      const tail = new THREE.Group(); tail.position.set(0, 1.0, 0.18); body.add(tail);
      const seg = cylinder(0.05, 0.085, 0.55, 4, furMat, 0, -0.2, 0.2); seg.rotation.x = -0.55; tail.add(seg);
      extras.tail = tail;
    }
  }

  // arms + legs
  const armGeoMat = clothMat;
  const armL = new THREE.Group(); armL.position.set(-shoulder / 2 - 0.06, 1.51, 0); body.add(armL);
  armL.add(box(0.16, 0.52, 0.16, armGeoMat, 0, -0.25, 0));
  armL.add(box(0.17, 0.12, 0.17, skinMat, 0, -0.53, 0));
  const armR = new THREE.Group(); armR.position.set(shoulder / 2 + 0.06, 1.51, 0); body.add(armR);
  armR.add(box(0.16, 0.52, 0.16, armGeoMat, 0, -0.25, 0));
  armR.add(box(0.17, 0.12, 0.17, skinMat, 0, -0.53, 0));

  const legL = new THREE.Group(); legL.position.set(-0.15, 0.96, 0); body.add(legL);
  legL.add(box(0.19, 0.58, 0.21, darkMat, 0, -0.29, 0));
  legL.add(box(0.22, 0.15, 0.28, leatherMat, 0, -0.61, -0.04));
  const legR = new THREE.Group(); legR.position.set(0.15, 0.96, 0); body.add(legR);
  legR.add(box(0.19, 0.58, 0.21, darkMat, 0, -0.29, 0));
  legR.add(box(0.22, 0.15, 0.28, leatherMat, 0, -0.61, -0.04));

  // class silhouette
  if (classId === 'warrior' && !npc) {
    body.add(box(0.27, 0.15, 0.42, metalMat, -shoulder / 2 - 0.05, 1.57, 0));
    body.add(box(0.27, 0.15, 0.42, metalMat, shoulder / 2 + 0.05, 1.57, 0));
    body.add(box(0.29, 0.06, 0.12, accentMat, -0.18, 1.58, -0.2));
    body.add(box(0.29, 0.06, 0.12, accentMat, 0.18, 1.58, -0.2));
    body.add(box(0.21, 0.36, 0.06, darkMat, 0, 0.76, 0.16));
  }
  if (classId === 'rogue' && !npc) {
    body.add(box(0.34, 0.42, 0.06, darkMat, 0, 1.22, -0.18));
    body.add(box(0.22, 0.4, 0.12, accentMat, 0.25, 1.16, 0.12));
    body.add(box(0.22, 0.06, 0.12, goldMat, 0.25, 1.34, 0.12));
  }
  if (classId === 'archer' && !npc) {
    body.add(box(0.16, 0.52, 0.13, leatherMat, -0.28, 1.44, 0.09));
    body.add(box(0.16, 0.52, 0.13, leatherMat, 0.28, 1.44, 0.09));
    const quiver = cylinder(0.1, 0.12, 0.5, 6, leatherMat, 0.34, 1.35, 0.16);
    quiver.rotation.z = 0.2; body.add(quiver);
    for (let i = 0; i < 3; i++) body.add(box(0.025, 0.3, 0.025, material(0xd9c699), 0.3 + i * 0.035, 1.67, 0.17));
  }
  if (classId === 'wizard' && !npc) {
    body.add(cone(0.42, 0.64, 7, clothMat, 0, 0.82, 0));
    body.add(box(0.45, 0.06, 0.32, goldMat, 0, 1.04, 0));
    body.add(box(0.14, 0.34, 0.28, accentMat, -0.29, 1.37, 0));
  }
  if (classId === 'priest' && !npc) {
    body.add(cone(0.42, 0.76, 7, material(0xd8cfb1), 0, 0.8, 0));
    body.add(box(0.48, 0.12, 0.34, goldMat, 0, 1.39, 0));
    body.add(box(0.28, 0.28, 0.05, material(0xf3e6bf), 0, 1.42, 0.18));
  }

  // weapon mount
  const weaponMount = new THREE.Group();
  weaponMount.position.set(0, -0.55, 0);
  armR.add(weaponMount);
  const weapon = createWeaponModel(classId, config.weapon, accent, elementColor(cls.element));
  weaponMount.add(weapon);

  // extra hand weapon for rogue
  if (classId === 'rogue' && !npc) {
    const offhand = createWeaponModel('rogue_off', null, accent, elementColor(cls.element));
    offhand.position.set(0, -0.55, 0);
    armL.add(offhand);
  }

  root.userData.rig = {
    body, headPivot, armL, armR, legL, legR, weaponMount, weapon,
    wings: extras.wings || [], halo: extras.halo || null, tail: extras.tail || null,
    moving: 0, attack: 0, cast: 0, dead: false
  };
  root.userData.kind = 'character';
  root.userData.height = 1.95;
  root.userData.classId = classId;
  root.userData.race = race;
  root.userData.sex = sex;
  root.userData.mainCloth = mainCloth;
  root.userData.accent = accent;

  // NPC profession prop
  if (npc && role === 'npc') {
    if (palette && config.vendor === 'weapon') {
      const hammer = new THREE.Group();
      hammer.add(box(0.05, 0.75, 0.05, leatherMat, 0, 0, 0));
      hammer.add(box(0.28, 0.16, 0.16, metalMat, 0, 0.4, 0));
      hammer.position.set(-0.43, 1.02, 0.05);
      hammer.rotation.z = -0.12;
      root.add(hammer);
    } else if (config.vendor === 'item') {
      const staff = cylinder(0.018, 0.025, 1.55, 5, leatherMat, -0.45, 1.0, 0.02);
      staff.rotation.z = -0.06; root.add(staff);
      root.add(sphere(0.1, material(0x71d7c4, { emissive: 0x226d65, emissiveIntensity: 1.1 }), -0.45, 1.8, 0.02));
    } else if (config.questId) {
      const staff = cylinder(0.018, 0.025, 1.5, 5, leatherMat, -0.45, 1.04, 0.02);
      staff.rotation.z = -0.05; root.add(staff);
      const gem = sphere(0.1, material(0xe9b85f, { emissive: 0xb66e18, emissiveIntensity: 1.1 }), -0.46, 1.81, 0.02);
      root.add(gem);
    }
  }

  return root;
}

export function createWeaponModel(classId, item, accent = 0xd5a44c, element = 0xe7dcc2) {
  const group = new THREE.Group();
  const metal = material(0xb4bbb4, { metalness: 0.72, roughness: 0.33 });
  const darkMetal = material(0x5c625f, { metalness: 0.65, roughness: 0.45 });
  const wood = material(0x4d3424);
  const gold = material(0xd5a44c, { metalness: 0.65, roughness: 0.35 });
  const glow = material(element, { emissive: element, emissiveIntensity: 1.1, roughness: 0.2 });
  const resolvedElement = item ? item.element : null;
  const bladeColor = resolvedElement && resolvedElement !== 'physical' ? elementColor(resolvedElement) : 0xc8cdc7;
  const bladeMat = material(bladeColor, { metalness: 0.55, roughness: 0.3, emissive: resolvedElement && resolvedElement !== 'physical' ? bladeColor : 0x000000, emissiveIntensity: resolvedElement && resolvedElement !== 'physical' ? 0.25 : 0 });

  if (classId === 'warrior') {
    group.add(box(0.055, 0.68, 0.035, bladeMat, 0, 0.3, 0));
    group.add(box(0.18, 0.045, 0.06, gold, 0, -0.04, 0));
    group.add(box(0.05, 0.25, 0.055, wood, 0, -0.17, 0));
    group.add(box(0.07, 0.06, 0.07, gold, 0, -0.31, 0));
    group.rotation.z = -0.28;
  } else if (classId === 'rogue' || classId === 'rogue_off') {
    group.add(box(0.04, 0.48, 0.025, bladeMat, 0, 0.2, 0));
    group.add(box(0.13, 0.035, 0.045, darkMetal, 0, -0.04, 0));
    group.add(box(0.045, 0.2, 0.045, wood, 0, -0.15, 0));
    group.rotation.z = classId === 'rogue_off' ? 0.35 : -0.35;
  } else if (classId === 'archer') {
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.025, 4, 14, Math.PI * 1.25), wood);
    bow.rotation.z = Math.PI * 0.38;
    bow.position.set(0, 0.1, 0);
    bow.castShadow = true;
    group.add(bow);
    const stringMat = new THREE.LineBasicMaterial({ color: 0xd5cbb0, transparent: true, opacity: 0.7 });
    const points = [new THREE.Vector3(-0.22, 0.5, 0), new THREE.Vector3(0.16, 0.1, 0), new THREE.Vector3(-0.22, -0.3, 0)];
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), stringMat));
    group.rotation.z = 0.32;
  } else if (classId === 'wizard') {
    group.add(cylinder(0.022, 0.032, 1.35, 5, wood, 0, 0.2, 0));
    group.add(box(0.08, 0.08, 0.08, gold, 0, 0.88, 0));
    const orb = sphere(0.11, glow, 0, 0.99, 0, 8, 5);
    group.add(orb);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.012, 4, 12), glow);
    ring.rotation.x = Math.PI / 2; ring.position.y = 0.99; group.add(ring);
    group.rotation.z = -0.12;
  } else if (classId === 'priest') {
    group.add(cylinder(0.026, 0.035, 0.9, 5, wood, 0, 0.1, 0));
    group.add(sphere(0.14, gold, 0, 0.58, 0, 7, 5));
    for (let i = 0; i < 4; i++) {
      const spike = cone(0.045, 0.18, 4, gold, 0, 0.67, 0);
      spike.rotation.z = (Math.PI / 2) * (i % 2 ? 1 : -1);
      spike.rotation.x = i > 1 ? Math.PI / 2 : 0;
      spike.position.x = i === 0 ? 0.15 : i === 1 ? -0.15 : 0;
      spike.position.z = i === 2 ? 0.15 : i === 3 ? -0.15 : 0;
      spike.position.y = 0.58;
      group.add(spike);
    }
    const holyGlow = sphere(0.05, material(0xf4dc9c, { emissive: 0xf4dc9c, emissiveIntensity: 1.7 }), 0, 0.76, 0);
    group.add(holyGlow);
    group.rotation.z = -0.14;
  }
  return group;
}

export function updateWeapon(character, classId, item) {
  const rig = character.userData.rig;
  if (!rig?.weaponMount) return;
  const old = rig.weapon;
  if (old) {
    rig.weaponMount.remove(old);
  }
  const accent = character.userData.accent || 0xd5a44c;
  const newWeapon = createWeaponModel(classId, item, accent, elementColor(item?.element || 'physical'));
  rig.weaponMount.add(newWeapon);
  rig.weapon = newWeapon;
}

export function animateHumanoid(character, time, speed = 0, attack = 0, dead = false) {
  const rig = character.userData?.rig;
  if (!rig || !rig.body || !rig.armR || !rig.legL) return;
  const moving = Math.min(1, speed / 4.5);
  const swing = Math.sin(time * (8 + moving * 4)) * (0.22 + moving * 0.55);
  rig.legL.rotation.x = swing * moving;
  rig.legR.rotation.x = -swing * moving;
  rig.armL.rotation.x = -swing * 0.75 * moving;
  rig.armR.rotation.x = swing * 0.75 * moving;
  rig.body.position.y = Math.abs(Math.sin(time * (8 + moving * 4))) * 0.035 * moving + Math.sin(time * 2.2) * 0.008;

  if (attack > 0) {
    const p = 1 - attack;
    const swingAmount = Math.sin(Math.min(1, p * 1.4) * Math.PI);
    rig.armR.rotation.x = -1.3 * swingAmount;
    rig.armR.rotation.z = -0.8 * swingAmount;
    rig.body.rotation.y = -0.26 * swingAmount;
  } else {
    rig.armR.rotation.z *= 0.86;
    rig.body.rotation.y *= 0.85;
  }
  rig.headPivot.rotation.x = Math.sin(time * 1.1) * 0.025;
  if (rig.halo) {
    rig.halo.rotation.z = time * 0.45;
    rig.halo.position.y = 2.15 + Math.sin(time * 2) * 0.03;
  }
  if (rig.wings.length) {
    const flap = Math.sin(time * 2.4) * 0.05 + 0.08;
    rig.wings[0].rotation.z = -flap;
    rig.wings[1].rotation.z = flap;
    rig.wings[0].rotation.y = 0.1 + Math.sin(time * 1.3) * 0.05;
    rig.wings[1].rotation.y = -0.1 - Math.sin(time * 1.3) * 0.05;
  }
  if (rig.tail) {
    rig.tail.rotation.y = Math.sin(time * 2.5) * 0.25;
    rig.tail.rotation.x = Math.sin(time * 1.7) * 0.06;
  }
  if (dead) {
    rig.body.rotation.z = Math.min(Math.PI * 0.48, rig.body.rotation.z + 0.04);
    rig.body.position.y = 0.1;
  }
}

function makeEyes(parent, color, x, y, z, size = 0.06) {
  const mat = material(color, { emissive: color, emissiveIntensity: 1.2 });
  parent.add(box(size, size * 0.75, 0.03, mat, -x, y, z));
  parent.add(box(size, size * 0.75, 0.03, mat, x, y, z));
}

export function createEnemyModel(type, element = 'physical', isBoss = false, bossDef = null) {
  const def = type;
  const root = new THREE.Group();
  const rig = { parts: [], legs: [], wings: [], idle: Math.random() * 10, attack: 0 };
  const ec = elementColor(element);
  const dark = mixColor(ec, 0x13191b, 0.66);
  const mid = mixColor(ec, 0x3b4342, 0.4);
  const bright = mixColor(ec, 0xffffff, 0.28);
  const scale = (def.scale || 1) * (isBoss ? 1 : 1);
  const model = def.model;

  const bodyMat = material(mid);
  const darkMat = material(dark);
  const glowMat = material(bright, { emissive: ec, emissiveIntensity: 0.9 });
  const boneMat = material(0xcac2a6);
  const boneDark = material(0x5a574d);

  if (model === 'wolf') {
    const body = sphere(0.5, bodyMat, 0, 0.67, 0, 8, 6);
    body.scale.set(0.8, 0.7, 1.3);
    root.add(body);
    const shoulder = sphere(0.36, bodyMat, 0, 0.71, -0.45, 7, 5); shoulder.scale.set(0.95, 1, 0.9); root.add(shoulder);
    const head = new THREE.Group(); head.position.set(0, 0.78, -0.82); root.add(head); rig.head = head;
    const skull = sphere(0.28, bodyMat, 0, 0, 0, 7, 5); skull.scale.set(0.85, 0.82, 1.1); head.add(skull);
    const snout = box(0.2, 0.17, 0.32, darkMat, 0, -0.09, -0.25); head.add(snout);
    head.add(box(0.08, 0.08, 0.06, material(0x171312), 0, -0.06, -0.43));
    makeEyes(head, ec, 0.13, 0.09, -0.23, 0.07);
    for (const [sx, sz] of [[-1, -0.16], [1, -0.16], [-1, 0.08], [1, 0.08]]) {
      const ear = cone(0.1, 0.3, 4, darkMat, sx * 0.17, 0.27, sz);
      ear.rotation.z = sx * 0.18; head.add(ear);
    }
    const tail = new THREE.Group(); tail.position.set(0, 0.84, 0.55); root.add(tail);
    const t = cylinder(0.04, 0.14, 0.55, 4, bodyMat, 0, 0.12, 0.2); t.rotation.x = -0.8; tail.add(t); rig.tail = tail;
    for (let i = 0; i < 4; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const front = i < 2 ? -0.4 : 0.4;
      const leg = new THREE.Group(); leg.position.set(side * 0.34, 0.56, front); root.add(leg);
      const upper = box(0.16, 0.38, 0.16, darkMat, 0, -0.17, 0); leg.add(upper);
      leg.add(box(0.2, 0.13, 0.26, bodyMat, 0, -0.4, -0.03));
      rig.legs.push(leg);
    }
    if (element === 'fire' || isBoss) {
      for (let i = 0; i < 5; i++) {
        const spike = cone(0.07, 0.3, 4, glowMat, 0, 1.05, -0.55 + i * 0.28);
        spike.rotation.x = -0.25; root.add(spike);
      }
    }
  } else if (model === 'slime') {
    const body = sphere(0.62, material(mixColor(ec, 0x22303a, 0.45), { transparent: true, opacity: 0.9 }), 0, 0.56, 0, 9, 7);
    body.scale.set(1, 0.82, 1); root.add(body); rig.body = body;
    const shine = sphere(0.14, material(bright, { emissive: ec, emissiveIntensity: 0.5, transparent: true, opacity: 0.65 }), -0.19, 0.77, -0.28, 6, 4); root.add(shine);
    makeEyes(root, 0x161b1b, 0.18, 0.64, -0.52, 0.07);
    root.add(box(0.13, 0.035, 0.02, material(0x1a2424), 0, 0.48, -0.6));
    for (let i = 0; i < 3; i++) root.add(sphere(0.09 + i * 0.025, bodyMat, 0.2 - i * 0.2, 0.05, 0.34, 5, 3));
  } else if (model === 'skeleton') {
    const pelvis = box(0.36, 0.15, 0.2, boneMat, 0, 0.94, 0); root.add(pelvis);
    const spine = cylinder(0.045, 0.06, 0.6, 4, boneMat, 0, 1.25, 0); root.add(spine);
    for (let i = 0; i < 3; i++) {
      const rib = new THREE.Mesh(new THREE.TorusGeometry(0.21 - i * 0.02, 0.025, 3, 8, Math.PI), boneMat);
      rib.rotation.z = Math.PI; rib.position.y = 1.12 + i * 0.13; root.add(rib);
    }
    const skull = sphere(0.24, boneMat, 0, 1.73, 0, 7, 5); skull.scale.y = 1.1; root.add(skull);
    root.add(box(0.18, 0.12, 0.15, boneDark, 0, 1.59, -0.04));
    makeEyes(root, ec, 0.09, 1.76, -0.2, 0.065);
    for (const side of [-1, 1]) {
      const arm = new THREE.Group(); arm.position.set(side * 0.25, 1.5, 0); root.add(arm);
      arm.add(cylinder(0.035, 0.045, 0.5, 4, boneMat, 0, -0.24, 0));
      arm.add(box(0.1, 0.1, 0.1, boneDark, 0, -0.52, 0));
      rig.parts.push(arm);
    }
    rig.parts[1].add(createWeaponModel('warrior', null, 0x9d9c88, ec));
    for (const side of [-1, 1]) {
      const leg = new THREE.Group(); leg.position.set(side * 0.14, 0.9, 0); root.add(leg);
      leg.add(cylinder(0.04, 0.05, 0.74, 4, boneMat, 0, -0.38, 0));
      leg.add(box(0.16, 0.09, 0.3, boneDark, 0, -0.77, -0.06));
      rig.legs.push(leg);
    }
    // tattered waistcloth
    root.add(box(0.4, 0.4, 0.05, material(0x3d3c38, { transparent: true, opacity: 0.75 }), 0, 0.79, 0.08));
  } else if (model === 'treant') {
    const trunk = cylinder(0.46, 0.68, 1.7, 7, material(0x4a3927), 0, 1.0, 0);
    root.add(trunk);
    const chest = box(0.95, 0.9, 0.65, material(0x54412d), 0, 1.55, 0); root.add(chest);
    const head = box(0.72, 0.65, 0.6, material(0x493726), 0, 2.2, 0); root.add(head); rig.head = head;
    makeEyes(head, ec, 0.16, 0.08, -0.31, 0.09);
    // crown canopy
    const leafMat = material(mixColor(0x3b6b3f, ec, 0.18));
    for (let i = 0; i < 5; i++) {
      const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(0.46 + (i % 2) * 0.15, 0), leafMat);
      leaf.position.set((i - 2) * 0.28, 2.74 + (i % 3) * 0.12, (i % 2) * 0.18 - 0.1);
      leaf.castShadow = true; root.add(leaf); rig.parts.push(leaf);
    }
    for (const side of [-1, 1]) {
      const arm = new THREE.Group(); arm.position.set(side * 0.62, 1.85, 0); root.add(arm);
      arm.add(cylinder(0.12, 0.17, 0.95, 5, material(0x4a3927), side * 0.25, -0.4, 0));
      arm.add(cylinder(0.04, 0.1, 1.1, 4, material(0x3f2e1e), side * 0.55, -0.9, 0));
      arm.rotation.z = side * 0.5;
      rig.parts.push(arm); rig.legs.push(arm);
    }
    for (const side of [-1, 1]) {
      const rootLeg = cylinder(0.2, 0.3, 0.8, 5, material(0x3f2e22), side * 0.35, 0.4, 0);
      root.add(rootLeg);
    }
    root.add(box(0.8, 0.18, 0.8, material(0x2e241b), 0, 0.07, 0));
    if (isBoss) {
      const crown = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.055, 4, 8), material(0x9a8145, { metalness: 0.5 }));
      crown.position.y = 2.6; crown.rotation.x = Math.PI / 2; root.add(crown);
    }
  } else if (model === 'wisp') {
    const orb = sphere(0.36, material(ec, { emissive: ec, emissiveIntensity: 1.8, transparent: true, opacity: 0.92 }), 0, 1.2, 0, 8, 6);
    root.add(orb); rig.body = orb;
    const aura = sphere(0.55, material(ec, { emissive: ec, emissiveIntensity: 0.8, transparent: true, opacity: 0.16 }), 0, 1.2, 0, 8, 5);
    root.add(aura); rig.aura = aura;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.018, 4, 16), material(bright, { emissive: ec, emissiveIntensity: 1.5 }));
    ring.position.y = 1.2; ring.rotation.x = 0.2; root.add(ring); rig.ring = ring;
    makeEyes(root, 0x142224, 0.1, 1.26, -0.31, 0.06);
    for (let i = 0; i < 5; i++) {
      const p = sphere(0.04 + Math.random() * 0.04, glowMat, (Math.random() - 0.5) * 0.8, 0.7 + Math.random() * 0.8, (Math.random() - 0.5) * 0.5, 4, 3);
      root.add(p); rig.parts.push(p);
    }
  } else if (model === 'crab') {
    const body = sphere(0.6, material(mixColor(ec, 0x8f3e31, 0.35)), 0, 0.62, 0, 8, 5);
    body.scale.set(1.3, 0.62, 0.95); root.add(body);
    for (let i = 0; i < 3; i++) {
      for (const side of [-1, 1]) {
        const leg = new THREE.Group(); leg.position.set(side * 0.55, 0.58, -0.22 + i * 0.23); root.add(leg);
        const s = box(0.55, 0.08, 0.08, material(shade(ec, -0.2)), side * 0.27, 0, 0);
        s.rotation.z = side * -0.6; leg.add(s);
        rig.legs.push(leg);
      }
    }
    for (const side of [-1, 1]) {
      const clawArm = new THREE.Group(); clawArm.position.set(side * 0.55, 0.7, -0.5); root.add(clawArm);
      const arm = box(0.4, 0.13, 0.13, material(mixColor(ec, 0x7d332b, 0.4)), side * 0.2, 0, 0); clawArm.add(arm);
      const claw = box(0.26, 0.3, 0.18, material(mixColor(ec, 0x9d4a39, 0.34)), side * 0.4, -0.06, 0); clawArm.add(claw);
      rig.parts.push(clawArm);
    }
    for (const side of [-1, 1]) {
      const eyeStalk = cylinder(0.03, 0.035, 0.34, 4, darkMat, side * 0.17, 0.95, -0.32); root.add(eyeStalk);
      root.add(sphere(0.075, glowMat, side * 0.17, 1.14, -0.32, 6, 4));
    }
  } else if (model === 'golem') {
    const torso = box(1.05, 0.85, 0.7, material(mixColor(0x5d5f5b, ec, 0.18)), 0, 1.45, 0); root.add(torso);
    const head = box(0.55, 0.5, 0.55, material(0x656761), 0, 2.02, -0.05); root.add(head); rig.head = head;
    makeEyes(head, ec, 0.12, 0.04, -0.29, 0.08);
    for (let i = 0; i < 4; i++) {
      const rune = box(0.06, 0.18, 0.04, glowMat, -0.24 + i * 0.16, 1.55, -0.37); root.add(rune);
    }
    for (const side of [-1, 1]) {
      const arm = new THREE.Group(); arm.position.set(side * 0.72, 1.72, 0); root.add(arm);
      arm.add(box(0.3, 0.95, 0.36, material(0x555650), side * 0.14, -0.43, 0));
      arm.add(sphere(0.27, material(0x6c6b63), side * 0.14, -0.94, 0, 6, 4));
      rig.parts.push(arm); rig.legs.push(arm);
    }
    for (const side of [-1, 1]) {
      const leg = new THREE.Group(); leg.position.set(side * 0.28, 1.05, 0); root.add(leg);
      leg.add(box(0.32, 0.8, 0.4, material(0x51524c), 0, -0.38, 0));
      leg.add(box(0.4, 0.16, 0.55, material(0x454640), 0, -0.79, -0.06));
      rig.legs.push(leg);
    }
    if (isBoss) {
      for (let i = 0; i < 5; i++) {
        const crystal = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.55, 5), glowMat);
        crystal.position.set((i - 2) * 0.18, 2.38, (i % 2) * 0.2 - 0.05);
        crystal.rotation.z = (i - 2) * 0.12; root.add(crystal);
      }
    }
  } else if (model === 'imp') {
    const body = sphere(0.36, material(mixColor(0x7c332d, ec, 0.28)), 0, 1.04, 0, 7, 5);
    body.scale.set(0.9, 1.1, 0.8); root.add(body);
    const head = sphere(0.28, material(mixColor(0x8d3b31, ec, 0.22)), 0, 1.53, -0.02, 7, 5); root.add(head); rig.head = head;
    makeEyes(head, 0xffd477, 0.1, 0.04, -0.25, 0.065);
    const hornMat = material(0x2d2322);
    for (const side of [-1, 1]) {
      const horn = cone(0.06, 0.28, 4, hornMat, side * 0.16, 0.29, 0); horn.rotation.z = side * -0.3; head.add(horn);
    }
    for (const side of [-1, 1]) {
      const wing = new THREE.Mesh(new THREE.ConeGeometry(0.38, 0.7, 4, 1, true), material(mixColor(0x5a2623, ec, 0.15), { side: THREE.DoubleSide, transparent: true, opacity: 0.9 }));
      wing.position.set(side * 0.38, 1.3, 0.2); wing.rotation.z = side * -0.9; wing.scale.z = 0.3; root.add(wing); rig.wings.push(wing);
    }
    for (const side of [-1, 1]) {
      const arm = new THREE.Group(); arm.position.set(side * 0.4, 1.22, 0); root.add(arm);
      arm.add(box(0.12, 0.5, 0.12, material(0x8a3d32), 0, -0.25, 0));
      arm.add(box(0.1, 0.1, 0.1, material(0x2b2020), 0, -0.52, 0));
      rig.parts.push(arm);
    }
    for (const side of [-1, 1]) {
      const leg = new THREE.Group(); leg.position.set(side * 0.16, 0.8, 0); root.add(leg);
      leg.add(box(0.15, 0.45, 0.15, material(0x6c302a), 0, -0.22, 0));
      leg.add(box(0.17, 0.1, 0.27, material(0x2b2020), 0, -0.46, -0.05));
      rig.legs.push(leg);
    }
  } else if (model === 'wraith') {
    const robe = new THREE.Mesh(new THREE.ConeGeometry(0.56, 1.75, 7, 1, true), material(mixColor(0x2c2b40, ec, 0.28), { transparent: true, opacity: 0.87, side: THREE.DoubleSide }));
    robe.position.y = 1.0; root.add(robe); rig.body = robe;
    const hood = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.62, 7, 1, true), material(mixColor(0x232232, ec, 0.2), { transparent: true, opacity: 0.94, side: THREE.DoubleSide }));
    hood.position.y = 1.9; root.add(hood); rig.head = hood;
    makeEyes(root, ec, 0.11, 1.88, -0.31, 0.07);
    for (let i = 0; i < 5; i++) {
      const tatter = box(0.1, 0.55, 0.04, material(0x2c2b40, { transparent: true, opacity: 0.55 }), (Math.random() - 0.5) * 0.8, 0.25 + Math.random() * 0.2, 0.15 + Math.random() * 0.2);
      tatter.rotation.z = (Math.random() - 0.5) * 0.4; root.add(tatter); rig.parts.push(tatter);
    }
    for (let i = 0; i < 3; i++) {
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.32, 4), material(ec, { emissive: ec, emissiveIntensity: 1.3, transparent: true, opacity: 0.75 }));
      flame.position.set((i - 1) * 0.25, 1.2 + Math.random() * 0.4, 0.32); root.add(flame); rig.parts.push(flame);
    }
    if (isBoss) {
      for (let i = 0; i < 4; i++) {
        const chain = new THREE.Mesh(new THREE.TorusGeometry(0.65 + i * 0.13, 0.025, 3, 20), material(0x5a4f3a, { metalness: 0.5 }));
        chain.position.y = 1.2 - i * 0.3; chain.rotation.x = Math.PI / 2 + i * 0.2; root.add(chain); rig.parts.push(chain);
      }
    }
  } else if (model === 'cultist') {
    const robe = new THREE.Mesh(new THREE.ConeGeometry(0.48, 1.55, 6), material(mixColor(0x2d2637, ec, 0.22)));
    robe.position.y = 0.9; root.add(robe);
    const hood = sphere(0.27, material(mixColor(0x342b3a, ec, 0.16)), 0, 1.78, 0, 6, 4); root.add(hood); rig.head = hood;
    root.add(box(0.3, 0.28, 0.1, material(0x17141c), 0, 1.76, -0.21));
    makeEyes(root, ec, 0.09, 1.77, -0.26, 0.055);
    const staff = cylinder(0.025, 0.04, 1.7, 5, material(0x403126), -0.52, 1.0, 0); root.add(staff);
    root.add(sphere(0.11, material(ec, { emissive: ec, emissiveIntensity: 1.5 }), -0.52, 1.88, 0, 6, 4));
  } else if (model === 'bat') {
    const body = sphere(0.27, darkMat, 0, 1.2, 0, 6, 4); root.add(body);
    const head = sphere(0.2, bodyMat, 0, 1.45, -0.08, 6, 4); root.add(head); rig.head = head;
    makeEyes(head, ec, 0.07, 0.02, -0.17, 0.055);
    for (const side of [-1, 1]) {
      const ear = cone(0.07, 0.23, 3, darkMat, side * 0.1, 0.2, 0.02); ear.rotation.z = side * 0.3; head.add(ear);
      const wing = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.8, 3, 1, true), material(mixColor(0x3b3040, ec, 0.22), { side: THREE.DoubleSide, transparent: true, opacity: 0.88 }));
      wing.position.set(side * 0.45, 1.22, 0.02); wing.rotation.z = side * Math.PI / 2; wing.scale.z = 0.15; root.add(wing); rig.wings.push(wing);
    }
  } else if (model === 'bandit') {
    const human = createCharacter({ race: 'human', sex: Math.random() > 0.5 ? 'feminine' : 'masculine', classId: 'rogue', role: 'npc', palette: [0x3b3531, 0xa77738, 0xa96e4f] });
    human.scale.setScalar(0.95);
    root.add(human);
    root.userData.rig = { ...human.userData.rig, npcModel: true };
    // bandana
    human.userData.rig.headPivot.add(box(0.46, 0.1, 0.38, material(0x7a3432), 0, 0.15, 0));
    rig.parts.push(human);
  } else {
    const tr = sphere(0.5, bodyMat, 0, 0.8, 0, 7, 5); root.add(tr);
    rig.body = tr;
  }

  root.scale.setScalar(scale * (isBoss ? 1.45 : 1));
  if (isBoss) {
    const aura = new THREE.Mesh(new THREE.RingGeometry(0.8, 1.15, 24), new THREE.MeshBasicMaterial({ color: ec, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false }));
    aura.rotation.x = -Math.PI / 2; aura.position.y = 0.045; root.add(aura); rig.aura = aura;
    const light = new THREE.PointLight(ec, 1.8, 8, 2); light.position.y = 1.6; root.add(light); rig.light = light;
  }
  root.userData.rig = rig;
  root.userData.kind = 'enemy';
  root.userData.height = (def.height || 1.5) * (isBoss ? 1.45 : 1);
  root.userData.model = model;
  root.userData.elementColor = ec;
  root.userData.isBoss = isBoss;
  return root;
}

export function animateEnemy(root, time, moving = 0, attack = 0) {
  const rig = root.userData.rig;
  if (!rig) return;
  const phase = time * 6 + (rig.idle || 0);
  if (rig.legs) {
    rig.legs.forEach((leg, i) => {
      leg.rotation.x = Math.sin(phase + i * 1.7) * 0.6 * moving;
    });
  }
  if (rig.parts) {
    rig.parts.forEach((part, i) => {
      if (part.isMesh && i % 2 === 0) part.rotation.y = Math.sin(time * 1.4 + i) * 0.08;
      if (part.isGroup) part.rotation.x = Math.sin(phase + i) * 0.15 * moving;
    });
  }
  if (rig.body) {
    rig.body.position.y += Math.sin(time * 2 + (rig.idle || 0)) * 0.001;
    if (root.userData.model === 'slime') {
      rig.body.scale.y = 0.82 + Math.sin(time * 3) * 0.06;
      rig.body.scale.x = 1 + Math.cos(time * 3) * 0.035;
    }
    if (root.userData.model === 'wisp' || root.userData.model === 'wraith') {
      rig.body.position.y = (rig.body.userData.baseY ?? rig.body.position.y) + Math.sin(time * 2.2) * 0.06;
    }
  }
  if (rig.wings) {
    rig.wings.forEach((wing, i) => {
      if (wing.rotation && !wing.isMesh) wing.rotation.z += Math.sin(time * 9 + i) * 0.01;
      else if (wing.isMesh) wing.rotation.z = (i % 2 ? -1 : 1) * (0.9 + Math.sin(time * 11) * 0.15);
    });
  }
  if (rig.ring) rig.ring.rotation.z = time * 0.8;
  if (rig.aura) {
    rig.aura.rotation.z = time * 0.35;
    if (rig.aura.material) rig.aura.material.opacity = 0.18 + Math.sin(time * 3) * 0.08;
  }
  if (rig.tail) rig.tail.rotation.y = Math.sin(time * 4) * 0.35;
  if (attack > 0) {
    const lunge = Math.sin((1 - attack) * Math.PI);
    root.children.forEach(child => {
      if (child.userData.baseZ === undefined) child.userData.baseZ = child.position.z;
      child.position.z = child.userData.baseZ - lunge * 0.22;
    });
  }
}

export function createChestModel(locked = false, color = 0xe9b85f) {
  const root = new THREE.Group();
  const wood = material(0x624126);
  const trim = material(locked ? 0x7b7467 : 0xd5a44c, { metalness: 0.55, roughness: 0.4 });
  const glowColor = locked ? 0x8b8f87 : color;
  const bandMat = material(glowColor, { emissive: glowColor, emissiveIntensity: locked ? 0.05 : 0.5 });
  const base = box(0.9, 0.5, 0.62, wood, 0, 0.28, 0); root.add(base);
  root.add(box(0.94, 0.08, 0.66, trim, 0, 0.05, 0));
  root.add(box(0.1, 0.52, 0.66, trim, -0.3, 0.29, 0));
  root.add(box(0.1, 0.52, 0.66, trim, 0.3, 0.29, 0));
  root.add(box(0.1, 0.52, 0.66, trim, 0, 0.29, 0));
  const lidPivot = new THREE.Group(); lidPivot.position.set(0, 0.53, 0.31); root.add(lidPivot);
  const lid = box(0.92, 0.18, 0.64, wood, 0, 0.09, -0.31); lidPivot.add(lid);
  lidPivot.add(box(0.96, 0.06, 0.66, trim, 0, 0.17, -0.31));
  lidPivot.add(box(0.18, 0.16, 0.06, bandMat, 0, 0.03, -0.645));
  const lock = box(0.17, 0.2, 0.08, bandMat, 0, 0.45, -0.32); root.add(lock);
  if (locked) {
    const chains = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.025, 4, 14), material(0x4d4d49, { metalness: 0.8 }));
    chains.rotation.y = Math.PI / 2; chains.position.y = 0.3; root.add(chains);
  }
  root.userData.lid = lidPivot;
  root.userData.lock = lock;
  root.userData.glowColor = glowColor;
  root.userData.kind = 'chest';
  return root;
}

export function createRuneModel(element = 'earth') {
  const root = new THREE.Group();
  const color = elementColor(element);
  const stone = material(0x5d615b);
  const base = cylinder(0.3, 0.42, 0.24, 6, stone, 0, 0.12, 0); root.add(base);
  const pillar = cylinder(0.18, 0.23, 1.15, 5, stone, 0, 0.7, 0); root.add(pillar);
  const glyphMat = material(color, { emissive: color, emissiveIntensity: 1.3 });
  const glyph = box(0.2, 0.36, 0.03, glyphMat, 0, 0.92, -0.21); root.add(glyph);
  root.add(box(0.26, 0.05, 0.03, glyphMat, 0, 1.02, -0.22));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.018, 4, 20), glyphMat);
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.16; root.add(ring);
  const light = new THREE.PointLight(color, 0, 4.5, 2); light.position.y = 0.9; root.add(light);
  root.userData = { kind: 'rune', ring, glyph, light, element, lit: false, baseY: 0 };
  return root;
}

export function setRuneLit(root, lit, activeColor = null) {
  const d = root.userData;
  if (!d) return;
  d.lit = lit;
  const color = activeColor || d.light.color.getHex();
  d.light.intensity = lit ? 2.0 : 0;
  d.ring.scale.setScalar(lit ? 1.35 : 1);
  d.glyph.material.emissiveIntensity = lit ? 2.5 : 0.45;
  if (!lit) d.ring.rotation.z = 0;
}

export function createNpcMarker(type = 'quest') {
  const canvas = document.createElement('canvas');
  canvas.width = 64; canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, 64, 64);
  ctx.font = 'bold 44px "Press Start 2P", monospace';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.lineWidth = 8; ctx.strokeStyle = '#081216';
  const glyph = type === 'complete' ? '?' : type === 'vendor' ? '◈' : '!';
  ctx.strokeText(glyph, 32, 34);
  ctx.fillStyle = type === 'complete' ? '#71d7c4' : type === 'vendor' ? '#c9b887' : '#ffd36e';
  ctx.fillText(glyph, 32, 34);
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false }));
  sprite.scale.set(0.62, 0.62, 1);
  sprite.renderOrder = 20;
  return sprite;
}

const glowTextureCache = new Map();
export function glowTexture(color = '#ffffff') {
  if (glowTextureCache.has(color)) return glowTextureCache.get(color);
  const canvas = document.createElement('canvas');
  canvas.width = 64; canvas.height = 64;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 31);
  g.addColorStop(0, color);
  g.addColorStop(0.22, color);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(canvas);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.NearestFilter;
  glowTextureCache.set(color, tex);
  return tex;
}

export function createGlowSprite(color = '#ffffff', size = 1) {
  const mat = new THREE.SpriteMaterial({ map: glowTexture(color), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.85 });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(size, size, 1);
  return sprite;
}

export function createProjectileMesh(kind, element = 'physical') {
  const color = elementColor(element);
  if (kind === 'arrow') {
    const group = new THREE.Group();
    const shaft = cylinder(0.012, 0.012, 0.7, 4, material(0x9e8358), 0, 0, 0);
    shaft.rotation.x = Math.PI / 2; group.add(shaft);
    const tip = cone(0.06, 0.16, 4, material(color, { emissive: color, emissiveIntensity: 0.8 }), 0, 0, -0.42);
    tip.rotation.x = -Math.PI / 2; group.add(tip);
    group.add(box(0.1, 0.02, 0.2, material(0xd8d0b5), 0, 0, 0.34));
    return group;
  }
  if (kind === 'orb') {
    const group = new THREE.Group();
    group.add(sphere(0.14, material(color, { emissive: color, emissiveIntensity: 2.2, transparent: true, opacity: 0.9 }), 0, 0, 0, 6, 4));
    group.add(createGlowSprite('#' + color.toString(16).padStart(6, '0'), 1.1));
    return group;
  }
  if (kind === 'holy') {
    const group = new THREE.Group();
    group.add(box(0.1, 0.1, 0.55, material(color, { emissive: color, emissiveIntensity: 2.0 }), 0, 0, 0));
    group.add(createGlowSprite('#' + color.toString(16).padStart(6, '0'), 1.2));
    return group;
  }
  return sphere(0.15, material(color, { emissive: color, emissiveIntensity: 1.6 }), 0, 0, 0, 6, 4);
}

export function disposeObject(object) {
  object.traverse(child => {
    if (child.geometry) child.geometry.dispose();
  });
}

export function recolorEnemyHit(root, flash = true) {
  root.traverse(child => {
    if (!child.isMesh || !child.material || !child.material.emissive) return;
    if (!child.userData.originalEmissive) {
      child.userData.originalEmissive = child.material.emissive.clone();
      child.userData.originalIntensity = child.material.emissiveIntensity || 0;
    }
    if (flash) {
      child.material.emissive.setHex(0xffffff);
      child.material.emissiveIntensity = 1.2;
    } else {
      child.material.emissive.copy(child.userData.originalEmissive);
      child.material.emissiveIntensity = child.userData.originalIntensity;
    }
  });
}

export function updateEnemyMaterialTint(root, element) {
  // intentionally lightweight: models are generated with their element palette
  if (!root.userData.elementColor) root.userData.elementColor = elementColor(element);
}
