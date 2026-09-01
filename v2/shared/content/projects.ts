import type { ProjectItem } from '../types/portfolio'

/**
 * Independent products, as distinct from employer work (see `experience`).
 *
 * `links` is empty where no public URL exists. The UI must render no link
 * affordance in that case rather than inventing a destination.
 */
export const projects: ProjectItem[] = [
  {
    id: 'workshop-saas',
    name: 'Workshop Management SaaS',
    kind: 'Personal Product',
    period: '2024 — Present',
    tagline:
      'A solo-built SaaS platform for automotive workshops — service orders, inventory and customer communication in one operational hub.',
    description:
      'Building a SaaS platform for automotive workshops as a solo developer, covering service-order management, customer communication, inventory tracking and role-based access control. Go (Fiber) backend on PostgreSQL, a Flutter mobile app, fully Dockerized.',
    features: [
      'Service-order management workflow',
      'Customer communication',
      'Inventory tracking',
      'Role-based access control',
      'Fully Dockerized deployment',
    ],
    stack: ['Go (Fiber)', 'PostgreSQL', 'Flutter', 'Docker'],
    links: [],
    featured: true,
  },
]
