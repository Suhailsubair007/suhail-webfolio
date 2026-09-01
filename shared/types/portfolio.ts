/**
 * Portfolio domain types.
 *
 * Lives in `shared/` so both the Vue app and the Nitro server bundle (the
 * sitemap route) can read them. Nuxt auto-imports everything exported here.
 */

export type SocialIcon = 'github' | 'linkedin' | 'mail' | 'phone'

export interface SocialLink {
  label: string
  href: string
  /** Handle / address shown next to the label. */
  handle: string
  icon: SocialIcon
}

/** A headline metric. Only ever populated from verified resume data. */
export interface Highlight {
  value: string
  label: string
}

/** An achievement bullet: `title` is the bolded lead-in. */
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
  /** Human-readable range shown in the UI. */
  period: string
  /** ISO `YYYY-MM`, for <time datetime> and sorting. */
  startDate: string
  /** `null` means present. */
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
  /** e.g. "Personal Product". */
  kind: string
  period: string
  tagline: string
  description: string
  features: string[]
  stack: string[]
  /** Empty means no link exists yet — the UI must render no affordance. */
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

/**
 * A deep-dive route at `/work/[slug]`.
 *
 * Derived from `experience` and `projects` rather than authored separately, so
 * the page, the sitemap and any cross-links can never drift apart.
 */
export interface CaseStudy {
  slug: string
  kind: 'role' | 'project'
  title: string
  /** Company for a role, `kind` for a project. */
  subtitle: string
  period: string
  summary: string
  stack: string[]
  /** Role bullets, or project features mapped into the same shape. */
  sections: ExperienceBullet[]
  links: ProjectLink[]
  location?: string
}
