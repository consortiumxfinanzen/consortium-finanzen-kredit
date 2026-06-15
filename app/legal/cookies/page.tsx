import type { Metadata } from 'next'
import CookieResetButton from '@/components/ui/CookieResetButton'

export const metadata: Metadata = {
  title: 'Politique de cookies',
  robots: { index: false, follow: false },
}

export default function CookiesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-primary-950 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Politique de cookies</h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
          <h2>Qu'est-ce qu'un cookie ?</h2>
          <p>Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un site web.</p>

          <h2>Cookies utilisés sur ce site</h2>
          <table>
            <thead><tr><th>Nom</th><th>Type</th><th>Durée</th><th>Finalité</th></tr></thead>
            <tbody>
              <tr><td>cookie-consent</td><td>Fonctionnel</td><td>1 an</td><td>Mémoriser votre choix de consentement</td></tr>
              <tr><td>Analytics Matomo</td><td>Analytique</td><td>13 mois</td><td>Statistiques de visite anonymisées</td></tr>
            </tbody>
          </table>

          <h2>Consentement</h2>
          <p>
            Aucun cookie non essentiel n'est déposé sans votre accord explicite.
            Vous pouvez retirer votre consentement à tout moment en cliquant sur{' '}
            <CookieResetButton />.
          </p>

          <p className="text-sm text-slate-400 mt-8">Dernière mise à jour : Juin 2026</p>
        </div>
      </section>
    </div>
  )
}
