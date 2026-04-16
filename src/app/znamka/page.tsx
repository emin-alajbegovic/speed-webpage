import type { Metadata } from 'next';
import BrandPageClient from './BrandPageClient';

export const metadata: Metadata = {
  title: 'Znamka – logotip in barvna shema',
  description:
    'Uradna znamka Begovac Spedition: besedni znak BEGOVAC in Spedition, barvna paleta in uporaba na vozilih. Prenos logotipa in smernice.',
  alternates: {
    canonical: 'https://begovac-spedition.com/znamka',
  },
  openGraph: {
    title: 'Znamka – Begovac Spedition',
    description: 'Logotip, barve in uporaba znamke na vozilih.',
    url: 'https://begovac-spedition.com/znamka',
    images: [{ url: '/images/og-share.jpg', width: 1200, height: 630, alt: 'Begovac Spedition — znamka' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Domov', item: 'https://begovac-spedition.com' },
    { '@type': 'ListItem', position: 2, name: 'Znamka', item: 'https://begovac-spedition.com/znamka' },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://begovac-spedition.com/znamka',
  url: 'https://begovac-spedition.com/znamka',
  name: 'Znamka – Begovac Spedition',
  description: 'Logotip in barvna shema Begovac Spedition.',
  isPartOf: { '@id': 'https://begovac-spedition.com/#website' },
  about: { '@id': 'https://begovac-spedition.com/#organization' },
  inLanguage: 'sl',
};

export default function BrandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <BrandPageClient />
    </>
  );
}
