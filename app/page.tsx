import type { Metadata } from 'next'
import HomeContent from '@/components/pages/HomeContent'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://consortium-finanzen-kredit.de'

export const metadata: Metadata = {
  title: 'Consortium Finanzen Kredit | Unabhängiger Kreditvermittler Europa',
  description:
    'Consortium Finanzen Kredit begleitet Sie bei allen Finanzierungsprojekten in Europa. Immobilien-, Unternehmens- und Privatkredite — unabhängige Beratung aus Frankfurt.',
  alternates: {
    canonical: BASE,
  },
  openGraph: {
    url: BASE,
    title: 'Consortium Finanzen Kredit | Unabhängiger Kreditvermittler Europa',
    description:
      'Immobilien-, Unternehmens- und Privatkredite. Kostenlose, unabhängige Beratung aus Frankfurt — 5 Länder, 200+ Partner.',
  },
}

export default function HomePage() {
  return <HomeContent />
}
