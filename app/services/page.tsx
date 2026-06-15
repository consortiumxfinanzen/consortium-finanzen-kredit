import type { Metadata } from 'next'
import ServicesContent from '@/components/pages/ServicesContent'

export const metadata: Metadata = {
  title: 'Unsere Finanzierungslösungen',
  description: 'Immobilienfinanzierung, Privatkredit, Unternehmenskredit, Umschuldung, KMU-Finanzierung — alle Lösungen in Europa.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
