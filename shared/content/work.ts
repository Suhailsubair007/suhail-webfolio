export interface WorkItem {
  slug: string
  name: string
  context: string
  period: string
  thesis: string
  contribution: string
  outcomeValue?: string
  outcomeLabel?: string
  stack: string[]
  url?: string
  image?: string
}

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
    outcomeValue: '10,000+',
    outcomeLabel: 'Registered users',
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
    outcomeValue: '10+',
    outcomeLabel: 'Business modules built',
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
