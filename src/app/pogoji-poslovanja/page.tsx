import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Pogoji poslovanja – Splošni pogoji',
  description: 'Splošni pogoji poslovanja podjetja Begovac Spedition d.o.o. za transportne in logistične storitve. Preberite pravice in obveznosti pogodbenih strank.',
  alternates: {
    canonical: 'https://spedition-begovac.com/pogoji-poslovanja',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Pogoji poslovanja – Begovac Spedition',
    description: 'Splošni pogoji poslovanja podjetja Begovac Spedition d.o.o. za transportne in logistične storitve.',
    url: 'https://spedition-begovac.com/pogoji-poslovanja',
    images: [{ url: '/images/hero-branded-truck.png', width: 1200, height: 630, alt: 'Pogoji poslovanja – Begovac Spedition' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Domov', item: 'https://spedition-begovac.com' },
    { '@type': 'ListItem', position: 2, name: 'Pogoji poslovanja', item: 'https://spedition-begovac.com/pogoji-poslovanja' },
  ],
};

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TermsClient />
    </>
  );
}
