/** Navbar + footer wordmark (transparent PNG). */
export const brandLogo = '/logo-signature.png';

/** Social / Open Graph preview (1200×630). */
export const ogShareImage = '/images/hero-branded-truck.png';

/** Hero: branded truck photo (fallback when video off or unsupported). */
export const heroBrandedTruck = '/images/hero-branded-truck.png';

/** Poster while hero video loads (seven trucks). */
export const heroVideoPoster = '/images/fleet-park-lineup.png';

/** Single hero background clip — H.264 MP4, no rotation metadata, all browsers. */
export const heroBackgroundVideo = '/video/hero.mp4';

/** Fleet lineup / seven trucks (same file as hero poster). */
export const fleetParkLineup = '/images/fleet-park-lineup.png';

/**
 * Gallery images per fleet type — order matches `t.fleet.items` in i18n.
 * First image in each array is the card thumbnail.
 *
 * HOW TO ADD YOUR PHOTOS:
 * Copy them to /public/images/fleet/ with the names below,
 * then replace the placeholder paths (existing fallback files) with your new ones.
 *
 * Index mapping:
 *   0 — Mega Trailer      → mega-1.jpg         (red Volvo FH)
 *   1 — Tautliner         → tautliner-1..5.jpg (side-loading cargo)
 *   2 — Flatbed           → highway.jpg         (unchanged)
 *   3 — Box Express       → box-express.jpg
 *   4 — Pretovar Robe     → pretovar-1.jpg      (Schenker terminal)
 *   5 — Express Pošiljke  → van-1..5.jpg        (kombi vans)
 */
export const fleetImages: readonly (readonly string[])[] = [
  // 0 — Mega Trailer
  [
    '/images/mega/1000187421.JPG',
    '/images/mega/1000189228.JPG',
    '/images/mega/1000192267.JPG',
  ],
  // 1 — Tautliner
  ['/images/fleet/tautliner.jpg'],
  // 2 — Flatbed
  ['/images/fleet/highway.jpg'],
  // 3 — ADR (dangerous goods)
  [
    '/images/adr/1000154598.JPG',
    '/images/adr/1000154662.JPG',
    '/images/adr/1000191896.JPG',
    '/images/adr/1000191961.JPG',
  ],
  // 4 — Pretovar Robe
  [
    '/images/pretovar_robe/1000192422.JPG',
    '/images/pretovar_robe/1000192424.JPG',
    '/images/pretovar_robe/1000192425.JPG',
  ],
  // 5 — Express Pošiljke (kombi)
  [
    '/images/kombi/IMG_0175.jpeg',
    '/images/kombi/IMG_9361.jpeg',
  ],
];

/** Order matches `t.services.items` (Road Transport, International Freight, Consulting). */
export const serviceImages = [
  '/images/services/road.jpg',
  '/images/services/freight.jpg',
  '/images/fleet-park-lineup.png',
] as const;

export const heroTruckImage = '/images/hero-truck.jpg';
export const whyUsImage = '/images/why-us-truck.jpg';

/** About page — story section (cestni transport). */
export const aboutStoryImage = '/images/services/road.jpg';
