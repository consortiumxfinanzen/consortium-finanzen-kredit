import type { Metadata } from 'next'
import HomeContent from '@/components/pages/HomeContent'

export const metadata: Metadata = {
  title: 'Unabhängiger Kreditvermittler — Immobilien- und Unternehmensfinanzierung',
  description:
    'Consortium Finanzen Kredit begleitet Sie bei allen Finanzierungsprojekten in Europa. Immobilien-, Berufs- und Privatkredite — unabhängige Beratung aus Frankfurt.',
}

export default function HomePage() {
  return <HomeContent />
}
