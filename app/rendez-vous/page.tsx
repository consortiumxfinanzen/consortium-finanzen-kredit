import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Prendre rendez-vous',
  description: 'Réservez un créneau avec un conseiller Consortium Finanzen Kredit. Disponible en ligne, par email et sur WhatsApp.',
}

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function RendezVousPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-gradient-to-br from-primary-950 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Prendre rendez-vous</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Choisissez le créneau qui vous convient. Nos conseillers sont disponibles en français, allemand et anglais.
          </p>
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
              <h2 className="text-xl font-bold text-primary-950 mb-2">Réservez votre créneau</h2>
              <p className="text-slate-500 text-sm mb-6">
                Consultez notre calendrier et choisissez le moment qui vous convient le mieux.
              </p>

              {/*
                INTÉGRATION CAL.COM :
                1. Créez un compte gratuit sur cal.com
                2. Configurez votre disponibilité
                3. Remplacez l'URL ci-dessous par votre lien Cal.com
                4. Décommentez le bloc iframe

              <iframe
                src="https://cal.com/votre-username/consultation-financement"
                width="100%"
                height="600"
                frameBorder="0"
                title="Réserver un rendez-vous"
                className="rounded-xl"
              />
              */}

              {/* Placeholder en attendant Cal.com */}
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary-950 hover:bg-primary-900 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Accéder au calendrier de réservation
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Alternatives de contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://wa.me/4915216131169"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-green-200 hover:border-green-400 text-center transition-colors group"
              aria-label="Contacter sur WhatsApp"
            >
              <div aria-hidden="true" className="text-3xl mb-3 text-green-600 flex justify-center">{WA_ICON}</div>
              <h3 className="font-bold text-primary-950 mb-1">WhatsApp</h3>
              <p className="text-xs text-slate-500 mb-1">+49 1521 6131169</p>
              <p className="text-xs text-green-600 font-semibold">Réponse immédiate</p>
            </a>

            <a
              href="mailto:kontakt@consortiumxfinanzen.com"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-300 text-center transition-colors"
            >
              <div aria-hidden="true" className="text-2xl mb-3">📧</div>
              <h3 className="font-bold text-primary-950 mb-1">Par email</h3>
              <p className="text-xs text-slate-500 mb-1">kontakt@consortiumxfinanzen.com</p>
              <p className="text-xs text-slate-500 font-semibold">Réponse sous 24h</p>
            </a>

            <Link
              href="/contact"
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-300 text-center transition-colors block"
            >
              <div aria-hidden="true" className="text-2xl mb-3">📝</div>
              <h3 className="font-bold text-primary-950 mb-1">Formulaire</h3>
              <p className="text-xs text-slate-500 mb-1">Déposez votre demande en ligne</p>
              <p className="text-xs text-slate-500 font-semibold">Analyse sous 24–72h</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
