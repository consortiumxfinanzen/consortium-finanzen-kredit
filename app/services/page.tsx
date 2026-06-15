import type { Metadata } from 'next'
import ServicesContent from '@/components/pages/ServicesContent'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://consortium-finanzen-kredit.de'

export const metadata: Metadata = {
  title: 'Finanzierungslösungen — Immobilien, KMU & Privatkredite',
  description:
    'Immobilienfinanzierung, Privatkredit, Unternehmenskredit, Umschuldung, KMU-Finanzierung — alle Lösungen in ganz Europa. Unabhängige Beratung aus Frankfurt.',
  alternates: {
    canonical: `${BASE}/services`,
  },
  openGraph: {
    url: `${BASE}/services`,
    title: 'Unsere Finanzierungslösungen | Consortium Finanzen Kredit',
    description:
      'Immobilienfinanzierung, Privatkredit, Unternehmenskredit — maßgeschneiderte Lösungen für ganz Europa.',
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}
