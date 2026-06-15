'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function ServicesContent() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{s.heading}</h1>
          <p className="text-lg text-slate-300 max-w-2xl">{s.sub}</p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {s.items.map(({ id, icon, title, subtitle, desc, items }) => (
            <article key={id} id={id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 scroll-mt-24">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div aria-hidden="true"
                  className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-3xl shrink-0">
                  {icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-primary-600 font-semibold uppercase tracking-wider mb-1">{subtitle}</p>
                  <h2 className="text-2xl font-bold text-primary-950 mb-3">{title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6" aria-label={title}>
                    {items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 bg-primary-950 hover:bg-primary-900 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors">
                    {s.applyBtn}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{s.ctaHeading}</h2>
          <p className="text-slate-300 mb-8 text-lg">{s.ctaSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rendez-vous"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold px-8 py-4 rounded-xl text-lg transition-colors">
              {s.ctaPrimary}
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
              {s.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
