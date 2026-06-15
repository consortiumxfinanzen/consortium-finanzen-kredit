import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nos services de financement',
  description: 'Prêts immobiliers, personnels, professionnels, regroupement de crédits, financement PME — toutes nos solutions en Europe.',
}

const SERVICES = [
  {
    id: 'immobilier',
    icon: '🏠',
    title: 'Prêt Immobilier',
    subtitle: 'Particuliers & Investisseurs',
    desc: "Que vous achetiez votre résidence principale, une résidence secondaire ou un bien locatif, nous vous accompagnons pour obtenir les meilleures conditions de financement sur les marchés immobiliers européens.",
    items: [
      "Acquisition résidence principale",
      "Investissement locatif",
      "Résidence secondaire",
      "Refinancement / renégociation de taux",
      "Financement de travaux",
    ],
  },
  {
    id: 'professionnel',
    icon: '💼',
    title: 'Prêt Professionnel',
    subtitle: 'Entrepreneurs & Indépendants',
    desc: "Développez votre activité avec des financements adaptés à votre statut et à vos besoins. Nous travaillons avec les banques partenaires pour structurer la meilleure solution.",
    items: [
      "Financement de démarrage (startup)",
      "Acquisition de matériel et équipements",
      "Développement commercial",
      "Rachat de parts sociales",
      "Financement de stock",
    ],
  },
  {
    id: 'personnel',
    icon: '💳',
    title: 'Prêt Personnel',
    subtitle: 'Particuliers',
    desc: "Un crédit à la consommation flexible pour financer vos projets personnels sans avoir à justifier l'utilisation des fonds. Montants jusqu'à 75 000 € sur mesure.",
    items: [
      "Travaux et rénovation",
      "Achat d'un véhicule",
      "Voyage et loisirs",
      "Études et formation",
      "Projets personnels divers",
    ],
  },
  {
    id: 'regroupement',
    icon: '🔄',
    title: 'Regroupement de Crédits',
    subtitle: 'Particuliers & Professionnels',
    desc: "Simplifiez votre gestion financière et réduisez vos mensualités en regroupant tous vos crédits en un seul prêt à un taux négocié.",
    items: [
      "Regroupement de crédits immobiliers",
      "Regroupement de crédits consommation",
      "Mix immobilier + consommation",
      "Inclusion de trésorerie",
      "Allongement de durée possible",
    ],
  },
  {
    id: 'pme',
    icon: '🏢',
    title: 'Financement PME',
    subtitle: 'PME & ETI',
    desc: "Des solutions de financement spécialisées pour les petites et moyennes entreprises, adaptées aux besoins de croissance, d'investissement et de trésorerie.",
    items: [
      "Crédit investissement (matériel, locaux)",
      "Ligne de crédit trésorerie",
      "Financement de croissance",
      "Reprise et transmission d'entreprise",
      "Financement de projets transfrontaliers",
    ],
  },
  {
    id: 'investissement',
    icon: '📈',
    title: 'Investissement Immobilier',
    subtitle: 'Investisseurs & Patrimoines',
    desc: "Nous structurons le financement optimal de vos portefeuilles immobiliers en Europe — résidentiel, commercial, foncier — en tenant compte de la fiscalité locale.",
    items: [
      "Portefeuille locatif résidentiel",
      "Immobilier commercial",
      "SCPI et fonds immobiliers",
      "Investissement transfrontalier EU",
      "Structuration patrimoniale",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Nos solutions de financement</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Des solutions adaptées à chaque profil et chaque projet, en Allemagne, France, Belgique, Luxembourg et Pays-Bas.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {SERVICES.map(({ id, icon, title, subtitle, desc, items }) => (
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
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6" aria-label={`Inclus dans ${title}`}>
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
                    Demander ce financement
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
          <h2 className="text-3xl font-bold mb-4">Vous ne savez pas quelle solution choisir ?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Nos conseillers analysent votre situation et vous orientent vers la meilleure solution. Gratuit, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rendez-vous"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold px-8 py-4 rounded-xl text-lg transition-colors">
              Prendre rendez-vous
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
              Envoyer ma demande
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
