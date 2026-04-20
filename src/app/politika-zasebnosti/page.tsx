import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: 'Politika zasebnosti – Varstvo osebnih podatkov',
  description: 'Politika zasebnosti podjetja Begovac Spedition d.o.o. Izvedite, kako zbiramo, obdelujemo in varujemo vaše osebne podatke v skladu z uredbo GDPR.',
  alternates: {
    canonical: 'https://spedition-begovac.com/politika-zasebnosti',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Politika zasebnosti – Begovac Spedition',
    description: 'Politika zasebnosti podjetja Begovac Spedition d.o.o. Varstvo osebnih podatkov v skladu z GDPR.',
    url: 'https://spedition-begovac.com/politika-zasebnosti',
    images: [{ url: '/images/hero-branded-truck.png', width: 1200, height: 630, alt: 'Politika zasebnosti – Begovac Spedition' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Domov', item: 'https://spedition-begovac.com' },
    { '@type': 'ListItem', position: 2, name: 'Politika zasebnosti', item: 'https://spedition-begovac.com/politika-zasebnosti' },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PrivacyClient />
    </>
  );
}
