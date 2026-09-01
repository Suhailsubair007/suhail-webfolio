import tailwindcss from '@tailwindcss/vite'
import { caseStudies } from './shared/content'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxt/fonts'],

  // Every byte of this site is known at build time. Full prerender means the
  // browser gets a complete document from the CDN edge with no server hop.
  ssr: true,

  // Flat component names: <AppButton/> rather than <UiAppButton/>.
  components: [{ path: '~/components', pathPrefix: false }],
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#0a0908' },
        { name: 'color-scheme', content: 'dark' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
    // Deliberately no pageTransition: a global fade delays the LCP paint.
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      // Override per-environment with NUXT_PUBLIC_SITE_URL.
      siteUrl: 'https://suhailsubair.online',
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },

  // Zero async data on this site, so the extracted payload is a pure extra
  // round-trip during hydration.
  experimental: { payloadExtraction: false },
  compatibilityDate: '2026-09-01',

  nitro: {
    // No preset pinned on purpose — Vercel selects `vercel-static` itself, and
    // pinning one breaks the local `nuxt generate`.
    prerender: {
      crawlLinks: true,
      failOnError: true,
      // Explicit alongside crawlLinks, so a nav regression cannot silently
      // drop the case studies from the build output.
      routes: [
        '/',
        '/sitemap.xml',
        ...caseStudies.map(entry => `/work/${entry.slug}`),
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // Typecheck is an explicit script, not a cost paid on every HMR tick.
  typescript: { strict: true, typeCheck: false },

  eslint: {
    config: { stylistic: true },
  },

  fonts: {
    // Declared explicitly: @nuxt/fonts finds families by scanning `font-family:`
    // declarations, and ours exist only as --font-* custom properties inside
    // Tailwind's @theme block, which its scanner cannot see.
    //
    // One family, deliberately. A second face — and especially a monospace —
    // is what makes a portfolio read as a developer template rather than as
    // an edited page.
    families: [
      { name: 'Geist', provider: 'google', weights: [400, 500, 600] },
    ],
    defaults: { subsets: ['latin'] },
  },
})
