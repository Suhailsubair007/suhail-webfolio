import type { CaseStudy } from '../types/portfolio'
import { experience } from './experience'
import { projects } from './projects'
import { selectedWork } from './work'

export { site, navigation } from './site'
export { profile, socials, about, contactCta } from './profile'
export { experience } from './experience'
export { projects } from './projects'
export { skills, topSkills } from './skills'
export { education, achievements } from './credentials'
export { selectedWork, type WorkItem } from './work'

export const caseStudies: CaseStudy[] = [
  ...experience.map<CaseStudy>((role) => {
    const work = selectedWork.find(item => item.slug === role.id)
    const links = role.companyUrl ? [{ label: 'Visit company website', href: role.companyUrl }] : []

    if (work?.url && work.url !== role.companyUrl) {
      links.push({ label: `Visit ${work.name}`, href: work.url })
    }

    return {
      slug: role.id,
      kind: 'role',
      title: role.company,
      subtitle: role.role,
      period: role.period,
      summary: role.summary,
      stack: role.stack,
      sections: role.bullets,
      links,
      location: role.location,
    }
  }),
  ...projects.map<CaseStudy>(project => ({
    slug: project.id,
    kind: 'project',
    title: project.name,
    subtitle: project.kind,
    period: project.period,
    summary: project.description,
    stack: project.stack,
    sections: project.features.map(feature => ({ title: feature, description: '' })),
    links: project.links,
  })),
]

export function findCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(entry => entry.slug === slug)
}
