import { caseStudies } from '#shared/content'
import { site } from '#shared/content/site'

/**
 * Prerendered to a static sitemap.xml at build time.
 *
 * Routes are derived from the same `caseStudies` array the pages use, so the
 * sitemap cannot drift out of sync with what actually exists.
 */
export default defineEventHandler((event) => {
  const { public: { siteUrl } } = useRuntimeConfig(event)

  const paths = ['/', ...caseStudies.map(entry => `/work/${entry.slug}`)]

  const urls = paths
    .map(path => `  <url>
    <loc>${siteUrl}${path === '/' ? '/' : path}</loc>
    <lastmod>${site.contentUpdatedAt}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.7'}</priority>
  </url>`)
    .join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
