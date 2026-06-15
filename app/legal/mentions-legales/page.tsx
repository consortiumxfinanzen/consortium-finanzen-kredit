import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Impressum',
  description: 'Mentions légales et informations légales de Consortium Finanzen Kredit.',
  robots: { index: false, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-primary-950 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Mentions légales — Impressum</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">

          <h2>Éditeur du site</h2>
          <address className="not-italic">
            <strong>Consortium Finanzen Kredit</strong><br />
            [Adresse complète à compléter]<br />
            Francfort-sur-le-Main, Allemagne<br />
            <br />
            Email : <a href="mailto:kontakt@consortiumxfinanzen.com">kontakt@consortiumxfinanzen.com</a><br />
            WhatsApp : <a href="https://wa.me/4915216131169">+49 1521 6131169</a>
          </address>

          <h2>Représentant légal</h2>
          <p>[Nom et prénom du représentant légal — à compléter]</p>

          <h2>Forme juridique</h2>
          <p>[Forme juridique — GmbH, UG, SAS, etc. — à compléter lors de l'immatriculation]</p>

          <h2>Numéro d'immatriculation</h2>
          <p>[Numéro de registre du commerce — à compléter]</p>

          <h2>Numéro TVA intracommunautaire</h2>
          <p>[À compléter]</p>

          <h2>Activité réglementée</h2>
          <p>
            Consortium Finanzen Kredit exerce une activité d'intermédiaire en opérations de banque et services de paiement (courtage en crédit).
            Cette activité est soumise à agrément dans chaque pays d'exercice.
          </p>
          <ul>
            <li><strong>Allemagne :</strong> Agrément BaFin en cours d'obtention — numéro à compléter dès obtention</li>
            <li><strong>France :</strong> Immatriculation ORIAS en cours — numéro à compléter dès obtention</li>
            <li><strong>Belgique :</strong> Enregistrement FSMA en cours</li>
            <li><strong>Luxembourg :</strong> Agrément CSSF en cours</li>
            <li><strong>Pays-Bas :</strong> Agrément AFM en cours</li>
          </ul>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., avec des serveurs localisés dans l'Union Européenne.
            Les données sont hébergées en conformité avec le Règlement Général sur la Protection des Données (RGPD).
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logos, graphiques) est la propriété exclusive de
            Consortium Finanzen Kredit et est protégé par les lois relatives à la propriété intellectuelle.
            Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>

          <h2>Limitation de responsabilité</h2>
          <p>
            Les informations publiées sur ce site sont fournies à titre indicatif et ne constituent pas
            un conseil financier ou un engagement contractuel. Consortium Finanzen Kredit ne saurait être
            tenu responsable des décisions prises sur la base des informations présentées.
          </p>

          <p className="text-sm text-slate-400 mt-8">Dernière mise à jour : Juin 2026</p>
        </div>
      </section>
    </div>
  )
}
