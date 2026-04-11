import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Kontakt – Stopite v stik z nami',
  description: 'Kontaktirajte Begovac Spedition. Pokličite +386 40 482 669 ali pišite na info@begovac-spedition.com. Dispečerstvo dosegljivo 24/7. Odgovorimo v 2 urah.',
  alternates: {
    canonical: 'https://begovac-spedition.com/kontakt',
  },
  openGraph: {
    title: 'Kontakt – Begovac Spedition',
    description: 'Kontaktirajte Begovac Spedition. Pokličite +386 40 482 669 ali pišite na info@begovac-spedition.com. Dispečerstvo dosegljivo 24/7.',
    url: 'https://begovac-spedition.com/kontakt',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Kontakt – Begovac Spedition' }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Domov', item: 'https://begovac-spedition.com' },
    { '@type': 'ListItem', position: 2, name: 'Kontakt', item: 'https://begovac-spedition.com/kontakt' },
  ],
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://begovac-spedition.com/kontakt',
  url: 'https://begovac-spedition.com/kontakt',
  name: 'Kontakt – Begovac Spedition',
  description: 'Stopite v stik z Begovac Spedition. Na voljo 24/7.',
  publisher: { '@id': 'https://begovac-spedition.com/#organization' },
  inLanguage: 'sl',
  mainEntity: {
    '@type': 'Organization',
    name: 'Begovac Spedition d.o.o.',
    telephone: ['+38640485905', '+38640482669'],
    email: 'info@begovac-spedition.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lunačkova ulica 8',
      addressLocality: 'Mirna',
      postalCode: '8223',
      addressCountry: 'SI',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+38640482669',
        contactType: 'customer service',
        availableLanguage: ['Slovenian', 'English', 'German'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: '+38640485905',
        contactType: 'billing support',
        availableLanguage: ['Slovenian'],
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <ContactClient />
    </>
  );
}
