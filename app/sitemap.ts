import type { MetadataRoute } from 'next'
import { ARTICLES } from '@/lib/blog-data'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://consortium-finanzen-kredit.de'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/services`,           lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contact`,            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/rendez-vous`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/a-propos`,           lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = ARTICLES.map(article => ({
    url: `${BASE}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
