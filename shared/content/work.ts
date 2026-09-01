/**
 * Products delivered inside an employed role.
 *
 * These are the same engagements listed in `experience`, viewed by *what was
 * built* rather than by employment. Every string below is drawn from the
 * corresponding experience entry — nothing new is asserted here, and `url` is
 * present only where a public site actually exists.
 */
export interface WorkItem {
  /** Matches a `caseStudies` slug. */
  slug: string
  name: string
  /** Where it was built, e.g. "Deelo · Full-time". */
  context: string
  period: string
  summary: string
  stack: string[]
  url?: string
}

export const selectedWork: WorkItem[] = [
  {
    slug: 'deelo',
    name: 'Deelo Marketplace',
    context: 'Deelo · Full-time',
    period: 'Jan 2026 — Present',
    summary:
      'A location-based services marketplace serving 10,000+ registered users — a Next.js customer site, a freelancer onboarding portal, an admin panel and a React Native Android app, over a service-based TypeScript, GraphQL and MongoDB backend.',
    stack: ['Next.js', 'React Native', 'TypeScript', 'GraphQL', 'MongoDB', 'AWS'],
    url: 'https://deelo.in',
  },
  {
    slug: 'ecloto',
    name: 'Orgface',
    context: 'Ecloto Designs · Full-time',
    period: 'Apr 2025 — Dec 2025',
    summary:
      'A professional networking and messaging platform. I built the entire backend from scratch — 10+ business modules in TypeScript and Bun.js — plus real-time one-to-one and group chat over WebSockets with push delivery across Web, Android and iOS.',
    stack: ['TypeScript', 'Bun.js', 'WebSockets', 'React Native', 'REST APIs', 'DigitalOcean'],
  },
]
