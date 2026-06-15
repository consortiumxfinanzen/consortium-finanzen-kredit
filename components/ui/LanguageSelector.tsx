'use client'

import { useLanguage } from '@/context/LanguageContext'
import type { Locale } from '@/lib/i18n'

export default function LanguageSelector() {
  const { locale, setLocale, t } = useLanguage()

  const toggle = () => setLocale(locale === 'de' ? 'fr' : 'de')
  const next: Locale = locale === 'de' ? 'fr' : 'de'

  return (
    <button
      onClick={toggle}
      aria-label={`Switch language to ${next === 'de' ? 'Deutsch' : 'Français'}`}
      className="flex items-center gap-1.5 border border-slate-200 hover:border-primary-400 text-slate-600 hover:text-primary-800 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
    >
      {t.langSelector[next]}
    </button>
  )
}
