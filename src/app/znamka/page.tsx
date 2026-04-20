import type { Metadata } from 'next';
import BrandPageClient from './BrandPageClient';

export const metadata: Metadata = {
  title: 'Znamka – logotip in barvna shema',
  description:
    'Uradna znamka Begovac Spedition: besedni znak BEGOVAC in Spedition, barvna paleta in uporaba na vozilih. Prenos logotipa in smernice.',
  alternates: {
    canonical: 'https://spedition-begovac.com/znamka',
  },
  openGraph: {
    title: 'Znamka – Begovac Spedition',
    description: 'Logotip, barve in uporaba znamke na vozilih.',
    url: 'https://spedition-begovac.com/znamka',
    images: [{ url: '/images/hero-branded-truck.png', width: 1200, height: 630, alt: 'Begovac Spedition — znamka' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Domov', item: 'https://spedition-begovac.com' },
    { '@type': 'ListItem', position: 2, name: 'Znamka', item: 'https://spedition-begovac.com/znamka' },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://spedition-begovac.com/znamka',
  url: 'https://spedition-begovac.com/znamka',
  name: 'Znamka – Begovac Spedition',
  description: 'Logotip in barvna shema Begovac Spedition.',
  isPartOf: { '@id': 'https://spedition-begovac.com/#website' },
  about: { '@id': 'https://spedition-begovac.com/#organization' },
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
