import type { Metadata } from 'next'
import ContactPageContent from '@/components/pages/ContactPageContent'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://consortium-finanzen-kredit.de'

export const metadata: Metadata = {
  title: 'Finanzierungsanfrage stellen — Kostenlos & Unverbindlich',
  description:
    'Stellen Sie Ihre Finanzierungsanfrage kostenlos und unverbindlich. Privatkredite in 24 Stunden bearbeitet, sonstige Finanzierungen in 72 Stunden.',
  alternates: {
    canonical: `${BASE}/contact`,
  },
  openGraph: {
    url: `${BASE}/contact`,
    title: 'Finanzierungsanfrage stellen | Consortium Finanzen Kredit',
    description: 'Kostenlose und unverbindliche Finanzierungsanfrage. Antwort innerhalb von 24–72 Stunden.',
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
