import type { NavItem } from '../types/portfolio'

export const site = {
  title: 'Suhail Subair — Full Stack Developer',
  shortTitle: 'Suhail Subair',
  description:
    'Suhail Subair is a full stack developer in Kochi, India. Explore his work on TypeScript APIs, Next.js websites, and React Native apps.',
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
  contentUpdatedAt: '2026-11-23',
} as const

export const navigation: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]
