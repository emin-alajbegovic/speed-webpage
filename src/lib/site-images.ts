/** Navbar + footer wordmark (transparent PNG). */
export const brandLogo = '/logo-signature.png';

/** Social / Open Graph preview (1200×630). */
export const ogShareImage = '/images/og-rig.jpg';

/** Hero background — DAF XG + branded tautliner, golden hour. LCP image, keep it preloaded. */
export const heroImage = '/images/hero-rig-golden.jpg';

/** Fleet page hero — same rig, side profile. */
export const fleetHeroImage = '/images/tautliner/01-rig-side.jpg';

/** Fleet lineup / seven trucks. */
export const fleetParkLineup = '/images/fleet-park-lineup.png';

/**
 * Fallback gallery per fleet type — only used if `loadFleetImages()` finds nothing on disk.
 * The live galleries are read from /public/images/{mega,tautliner,adr,pretovar_robe,kombi}
 * at build time; files sort alphabetically, so a `00-` prefix makes a photo the card thumbnail.
 */
export const fleetImages: readonly (readonly string[])[] = [
  ['/images/mega/00-front-dusk.jpg'],
  ['/images/tautliner/00-scania-spain.jpg'],
  ['/images/adr/1000154598.JPG'],
  ['/images/pretovar_robe/1000192422.JPG'],
  ['/images/kombi/IMG_0175.jpeg'],
];

/** Order matches `t.services.items` (Road Transport, International Freight, Consulting). */
export const serviceImages = [
  '/images/route-on-road.jpg',
  '/images/tautliner/03-rig-full.jpg',
  '/images/services/consulting.jpg',
] as const;

export const whyUsImage = '/images/why-us-truck.jpg';

/** About page — story section. */
export const aboutStoryImage = '/images/about-cab-detail.jpg';
