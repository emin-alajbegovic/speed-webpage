import type { Metadata } from 'next';
import FleetClient from './FleetClient';

export const metadata: Metadata = {
  title: 'Vozni park – Moderna flota za vsak prevoz',
  description: 'Naša flota vključuje Mega Trailerje, Tautlinerje, Flatbede, Box Truckove in Tankerje. Sodobna, redno vzdrževana vozila za vsako vrsto tovora po Evropi.',
  alternates: {
    canonical: 'https://spedition-begovac.com/vozni-park',
  },
  openGraph: {
    title: 'Vozni park – Begovac Spedition',
    description: 'Naša flota vključuje Mega Trailerje, Tautlinerje, Flatbede, Box Truckove in Tankerje. Sodobna, redno vzdrževana vozila za vsako vrsto tovora.',
    url: 'https://spedition-begovac.com/vozni-park',
    images: [{ url: '/images/hero-branded-truck.png', width: 1200, height: 630, alt: 'Vozni park – Begovac Spedition' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Domov', item: 'https://spedition-begovac.com' },
    { '@type': 'ListItem', position: 2, name: 'Vozni park', item: 'https://spedition-begovac.com/vozni-park' },
  ],
};

const fleetSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vozni park Begovac Spedition',
  description: 'Moderna flota transportnih vozil za vsako vrsto prevoza',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Vehicle',
        name: 'Mega Trailer',
        description: 'Idealen za visoke tovore do 3m. Tovornost do 24 ton.',
        vehicleConfiguration: 'Dolžina 13.6m, Višina 3.0m, Širina 2.48m',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Vehicle',
        name: 'Tautliner',
        description: 'Stransko nalaganje za enostavno rokovanje. Tovornost do 24 ton.',
        vehicleConfiguration: 'Dolžina 13.6m, tarpaulin pokrov',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Vehicle',
        name: 'Flatbed',
        description: 'Nadgabaritni in posebni prevozi. Tovornost do 24 ton.',
        vehicleConfiguration: 'Dolžina do 20m, spremljevalni escort',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Vehicle',
        name: 'Box Truck',
        description: 'Dostava na zadnji milji in urbana območja. Tovornost do 8 ton.',
        vehicleConfiguration: 'Volumen 40m³',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Vehicle',
        name: 'Tanker',
        description: 'Prevoz tekočin in kemikalij z ADR certifikatom.',
        vehicleConfiguration: 'Kapaciteta 25.000L, ADR certifikat',
      },
    },
  ],
};

export default function FleetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fleetSchema) }} />
      <FleetClient />
    </>
  );
}
