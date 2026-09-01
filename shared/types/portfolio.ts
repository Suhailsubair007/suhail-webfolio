export type SocialIcon = 'github' | 'linkedin' | 'mail' | 'phone'

export interface SocialLink {
  label: string
  href: string
  handle: string
  icon: SocialIcon
}

export interface Highlight {
  value: string
  label: string
}

export interface ExperienceBullet {
  title: string
  description: string
}

export interface ExperienceItem {
  id: string
  company: string
  companyUrl?: string
  role: string
  location: string
  period: string
  startDate: string
  endDate: string | null
  current: boolean
  summary: string
  bullets: ExperienceBullet[]
  stack: string[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectItem {
  id: string
  name: string
  kind: string
  period: string
  tagline: string
  description: string
  features: string[]
  stack: string[]
  links: ProjectLink[]
  featured: boolean
  image?: string
}

export interface EducationItem {
  id: string
  institution: string
  degree: string
  field: string
  location: string
  period: string
  startDate: string
  endDate: string
  note?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Achievement {
  title: string
  description: string
  year: string
}

export interface NavItem {
  label: string
  href: string
}

export interface CaseStudy {
  slug: string
  kind: 'role' | 'project'
  title: string
  subtitle: string
  period: string
  summary: string
  stack: string[]
  sections: ExperienceBullet[]
  links: ProjectLink[]
  location?: string
}

export interface HeadlineSegment {
  text: string
  accent?: boolean
}
