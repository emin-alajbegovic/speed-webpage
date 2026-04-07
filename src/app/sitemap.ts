import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://begovac-spedition.com';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/storitve`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/vozni-park`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/o-nas`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
  ];
}
