import type { SkillGroup } from '../types/portfolio'

/**
 * Four groups, not six, and set as prose rather than as a badge wall.
 *
 * Technology is evidence, not the argument — it reads as a short list under a
 * quiet heading, and the roles above carry the actual claim.
 */
export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Go', 'Dart', 'Kotlin'],
  },
  {
    category: 'Product',
    items: ['React', 'Next.js', 'React Native', 'Expo', 'Flutter', 'Tailwind CSS'],
  },
  {
    category: 'Systems',
    items: ['Node.js', 'Bun.js', 'GraphQL', 'REST', 'WebSockets', 'MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'DigitalOcean', 'Docker', 'Nginx', 'Cloudflare R2', 'Firebase', 'CI/CD'],
  },
]

/** Consumed by the Person JSON-LD `knowsAbout` field, not rendered directly. */
export const topSkills: string[] = [
  'TypeScript',
  'React Native',
  'React',
  'Node.js',
  'GraphQL',
]
