import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.swiftgrowkenya.co.ke'

  // List your main pages
  const routes = ['', '/blog', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // NOTE: When you start fetching blogs from a database, 
  // you will fetch the slugs here and add them to this array.

  return [...routes]
}