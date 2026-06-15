import type { Metadata } from 'next'
import ContactPageContent from '@/components/pages/ContactPageContent'

export const metadata: Metadata = {
  title: 'Finanzierungsanfrage',
  description: 'Stellen Sie Ihre Finanzierungsanfrage. Privatkredite in 24 Stunden bearbeitet, sonstige Finanzierungen in 72 Stunden.',
}

export default function ContactPage() {
  return <ContactPageContent />
}
