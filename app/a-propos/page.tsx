import type { Metadata } from 'next'
import AProposContent from '@/components/pages/AProposContent'

export const metadata: Metadata = {
  title: 'Über uns — Consortium Finanzen Kredit',
  description:
    'Entdecken Sie, wer wir sind: unsere Geschichte, Mission, Werte und Präsenz in 5 europäischen Ländern. Unabhängiger Kreditvermittler mit Sitz in Frankfurt.',
}

export default function AProposPage() {
  return <AProposContent />
}
