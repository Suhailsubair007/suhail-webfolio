import type { CaseStudy } from '../types/portfolio'
import { experience } from './experience'
import { projects } from './projects'

export { site, navigation } from './site'
export { profile, socials, about, highlights, contactCta } from './profile'
export { experience } from './experience'
export { projects } from './projects'
export { skills, topSkills } from './skills'
export { education, achievements } from './credentials'
export { selectedWork, type WorkItem } from './work'

/**
 * Deep-dive routes, derived from `experience` and `projects` rather than
 * authored separately — the page, the sitemap and every cross-link read this
 * one array, so they cannot drift apart.
 */
export const caseStudies: CaseStudy[] = [
  ...experience.map<CaseStudy>(role => ({
    slug: role.id,
    kind: 'role',
    title: role.company,
    subtitle: role.role,
    period: role.period,
    summary: role.summary,
    stack: role.stack,
    sections: role.bullets,
    links: role.companyUrl ? [{ label: 'Visit site', href: role.companyUrl }] : [],
    location: role.location,
  })),
  ...projects.map<CaseStudy>(project => ({
    slug: project.id,
    kind: 'project',
    title: project.name,
    subtitle: project.kind,
    period: project.period,
    summary: project.description,
    stack: project.stack,
    // Project features carry no separate prose, so the feature itself is the
    // title and the description stays empty rather than being invented.
    sections: project.features.map(feature => ({ title: feature, description: '' })),
    links: project.links,
  })),
]

export function findCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(entry => entry.slug === slug)
}
