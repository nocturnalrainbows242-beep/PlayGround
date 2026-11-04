/* ═══════════════════════════════════════════════════════════════
   AETHERFALL — world data, classes, quests, creatures and loot
   ═══════════════════════════════════════════════════════════════ */

export const WORLD_SIZE = 272;
export const WORLD_LIMIT = WORLD_SIZE / 2 - 5;
export const WATER_LEVEL = -1.65;

export const ELEMENTS = {
  physical:  { name: 'Physical',  css: '#e7dcc2', color: 0xe7dcc2, icon: '⚔', resist: null },
  fire:      { name: 'Fire',      css: '#f17b4f', color: 0xf17b4f, icon: '🜂', resist: 'fire' },
  ice:       { name: 'Frost',     css: '#83d4e9', color: 0x83d4e9, icon: '❄', resist: 'ice' },
  lightning: { name: 'Storm',     css: '#d3bd6a', color: 0xd3bd6a, icon: 'ϟ', resist: 'lightning' },
  holy:      { name: 'Radiant',   css: '#f4dc9c', color: 0xf4dc9c, icon: '✦', resist: 'holy' },
  shadow:    { name: 'Shadow',    css: '#a38bc9', color: 0xa38bc9, icon: '☾', resist: 'shadow' },
  earth:     { name: 'Earth',     css: '#a8b36a', color: 0xa8b36a, icon: '❖', resist: 'earth' },
  water:     { name: 'Tide',      css: '#6db5cf', color: 0x6db5cf, icon: '≈', resist: 'water' },
  wind:      { name: 'Gale',      css: '#97d0b0', color: 0x97d0b0, icon: '≋', resist: 'wind' },
};

export const BIOMES = {
  meadow: {
    id: 'meadow', name: 'The Verdant Reach', short: 'Verdant Reach', center: [0, 24], radius: 59,
    element: 'wind', levels: [1, 2], ground: 0x789c4b, accent: 0x99b95b, map: '#91b75d',
    desc: 'Sun-washed fields where every road begins.',
    enemies: { slime: 5, wolf: 3, bandit: 2 },
  },
  forest: {
    id: 'forest', name: 'Whisperwood', short: 'Whisperwood', center: [-12, -73], radius: 55,
    element: 'earth', levels: [2, 4], ground: 0x3d6642, accent: 0x2e523a, map: '#46784f',
    desc: 'Conifers older than kingdoms keep their secrets.',
    enemies: { wolf: 5, treant: 2, sprite: 3 },
  },
  volcano: {
    id: 'volcano', name: 'Cinderwake', short: 'Cinderwake', center: [-84, -68], radius: 47,
    element: 'fire', levels: [4, 7], ground: 0x4d3732, accent: 0x6d4135, map: '#b6563b',
    desc: 'The mountain breathes ash and remembers every oath.',
    enemies: { imp: 5, magmahound: 3, golem: 2 },
  },
  beach: {
    id: 'beach', name: 'Sunwreck Coast', short: 'Sunwreck Coast', center: [96, 57], radius: 48,
    element: 'water', levels: [3, 6], ground: 0xd8bf7a, accent: 0xeddaa2, map: '#d8c077',
    desc: 'Salt, shipwrecks, and things that crawl from the tide.',
    enemies: { crab: 5, bandit: 2, tidesprite: 3 },
  },
  lake: {
    id: 'lake', name: 'Mirrormere', short: 'Mirrormere', center: [-72, 51], radius: 31,
    element: 'ice', levels: [3, 6], ground: 0x4f7667, accent: 0x6f9480, map: '#568d91',
    desc: 'A still lake that shows a sky no one else can see.',
    enemies: { bogslime: 4, sprite: 3, tidesprite: 2 },
  },
  graveyard: {
    id: 'graveyard', name: 'The Quiet Orchard', short: 'Quiet Orchard', center: [-51, -16], radius: 29,
    element: 'shadow', levels: [3, 6], ground: 0x596159, accent: 0x6d756a, map: '#718078',
    desc: 'The dead are patient. They have had practice.',
    enemies: { skeleton: 5, wraith: 3, cultist: 2 },
  },
  highlands: {
    id: 'highlands', name: 'Stormcrag Heights', short: 'Stormcrag', center: [80, -65], radius: 44,
    element: 'lightning', levels: [4, 7], ground: 0x6c7167, accent: 0x858a7e, map: '#777d72',
    desc: 'Thunder lives in the stone. So does something older.',
    enemies: { bat: 4, golem: 3, cultist: 2 },
  },
  cave: {
    id: 'cave', name: 'Gloomroot Hollow', short: 'Gloomroot', center: [72, -43], radius: 15,
    element: 'earth', levels: [5, 7], ground: 0x2d3335, accent: 0x4d4c4a, map: '#3b4244',
    desc: 'Roots and crystals twist through a dark older than names.',
    enemies: { bat: 4, golem: 3, cultist: 2 },
  },
  town: {
    id: 'town', name: 'Hearthvale', short: 'Hearthvale', center: [0, 12], radius: 27,
    element: 'holy', levels: [1, 1], ground: 0x9b926a, accent: 0xc5b47a, map: '#d6b96e',
    desc: 'A warm hearth at the edge of everything.',
  },
  city: {
    id: 'city', name: 'Aurelune', short: 'Aurelune', center: [58, 4], radius: 27,
    element: 'holy', levels: [1, 1], ground: 0xa39a76, accent: 0xbcae80, map: '#d7bd7b',
    desc: 'The last city keeps a lantern lit for the dawn.',
  },
};

export const BIOME_KEYS = ['meadow', 'forest', 'volcano', 'beach', 'lake', 'graveyard', 'highlands', 'cave'];

