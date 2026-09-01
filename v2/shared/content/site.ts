import type { NavItem } from '../types/portfolio'

/**
 * Site-level metadata and navigation.
 *
 * `url` is intentionally absent here — the canonical origin comes from
 * `runtimeConfig.public.siteUrl` so it can be overridden per environment
 * (preview vs production) without a code change.
 */
export const site = {
  title: 'Suhail Subair — Full Stack & Mobile Engineer',
  shortTitle: 'Suhail Subair',
  description:
    'Full stack engineer shipping production web, mobile and backend systems. TypeScript, Next.js, React Native, Node.js, GraphQL, MongoDB and AWS.',
  locale: 'en_IN',
  themeColor: '#0a0908',
  ogImage: '/og.png',
  ogImageAlt: 'Suhail Subair — Full Stack Developer, Kochi, India',
  keywords: [
    'Suhail Subair',
    'Full Stack Developer',
    'React Native Developer',
    'Next.js',
    'TypeScript',
    'Node.js',
    'GraphQL',
    'MongoDB',
    'AWS',
    'Kochi',
    'Kerala',
    'India',
  ],
  /** Drives sitemap <lastmod>. Bump when content changes. */
  contentUpdatedAt: '2026-09-01',
} as const

export const navigation: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
