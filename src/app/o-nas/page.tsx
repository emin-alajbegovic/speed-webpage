import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'O nas – 8+ let izkušenj v mednarodnem transportu',
  description: 'Spoznajte Begovac Spedition – slovensko transportno podjetje z 8+ letnimi izkušnjami, 15+ vozili in prisotnostjo v 15 evropskih državah. Zanesljiv partner za mednarodni cestni prevoz.',
  alternates: {
    canonical: 'https://begovac-spedition.com/o-nas',
  },
  openGraph: {
    title: 'O nas – Begovac Spedition',
    description: 'Spoznajte Begovac Spedition – slovensko transportno podjetje z 8+ letnimi izkušnjami, 15+ vozili in prisotnostjo v 15 evropskih državah.',
    url: 'https://begovac-spedition.com/o-nas',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'O podjetju Begovac Spedition' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Domov', item: 'https://begovac-spedition.com' },
    { '@type': 'ListItem', position: 2, name: 'O nas', item: 'https://begovac-spedition.com/o-nas' },
  ],
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://begovac-spedition.com/o-nas',
  url: 'https://begovac-spedition.com/o-nas',
  name: 'O podjetju Begovac Spedition',
  description: 'Begovac Spedition je slovensko transportno podjetje z več kot 8-letnimi izkušnjami v mednarodnem cestnem prevozu in špediciji.',
  about: { '@id': 'https://begovac-spedition.com/#organization' },
  publisher: { '@id': 'https://begovac-spedition.com/#organization' },
  inLanguage: 'sl',
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <AboutClient />
    </>
  );
}
