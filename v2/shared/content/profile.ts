import type { Highlight, SocialLink } from '../types/portfolio'

export const profile = {
  name: 'Suhail Subair',
  role: 'Full Stack Developer',
  /** Hero eyebrow — technologies evidenced by the roles below. */
  eyebrow: 'FULL STACK · REACT NATIVE · TYPESCRIPT · NODE.JS',
  /**
   * Hero headline, split so the accent line can be styled independently.
   * Positioning is drawn from the strongest verified fact in the resume:
   * end-to-end ownership of a product in production with 10,000+ users.
   */
  headlineLead: 'I build production software',
  headlineAccent: 'people actually use.',
  tagline:
    'Full stack engineer shipping web, mobile and backend at Deelo — a services marketplace with 10,000+ registered users. I own features from schema to store release.',
  location: 'Kochi, Kerala, India',
  availability:
    'Open to Software Engineer, Full Stack, React Native / Mobile, Backend and Product Engineer roles — remote, hybrid or on-site.',
  email: 'suhailsubair04@gmail.com',
  phone: '+91-7736417357',
  resumeUrl: '/resume.pdf',
  avatar: '/img/portrait.webp',
  currentCompany: {
    name: 'Deelo',
    url: 'https://deelo.in',
    role: 'Full Stack Developer',
  },
} as const

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Suhailsubair007',
    handle: 'Suhailsubair007',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/suhail-subair/',
    handle: 'suhail-subair',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:suhailsubair04@gmail.com',
    handle: 'suhailsubair04@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Phone',
    href: 'tel:+917736417357',
    handle: '+91 77364 17357',
    icon: 'phone',
  },
]

export const about = {
  lead:
    'I ship production software across web, mobile and backend — and own it end to end.',
  paragraphs: [
    'At Deelo I build the entire product surface of a location-based services marketplace serving 10,000+ registered users: a Next.js customer site, a freelancer onboarding portal, an admin panel, and a React Native (Expo) Android app.',
    'I migrated Deelo’s legacy Node.js backend to a service-based architecture in TypeScript, GraphQL and MongoDB — redesigning the data models and moving all production data with zero data loss. Before that, at Ecloto Designs, I built the entire Orgface backend from scratch in TypeScript and Bun.js inside a monorepo, spanning 10+ business modules.',
    'I’ve engineered real-time systems — one-to-one and group messaging over WebSockets with a WhatsApp-style push pipeline across Web, Android and iOS — and location intelligence that matches customers to nearby providers using regions, micro-zones and geographic boundaries.',
    'I run the infrastructure too: AWS (EC2, S3, SES) at Deelo, DigitalOcean with Nginx/Caddy, PM2, Cloudflare R2 and Postmark at Ecloto. I mentor two junior developers through code review and sprint planning, and work directly with our CTO on product and architecture decisions.',
  ],
  focusAreas: [
    'End-to-end product ownership across web, mobile and backend',
    'Service-based backend architecture and zero-loss data migrations',
    'React Native (Expo) apps and Play Store release pipelines',
    'Real-time systems: WebSockets and push notifications',
    'Cloud infrastructure, deployment and production maintenance',
  ],
} as const

export const highlights: Highlight[] = [
  { value: '10,000+', label: 'Users on products in production' },
  { value: '2+', label: 'Years shipping production software' },
  { value: '10+', label: 'Business modules built from scratch' },
  { value: '2', label: 'Junior developers mentored' },
]

export const contactCta = {
  heading: 'Have something worth building?',
  accent: 'Let’s talk.',
  body:
    'I’m open to Software Engineer, Full Stack, React Native / Mobile, Backend and Product Engineer roles — remote, hybrid or on-site — where I can own features end to end and ship to real users.',
} as const