export const RACES = {
  human: {
    id: 'human', name: 'Human', sigil: '⚜', color: '#e9b85f',
    blurb: 'Adaptable · ambitious · stubborn',
    perkName: 'Human Versatility',
    perk: '+12% experience, +10% gold, +2% critical chance.',
    bonuses: { health: 0, power: 0, spirit: 0, speed: 0.1, crit: 0.02, armor: 1, xp: 1.12, gold: 1.10, heal: 1, lifesteal: 0, resist: {} },
  },
  angel: {
    id: 'angel', name: 'Angel', sigil: '✦', color: '#f4dc9c',
    blurb: 'Winged · luminous · merciful',
    perkName: 'Radiant Birth',
    perk: '+18 vitality, +25% healing, radiant resistance. Wings catch the light.',
    bonuses: { health: 18, power: 0, spirit: 8, speed: 0, crit: 0, armor: 0, xp: 1, gold: 1, heal: 1.25, lifesteal: 0, resist: { holy: 0.35, shadow: 0.10 } },
  },
  demon: {
    id: 'demon', name: 'Demon', sigil: '☽', color: '#d17c69',
    blurb: 'Horned · hungering · unbroken',
    perkName: 'Infernal Inheritance',
    perk: '+4 attack, 10% lifesteal on strikes, fire resistance.',
    bonuses: { health: 0, power: 4, spirit: 0, speed: 0, crit: 0, armor: 1, xp: 1, gold: 1, heal: 0.9, lifesteal: 0.10, resist: { fire: 0.32, shadow: 0.12 } },
  },
  beast: {
    id: 'beast', name: 'Beast', sigil: '❖', color: '#a8b36a',
    blurb: 'Wildkin · keen-nosed · loyal',
    perkName: 'Wildheart',
    perk: 'Choose a beast kin. Dog: +30 vitality and speed. Cat: +9% crit and evasion.',
    bonuses: { health: 12, power: 1, spirit: 0, speed: 0.35, crit: 0.03, armor: 0, xp: 1, gold: 1, heal: 1, lifesteal: 0, resist: {} },
  },
};

export const BEASTS = {
  dog: {
    id: 'dog', name: 'Dog', blurb: 'Loyal heart, tireless legs.',
    bonusText: '+18 vitality, +0.7 move speed, +12% stamina recovery.',
    bonuses: { health: 18, power: 2, speed: 0.7, crit: 0, evade: 0, stamina: 0.12, resist: { earth: 0.12 } },
  },
  cat: {
    id: 'cat', name: 'Cat', blurb: 'Nine lives, one perfect strike.',
    bonusText: '+9% critical chance, +8% evasion, +0.35 move speed.',
    bonuses: { health: 0, power: 0, speed: 0.35, crit: 0.09, evade: 0.08, stamina: 0.04, resist: { wind: 0.12 } },
  },
};

export const CLASSES = {
  warrior: {
    id: 'warrior', name: 'Warrior', icon: '⚔', element: 'physical',
    role: 'Vanguard', color: '#e9b85f',
    desc: 'A wall of steel and stubbornness. Cleaves through packs and refuses to fall.',
    weapon: 'Sword',
    health: 155, energy: 55, power: 15, armor: 13, crit: 0.08, speed: 6.05, range: 3.1, attackSpeed: 0.48,
    ability: { name: 'Whirlwind', icon: '⟳', cooldown: 7, cost: 20, desc: 'Spin through nearby foes, striking all of them.' },
    startingWeapon: 'warrior_iron',
  },
  rogue: {
    id: 'rogue', name: 'Rogue', icon: '†', element: 'shadow',
    role: 'Duelist', color: '#a38bc9',
    desc: 'One clean cut is worth a hundred loud ones. Fast, fragile, and hard to catch.',
    weapon: 'Daggers',
    health: 108, energy: 72, power: 17, armor: 6, crit: 0.22, speed: 7.15, range: 2.7, attackSpeed: 0.34,
    ability: { name: 'Shadowstep', icon: '⌁', cooldown: 6, cost: 20, desc: 'Dash through the dark and cut everything you pass.' },
    startingWeapon: 'rogue_iron',
  },
  archer: {
    id: 'archer', name: 'Archer', icon: '➶', element: 'wind',
    role: 'Sharpshot', color: '#9bc568',
    desc: 'The wild is a quiver. Every horizon is a target.',
    weapon: 'Bow',
    health: 112, energy: 74, power: 14, armor: 6, crit: 0.15, speed: 6.85, range: 17, attackSpeed: 0.58,
    ability: { name: 'Rain of Arrows', icon: '⇊', cooldown: 8, cost: 24, desc: 'Call a volley down on the nearest pack.' },
    startingWeapon: 'archer_iron',
  },
  wizard: {
    id: 'wizard', name: 'Wizard', icon: '✧', element: 'fire',
    role: 'Arcanist', color: '#71d7c4',
    desc: 'Reality is a manuscript. The wizard has a red pen.',
    weapon: 'Staff',
    health: 96, energy: 108, power: 20, armor: 4, crit: 0.10, speed: 6.25, range: 15, attackSpeed: 0.68,
    ability: { name: 'Starfall', icon: '☄', cooldown: 9, cost: 30, desc: 'Call a burning star down on a distant pack.' },
    startingWeapon: 'wizard_iron',
  },
  priest: {
    id: 'priest', name: 'Priest', icon: '✟', element: 'holy',
    role: 'Oracle', color: '#f4dc9c',
    desc: 'Mercy is a kind of weapon. So is a well-aimed sunrise.',
    weapon: 'Mace',
    health: 124, energy: 94, power: 13, armor: 9, crit: 0.08, speed: 6.45, range: 12, attackSpeed: 0.62,
    ability: { name: 'Sanctuary', icon: '✺', cooldown: 9, cost: 26, desc: 'Restore health and sear nearby shadows with light.' },
    startingWeapon: 'priest_iron',
  },
};

export const CLASS_KEYS = ['warrior', 'rogue', 'archer', 'wizard', 'priest'];

