import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import WhyUs from '@/components/home/WhyUs';
import Fleet from '@/components/home/Fleet';
import Testimonials from '@/components/home/Testimonials';
import Partners from '@/components/home/Partners';
import CTA from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Begovac Spedition – Zanesljiv partner v logistiki',
  description: 'Specializirani za mednarodni transport in špedicijo po vsej Evropi. 8+ let izkušenj, 15+ vozil, pokritost 15 evropskih držav. FTL, LTL in posebni prevozi.',
  alternates: {
    canonical: 'https://begovac-spedition.com',
  },
  openGraph: {
    title: 'Begovac Spedition – Zanesljiv partner v logistiki',
    description: 'Specializirani za mednarodni transport in špedicijo po vsej Evropi. 8+ let izkušenj, 15+ vozil, pokritost 15 evropskih držav.',
    url: 'https://begovac-spedition.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Begovac Spedition – Mednarodni transport in špedicija' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Domov', item: 'https://begovac-spedition.com' },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://begovac-spedition.com/',
  url: 'https://begovac-spedition.com',
  name: 'Begovac Spedition – Zanesljiv partner v logistiki',
  description: 'Specializirani za mednarodni transport in špedicijo po vsej Evropi.',
  isPartOf: { '@id': 'https://begovac-spedition.com/#website' },
  about: { '@id': 'https://begovac-spedition.com/#organization' },
  inLanguage: 'sl',
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Hero />
      <Partners />
      <Services />
      <Stats />
      <WhyUs />
      <Fleet />
      <Testimonials />
      <CTA />
    </>
  );
}
