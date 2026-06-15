import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À propos — Consortium Finanzen Kredit',
  description:
    'Découvrez qui nous sommes : notre histoire, notre mission, nos valeurs et notre présence dans 5 pays européens. Courtier en crédit indépendant basé à Francfort.',
}

const VALUES = [
  {
    icon: '⚖️',
    title: 'Indépendance',
    desc: 'Aucun lien exclusif avec une banque. Nous travaillons pour vous, pas pour les établissements prêteurs. Notre rémunération ne dépend pas du choix de tel ou tel partenaire.',
  },
  {
    icon: '🔍',
    title: 'Transparence',
    desc: 'Nos honoraires, nos partenaires et nos critères de sélection sont expliqués clairement dès le premier entretien. Aucune surprise au moment de la signature.',
  },
  {
    icon: '🏆',
    title: 'Excellence',
    desc: 'Chaque dossier bénéficie d\'un traitement rigoureux et personnalisé. Nos conseillers sont formés en continu aux évolutions réglementaires européennes.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'Nous investissons dans des outils digitaux pour accélérer le traitement des dossiers et offrir une expérience fluide du premier contact jusqu\'à la signature.',
  },
  {
    icon: '🤝',
    title: 'Proximité',
    desc: 'Un conseiller dédié vous accompagne tout au long de votre projet. Nous parlons votre langue, comprenons votre marché local et restons disponibles à chaque étape.',
  },
]

const COUNTRIES = [
  { flag: '🇩🇪', name: 'Allemagne', city: 'Francfort (siège)', status: 'Opérationnel' },
  { flag: '🇫🇷', name: 'France',    city: 'Paris',             status: 'Opérationnel' },
  { flag: '🇧🇪', name: 'Belgique',  city: 'Bruxelles',         status: 'Opérationnel' },
  { flag: '🇱🇺', name: 'Luxembourg', city: 'Luxembourg-Ville', status: 'Opérationnel' },
  { flag: '🇳🇱', name: 'Pays-Bas',  city: 'Amsterdam',         status: 'Opérationnel' },
]

const TEAM = [
  { initials: 'DM', name: 'Directeur Général',   role: 'CEO & Fondateur',              bio: 'Expert en financement structuré avec plus de 15 ans d\'expérience dans les marchés bancaires européens.' },
  { initials: 'CF', name: 'Directeur Financier',  role: 'CFO',                          bio: 'Spécialiste des marchés de capitaux et de la structuration de dettes pour les particuliers et entreprises.' },
  { initials: 'RK', name: 'Responsable Clientèle', role: 'Head of Client Relations',    bio: 'Maîtrise de 5 langues européennes, experte en accompagnement des clients internationaux et expatriés.' },
]