export const ENEMY_TYPES = {
  slime: {
    id: 'slime', name: 'Meadow Slime', species: 'slime', model: 'slime', elementTint: true,
    hp: 44, damage: 6, speed: 2.7, range: 1.55, aggro: 10, radius: 0.7, height: 1.0,
    xp: 16, gold: 5, scale: 1, attackCooldown: 1.75, windup: 0.5, ranged: false,
  },
  wolf: {
    id: 'wolf', name: 'Frostfang Wolf', species: 'wolf', model: 'wolf', elementTint: true,
    hp: 55, damage: 8, speed: 4.9, range: 1.9, aggro: 14, radius: 0.72, height: 1.1,
    xp: 22, gold: 7, scale: 1, attackCooldown: 1.5, windup: 0.4, ranged: false,
  },
  bandit: {
    id: 'bandit', name: 'Roadside Bandit', species: 'bandit', model: 'bandit', elementTint: false,
    hp: 66, damage: 9, speed: 4.0, range: 2.1, aggro: 12, radius: 0.58, height: 1.8,
    xp: 26, gold: 13, scale: 1, attackCooldown: 1.65, windup: 0.45, ranged: false,
  },
  treant: {
    id: 'treant', name: 'Rootbound Treant', species: 'treant', model: 'treant', elementTint: true,
    hp: 125, damage: 13, speed: 2.2, range: 2.9, aggro: 11, radius: 1.1, height: 2.5,
    xp: 46, gold: 17, scale: 1.25, attackCooldown: 2.2, windup: 0.75, ranged: false, elite: true,
  },
  sprite: {
    id: 'sprite', name: 'Whisper Sprite', species: 'sprite', model: 'wisp', elementTint: true,
    hp: 34, damage: 7, speed: 3.7, range: 9, aggro: 15, radius: 0.5, height: 1.2,
    xp: 22, gold: 6, scale: 0.9, attackCooldown: 2.1, windup: 0.7, ranged: true,
  },
  imp: {
    id: 'imp', name: 'Cinder Imp', species: 'imp', model: 'imp', elementTint: true,
    hp: 58, damage: 10, speed: 4.3, range: 1.9, aggro: 13, radius: 0.58, height: 1.5,
    xp: 32, gold: 10, scale: 0.95, attackCooldown: 1.55, windup: 0.4, ranged: false,
  },
  magmahound: {
    id: 'magmahound', name: 'Magma Hound', species: 'magmahound', model: 'wolf', elementTint: true,
    hp: 78, damage: 12, speed: 5.2, range: 2.0, aggro: 15, radius: 0.75, height: 1.15,
    xp: 38, gold: 12, scale: 1.08, attackCooldown: 1.4, windup: 0.35, ranged: false,
  },
  golem: {
    id: 'golem', name: 'Crag Golem', species: 'golem', model: 'golem', elementTint: true,
    hp: 145, damage: 14, speed: 2.3, range: 2.7, aggro: 11, radius: 1.15, height: 2.25,
    xp: 55, gold: 20, scale: 1.3, attackCooldown: 2.4, windup: 0.85, ranged: false, elite: true,
  },
  crab: {
    id: 'crab', name: 'Reef Crab', species: 'crab', model: 'crab', elementTint: true,
    hp: 60, damage: 8, speed: 3.3, range: 1.9, aggro: 11, radius: 0.8, height: 1.0,
    xp: 27, gold: 9, scale: 1, attackCooldown: 1.6, windup: 0.5, ranged: false,
  },
  tidesprite: {
    id: 'tidesprite', name: 'Tidewisp', species: 'tidesprite', model: 'wisp', elementTint: true,
    hp: 40, damage: 8, speed: 3.5, range: 10, aggro: 15, radius: 0.48, height: 1.1,
    xp: 24, gold: 6, scale: 0.85, attackCooldown: 2.2, windup: 0.8, ranged: true,
  },
  skeleton: {
    id: 'skeleton', name: 'Hollow Skeleton', species: 'skeleton', model: 'skeleton', elementTint: false,
    hp: 66, damage: 10, speed: 4.0, range: 2.0, aggro: 13, radius: 0.55, height: 1.85,
    xp: 32, gold: 10, scale: 1, attackCooldown: 1.7, windup: 0.45, ranged: false,
  },
  wraith: {
    id: 'wraith', name: 'Sorrow Wraith', species: 'wraith', model: 'wraith', elementTint: true,
    hp: 52, damage: 11, speed: 3.9, range: 8, aggro: 15, radius: 0.55, height: 1.8,
    xp: 34, gold: 9, scale: 1, attackCooldown: 2.0, windup: 0.7, ranged: true,
  },
  cultist: {
    id: 'cultist', name: 'Veiled Cultist', species: 'cultist', model: 'cultist', elementTint: true,
    hp: 70, damage: 12, speed: 3.6, range: 10, aggro: 16, radius: 0.55, height: 1.85,
    xp: 38, gold: 12, scale: 1, attackCooldown: 2.1, windup: 0.8, ranged: true,
  },
  bogslime: {
    id: 'bogslime', name: 'Mirrormere Sludge', species: 'bogslime', model: 'slime', elementTint: true,
    hp: 88, damage: 11, speed: 2.6, range: 1.65, aggro: 10, radius: 0.85, height: 1.15,
    xp: 36, gold: 10, scale: 1.18, attackCooldown: 1.9, windup: 0.6, ranged: false,
  },
  bat: {
    id: 'bat', name: 'Gloom Bat', species: 'bat', model: 'bat', elementTint: true,
    hp: 40, damage: 9, speed: 5.1, range: 1.6, aggro: 14, radius: 0.45, height: 1.3,
    xp: 26, gold: 7, scale: 0.8, attackCooldown: 1.4, windup: 0.3, ranged: false,
  },
};

export const BOSSES = [
  {
    id: 'thornmaw', name: 'Thornmaw', title: 'THE OLD GROWTH', biome: 'forest', model: 'treant',
    element: 'earth', level: 5, spawn: [-16, -72], scale: 2.05, hp: 760, damage: 17,
    xp: 420, gold: 180, aggro: 17, radius: 1.8, speed: 2.3, range: 3.4,
    line: 'The forest does not forgive axes.',
    quest: 'boss_thornmaw',
  },
  {
    id: 'pyreclaw', name: 'Pyreclaw', title: 'THE CINDER CROWN', biome: 'volcano', model: 'magmahound',
    element: 'fire', level: 7, spawn: [-84, -66], scale: 2.25, hp: 1080, damage: 23,
    xp: 680, gold: 280, aggro: 18, radius: 2.0, speed: 4.0, range: 3.4,
    line: 'The mountain wears its hunger like a crown.',
    quest: 'boss_pyreclaw',
  },
  {
    id: 'gravewarden', name: 'The Gravewarden', title: 'KEEPER OF THE QUIET ORCHARD', biome: 'graveyard', model: 'wraith',
    element: 'shadow', level: 6, spawn: [-51, -21], scale: 2.15, hp: 950, damage: 20,
    xp: 580, gold: 240, aggro: 17, radius: 1.6, speed: 3.5, range: 9,
    line: 'You are late. Everyone is late, eventually.',
    quest: 'boss_gravewarden',
  },
  {
    id: 'tidecolossus', name: 'Tide Colossus', title: 'THE HUNGRY SHALLOW', biome: 'beach', model: 'crab',
    element: 'water', level: 6, spawn: [98, 61], scale: 2.5, hp: 1020, damage: 21,
    xp: 580, gold: 240, aggro: 17, radius: 2.4, speed: 2.8, range: 3.8,
    line: 'The sea gives. The sea takes. The sea keeps.',
    quest: 'boss_tidecolossus',
  },
  {
    id: 'gloomroot', name: 'Gloomroot', title: 'THE UNLIT ROOT', biome: 'cave', model: 'golem',
    element: 'earth', level: 8, spawn: [72, -43], scale: 2.2, hp: 1350, damage: 27,
    xp: 900, gold: 360, aggro: 16, radius: 2.0, speed: 2.4, range: 3.2,
    line: 'Light came down here once. It did not leave.',
    quest: 'boss_gloomroot',
  },
];

