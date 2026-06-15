import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Déclaration d\'accessibilité',
  robots: { index: false, follow: false },
}

export default function AccessibilitePage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-primary-950 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Déclaration d'accessibilité</h1>
          <p className="text-slate-300 mt-2">Dernière mise à jour : Juin 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">

          <h2>Engagement d'accessibilité</h2>
          <p>
            Consortium Finanzen Kredit s'engage à rendre son site accessible conformément
            aux Règles pour l'Accessibilité des Contenus Web (WCAG 2.1, niveau AA).
          </p>

          <h2>État de conformité</h2>
          <p>
            Ce site est <strong>partiellement conforme</strong> aux normes WCAG 2.1 AA.
            Des améliorations sont en cours pour atteindre une conformité complète.
          </p>

          <h2>Mesures prises</h2>
          <ul>
            <li>Navigation clavier complète sur toutes les pages</li>
            <li>Textes alternatifs sur les éléments visuels non décoratifs</li>
            <li>Contrastes conformes aux ratios WCAG 2.1 AA</li>
            <li>Structure sémantique HTML (en-têtes hiérarchiques, rôles ARIA)</li>
            <li>Indicateurs de focus visibles pour les utilisateurs clavier</li>
            <li>Lien d'évitement du contenu ("Skip to content")</li>
          </ul>

          <h2>Limitations connues</h2>
          <ul>
            <li>Le simulateur de prêt interactif est en cours d'amélioration pour les lecteurs d'écran</li>
            <li>Certains contenus tiers (calendrier de rendez-vous) ne sont pas sous notre contrôle</li>
          </ul>

          <h2>Contact</h2>
          <p>
            Pour signaler un problème d'accessibilité ou demander une assistance :
            <a href="mailto:kontakt@consortiumxfinanzen.com" className="ml-1">
              kontakt@consortiumxfinanzen.com
            </a>
          </p>
          <p>Nous nous engageons à répondre dans un délai de 5 jours ouvrés.</p>

          <p className="text-sm text-slate-400 mt-8">Dernière mise à jour : Juin 2026</p>
        </div>
      </section>
    </div>
  )
}
