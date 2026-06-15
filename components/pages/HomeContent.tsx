'use client'

import Link from 'next/link'
import LoanSimulator from '@/components/sections/LoanSimulator'
import { useLanguage } from '@/context/LanguageContext'

const PARTNER_ICONS = [
  { color: 'bg-blue-50 text-blue-700', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V7m0 0l-4 4m4-4l4 4M3 21h18M3 10.5h18M5 10.5V21M19 10.5V21" />
    </svg>
  )},
  { color: 'bg-indigo-50 text-indigo-700', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )},
  { color: 'bg-sky-50 text-sky-700', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  )},
  { color: 'bg-red-50 text-red-700', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )},
  { color: 'bg-blue-50 text-blue-800', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  )},
  { color: 'bg-orange-50 text-orange-700', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )},
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-gold-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function HomeContent() {
  const { t } = useLanguage()
  const h = t.home

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary-700/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-200 font-medium mb-6">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-gold-400" />
              {h.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {h.hero.title}{' '}
              <span className="text-gold-400">{h.hero.titleHighlight}</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {h.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact"
                className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg hover:scale-105">
                {h.hero.cta}
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/rendez-vous"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/70 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200">
                {h.hero.ctaSecondary}
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-5 text-sm text-slate-400" aria-label="Garanties">
              {h.hero.badges.map(g => (
                <li key={g} className="flex items-center gap-1.5">
                  <CheckIcon />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section aria-label="Kennzahlen" className="bg-white border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {h.stats.map(({ value, suffix, label }) => (
              <div key={label}>
                <dt className="text-3xl sm:text-4xl font-bold text-primary-950">
                  {value}<span className="text-gold-500">{suffix}</span>
                </dt>
                <dd className="mt-1 text-sm text-slate-500 font-medium">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────── */}
      <section aria-labelledby="services-heading" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
              {h.services.heading}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{h.services.sub}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {h.services.items.map(({ icon, title, href, desc }) => (
              <li key={title}>
                <Link href={href}
                  className="group flex flex-col h-full bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                  <span aria-hidden="true" className="text-3xl mb-4">{icon}</span>
                  <h3 className="text-lg font-bold text-primary-950 mb-2 group-hover:text-primary-700 transition-colors">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{desc}</p>
                  <span className="mt-4 flex items-center text-primary-600 text-sm font-semibold" aria-hidden="true">
                    {h.services.learnMore}
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PROCESSUS ───────────────────────────────────────── */}
      <section aria-labelledby="process-heading" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
              {h.process.heading}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{h.process.sub}</p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {h.process.steps.map(({ step, icon, title, desc }, i) => (
              <li key={step} className="relative">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 h-full hover:border-primary-200 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span aria-hidden="true" className="text-2xl">{icon}</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{step}</span>
                  </div>
                  <h3 className="font-bold text-primary-950 text-base mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
                {i < h.process.steps.length - 1 && (
                  <div aria-hidden="true" className="hidden lg:block absolute top-10 -right-4 z-10 text-slate-300 text-xl font-light">→</div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SIMULATEUR ──────────────────────────────────────── */}
      <section id="simulateur" aria-labelledby="sim-heading" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="sim-heading" className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
              {h.simulator.heading}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{h.simulator.sub}</p>
          </div>
          <LoanSimulator />
        </div>
      </section>

      {/* ── POURQUOI NOUS ───────────────────────────────────── */}
      <section aria-labelledby="why-heading" className="bg-primary-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold mb-4">
              {h.why.heading}{' '}
              <span className="text-gold-400">{h.why.headingHighlight}</span>{' '}
              {h.why.headingEnd}
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {h.why.items.map(({ title, desc }) => (
              <li key={title} className="flex gap-4">
                <div aria-hidden="true" className="mt-0.5 w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center shrink-0">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ─────────────────────────────────────── */}
      <section aria-labelledby="testimonials-heading" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
              {h.testimonials.heading}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{h.testimonials.sub}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {h.testimonials.items.map(({ quote, name, location, amount, type }) => (
              <li key={name} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col hover:border-primary-200 hover:shadow-sm transition-all duration-200">
                <div aria-label="5 Sterne" className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <StarIcon key={s} />)}
                </div>
                <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 italic mb-4">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-primary-950 text-sm">{name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{location}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {type}
                    </span>
                    <span className="inline-block bg-gold-100 text-gold-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {amount}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PARTENAIRES ─────────────────────────────────────── */}
      <section aria-labelledby="partners-heading" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="partners-heading" className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
              {h.partners.heading}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{h.partners.sub}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {h.partners.items.map(({ flag, country, name, desc }, i) => (
              <li key={name} className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary-200 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${PARTNER_ICONS[i].color}`}>
                    {PARTNER_ICONS[i].icon}
                  </div>
                  <span className="text-2xl" aria-label={country}>{flag}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{country}</p>
                  <h3 className="font-bold text-primary-950 text-base mb-2">{name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-center text-xs text-slate-400 mt-8">{h.partners.disclaimer}</p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
              {h.faq.heading}
            </h2>
            <p className="text-lg text-slate-500">{h.faq.sub}</p>
          </div>
          <ul className="space-y-3">
            {h.faq.items.map(({ q, a }) => (
              <li key={q}>
                <details className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:border-primary-200 transition-colors">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-bold text-primary-950 text-sm sm:text-base">
                    <span className="flex items-center gap-3">
                      <span aria-hidden="true" className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 text-gold-600 text-xs font-bold">?</span>
                      {q}
                    </span>
                    <svg aria-hidden="true" className="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 border-t border-slate-100">
                    <p className="text-slate-500 text-sm leading-relaxed pt-4 pl-9">{a}</p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <p className="text-slate-500 text-sm mb-4">{h.faq.noAnswer}</p>
            <Link href="/contact"
              className="inline-flex items-center justify-center bg-primary-950 hover:bg-primary-900 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              {h.faq.askBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ──────────────────────────────────────── */}
      <section aria-labelledby="cta-heading" className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-4">{h.cta.heading}</h2>
          <p className="text-lg text-slate-300 mb-8">{h.cta.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg">
              {h.cta.primary}
            </Link>
            <Link href="/rendez-vous"
              className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200">
              {h.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