const CASES = [
  {
    tag: 'Prêt immobilier',
    title: 'La famille Wagner acquiert sa résidence à Francfort',
    context: 'Primo-accédants, budget serré, refus de 2 banques en direct.',
    result: 'Taux obtenu : 3,2% sur 25 ans — économie de 18 400 € vs l\'offre initiale.',
    amount: '350 000 €',
    color: 'bg-blue-50 border-blue-100',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    tag: 'Financement PME',
    title: 'StartUp Technology GmbH — Financement croissance',
    context: '2 ans d\'activité, pas de bilans suffisants pour les banques classiques.',
    result: 'Crédit professionnel 5 ans + garantie KfW — trésorerie préservée.',
    amount: '250 000 €',
    color: 'bg-amber-50 border-amber-100',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    tag: 'Investissement immobilier',
    title: 'Portefeuille transfrontalier pour Marc & Associates',
    context: 'Résident luxembourgeois souhaitant investir en Allemagne et aux Pays-Bas.',
    result: 'Structuration en 3 entités avec financement optimisé dans 2 pays.',
    amount: '1 800 000 €',
    color: 'bg-emerald-50 border-emerald-100',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
]

export default function AProposPage() {
  return (
    <div className="pt-16 md:pt-20">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-200 font-medium mb-6">
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-gold-400" />
            Fondé à Francfort
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Un courtier indépendant au service{' '}
            <span className="text-gold-400">de l'Europe</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Consortium Finanzen Kredit est né d'un constat simple : obtenir le meilleur financement
            en Europe est complexe, opaque, et souvent défavorable au client. Nous avons créé
            une alternative indépendante, transparente et multinationale.
          </p>
        </div>
      </section>

      {/* ── HISTOIRE & MISSION ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-950 mb-6">Notre histoire</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Consortium Finanzen Kredit a été fondé à Francfort avec une conviction : les clients
                  méritent un accès équitable au financement, quelle que soit leur nationalité, leur
                  langue ou leur localisation en Europe.
                </p>
                <p>
                  En travaillant avec des particuliers et des entreprises confrontés aux mêmes obstacles
                  (barrières linguistiques, méconnaissance des produits locaux, manque de comparaison),
                  nous avons structuré une offre capable de répondre aux besoins de financement dans
                  5 pays européens, avec les mêmes standards d'exigence.
                </p>
                <p>
                  Aujourd'hui, notre équipe plurilingue accompagne des clients de toute l'Europe dans
                  leurs projets immobiliers, professionnels et d'investissement.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '5',    l: 'Pays européens'           },
                { n: '100+', l: 'Solutions de financement' },
                { n: '24h',  l: 'Prêts personnels traités'  },
                { n: '100%', l: 'Conseil indépendant'       },
              ].map(({ n, l }) => (
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
              <h2 className="text-2xl font-bold text-gold-400 mb-4">Notre mission</h2>
              <p className="text-slate-300 leading-relaxed">
                Démocratiser l'accès au financement en Europe en offrant à chaque client —
                particulier ou entreprise — le bénéfice d'un conseil expert, indépendant et
                multilingue, quelle que soit sa situation ou sa localisation.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-6">
                <span className="text-2xl" aria-hidden="true">🌟</span>
              </div>
              <h2 className="text-2xl font-bold text-primary-950 mb-4">Notre vision</h2>
              <p className="text-slate-600 leading-relaxed">
                Devenir le courtier de référence pour les particuliers et PME qui souhaitent
                accéder aux marchés financiers européens, reconnu pour notre rigueur, notre
                intégrité et notre capacité à trouver des solutions là où d'autres échouent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">Nos valeurs</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Ces principes guident chaque décision, chaque dossier et chaque interaction avec nos clients.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon, title, desc }) => (
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
              Notre présence <span className="text-gold-400">européenne</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Opérationnel dans 5 pays, nous accompagnons des clients aux profils variés avec une
              expertise locale dans chaque marché.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COUNTRIES.map(({ flag, name, city, status }) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">L'équipe dirigeante</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Des experts plurilingues passionnés par le financement européen et l'accompagnement client.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {TEAM.map(({ initials, name, role, bio }) => (
              <li key={name} className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary-950 flex items-center justify-center mx-auto mb-5">
                  <span className="text-gold-400 font-bold text-xl">{initials}</span>
                </div>
                <h3 className="font-bold text-primary-950 text-lg mb-1">{name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-3">{role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{bio}</p>
              </li>
            ))}
          </ul>
          <p className="text-center text-sm text-slate-400 mt-10">
            Et une équipe de conseillers spécialisés dans chaque pays d'opération.
          </p>
        </div>
      </section>

      {/* ── ÉTUDES DE CAS ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">Études de cas</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Des exemples concrets de financements complexes que nous avons réussi à débloquer pour nos clients.
            </p>
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASES.map(({ tag, title, context, result, amount, color, tagColor }) => (
              <li key={title} className={`rounded-2xl p-6 border ${color}`}>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${tagColor}`}>
                  {tag}
                </span>
                <h3 className="font-bold text-primary-950 text-lg mb-3 leading-snug">{title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-slate-600 mb-0.5">Contexte</p>
                    <p className="text-slate-500">{context}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-600 mb-0.5">Résultat</p>
                    <p className="text-slate-500">{result}</p>
                  </div>
                  <div className="pt-2 border-t border-current/10">
                    <p className="text-xs text-slate-400">Montant financé</p>
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
            Nos partenaires bancaires européens
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Commerzbank', 'BNP Paribas', 'ING Group', 'Société Générale', 'KfW', 'Belfius'].map(name => (
              <div key={name}
                className="h-16 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center px-3 hover:border-primary-200 transition-colors">
                <span className="text-xs font-bold text-slate-400 text-center">{name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">
            Et plus de 50 établissements partenaires dans 5 pays. Logos indicatifs.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vous avez un projet de financement ?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Prêts personnels traités sous 24h. Autres financements sous 72h. Première consultation gratuite et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg">
              Déposer ma demande
            </Link>
            <Link href="/rendez-vous"
              className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
