import { site } from '#shared/content/site'

interface PageSeoOptions {
  title: string
  description: string
  /** Route path, e.g. `/work/deelo`. Used for the canonical and og:url. */
  path: string
  ogType?: 'website' | 'profile' | 'article'
  /** Extra JSON-LD nodes to emit alongside the page metadata. */
  jsonLd?: Record<string, unknown>[]
}

/**
 * Sets the complete metadata set for a route.
 *
 * Wrapped rather than called ad hoc so that no page can ship a partial set —
 * a canonical without an og:url, or a title without a Twitter card.
 */
export function usePageSeo(options: PageSeoOptions) {
  const { public: { siteUrl } } = useRuntimeConfig()
  const url = `${siteUrl}${options.path === '/' ? '' : options.path}`
  const image = `${siteUrl}${site.ogImage}`

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: options.ogType ?? 'website',
    ogUrl: url,
    ogSiteName: site.shortTitle,
    ogLocale: site.locale,
    ogImage: image,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: site.ogImageAlt,
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
    twitterImageAlt: site.ogImageAlt,
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
    script: (options.jsonLd ?? []).map(node => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(node),
    })),
  })
}
