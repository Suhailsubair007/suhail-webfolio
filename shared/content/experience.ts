import type { ExperienceItem } from '../types/portfolio'

export const experience: ExperienceItem[] = [
  {
    id: 'deelo',
    company: 'Deelo',
    companyUrl: 'https://deelo.in',
    role: 'Full Stack Developer',
    location: 'Kottayam',
    period: '2026 — Present',
    startDate: '2026-01',
    endDate: null,
    current: true,
    summary:
      'Own the product surface of a services marketplace serving 10,000+ registered users — customer site, onboarding portal, admin panel, Android app and the backend beneath them.',
    bullets: [
      {
        title: 'Moved a legacy backend to service architecture',
        description:
          'Migrated Deelo’s Node.js monolith to service-based TypeScript, GraphQL and MongoDB — redesigning the data models and moving every production record with zero data loss.',
      },
      {
        title: 'Built location matching from the ground up',
        description:
          'Implemented geo-based service matching across regions, micro-zones and geographic boundaries, connecting customers to nearby providers in real time.',
      },
      {
        title: 'Shipped the Android app end to end',
        description:
          'Took the React Native app from first commit to Play Store, owning the release pipeline and performance work, and started the migration to native Kotlin.',
      },
      {
        title: 'Run the cloud infrastructure',
        description:
          'Manage AWS across EC2, S3 and SES, designed the file-upload architecture, and handle production deployment and maintenance.',
      },
      {
        title: 'Mentor two engineers',
        description:
          'Lead code review, sprint planning and coding standards for two junior developers, and work directly with the CTO on product and architecture decisions.',
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
    company: 'Ecloto Designs',
    role: 'Full Stack Developer',
    location: 'Kochi',
    period: 'Apr — Dec 2025',
    startDate: '2025-04',
    endDate: '2025-12',
    current: false,
    summary:
      'Built the entire backend for Orgface, a professional networking and messaging platform, and shipped its cross-platform features from a single React Native codebase.',
    bullets: [
      {
        title: 'Wrote the backend from scratch',
        description:
          'Designed the schemas and REST APIs for 10+ business modules in TypeScript and Bun.js, inside a monorepo.',
      },
      {
        title: 'Engineered real-time messaging',
        description:
          'Built one-to-one and group chat over WebSockets, with a push notification pipeline delivering across Web, Android and iOS.',
      },
      {
        title: 'Owned production infrastructure',
        description:
          'Ran deployment on DigitalOcean — Nginx and Caddy, PM2, Cloudflare DNS with R2 storage, and Postmark for transactional email.',
      },
      {
        title: 'Shipped to three platforms from one codebase',
        description:
          'Delivered features and a redesign of core screens from a single React Native codebase serving Web, Android and iOS.',
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