export const WEATHER = {
  clear: {
    id: 'clear', name: 'Clear skies', icon: '☀', weight: 24, fog: 0.0032, light: 1.0,
    ambient: 0.62, tint: 'transparent', rain: false, snow: false, ash: false, wind: 0.3,
  },
  fair: {
    id: 'fair', name: 'Drifting clouds', icon: '☁', weight: 20, fog: 0.0038, light: 0.88,
    ambient: 0.58, tint: 'rgba(178,198,190,.035)', rain: false, snow: false, ash: false, wind: 0.55,
  },
  rain: {
    id: 'rain', name: 'Soft rain', icon: '☂', weight: 15, fog: 0.0062, light: 0.64,
    ambient: 0.47, tint: 'rgba(35,62,76,.16)', rain: true, snow: false, ash: false, wind: 0.8,
  },
  storm: {
    id: 'storm', name: 'Thunderstorm', icon: 'ϟ', weight: 10, fog: 0.0085, light: 0.48,
    ambient: 0.38, tint: 'rgba(25,35,54,.24)', rain: true, snow: false, ash: false, wind: 1.2,
  },
  fog: {
    id: 'fog', name: 'Low mist', icon: '≋', weight: 11, fog: 0.015, light: 0.58,
    ambient: 0.52, tint: 'rgba(191,201,187,.10)', rain: false, snow: false, ash: false, wind: 0.12,
  },
  ash: {
    id: 'ash', name: 'Falling ash', icon: '✦', weight: 8, fog: 0.0092, light: 0.56,
    ambient: 0.43, tint: 'rgba(99,41,29,.17)', rain: false, snow: false, ash: true, wind: 0.7,
  },
  snow: {
    id: 'snow', name: 'Crystal snow', icon: '❄', weight: 8, fog: 0.0075, light: 0.72,
    ambient: 0.55, tint: 'rgba(176,201,214,.13)', rain: false, snow: true, ash: false, wind: 0.5,
  },
};

export const NPC_DEFS = [
  {
    id: 'elder', name: 'Elder Maren', title: 'KEEPER OF EMBERS', zone: 'Hearthvale', pos: [2.7, 18.5],
    race: 'human', sex: 'feminine', role: 'quest', icon: '✦', palette: ['#5c3e54', '#d2b06f', '#f0c8a3'],
    greeting: 'The old road has teeth tonight, traveller. But you already know that, don\'t you?',
    questId: 'wolves',
  },
  {
    id: 'bram', name: 'Bram Coalfist', title: 'MASTER OF THE ANVIL', zone: 'Hearthvale', pos: [11.5, 13.4],
    race: 'demon', sex: 'masculine', role: 'vendor', vendor: 'weapon', icon: '⚒', palette: ['#5b3328', '#c88a42', '#b75e46'],
    greeting: 'Steel remembers every hand that held it. Let\'s give yours something worth remembering.',
  },
  {
    id: 'ysolde', name: 'Ysolde Threadbare', title: 'WARDROBE OF WAYFARERS', zone: 'Hearthvale', pos: [8.4, 24.0],
    race: 'human', sex: 'feminine', role: 'vendor', vendor: 'armor', icon: '❖', palette: ['#37586a', '#d4c08e', '#d39b74'],
    greeting: 'A good coat is a promise you make to your future self. I sell very good coats.',
  },
  {
    id: 'pip', name: 'Pip', title: 'PEDDLER OF SMALL MIRACLES', zone: 'Hearthvale', pos: [-5.8, 22.6],
    race: 'beast', beastType: 'cat', sex: 'masculine', role: 'vendor', vendor: 'item', icon: '✧', palette: ['#5e4b32', '#d0a85c', '#d39b74'],
    greeting: 'Potions! Bombs! A rope that is only slightly cursed! Everything a hero needs.',
  },
  {
    id: 'ivy', name: 'Sister Ivy', title: 'THE LAST LANTERN', zone: 'Hearthvale', pos: [-11.7, 8.0],
    race: 'angel', sex: 'feminine', role: 'quest', icon: '✟', palette: ['#d6d3bb', '#d9b864', '#f0c8a3'],
    greeting: 'The Quiet Orchard is not quiet anymore. Something there is learning our names.',
    questId: 'hollow',
  },
  {
    id: 'tomas', name: 'Tomas Vane', title: 'GATEWARDEN', zone: 'Hearthvale', pos: [0.3, 31.2],
    race: 'human', sex: 'masculine', role: 'quest', icon: '⚔', palette: ['#41505c', '#a77738', '#a96e4f'],
    greeting: 'Gate\'s open, hero. Whether you come back through it is between you and the wilds.',
    questId: 'ash',
  },
  {
    id: 'vey', name: 'Chancellor Vey', title: 'VOICE OF AURELUNE', zone: 'Aurelune', pos: [56.0, -1.0],
    race: 'demon', sex: 'feminine', role: 'quest', icon: '☽', palette: ['#432d4b', '#d5b167', '#a96e4f'],
    greeting: 'The Cinder Crown is not a metaphor, child. It is a thing with a heartbeat. Stop it.',
    questId: 'cinder',
  },
  {
    id: 'mira', name: 'Mira Sol', title: 'CURATOR OF FIRST THINGS', zone: 'Aurelune', pos: [50.5, 2.0],
    race: 'angel', sex: 'feminine', role: 'quest', icon: '◈', palette: ['#d6d0b4', '#6aa5a6', '#e7e0d1'],
    greeting: 'Whisperwood keeps three runestones older than the city. Wake them in the old order and the wood will open its hand.',
    questId: 'runes',
  },
  {
    id: 'kael', name: 'Kael Emberhand', title: 'CITY ARMOURER', zone: 'Aurelune', pos: [49.0, 8.7],
    race: 'beast', beastType: 'dog', sex: 'masculine', role: 'vendor', vendor: 'weapon', icon: '⚒', palette: ['#4a3f2f', '#cb8e3c', '#d39b74'],
    greeting: 'Hearthvale steel is honest. Aurelune steel is honest *and* angry. Pick your poison.',
  },
  {
    id: 'sable', name: 'Sable', title: 'NIGHTWEAVE TAILOR', zone: 'Aurelune', pos: [61.2, 9.8],
    race: 'beast', beastType: 'cat', sex: 'feminine', role: 'vendor', vendor: 'armor', icon: '✧', palette: ['#313a45', '#9b84dd', '#754737'],
    greeting: 'Armor should move like a second skin. Or a first one, if you are brave.',
  },
  {
    id: 'nia', name: 'Nia Quill', title: 'APOTHECARY', zone: 'Aurelune', pos: [65.0, 4.0],
    race: 'human', sex: 'feminine', role: 'vendor', vendor: 'item', icon: '♜', palette: ['#3d5a46', '#d1b56e', '#754737'],
    greeting: 'Everything in this shop is safe. The things outside it are not. Buy accordingly.',
  },
  {
    id: 'cassian', name: 'Cassian Rook', title: 'TIDE-WATCHER', zone: 'Aurelune', pos: [52.0, -9.3],
    race: 'human', sex: 'masculine', role: 'quest', icon: '≈', palette: ['#355064', '#b6c2b7', '#a96e4f'],
    greeting: 'The coast has been crawling. If the reef crabs reach the road, Aurelune starves by winter.',
    questId: 'tide',
  },
];

