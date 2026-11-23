import type { SocialLink } from '../types/portfolio'

export const profile = {
  name: 'Suhail Subair',
  role: 'Full Stack Developer',
  tagline:
    'I build marketplace features at Deelo across Next.js, React Native, and a TypeScript backend. Based in Kochi, India.',
  location: 'Kochi, India',
  availability: 'Open to remote, hybrid, and on-site roles',
  email: 'suhailsubair04@gmail.com',
  phone: '+91-7736417357',
  resumeUrl: '/resume.pdf',
  avatar: '/img/portrait.webp',
  currentCompany: {
    name: 'Deelo Business Services Private Limited',
    url: 'https://deelo.in/',
    role: 'Full Stack Developer',
  },
} as const

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Suhailsubair007',
    handle: 'Suhailsubair007',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/suhail-subair/',
    handle: 'suhail-subair',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:suhailsubair04@gmail.com',
    handle: 'suhailsubair04@gmail.com',
    icon: 'mail',
  },
]

export const about = {
  lead: 'I build web and mobile features, from the data model through to release.',
  paragraphs: [
    'My work at Deelo spans the customer website, provider onboarding, admin tools, and Android releases. I also maintain the services and AWS infrastructure behind those workflows.',
    'At Ecloto Designs, I built APIs and real-time messaging for Orgface and helped ship features across web, Android, and iOS.',
  ],
  focus: [
    { label: 'Web', value: 'Customer sites, onboarding flows, and admin tools' },
    { label: 'Backend', value: 'API design, data modeling, and service migrations' },
    { label: 'Mobile', value: 'React Native, Expo, and Android releases' },
    { label: 'Infrastructure', value: 'AWS and DigitalOcean deployments' },
  ],
} as const

export const contactCta = {
  heading: 'Open to full stack and mobile roles',
  body: 'I’m interested in teams where I can build features across the stack and help take them from design through release.',
} as const
