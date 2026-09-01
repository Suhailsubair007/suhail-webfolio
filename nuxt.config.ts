import tailwindcss from '@tailwindcss/vite'
import { caseStudies } from './shared/content'

export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxt/fonts'],

  ssr: true,

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
      script: [
        {
          innerHTML:
            '(function(){try{var t=localStorage.getItem("theme");'
            + 'if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}'
            + 'document.documentElement.dataset.theme=t;'
            + 'var m=document.querySelector(\'meta[name="theme-color"]\');'
            + 'if(m)m.setAttribute("content",t==="light"?"#f5f6f7":"#0b0d10")'
            + '}catch(e){}'
            + 'try{document.documentElement.dataset.headline=Math.floor(Math.random()*3)}catch(e){}'
            + '})()',
          tagPosition: 'head',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      siteUrl: 'https://suhailsubair.online',
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },

  experimental: { payloadExtraction: false },
  compatibilityDate: '2026-09-01',

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: true,
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

  typescript: { strict: true, typeCheck: false },

  eslint: {
    config: { stylistic: true },
  },

  fonts: {
    families: [
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [400, 500, 600], styles: ['normal'], preload: true },
      { name: 'Fraunces', provider: 'google', weights: [400], styles: ['italic'] },
    ],
    defaults: { subsets: ['latin'] },
  },
})
