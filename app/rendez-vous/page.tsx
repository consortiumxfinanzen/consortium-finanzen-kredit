import type { Metadata } from 'next'
import RendezVousContent from '@/components/pages/RendezVousContent'

export const metadata: Metadata = {
  title: 'Beratungstermin vereinbaren',
  description: 'Vereinbaren Sie einen Termin mit einem Berater von Consortium Finanzen Kredit. Online, per E-Mail und WhatsApp verfügbar.',
}

export default function RendezVousPage() {
  return <RendezVousContent />
}
