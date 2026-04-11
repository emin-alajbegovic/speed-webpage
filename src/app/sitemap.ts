import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://begovac-spedition.com';

  return [
    { url: baseUrl, lastModified: new Date('2026-04-10'), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/storitve`, lastModified: new Date('2026-04-10'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/vozni-park`, lastModified: new Date('2026-04-10'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/o-nas`, lastModified: new Date('2026-04-10'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date('2026-04-10'), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/politika-zasebnosti`, lastModified: new Date('2026-04-10'), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/pogoji-poslovanja`, lastModified: new Date('2026-04-10'), changeFrequency: 'yearly', priority: 0.2 },
  ];
}
