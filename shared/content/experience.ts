import type { ExperienceItem } from '../types/portfolio'

export const experience: ExperienceItem[] = [
  {
    id: 'deelo',
    company: 'Deelo Business Services Private Limited',
    companyUrl: 'https://deelo.in/',
    role: 'Full Stack Developer',
    location: 'Kottayam',
    period: 'Jan 2026 — Present',
    startDate: '2026-01',
    endDate: null,
    current: true,
    summary:
      'Build and maintain the customer website, provider onboarding portal, admin tools, and Android app for a services marketplace.',
    bullets: [
      {
        title: 'Backend migration',
        description:
          'Migrated a legacy Node.js backend to TypeScript services with GraphQL and MongoDB. Redesigned data models and migrated existing records.',
      },
      {
        title: 'Location-based matching',
        description:
          'Built matching logic that uses service boundaries to find nearby providers who cover the customer’s location.',
      },
      {
        title: 'Android release',
        description:
          'Built the Android app in React Native and Expo, managed its Google Play release, and began work on a native Kotlin migration.',
      },
      {
        title: 'AWS deployments',
        description:
          'Maintain deployments on EC2, designed the file upload flow using S3, and manage email delivery through SES.',
      },
      {
        title: 'Code reviews and planning',
        description:
          'Review code, mentor junior developers, and work with the CTO on sprint priorities and architecture decisions.',
      },
    ],
    stack: [
      'TypeScript',
      'GraphQL',
      'React Native',
      'MongoDB',
      'AWS',
      'Next.js',
      'Node.js',
      'Expo',
      'Kotlin',
    ],
  },
  {
    id: 'ecloto',
    company: 'Ecloto Designs Private Limited',
    companyUrl: 'https://eclotodesigns.com/',
    role: 'Full Stack Developer',
    location: 'Kochi',
    period: 'Apr — Dec 2025',
    startDate: '2025-04',
    endDate: '2025-12',
    current: false,
    summary:
      'Built backend services for Orgface, a professional networking app, and contributed to its shared React Native codebase.',
    bullets: [
      {
        title: 'REST APIs and data models',
        description:
          'Designed database schemas and implemented REST APIs in TypeScript and Bun.js within a monorepo.',
      },
      {
        title: 'Real-time messaging',
        description:
          'Implemented direct and group chat over WebSockets and added push notifications for web, Android, and iOS.',
      },
      {
        title: 'Deployment and infrastructure',
        description:
          'Managed deployments on DigitalOcean using Nginx, Caddy, and PM2. Configured Cloudflare DNS and R2 storage, and integrated Postmark for transactional email.',
      },
      {
        title: 'Cross-platform features',
        description:
          'Integrated APIs and redesigned core screens, including profile management, in the shared React Native codebase.',
      },
    ],
    stack: [
      'TypeScript',
      'Bun.js',
      'WebSockets',
      'React Native',
      'DigitalOcean',
      'REST APIs',
      'Nginx',
      'Cloudflare R2',
      'Postmark',
    ],
  },
]
