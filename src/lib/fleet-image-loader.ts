import fs from 'fs';
import path from 'path';

const VALID_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.svg']);

// Order must match t.fleet.items order in i18n.ts (after Flatbed removed):
// 0 — Mega Trailer, 1 — Tautliner, 2 — ADR, 3 — Pretovar Robe, 4 — Express Pošiljke
const FLEET_FOLDERS = ['mega', 'tautliner', 'adr', 'pretovar_robe', 'kombi'];

export function loadFleetImages(): string[][] {
  const publicImages = path.join(process.cwd(), 'public', 'images');

  return FLEET_FOLDERS.map(folder => {
    const dir = path.join(publicImages, folder);
    try {
      return fs
        .readdirSync(dir)
        .filter(f => VALID_EXT.has(path.extname(f).toLowerCase()))
        .sort()
        .map(f => `/images/${folder}/${f}`);
    } catch {
      return [];
    }
  });
}
