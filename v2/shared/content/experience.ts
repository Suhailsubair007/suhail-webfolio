import type { ExperienceItem } from '../types/portfolio'

/** Most recent first. */
export const experience: ExperienceItem[] = [
  {
    id: 'deelo',
    company: 'Deelo',
    companyUrl: 'https://deelo.in',
    role: 'Full Stack Developer',
    location: 'Kottayam, India',
    period: 'Jan 2026 — Present',
    startDate: '2026-01',
    endDate: null,
    current: true,
    summary:
      'Own product development for a location-based services marketplace serving 10,000+ registered users — across web, mobile, admin and backend.',
    bullets: [
      {
        title: 'Product ownership',
        description:
          'Drive development across the full product surface: a Next.js customer site, a freelancer onboarding portal, an admin panel and mobile apps, all serving 10,000+ registered users.',
      },
      {
        title: 'Backend migration',
        description:
          'Migrated the legacy Node.js backend to a service-based architecture in TypeScript, GraphQL and MongoDB — redesigning the database models and moving all production data with zero data loss.',
      },
      {
        title: 'Location intelligence',
        description:
          'Implemented geo-based service matching using regions, micro-zones and geographical boundaries, connecting customers to nearby providers in real time.',
      },
      {
        title: 'Android app',
        description:
          'Built and shipped the React Native (Expo) Android app end to end, owning the full Play Store release pipeline and app performance work; initiated the migration to native Kotlin.',
      },
      {
        title: 'Cloud infrastructure',
        description:
          'Manage AWS infrastructure — EC2 hosting, S3 storage and SES email delivery — designed the file-upload architecture, and handle production deployment and maintenance.',
      },
      {
        title: 'Mentorship',
        description:
          'Mentor 2 junior developers through code review, sprint planning and coding standards, and work directly with the CTO on product and architecture decisions.',
      },
    ],
    stack: [
      'TypeScript',
      'Next.js',
      'React Native',
      'Expo',
      'Node.js',
      'GraphQL',
      'MongoDB',
      'AWS (EC2, S3, SES)',
      'Kotlin',
    ],
  },
  {
    id: 'ecloto',
    company: 'Ecloto Designs Pvt Ltd',
    role: 'Full Stack Developer',
    location: 'Kochi, India',
    period: 'Apr 2025 — Dec 2025',
    startDate: '2025-04',
    endDate: '2025-12',
    current: false,
    summary:
      'Built the entire backend for Orgface — a professional networking and messaging platform — and shipped cross-platform features from a single React Native codebase.',
    bullets: [
      {
        title: 'Backend architecture',
        description:
          'Built the Orgface backend from scratch: scalable database schemas and REST APIs across 10+ business modules, written in TypeScript and Bun.js inside a monorepo.',
      },
      {
        title: 'Real-time messaging',
        description:
          'Engineered one-to-one and group chat over WebSockets, with a WhatsApp-style push notification system delivered across Web, Android and iOS.',
      },
      {
        title: 'Cross-platform delivery',
        description:
          'Shipped features from a single React Native codebase serving Web, Android and iOS, including API integration and a redesign of core screens such as profile management.',
      },
      {
        title: 'Deployment & infrastructure',
        description:
          'Managed production deployment on DigitalOcean: Nginx/Caddy reverse proxies, PM2 process management, Cloudflare DNS with R2 file storage, and Postmark transactional email.',
      },
    ],
    stack: [
      'TypeScript',
      'Bun.js',
      'REST APIs',
      'WebSockets',
      'React Native',
      'DigitalOcean',
      'Nginx',
      'Caddy',
      'PM2',
      'Cloudflare R2',
      'Postmark',
    ],
  },
]
