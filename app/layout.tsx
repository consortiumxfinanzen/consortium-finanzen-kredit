import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'
import { LanguageProvider } from '@/context/LanguageContext'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import StructuredData from '@/components/analytics/StructuredData'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://consortium-finanzen-kredit.de'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Consortium Finanzen Kredit | Unabhängiger Kreditvermittler',
    template: '%s | Consortium Finanzen Kredit',
  },
  description:
    'Ihr unabhängiger Kreditvermittler in Europa. Immobilienfinanzierung, Unternehmenskredit, Privatkredit — maßgeschneiderte Lösungen aus Frankfurt.',
  keywords: [
    'Kreditvermittler Frankfurt',
    'Immobilienfinanzierung Europa',
    'KMU-Finanzierung',
    'Unternehmenskredit',
    'Privatkredit',
    'courtier crédit Europe',
  ],
  authors: [{ name: 'Consortium Finanzen Kredit', url: BASE }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'fr_FR',
    siteName: 'Consortium Finanzen Kredit',
    url: BASE,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Consortium Finanzen Kredit — Unabhängiger Kreditvermittler in Europa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consortium Finanzen Kredit | Unabhängiger Kreditvermittler',
    description:
      'Ihr unabhängiger Kreditvermittler in Europa. Immobilien-, Unternehmens- und Privatkredite aus Frankfurt.',
    images: ['/opengraph-image'],
  },
  verification: {
    google: '6do8zzWUjTn1ISDnVV2_OuqgSYO5xs7pFHOyyTFyOW8',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans text-slate-800 bg-white">
        <StructuredData />
        <LanguageProvider>
          <a href="#main-content" className="skip-link">
            Zum Inhalt springen
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
        </LanguageProvider>
        {gaId && <GoogleAnalytics measurementId={gaId} />}
      </body>
    </html>
  )
}
