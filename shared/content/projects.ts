import type { ProjectItem } from '../types/portfolio'

export const projects: ProjectItem[] = [
  {
    id: 'workshop-saas',
    name: 'Workshop Management SaaS',
    kind: 'Personal Product',
    period: '2024 — Present',
    tagline:
      'Software for managing automotive workshop operations.',
    description:
      'I’m building a workshop management app independently. The Flutter client connects to a Go API built with Fiber, with PostgreSQL for storage and Docker for deployment.',
    features: [
      'Service order tracking',
      'Customer communication',
      'Inventory tracking',
      'Role-based access control',
      'Docker deployment',
    ],
    stack: ['Go (Fiber)', 'PostgreSQL', 'Flutter', 'Docker'],
    links: [],
    featured: true,
  },
]
