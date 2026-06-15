export default function StructuredData() {
  const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://consortium-finanzen-kredit.de'

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FinancialService',
        '@id': `${BASE}/#organization`,
        name: 'Consortium Finanzen Kredit',
        alternateName: 'Consortium Finanzen',
        description: 'Unabhängiger Kreditvermittler in Europa — Immobilien-, Unternehmens- und Privatkredite. Kostenlose Beratung aus Frankfurt.',
        url: BASE,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE}/icon`,
          width: 32,
          height: 32,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Frankfurt am Main',
          addressCountry: 'DE',
        },
        areaServed: [
          { '@type': 'Country', name: 'Deutschland' },
          { '@type': 'Country', name: 'Frankreich' },
          { '@type': 'Country', name: 'Belgien' },
          { '@type': 'Country', name: 'Luxemburg' },
          { '@type': 'Country', name: 'Schweiz' },
        ],
        serviceType: [
          'Immobilienfinanzierung',
          'Unternehmenskredit',
          'Privatkredit',
          'KMU-Finanzierung',
          'Umschuldung',
        ],
        priceRange: '€€',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE}/#website`,
        url: BASE,
        name: 'Consortium Finanzen Kredit',
        publisher: { '@id': `${BASE}/#organization` },
        inLanguage: ['de', 'fr'],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
