'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function AProposContent() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <div className="pt-16 md:pt-20">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-200 font-medium mb-6">
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-gold-400" />
            {a.hero.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {a.hero.title}{' '}
            <span className="text-gold-400">{a.hero.titleHighlight}</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">{a.hero.sub}</p>
        </div>
      </section>

      {/* ── HISTOIRE ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-950 mb-6">{a.history.heading}</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>{a.history.p1}</p>
                <p>{a.history.p2}</p>
                <p>{a.history.p3}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {a.history.stats.map(({ n, l }) => (
                <div key={l} className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100">
                  <p className="text-4xl font-bold text-primary-950 mb-1">{n}</p>
                  <p className="text-sm text-slate-500 font-medium">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-950 text-white rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl" aria-hidden="true">🎯</span>
              </div>
              <h2 className="text-2xl font-bold text-gold-400 mb-4">{a.mission.missionHeading}</h2>
              <p className="text-slate-300 leading-relaxed">{a.mission.missionText}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                <span className="text-2xl" aria-hidden="true">🌟</span>
              </div>
              <h2 className="text-2xl font-bold text-primary-950 mb-4">{a.mission.visionHeading}</h2>
              <p className="text-slate-600 leading-relaxed">{a.mission.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">{a.values.heading}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{a.values.sub}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.values.items.map(({ icon, title, desc }) => (
              <li key={title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-primary-200 hover:shadow-sm transition-all duration-200">
                <span aria-hidden="true" className="text-3xl block mb-4">{icon}</span>
                <h3 className="text-lg font-bold text-primary-950 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PRÉSENCE EUROPÉENNE ── */}
      <section className="bg-primary-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {a.presence.heading}
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">{a.presence.sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {a.presence.countries.map(({ flag, name, city, status }) => (
              <div key={name} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors">
                <span aria-hidden="true" className="text-4xl block mb-3">{flag}</span>
                <p className="font-bold text-white text-sm mb-1">{name}</p>
                <p className="text-slate-400 text-xs mb-3">{city}</p>
                <span className="inline-block bg-green-500/20 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">{a.team.heading}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{a.team.sub}</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {a.team.members.map(({ initials, name, role, bio }) => (
              <li key={initials} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary-950 flex items-center justify-center mx-auto mb-5">
                  <span className="text-gold-400 font-bold text-xl">{initials}</span>
                </div>
                <h3 className="font-bold text-primary-950 text-lg mb-1">{name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-3">{role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{bio}</p>
              </li>
            ))}
          </ul>
          <p className="text-center text-sm text-slate-400 mt-10">{a.team.footer}</p>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">{a.cases.heading}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{a.cases.sub}</p>
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {a.cases.items.map(({ tag, title, context, result, amount, color, tagColor }) => (
              <li key={title} className={`rounded-2xl p-6 border ${color}`}>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${tagColor}`}>
                  {tag}
                </span>
                <h3 className="font-bold text-primary-950 text-lg mb-3 leading-snug">{title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-slate-600 mb-0.5">{a.cases.contextLabel}</p>
                    <p className="text-slate-500">{context}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-600 mb-0.5">{a.cases.resultLabel}</p>
                    <p className="text-slate-500">{result}</p>
                  </div>
                  <div className="pt-2 border-t border-current/10">
                    <p className="text-xs text-slate-400">{a.cases.amountLabel}</p>
                    <p className="text-xl font-bold text-primary-950 mt-0.5">{amount}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PARTENAIRES ── */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-10">
            {a.partnersLabel}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Commerzbank', 'BNP Paribas', 'ING Group', 'Société Générale', 'KfW', 'Belfius'].map(name => (
              <div key={name}
                className="h-16 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center px-3 hover:border-primary-200 transition-colors">
                <span className="text-xs font-bold text-slate-400 text-center">{name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">{a.partnersDisclaimer}</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{a.cta.heading}</h2>
          <p className="text-slate-300 mb-8 text-lg">{a.cta.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg">
              {a.cta.primary}
            </Link>
            <Link href="/rendez-vous"
              className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200">
              {a.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
