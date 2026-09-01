import type { ProjectItem } from '../types/portfolio'

export const projects: ProjectItem[] = [
  {
    id: 'workshop-saas',
    name: 'Workshop Management SaaS',
    kind: 'Personal Product',
    period: '2024 — Present',
    tagline:
      'A SaaS platform that runs the day-to-day of an automotive workshop.',
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
