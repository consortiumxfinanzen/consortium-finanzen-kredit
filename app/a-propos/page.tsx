import type { Metadata } from 'next'
import AProposContent from '@/components/pages/AProposContent'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://consortium-finanzen-kredit.de'

export const metadata: Metadata = {
  title: 'Über uns — Unabhängiger Kreditvermittler seit 2015',
  description:
    'Entdecken Sie, wer wir sind: unsere Geschichte, Mission, Werte und Präsenz in 5 europäischen Ländern. Unabhängiger Kreditvermittler mit Sitz in Frankfurt.',
  alternates: {
    canonical: `${BASE}/a-propos`,
  },
  openGraph: {
    url: `${BASE}/a-propos`,
    title: 'Über uns | Consortium Finanzen Kredit',
    description:
      'Unabhängiger Kreditvermittler seit 2015 — 5 europäische Länder, 200+ Bankpartner, über 500 Mio. € vermittelt.',
  },
}

export default function AProposPage() {
  return <AProposContent />
}