export const QUESTS = {
  wolves: {
    id: 'wolves', title: 'Wolves at the Woodline', giver: 'elder', level: 1,
    intro: 'Three nights running, the frostfang pack has come down from Whisperwood. They are starving — which makes them bold. Thin the pack before they reach the sheep. Six should do.',
    completedLine: 'The fields will sleep easier tonight. Take this — and keep your blade close. The wood has been restless since the last moon.',
    objectives: [{ type: 'kill', target: 'wolf', count: 6, label: 'Frostfang wolves slain' }],
    rewards: { gold: 95, xp: 210 },
  },
  hollow: {
    id: 'hollow', title: 'Restless Hollow', giver: 'ivy', level: 2,
    intro: 'The Quiet Orchard used to be a place of rest. Now the bones walk at dusk. Put five of them back to sleep. Do not read the names on their stones; they read yours.',
    completedLine: 'May their names be light. Your soul is heavier for the work, I know. Let me ease it.',
    objectives: [{ type: 'kill', target: 'skeleton', count: 5, label: 'Hollow skeletons laid to rest' }],
    rewards: { gold: 150, xp: 340 },
  },
  ash: {
    id: 'ash', title: 'Ash on the Wind', giver: 'tomas', level: 3,
    intro: 'Cinderwake is spitting imps onto the northern road. Four of them were circling the gate last night. I cannot leave my post. You can.',
    completedLine: 'The gate lanterns are steady again. Here\'s coin from the watch fund — don\'t spend it all on pretty armor.',
    objectives: [{ type: 'kill', target: 'imp', count: 6, label: 'Cinder imps banished' }],
    rewards: { gold: 220, xp: 470 },
  },
  runes: {
    id: 'runes', title: 'The First Dawn', giver: 'mira', level: 4,
    intro: 'Three runestones stand in Whisperwood. Wake them all and the old vault beneath the roots will open. The stones answer to touch — but they are shy of the unworthy.',
    completedLine: 'The vault remembered you. Look at that. Take this relic; it was waiting for a hand like yours.',
    objectives: [{ type: 'puzzle', target: 'forest', count: 1, label: 'Wake the Whisperwood runestones' }],
    rewards: { gold: 320, xp: 640, item: 'relic' },
  },
  tide: {
    id: 'tide', title: 'Tidebreaker', giver: 'cassian', level: 4,
    intro: 'Reef crabs have been dragging the fishing nets under. Kill six and the fleet can sail again. Mind the big one — the Tide Colossus is more than a story.',
    completedLine: 'The boats are singing again. Not literally. That would be worse. Coin, as promised.',
    objectives: [{ type: 'kill', target: 'crab', count: 6, label: 'Reef crabs broken' }],
    rewards: { gold: 280, xp: 560 },
  },
  cinder: {
    id: 'cinder', title: 'The Cinder Crown', giver: 'vey', level: 6,
    intro: 'Pyreclaw has worn the Cinder Crown long enough. The mountain obeys it now. Bring me its heart, hero, and Aurelune will owe you a season of dawns.',
    completedLine: 'The Crown is cold. The mountain is quiet. You have done what armies could not. Aurelune is yours.',
    objectives: [{ type: 'kill', target: 'boss_pyreclaw', count: 1, label: 'Pyreclaw defeated' }],
    rewards: { gold: 720, xp: 1800, item: 'relic' },
  },
};

export const RARITIES = {
  common: { name: 'Common', color: '#c7b892', mult: 1, css: '#c7b892' },
  uncommon: { name: 'Uncommon', color: '#71d7c4', mult: 1.35, css: '#71d7c4' },
  rare: { name: 'Rare', color: '#5caee8', mult: 1.85, css: '#5caee8' },
  epic: { name: 'Epic', color: '#a38bc9', mult: 2.6, css: '#a38bc9' },
  legendary: { name: 'Legendary', color: '#e9b85f', mult: 3.8, css: '#e9b85f' },
};

const WEAPON_ICONS = { warrior: '⚔', rogue: '†', archer: '➶', wizard: '✧', priest: '✟' };

