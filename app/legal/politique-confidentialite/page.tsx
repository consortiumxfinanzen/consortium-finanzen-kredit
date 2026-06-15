import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Comment Consortium Finanzen Kredit collecte, utilise et protège vos données personnelles.',
  robots: { index: false, follow: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-primary-950 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Politique de confidentialité</h1>
          <p className="text-slate-300 mt-2">Dernière mise à jour : Juin 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">

          <h2>1. Responsable du traitement</h2>
          <p>
            Consortium Finanzen Kredit, dont le siège est situé à Francfort-sur-le-Main, Allemagne,
            est responsable du traitement de vos données personnelles collectées via ce site.
          </p>
          <p>Contact : <a href="mailto:kontakt@consortiumxfinanzen.com">kontakt@consortiumxfinanzen.com</a></p>

          <h2>2. Données collectées</h2>
          <p>Nous collectons les données suivantes via le formulaire de contact :</p>
          <ul>
            <li>Prénom et nom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone (optionnel)</li>
            <li>Type de financement souhaité et montant indicatif</li>
            <li>Description de votre projet</li>
          </ul>
          <p>Nous collectons également des données techniques anonymisées (pages visitées, durée de session) via notre outil d'analytics.</p>

          <h2>3. Finalités du traitement</h2>
          <ul>
            <li>Traitement de votre demande de financement et prise de contact</li>
            <li>Amélioration de notre site et de nos services</li>
            <li>Respect de nos obligations légales et réglementaires</li>
          </ul>

          <h2>4. Base légale</h2>
          <ul>
            <li><strong>Votre consentement explicite</strong> pour les formulaires de contact</li>
            <li><strong>L'exécution d'un contrat</strong> lors du traitement d'une demande de financement</li>
            <li><strong>Nos obligations légales</strong> pour la conservation des données comptables</li>
          </ul>

          <h2>5. Durée de conservation</h2>
          <ul>
            <li>Données de formulaire de contact : 3 ans à compter du dernier contact</li>
            <li>Données de clients actifs : durée de la relation commerciale + 5 ans</li>
            <li>Données analytics anonymisées : 13 mois maximum</li>
          </ul>

          <h2>6. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
            <li><strong>Droit d'opposition</strong> : vous opposer à certains traitements</li>
            <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à :{' '}
            <a href="mailto:kontakt@consortiumxfinanzen.com">kontakt@consortiumxfinanzen.com</a>.
            Réponse garantie sous 30 jours.
          </p>
          <p>
            Vous pouvez également déposer une réclamation auprès de votre autorité de protection des données :
            BfDI (Allemagne), CNIL (France), APD (Belgique).
          </p>

          <h2>7. Destinataires des données</h2>
          <p>Vos données peuvent être transmises à :</p>
          <ul>
            <li>Nos prestataires techniques (hébergeur, CRM) — soumis à des contrats de traitement conforme au RGPD</li>
            <li>Les banques et organismes de crédit partenaires, uniquement dans le cadre du traitement de votre demande et avec votre consentement</li>
          </ul>
          <p>Vos données ne sont jamais vendues à des tiers.</p>

          <h2>8. Transferts hors UE</h2>
          <p>
            Vos données sont hébergées en Europe et ne font l'objet d'aucun transfert hors de l'Union Européenne.
          </p>

          <h2>9. Cookies</h2>
          <p>
            Pour en savoir plus sur l'utilisation des cookies, consultez notre{' '}
            <a href="/legal/cookies">politique de cookies</a>.
          </p>
        </div>
      </section>
    </div>
  )
}
