'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function RendezVousContent() {
  const { t } = useLanguage()
  const r = t.rendezVous

  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-gradient-to-br from-primary-950 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{r.heading}</h1>
          <p className="text-lg text-slate-300 max-w-2xl">{r.sub}</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Cal.com embed */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
            <div className="p-8 text-center">
              <div aria-hidden="true" className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4 text-3xl">
                📅
              </div>
              <h2 className="text-xl font-bold text-primary-950 mb-2">{r.calHeading}</h2>
              <p className="text-slate-500 text-sm mb-6">{r.calSub}</p>

              {/*
                Cal.com integration:
                1. Create a free account at cal.com
                2. Configure your availability
                3. Replace the URL below with your Cal.com link
                4. Uncomment the iframe block

              <iframe
                src="https://cal.com/your-username/consultation"
                width="100%"
                height="600"
                frameBorder="0"
                title="Termin buchen"
                className="rounded-xl"
              />
              */}

              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary-950 hover:bg-primary-900 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                {r.calBtn}
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact alternatives */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://wa.me/4915216131169"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-green-200 hover:border-green-400 text-center transition-colors group"
              aria-label="WhatsApp kontaktieren"
            >
              <div aria-hidden="true" className="text-3xl mb-3 text-green-600 flex justify-center">{WA_ICON}</div>
              <h3 className="font-bold text-primary-950 mb-1">{r.wa.title}</h3>
              <p className="text-xs text-slate-500 mb-1">{r.wa.number}</p>
              <p className="text-xs text-green-600 font-semibold">{r.wa.label}</p>
            </a>

            <a
              href="mailto:kontakt@consortiumxfinanzen.com"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-300 text-center transition-colors"
            >
              <div aria-hidden="true" className="text-2xl mb-3">📧</div>
              <h3 className="font-bold text-primary-950 mb-1">{r.email.title}</h3>
              <p className="text-xs text-slate-500 mb-1">{r.email.address}</p>
              <p className="text-xs text-slate-500 font-semibold">{r.email.label}</p>
            </a>

            <Link
              href="/contact"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-300 text-center transition-colors block"
            >
              <div aria-hidden="true" className="text-2xl mb-3">📝</div>
              <h3 className="font-bold text-primary-950 mb-1">{r.form.title}</h3>
              <p className="text-xs text-slate-500 mb-1">{r.form.desc}</p>
              <p className="text-xs text-slate-500 font-semibold">{r.form.label}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