export const CLASS_GEAR = {
  warrior: {
    weapons: [
      { id: 'warrior_iron', name: 'Iron Longsword', element: 'physical', base: 9, rarity: 'common', desc: 'Dependable, dented, dear.' },
      { id: 'warrior_oak', name: 'Oakheart Blade', element: 'earth', base: 14, rarity: 'uncommon', desc: 'Grown around a fallen star.' },
      { id: 'warrior_ember', name: 'Emberbrand', element: 'fire', base: 20, rarity: 'rare', desc: 'The edge never truly cools.' },
      { id: 'warrior_storm', name: 'Stormcleaver', element: 'lightning', base: 27, rarity: 'epic', desc: 'Thunder given a handle.' },
      { id: 'warrior_dawn', name: 'Dawnsunder', element: 'holy', base: 36, rarity: 'legendary', desc: 'The first light, folded into steel.' },
    ],
    armor: [
      { id: 'warrior_leather', name: 'Wayfarer Plate', element: 'physical', health: 22, armor: 8, rarity: 'common' },
      { id: 'warrior_ironarmor', name: 'Ironbark Cuirass', element: 'earth', health: 38, armor: 14, rarity: 'uncommon' },
      { id: 'warrior_emberarmor', name: 'Cinder-forged Mail', element: 'fire', health: 58, armor: 22, rarity: 'rare' },
      { id: 'warrior_dawnarmor', name: 'Aegis of Morning', element: 'holy', health: 86, armor: 34, rarity: 'legendary' },
    ],
  },
  rogue: {
    weapons: [
      { id: 'rogue_iron', name: 'Paired Kindnesses', element: 'physical', base: 8, rarity: 'common', desc: 'Quick, quiet, convincing.' },
      { id: 'rogue_frost', name: 'Winter\'s Whisper', element: 'ice', base: 13, rarity: 'uncommon', desc: 'A cold word in the dark.' },
      { id: 'rogue_venom', name: 'Nightbloom Fangs', element: 'shadow', base: 19, rarity: 'rare', desc: 'Blooms only where blood falls.' },
      { id: 'rogue_storm', name: 'Static Twins', element: 'lightning', base: 26, rarity: 'epic', desc: 'Two answers to one question.' },
      { id: 'rogue_dawn', name: 'Dawn\'s Last Secret', element: 'holy', base: 35, rarity: 'legendary', desc: 'The cut that ends the night.' },
    ],
    armor: [
      { id: 'rogue_leather', name: 'Softstep Jerkin', element: 'physical', health: 14, armor: 4, rarity: 'common' },
      { id: 'rogue_shadow', name: 'Duskweave Harness', element: 'shadow', health: 24, armor: 8, rarity: 'uncommon' },
      { id: 'rogue_frostarmor', name: 'Rimeleather Coat', element: 'ice', health: 38, armor: 13, rarity: 'rare' },
      { id: 'rogue_dawnarmor', name: 'Crown of Quiet Dawns', element: 'holy', health: 55, armor: 21, rarity: 'legendary' },
    ],
  },
  archer: {
    weapons: [
      { id: 'archer_iron', name: 'Greenwood Shortbow', element: 'physical', base: 8, rarity: 'common', desc: 'Strung with waxed sinew.' },
      { id: 'archer_wind', name: 'Gale-song Longbow', element: 'wind', base: 13, rarity: 'uncommon', desc: 'Every arrow hums one note.' },
      { id: 'archer_frost', name: 'Rimefall Recurve', element: 'ice', base: 19, rarity: 'rare', desc: 'Draws winter from the sky.' },
      { id: 'archer_storm', name: 'Thunderstring', element: 'lightning', base: 26, rarity: 'epic', desc: 'The bowstring is a held storm.' },
      { id: 'archer_dawn', name: 'Sunshot', element: 'holy', base: 35, rarity: 'legendary', desc: 'A sunrise with fletching.' },
    ],
    armor: [
      { id: 'archer_leather', name: 'Ranger\'s Mantle', element: 'physical', health: 15, armor: 4, rarity: 'common' },
      { id: 'archer_leaf', name: 'Whisperleaf Vest', element: 'earth', health: 26, armor: 8, rarity: 'uncommon' },
      { id: 'archer_stormarmor', name: 'Stormfeather Cloak', element: 'lightning', health: 40, armor: 13, rarity: 'rare' },
      { id: 'archer_dawnarmor', name: 'Skyhunter Regalia', element: 'holy', health: 57, armor: 20, rarity: 'legendary' },
    ],
  },
  wizard: {
    weapons: [
      { id: 'wizard_iron', name: 'Apprentice Ashstaff', element: 'physical', base: 9, rarity: 'common', desc: 'Mostly a walking stick. Mostly.' },
      { id: 'wizard_frost', name: 'Mirrormere Rod', element: 'ice', base: 14, rarity: 'uncommon', desc: 'The water remembers the spell.' },
      { id: 'wizard_ember', name: 'Cinderwake Scepter', element: 'fire', base: 21, rarity: 'rare', desc: 'A small, obedient volcano.' },
      { id: 'wizard_storm', name: 'Stormglass Staff', element: 'lightning', base: 28, rarity: 'epic', desc: 'Lightning, bottled badly.' },
      { id: 'wizard_dawn', name: 'The First Word', element: 'holy', base: 38, rarity: 'legendary', desc: 'Before light, there was a sentence.' },
    ],
    armor: [
      { id: 'wizard_robe', name: 'Dustgrey Robes', element: 'physical', health: 10, armor: 3, rarity: 'common' },
      { id: 'wizard_ice', name: 'Mirrorweave Robes', element: 'ice', health: 20, armor: 6, rarity: 'uncommon' },
      { id: 'wizard_emberarmor', name: 'Emberglass Vestments', element: 'fire', health: 33, armor: 11, rarity: 'rare' },
      { id: 'wizard_dawnarmor', name: 'Aetheric Mantle', element: 'holy', health: 48, armor: 18, rarity: 'legendary' },
    ],
  },
  priest: {
    weapons: [
      { id: 'priest_iron', name: 'Chapel Mace', element: 'physical', base: 9, rarity: 'common', desc: 'Blessed, blunt, businesslike.' },
      { id: 'priest_holy', name: 'Lantern Sceptre', element: 'holy', base: 13, rarity: 'uncommon', desc: 'Holds a light that will not drown.' },
      { id: 'priest_water', name: 'Tidecaller', element: 'water', base: 19, rarity: 'rare', desc: 'Mercy, with a tide behind it.' },
      { id: 'priest_storm', name: 'Stormbell', element: 'lightning', base: 26, rarity: 'epic', desc: 'Rings once. Thunder answers.' },
      { id: 'priest_dawn', name: 'Vigil of Dawn', element: 'holy', base: 35, rarity: 'legendary', desc: 'The last lantern of the old world.' },
    ],
    armor: [
      { id: 'priest_robe', name: 'Novice Vestments', element: 'physical', health: 18, armor: 6, rarity: 'common' },
      { id: 'priest_holyarmor', name: 'Lanternspun Robes', element: 'holy', health: 31, armor: 11, rarity: 'uncommon' },
      { id: 'priest_waterarmor', name: 'Tidewoven Habit', element: 'water', health: 48, armor: 17, rarity: 'rare' },
      { id: 'priest_dawnarmor', name: 'Vestments of the Dawn', element: 'holy', health: 68, armor: 26, rarity: 'legendary' },
    ],
  },
};

