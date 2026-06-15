import type { Metadata } from 'next'
import RendezVousContent from '@/components/pages/RendezVousContent'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://consortium-finanzen-kredit.de'

export const metadata: Metadata = {
  title: 'Kostenlosen Beratungstermin vereinbaren',
  description:
    'Vereinbaren Sie einen kostenlosen Beratungstermin mit einem Experten von Consortium Finanzen Kredit. Online-Meeting, E-Mail und WhatsApp verfügbar.',
  alternates: {
    canonical: `${BASE}/rendez-vous`,
  },
  openGraph: {
    url: `${BASE}/rendez-vous`,
    title: 'Kostenlosen Beratungstermin vereinbaren | Consortium Finanzen Kredit',
    description: 'Online, per E-Mail oder WhatsApp — kostenlose Erstberatung durch unsere Finanzierungsexperten.',
  },
}

export default function RendezVousPage() {
  return <RendezVousContent />
}
