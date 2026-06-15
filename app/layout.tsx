import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Consortium Finanzen Kredit | Courtier en crédit européen',
    template: '%s | Consortium Finanzen Kredit',
  },
  description:
    'Votre partenaire de confiance pour tous vos besoins de financement en Europe. Prêts immobiliers, professionnels, personnels — conseil indépendant et solutions sur mesure depuis Francfort.',
  keywords: ['courtier crédit', 'prêt immobilier Europe', 'financement PME', 'Kreditvermittler Frankfurt'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Consortium Finanzen Kredit',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans text-slate-800 bg-white">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