export const TRINKETS = [
  { id: 'trinket_luck', name: 'Rabbit\'s Regret', icon: '◈', desc: '+8% critical chance.', crit: 0.08, power: 2, rarity: 'uncommon', price: 110 },
  { id: 'trinket_ember', name: 'Ember Locket', icon: '◉', desc: '+10 fire damage · +8% fire resistance.', element: 'fire', elementPower: 10, resist: { fire: 0.08 }, power: 3, rarity: 'rare', price: 190 },
  { id: 'trinket_frost', name: 'Frozen Tear', icon: '❄', desc: '+10 frost damage · +8% frost resistance.', element: 'ice', elementPower: 10, resist: { ice: 0.08 }, power: 3, rarity: 'rare', price: 190 },
  { id: 'trinket_dawn', name: 'Dawnstone Shard', icon: '✦', desc: '+16 radiant damage · +15 vitality.', element: 'holy', elementPower: 16, health: 15, power: 5, rarity: 'epic', price: 340 },
  { id: 'trinket_shadow', name: 'Whisper of the Hollow', icon: '☾', desc: '+12 shadow damage · +6% lifesteal.', element: 'shadow', elementPower: 12, lifesteal: 0.06, power: 4, rarity: 'epic', price: 340 },
];

export const CONSUMABLES = {
  health_potion: { id: 'health_potion', name: 'Sunpetal Draught', icon: '♜', type: 'potion', desc: 'Restores 45% of maximum health.', price: 26, effect: 'heal', value: 0.45 },
  focus_tonic: { id: 'focus_tonic', name: 'Stormcap Tonic', icon: '☄', type: 'potion', desc: 'Restores 55% of maximum spirit.', price: 22, effect: 'energy', value: 0.55 },
  bomb: { id: 'bomb', name: 'Cinder Flask', icon: '✦', type: 'bomb', desc: 'Explodes for 45 + 5× level fire damage.', price: 38, effect: 'bomb' },
  wardraught: { id: 'wardraught', name: 'Ironbark Brew', icon: '♨', type: 'potion', desc: 'Grants +30 armor for 20 seconds.', price: 34, effect: 'ward' },
};

export const SHOP_STOCK = {
  weapon: ['weapon1', 'weapon2', 'weapon3', 'weapon4'],
  armor: ['armor1', 'armor2', 'armor3', 'armor4', 'trinket'],
  item: ['potion', 'tonic', 'bomb', 'ward', 'trinket2'],
};

const RARITY_LEVEL_OFFSET = { common: 0, uncommon: 1, rare: 2, epic: 3, legendary: 4 };

let itemUid = 1;

export function makeItem(template, level = 1, options = {}) {
  const lvl = Math.max(1, Math.round(level));
  const rarityId = options.rarity || template.rarity || 'common';
  const rarity = RARITIES[rarityId] || RARITIES.common;
  const scale = 1 + (lvl - 1) * 0.245;
  const isWeapon = !!template.base;
  const item = {
    uid: options.uid || `item_${itemUid++}`,
    templateId: template.id,
    name: template.name,
    icon: options.icon || (isWeapon ? (WEAPON_ICONS[options.classId] || '⚔') : '❖'),
    type: isWeapon ? 'weapon' : 'armor',
    slot: isWeapon ? 'weapon' : 'armor',
    element: template.element || 'physical',
    rarity: rarityId,
    level: lvl,
    desc: template.desc || 'A relic of the Sundered Realms.',
    classId: options.classId || null,
    price: Math.round(((isWeapon ? 30 : 24) * rarity.mult + lvl * (isWeapon ? 8 : 7) * rarity.mult)),
    damage: isWeapon ? Math.round((template.base + lvl * 2.1) * rarity.mult) : 0,
    elementPower: isWeapon ? Math.round((template.base * 0.33 + lvl * 0.8) * rarity.mult) : 0,
    health: template.health ? Math.round(template.health * (1 + (lvl - 1) * 0.16) * rarity.mult) : 0,
    armor: template.armor ? Math.round(template.armor * (1 + (lvl - 1) * 0.14) * rarity.mult) : 0,
    crit: 0,
    power: isWeapon ? 0 : Math.round((2 + lvl * 0.45) * rarity.mult),
    resist: template.element && template.element !== 'physical' ? { [template.element]: 0.05 + rarity.mult * 0.015 } : {},
    trinket: false,
  };
  return item;
}

export function makeTrinket(template, level = 1) {
  const rarity = RARITIES[template.rarity] || RARITIES.rare;
  const scale = 1 + (Math.max(1, level) - 1) * 0.18;
  return {
    uid: `item_${itemUid++}`,
    templateId: template.id,
    name: template.name,
    icon: template.icon,
    type: 'trinket',
    slot: 'trinket',
    element: template.element || 'physical',
    rarity: template.rarity,
    level: Math.max(1, Math.round(level)),
    desc: template.desc,
    price: Math.round(template.price * scale),
    classId: null,
    damage: 0,
    elementPower: Math.round((template.elementPower || 0) * scale),
    health: Math.round((template.health || 0) * scale),
    armor: 0,
    power: Math.round((template.power || 0) * scale),
    crit: template.crit || 0,
    lifesteal: template.lifesteal || 0,
    resist: template.resist || {},
    trinket: true,
  };
}

