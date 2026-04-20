export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://spedition-begovac.com/#organization',
        name: 'Begovac Spedition d.o.o.',
        url: 'https://spedition-begovac.com',
        logo: 'https://spedition-begovac.com/logo-signature.png',
        description: 'Specializirani za mednarodni transport in špedicijo po vsej Evropi.',
        telephone: ['+38640485905', '+38640482669'],
        email: 'info@spedition-begovac.com',
        address: [
          {
            '@type': 'PostalAddress',
            name: 'Knjigovodstvo in poslovni naslov',
            streetAddress: 'Lunačkova ulica 8',
            addressLocality: 'Mirna',
            postalCode: '8223',
            addressCountry: 'SI',
          },
          {
            '@type': 'PostalAddress',
            name: 'Parkirišče',
            streetAddress: 'Tržaška cesta 35',
            addressLocality: 'Maribor',
            postalCode: '2000',
            addressCountry: 'SI',
          },
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 46.5547,
          longitude: 15.6467,
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
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Logistično svetovanje' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://spedition-begovac.com/#website',
        url: 'https://spedition-begovac.com',
        name: 'Begovac Spedition',
        publisher: { '@id': 'https://spedition-begovac.com/#organization' },
        inLanguage: ['sl', 'en', 'de', 'es'],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://spedition-begovac.com/#localbusiness',
        name: 'Begovac Spedition d.o.o.',
        url: 'https://spedition-begovac.com',
        image: 'https://spedition-begovac.com/images/hero-branded-truck.png',
        logo: 'https://spedition-begovac.com/logo-signature.png',
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        email: 'info@spedition-begovac.com',
        telephone: ['+38640485905', '+38640482669'],
        address: [
          {
            '@type': 'PostalAddress',
            name: 'Knjigovodstvo in poslovni naslov',
            streetAddress: 'Lunačkova ulica 8',
            addressLocality: 'Mirna',
            postalCode: '8223',
            addressCountry: 'SI',
          },
          {
            '@type': 'PostalAddress',
            name: 'Parkirišče',
            streetAddress: 'Tržaška cesta 35',
            addressLocality: 'Maribor',
            postalCode: '2000',
            addressCountry: 'SI',
          },
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 46.5547,
          longitude: 15.6467,
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
        areaServed: {
          '@type': 'Place',
          name: 'Europe',
        },
        sameAs: [
          'https://www.facebook.com/begovacspedition',
          'https://www.linkedin.com/company/begovac-spedition',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Katere države pokrivate s svojimi prevozi?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pokrivamo vse države EU in širšo Evropo – skupaj 15+ destinacij. Naša mreža partnerjev zagotavlja nemoteno dostavo od Iberskega polotoka do Baltika.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ali nudite FTL in LTL prevoze?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Da, nudimo tako celotovorni (FTL) kot delni (LTL) cestni prevoz. Prilagodimo se vaši količini blaga in časovnim zahtevam.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kako hitro odgovorite na povpraševanje?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Na vsako povpraševanje odgovorimo v roku 2 ur. Dispečerska ekipa je dosegljiva 24 ur na dan, 7 dni v tednu.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ali nudite sledenje pošiljkam?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Da, vse pošiljke so opremljene z GPS sledenjem. Stranke imajo stalni dostop do statusa pošiljke prek naše digitalne platforme.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kako se obrniti na vas v nujnih primerih?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Za nujne primere pokličite dispečersko ekipo na +386 40 482 669 – dosegljivi smo 24/7, vključno z vikendi in prazniki.',
            },
          },
        ],
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
