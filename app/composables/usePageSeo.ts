import { site } from '#shared/content/site'

interface PageSeoOptions {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'profile' | 'article'
  jsonLd?: Record<string, unknown>[]
}

export function usePageSeo(options: PageSeoOptions) {
  const { public: { siteUrl } } = useRuntimeConfig()
  // Home canonicalises to the origin with its trailing slash, matching the sitemap loc exactly.
  const url = `${siteUrl}${options.path}`
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
