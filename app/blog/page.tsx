import type { Metadata } from 'next'
import Link from 'next/link'
import { ARTICLES, formatDate } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog — Conseils en financement européen',
  description:
    'Guides pratiques, actualités réglementaires et conseils d\'experts sur le financement immobilier, professionnel et personnel en Europe.',
}

const CATEGORIES = ['Tous', 'Prêt immobilier', 'Financement PME', 'Regroupement de crédits', 'Investissement immobilier', 'Réglementation']

const ICONS: Record<string, string> = {
  'Prêt immobilier': '🏠',
  'Financement PME': '💼',
  'Regroupement de crédits': '🔄',
  'Investissement immobilier': '📈',
  'Réglementation': '📋',
}

export default function BlogPage() {
  return (
    <div className="pt-16 md:pt-20">

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-slate-200 font-medium mb-6">
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-gold-400" />
            Ressources et conseils
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Le blog <span className="text-gold-400">financement</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Guides pratiques, analyses de marché et conseils d'experts pour optimiser
            vos projets de financement en Europe.
          </p>
        </div>
      </section>

      {/* ── CATÉGORIES ── */}
      <section className="bg-white border-b border-slate-100 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((cat, i) => (
              <span key={cat}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium cursor-default ${
                  i === 0
                    ? 'bg-primary-950 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE EN VEDETTE ── */}
      <section className="bg-white pt-12 pb-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${ARTICLES[0].slug}`}
            className="group flex flex-col lg:flex-row gap-8 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:border-primary-200 hover:shadow-md transition-all duration-300 p-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">
                  {ARTICLES[0].category}
                </span>
                <span className="text-slate-400 text-xs font-medium">Article à la une</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-950 mb-4 group-hover:text-primary-700 transition-colors leading-snug">
                {ARTICLES[0].title}
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">{ARTICLES[0].excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <time dateTime={ARTICLES[0].date}>{formatDate(ARTICLES[0].date)}</time>
                <span>·</span>
                <span>{ARTICLES[0].readTime} min de lecture</span>
                <span className="ml-auto text-primary-600 font-semibold group-hover:underline">Lire l'article →</span>
              </div>
            </div>
            <div className="lg:w-64 xl:w-72 shrink-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center min-h-[160px]">
              <span aria-hidden="true" className="text-6xl">{ICONS[ARTICLES[0].category] || '📄'}</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── GRILLE D'ARTICLES ── */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-primary-950 mb-8">Tous les articles</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.slice(1).map(({ slug, title, excerpt, category, date, readTime }) => (
              <li key={slug}>
                <Link href={`/blog/${slug}`}
                  className="group flex flex-col h-full bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-primary-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 h-36 flex items-center justify-center">
                    <span aria-hidden="true" className="text-5xl">{ICONS[category] || '📄'}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-3 self-start">
                      {category}
                    </span>
                    <h3 className="font-bold text-primary-950 text-base mb-2 leading-snug group-hover:text-primary-700 transition-colors flex-1">
                      {title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                      <time dateTime={date}>{formatDate(date)}</time>
                      <span>{readTime} min de lecture</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary-950 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Un projet de financement ?</h2>
          <p className="text-slate-300 mb-6">
            Prêts personnels sous 24h, autres financements sous 72h. Première consultation gratuite.
          </p>
          <Link href="/contact"
            className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold px-8 py-4 rounded-xl transition-colors">
            Déposer ma demande
          </Link>
        </div>
      </section>
    </div>
  )
}
