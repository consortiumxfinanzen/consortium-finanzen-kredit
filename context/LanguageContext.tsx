'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: typeof translations['de']
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'de',
  setLocale: () => {},
  t: translations['de'],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('de')

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale
    if (stored === 'fr' || stored === 'de') {
      setLocaleState(stored)
    }
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('locale', l)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
