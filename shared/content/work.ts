/**
 * Products, viewed by what was built rather than by who employed him.
 *
 * Every string is drawn from the corresponding experience entry — nothing new
 * is asserted here. `url` appears only where a public site actually exists,
 * and `image` only where a real screenshot exists; neither is invented to fill
 * a layout.
 */
export interface WorkItem {
  /** Matches a `caseStudies` slug. */
  slug: string
  name: string
  /** Where it was built. */
  context: string
  period: string
  /** One sentence. A recruiter should understand the product from this alone. */
  thesis: string
  /** What he personally contributed. */
  contribution: string
  /** Verified outcome, or undefined when the data supports no claim. */
  outcome?: string
  stack: string[]
  url?: string
  /** Reserved: a real screenshot slots in here. Never a placeholder. */
  image?: string
}

/** Ordered by strength. The first entry gets the featured treatment. */
export const selectedWork: WorkItem[] = [
  {
    slug: 'deelo',
    name: 'Deelo Marketplace',
    context: 'Deelo · Full-time',
    period: '2026 — Present',
    thesis:
      'A services marketplace that matches customers with nearby service providers in real time.',
    contribution:
      'I own the product surface — the Next.js customer site, the React Native Android app, the GraphQL backend, and the AWS infrastructure. I moved the legacy backend to a service architecture with zero data loss and built the geo-matching that connects customers to nearby providers.',
    outcome: '10,000+ registered users',
    stack: ['TypeScript', 'GraphQL', 'React Native', 'MongoDB', 'AWS'],
    url: 'https://deelo.in',
  },
  {
    slug: 'ecloto',
    name: 'Orgface',
    context: 'Ecloto Designs · Full-time',
    period: 'Apr — Dec 2025',
    thesis:
      'A professional networking platform with real-time messaging across web, Android and iOS.',
    contribution:
      'I wrote the entire backend from scratch — schemas and REST APIs for 10+ modules in TypeScript and Bun.js — and built the WebSocket chat and push notification pipeline behind it.',
    outcome: '10+ business modules',
    stack: ['TypeScript', 'Bun.js', 'WebSockets', 'React Native', 'DigitalOcean'],
  },
  {
    slug: 'workshop-saas',
    name: 'Workshop Management',
    context: 'Independent',
    period: '2024 — Present',
    thesis:
      'A SaaS platform that runs the day-to-day of an automotive workshop — service orders, inventory and customer communication.',
    contribution:
      'Built solo, end to end: a Go and Fiber backend on PostgreSQL, a Flutter mobile app, role-based access control, and a fully Dockerized deployment.',
    stack: ['Go', 'PostgreSQL', 'Flutter', 'Docker'],
  },
]
