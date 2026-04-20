/** Brand wordmark (exported from Begovac VOLVO.pdf). Intrinsic 560×144. */
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
  // 0 — Mega Trailer (replace with mega-1.jpg when ready)
  ['/images/fleet/mega-trailer.jpg'],
  // 1 — Tautliner (replace/extend with tautliner-1.jpg … tautliner-5.jpg)
  ['/images/fleet/tautliner.jpg'],
  // 2 — Flatbed
  ['/images/fleet/highway.jpg'],
  // 3 — Box Express (replace with box-express.jpg)
  ['/images/fleet/delivery-van.jpg'],
  // 4 — Pretovar Robe (replace with pretovar-1.jpg)
  ['/images/fleet/adr-trailer.jpg'],
  // 5 — Express Pošiljke (replace/extend with van-1.jpg … van-5.jpg)
  ['/images/fleet/delivery-van.jpg'],
] as const;

/** Order matches `t.services.items` (Road Transport, International Freight, Consulting). */
export const serviceImages = [
  '/images/services/road.jpg',
  '/images/services/freight.jpg',
  '/images/services/consulting.jpg',
] as const;

export const heroTruckImage = '/images/hero-truck.jpg';
export const whyUsImage = '/images/why-us-truck.jpg';
export const aboutStoryImage = '/images/about-fleet-care.jpg';