export function makeStarterWeapon(classId) {
  const gear = CLASS_GEAR[classId];
  const tpl = gear.weapons[0];
  const item = makeItem(tpl, 1, { classId, rarity: 'common' });
  item.name = tpl.name;
  item.damage = Math.round(tpl.base + 2);
  item.elementPower = 0;
  item.price = 12;
  item.desc = tpl.desc;
  return item;
}

export function makeStarterArmor(classId) {
  const gear = CLASS_GEAR[classId];
  const tpl = gear.armor[0];
  const item = makeItem(tpl, 1, { classId, rarity: 'common' });
  return item;
}

export function makeQuestRelic(classId, level) {
  const gear = CLASS_GEAR[classId];
  const idx = Math.min(gear.weapons.length - 1, 2 + Math.floor(level / 5));
  const tpl = gear.weapons[idx];
  return makeItem(tpl, Math.max(3, level + 1), { classId, rarity: idx >= 3 ? 'epic' : 'rare' });
}

export function generateShopStock(type, player, vendorLevel = 1) {
  const level = Math.max(1, player.level + (vendorLevel >= 5 ? 1 : 0));
  const stock = [];
  const gear = CLASS_GEAR[player.classId];
  const allowedRarity = Math.min(5, Math.ceil(level / 3) + 1);
  if (type === 'weapon') {
    const available = gear.weapons.filter(t => {
      const req = RARITY_LEVEL_OFFSET[t.rarity] * 3 + 1;
      return req <= level + 2 || RARITY_LEVEL_OFFSET[t.rarity] + 1 <= allowedRarity;
    });
    const start = Math.max(0, Math.min(available.length - 1, Math.floor((level - 1) / 4)));
    const used = new Set();
    for (let i = 0; i < 4; i++) {
      const tpl = available[(start + i) % available.length];
      if (!tpl || used.has(tpl.id)) continue;
      used.add(tpl.id);
      const itemLevel = Math.max(1, level + (i === 3 ? 1 : 0));
      const item = makeItem(tpl, itemLevel, { classId: player.classId, icon: WEAPON_ICONS[player.classId] });
      item.price = Math.round(item.price * (vendorLevel >= 5 ? 1.18 : 1));
      stock.push(item);
    }
  } else if (type === 'armor') {
    const available = gear.armor.filter(t => {
      const req = RARITY_LEVEL_OFFSET[t.rarity] * 3 + 1;
      return req <= level + 2 || RARITY_LEVEL_OFFSET[t.rarity] + 1 <= allowedRarity;
    });
    const start = Math.max(0, Math.min(available.length - 1, Math.floor((level - 1) / 4)));
    const used = new Set();
    for (let i = 0; i < 4; i++) {
      const tpl = available[(start + i) % available.length];
      if (!tpl || used.has(tpl.id)) continue;
      used.add(tpl.id);
      const item = makeItem(tpl, Math.max(1, level + (i === 3 ? 1 : 0)), { classId: player.classId });
      item.price = Math.round(item.price * (vendorLevel >= 5 ? 1.18 : 1));
      stock.push(item);
    }
    stock.push(makeTrinket(TRINKETS[Math.min(TRINKETS.length - 1, Math.floor(level / 3))], level));
  } else {
    for (const key of ['health_potion', 'focus_tonic', 'bomb', 'wardraught']) {
      stock.push({ ...CONSUMABLES[key], consumable: true });
    }
    stock.push(makeTrinket(TRINKETS[Math.min(TRINKETS.length - 1, 1 + Math.floor(level / 5))], level));
  }
  return stock;
}

export function itemSummary(item) {
  if (!item) return '';
  if (item.consumable) return item.desc;
  if (item.type === 'weapon') {
    const el = ELEMENTS[item.element]?.name || 'Physical';
    return `${item.damage} power · ${item.elementPower} ${el.toLowerCase()} · Lv.${item.level}`;
  }
  if (item.type === 'armor') {
    return `+${item.health} vitality · +${item.armor} armor · Lv.${item.level}`;
  }
  const bits = [];
  if (item.power) bits.push(`+${item.power} attack`);
  if (item.crit) bits.push(`+${Math.round(item.crit * 100)}% crit`);
  if (item.elementPower) bits.push(`+${item.elementPower} ${ELEMENTS[item.element]?.name.toLowerCase()}`);
  if (item.health) bits.push(`+${item.health} vitality`);
  return bits.join(' · ');
}

export function xpForLevel(level) {
  return Math.round(110 * Math.pow(level, 1.26));
}

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function random() {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

export function hash2(x, z, seed = 1) {
  let h = Math.imul(x | 0, 374761393) + Math.imul(z | 0, 668265263) + Math.imul(seed, 2147483647);
  h = (h ^ (h >>> 13)) * 1274126177;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

export function valueNoise(x, z, seed = 1) {
  const xi = Math.floor(x), zi = Math.floor(z);
  const xf = x - xi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  const a = hash2(xi, zi, seed), b = hash2(xi + 1, zi, seed);
  const c = hash2(xi, zi + 1, seed), d = hash2(xi + 1, zi + 1, seed);
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}

export function fbm(x, z, seed = 1) {
  let value = 0, amp = 0.5, freq = 1;
  for (let i = 0; i < 4; i++) {
    value += valueNoise(x * freq, z * freq, seed + i * 11) * amp;
    freq *= 2.03; amp *= 0.5;
  }
  return value;
}

export function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
export function lerp(a, b, t) { return a + (b - a) * t; }
export function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}
export function distance2(ax, az, bx, bz) { return Math.hypot(ax - bx, az - bz); }

export function formatTime(hours) {
  const h = Math.floor(hours) % 24;
  const m = Math.floor((hours % 1) * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export function pickWeighted(rng, table) {
  const entries = Object.entries(table);
  const total = entries.reduce((sum, [, v]) => sum + v, 0);
  let roll = rng() * total;
  for (const [key, weight] of entries) {
    roll -= weight;
    if (roll <= 0) return key;
  }
  return entries[0][0];
}
