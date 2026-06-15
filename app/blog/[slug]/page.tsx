import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ARTICLES, getArticleBySlug, formatDate } from '@/lib/blog-data'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: 'Article introuvable' }
  return {
    title: `${article.title} — Blog Consortium Finanzen Kredit`,
    description: article.excerpt,
  }
}

function parseContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: ReactNode[] = []
  let key = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} className="text-xl font-bold text-primary-950 mt-8 mb-3">{line.slice(4)}</h3>)
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} className="text-2xl font-bold text-primary-950 mt-10 mb-4">{line.slice(3)}</h2>)
    } else if (line.startsWith('- ')) {
      elements.push(<li key={key++} className="ml-4 text-slate-600 leading-relaxed">{line.slice(2)}</li>)
    } else if (line.match(/^\d\./)) {
      elements.push(<li key={key++} className="ml-4 text-slate-600 leading-relaxed list-decimal">{line.slice(line.indexOf(' ') + 1)}</li>)
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="mb-2" />)
    } else {
      const parsed = line
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      elements.push(<p key={key++} className="text-slate-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: parsed }} />)
    }
  }
  return elements
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const others = ARTICLES.filter(a => a.slug !== params.slug).slice(0, 3)

  return (
    <div className="pt-16 md:pt-20">

      {/* ── EN-TÊTE DE L'ARTICLE ── */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'ariane" className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-300 truncate max-w-xs">{article.title}</span>
          </nav>
          <span className="bg-white/10 border border-white/20 text-slate-200 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>·</span>
            <span>{article.readTime} min de lecture</span>
            <span>·</span>
            <span>Consortium Finanzen Kredit</span>
          </div>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article principal */}
            <article className="lg:col-span-2">
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium border-l-4 border-gold-400 pl-4 italic">
                {article.excerpt}
              </p>
              <div className="text-slate-600">
                {parseContent(article.content)}
              </div>

              {/* CTA dans l'article */}
              <div className="mt-12 bg-primary-950 text-white rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold mb-2">Besoin d'un conseil personnalisé ?</h3>
                <p className="text-slate-300 mb-6 text-sm">
                  Nos experts analysent votre situation et vous proposent les meilleures solutions.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-primary-950 font-bold px-6 py-3 rounded-xl transition-colors">
                  Contacter un conseiller
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-24 space-y-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="font-bold text-primary-950 mb-4">Nos services</h3>
                  <ul className="space-y-2 text-sm">
                    {['Prêt immobilier', 'Financement PME', 'Prêt personnel', 'Regroupement de crédits', 'Investissement immobilier'].map(s => (
                      <li key={s}>
                        <Link href="/services" className="flex items-center gap-2 text-slate-600 hover:text-primary-700 transition-colors py-1">
                          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                          {s}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary-100 rounded-2xl p-6">
                  <h3 className="font-bold text-primary-950 mb-2">Simulez votre prêt</h3>
                  <p className="text-slate-600 text-sm mb-4">Estimez vos mensualités en 30 secondes avec notre calculateur.</p>
                  <Link href="/#simulateur"
                    className="inline-flex items-center justify-center w-full bg-primary-950 text-white font-semibold px-4 py-2.5 rounded-xl text-sm hover:bg-primary-900 transition-colors">
                    Accéder au simulateur
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── ARTICLES SUGGÉRÉS ── */}
      {others.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-primary-950">Articles liés</h2>
              <Link href="/blog" className="text-sm text-primary-600 font-semibold hover:underline">
                Voir tous les articles →
              </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map(({ slug, title, category, date, readTime }) => (
                <li key={slug}>
                  <Link href={`/blog/${slug}`}
                    className="group block bg-white border border-slate-100 rounded-2xl p-5 hover:border-primary-200 hover:shadow-sm transition-all duration-200">
                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full inline-block mb-3">
                      {category}
                    </span>
                    <h3 className="font-bold text-primary-950 text-sm leading-snug mb-3 group-hover:text-primary-700 transition-colors">
                      {title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                      <span>{readTime} min</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  )
}
