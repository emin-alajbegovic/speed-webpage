import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Transportne storitve – Cestni prevoz, Špedicija, Skladiščenje',
  description: 'Celovite logistične storitve: FTL in LTL cestni prevoz, mednarodna špedicija, skladiščenje, posebni prevozi in logistično svetovanje po vsej Evropi.',
  alternates: {
    canonical: 'https://begovac-spedition.com/storitve',
  },
  openGraph: {
    title: 'Transportne storitve – Begovac Spedition',
    description: 'Celovite logistične storitve: FTL in LTL cestni prevoz, mednarodna špedicija, skladiščenje, posebni prevozi in logistično svetovanje po vsej Evropi.',
    url: 'https://begovac-spedition.com/storitve',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Begovac Spedition – Storitve' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Domov', item: 'https://begovac-spedition.com' },
    { '@type': 'ListItem', position: 2, name: 'Storitve', item: 'https://begovac-spedition.com/storitve' },
  ],
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Transportne storitve Begovac Spedition',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Cestni prevoz',
        description: 'Hitri in zanesljivi prevozi tovora po vsej Evropi. FTL in LTL rešitve za vsako potrebo.',
        provider: { '@id': 'https://begovac-spedition.com/#organization' },
        areaServed: { '@type': 'Place', name: 'Europe' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Mednarodna špedicija',
        description: 'Popolno upravljanje mednarodnih pošiljk – od dokumentacije do carinskega postopka.',
        provider: { '@id': 'https://begovac-spedition.com/#organization' },
        areaServed: { '@type': 'Place', name: 'Europe' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Skladiščenje',
        description: 'Sodobne skladiščne kapacitete z naprednimi sistemi upravljanja zalog.',
        provider: { '@id': 'https://begovac-spedition.com/#organization' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Posebni prevozi',
        description: 'Prevoz nadgabaritnih, nevarnih in vrednostnih tovorov z ustreznimi dovoljenji.',
        provider: { '@id': 'https://begovac-spedition.com/#organization' },
        areaServed: { '@type': 'Place', name: 'Europe' },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Logistično svetovanje',
        description: 'Optimizacija vaše dobavne verige in znižanje stroškov transporta.',
        provider: { '@id': 'https://begovac-spedition.com/#organization' },
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <ServicesClient />
    </>
  );
}
