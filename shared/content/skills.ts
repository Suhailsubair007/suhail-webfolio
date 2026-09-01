import type { SkillGroup } from '../types/portfolio'

/** Pinned to the top of the hero as a compact credibility row. */
export const topSkills: string[] = [
  'TypeScript',
  'React Native',
  'React.js',
  'Node.js',
  'GraphQL',
]

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Go', 'Dart', 'Kotlin'],
  },
  {
    category: 'Frontend & Mobile',
    items: [
      'React.js',
      'Next.js',
      'React Native',
      'Expo',
      'Flutter',
      'Redux',
      'React Query',
      'Tailwind CSS',
      'NativeWind',
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      'Node.js',
      'Bun.js',
      'Express.js',
      'GraphQL',
      'REST APIs',
      'WebSockets',
      'JWT',
      'OAuth',
    ],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS (EC2, S3, SES)',
      'DigitalOcean',
      'Cloudflare R2',
      'Nginx',
      'Caddy',
      'Docker',
      'PM2',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Jira',
      'Postman',
      'Firebase (Auth, FCM)',
      'Postmark',
      'Figma',
      'EAS Build',
    ],
  },
]
