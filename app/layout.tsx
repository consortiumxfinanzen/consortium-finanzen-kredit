import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Consortium Finanzen Kredit | Unabhängiger Kreditvermittler',
    template: '%s | Consortium Finanzen Kredit',
  },
  description:
    'Ihr unabhängiger Kreditvermittler in Europa. Immobilienfinanzierung, Unternehmenskredit, Privatkredit — maßgeschneiderte Lösungen aus Frankfurt.',
  keywords: ['Kreditvermittler Frankfurt', 'Immobilienfinanzierung Europa', 'KMU-Finanzierung', 'courtier crédit'],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Consortium Finanzen Kredit',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans text-slate-800 bg-white">
        <LanguageProvider>
          <a href="#main-content" className="skip-link">
            Zum Inhalt springen
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}
