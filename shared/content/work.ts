export interface WorkItem {
  slug: string
  name: string
  context: string
  period: string
  thesis: string
  contribution: string
  stack: string[]
  url?: string
  image?: string
}

export const selectedWork: WorkItem[] = [
  {
    slug: 'deelo',
    name: 'Deelo Marketplace',
    context: 'Deelo · Full-time',
    period: 'Jan 2026 — Present',
    thesis:
      'A marketplace that helps customers find nearby service providers.',
    contribution:
      'I built the location matching logic, migrated the backend to TypeScript services, and released the Android app on Google Play.',
    stack: ['TypeScript', 'GraphQL', 'React Native', 'MongoDB', 'AWS'],
    url: 'https://deelo.in/',
  },
  {
    slug: 'ecloto',
    name: 'Orgface',
    context: 'Ecloto Designs · Full-time',
    period: 'Apr — Dec 2025',
    thesis:
      'A professional networking platform with real-time messaging across web, Android and iOS.',
    contribution:
      'I designed the data models and REST APIs, built direct and group chat over WebSockets, and added push notifications.',
    stack: ['TypeScript', 'Bun.js', 'WebSockets', 'React Native', 'DigitalOcean'],
    url: 'https://orgface.com/',
  },
  {
    slug: 'workshop-saas',
    name: 'Workshop Management',
    context: 'Independent',
    period: '2024 — Present',
    thesis:
      'An independent project for managing automotive service orders, inventory, and customer communication.',
    contribution:
      'I’m building the Flutter app and Go API, with PostgreSQL for storage, role-based permissions, and Docker for deployment.',
    stack: ['Go', 'PostgreSQL', 'Flutter', 'Docker'],
  },
]
