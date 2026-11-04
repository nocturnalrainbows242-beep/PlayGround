import { addFeatureClearings, buildFeatures, buildEnemySpawns } from './world-features.js';
import { buildNature } from './world-nature.js';

export function buildWilds(world) {
  // Special locations are registered before trees so they keep breathing room.
  addFeatureClearings(world);
  buildNature(world);
  buildFeatures(world);
  buildEnemySpawns(world);
}
