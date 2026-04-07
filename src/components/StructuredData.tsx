export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://begovac-spedition.com/#organization',
        name: 'Begovac Spedition d.o.o.',
        url: 'https://begovac-spedition.com',
        logo: 'https://begovac-spedition.com/logo.png',
        description: 'Specializirani za mednarodni transport in špedicijo po vsej Evropi.',
        telephone: '+38640123456',
        email: 'info@begovac-spedition.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Glavna ulica 1',
          addressLocality: 'Ljubljana',
          postalCode: '1000',
          addressCountry: 'SI',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 46.0569,
          longitude: 14.5058,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '20:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '14:00',
          },
        ],
        sameAs: [
          'https://www.facebook.com/begovacspedition',
          'https://www.linkedin.com/company/begovac-spedition',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Transportne storitve',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cestni prevoz' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mednarodna špedicija' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skladiščenje' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Posebni prevozi' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hladna veriga' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://begovac-spedition.com/#website',
        url: 'https://begovac-spedition.com',
        name: 'Begovac Spedition',
        publisher: { '@id': 'https://begovac-spedition.com/#organization' },
        inLanguage: ['sl', 'en', 'de', 'es'],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://begovac-spedition.com/#localbusiness',
        name: 'Begovac Spedition d.o.o.',
        image: 'https://begovac-spedition.com/og-image.jpg',
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        areaServed: {
          '@type': 'Place',
          name: 'Europe',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
