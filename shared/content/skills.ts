import type { SkillGroup } from '../types/portfolio'

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript'],
  },
  {
    category: 'Web and mobile',
    items: ['React', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Bun.js', 'GraphQL', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'DigitalOcean', 'Docker', 'Nginx', 'Cloudflare R2', 'Firebase', 'CI/CD'],
  },
]

export const topSkills: string[] = [
  'TypeScript',
  'React Native',
  'React',
  'Node.js',
  'GraphQL',
]
