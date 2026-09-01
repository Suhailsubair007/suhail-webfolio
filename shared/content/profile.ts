import type { HeadlineSegment, Highlight, SocialLink } from '../types/portfolio'

export const profile = {
  name: 'Suhail Subair',
  role: 'Full Stack Developer',
  /** Hero label. One line, no technology list — the work establishes that. */
  eyebrow: 'Software Engineer',
  /**
   * The hero statement, broken into the lines it should set on.
   *
   * Positioning is the strongest true claim in the résumé, and it is a claim
   * about him rather than about a stack: most engineers own a slice, and he
   * owns the web surface, the mobile app, the backend and the infrastructure
   * under all of it.
   */
  headline: [
    [{ text: 'I build the ' }, { text: 'whole', accent: true }],
    [{ text: 'product', accent: true }, { text: ', not just' }],
    [{ text: 'my part of it.' }],
  ] satisfies HeadlineSegment[][],
  // Names the four surfaces specifically rather than repeating the headline's
  // "whole product" — the tagline's job is to make the claim concrete.
  tagline:
    'Full stack engineer in Kochi, India. At Deelo that means the customer site, the React Native app, the GraphQL backend and the AWS infrastructure under them — for a services marketplace with 10,000+ registered users.',
  location: 'Kochi, India',
  availability: 'Open to engineering roles — remote, hybrid or on-site',
  email: 'suhailsubair04@gmail.com',
  phone: '+91-7736417357',
  resumeUrl: '/resume.pdf',
  avatar: '/img/portrait.webp',
  currentCompany: {
    name: 'Deelo',
    url: 'https://deelo.in',
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

/**
 * Two paragraphs. The previous five were a résumé pasted onto a page — a
 * recruiter reads the first sentence of each and moves on, so only two
 * sentences are worth having.
 */
export const about = {
  /** Set large. The one sentence to read if only one is read. */
  lead: 'I work across the whole stack because products need someone who can follow a problem wherever it goes.',
  paragraphs: [
    'At Deelo that means a Next.js customer site, a freelancer onboarding portal, an admin panel, a React Native app, and the AWS infrastructure underneath all of it.',
    'The work I care about is the kind that decides whether a product survives: moving a legacy backend to a new architecture without losing data, matching customers to nearby providers in real time, getting a release through the Play Store reliably enough that nobody thinks about it.',
  ],
  /**
   * A scannable summary of the same claims, for the reader who does not read
   * paragraphs. Every line is evidenced by the roles in `experience`.
   */
  focus: [
    { label: 'Product', value: 'Customer sites, onboarding portals and admin panels' },
    { label: 'Backend', value: 'Service architecture, GraphQL, zero-loss data migrations' },
    { label: 'Mobile', value: 'React Native and Expo, through to Play Store release' },
    { label: 'Infrastructure', value: 'AWS and DigitalOcean, deployment and production upkeep' },
  ],
} as const

/** Verified figures only. Nothing here is estimated or rounded up. */
export const highlights: Highlight[] = [
  { value: '10,000+', label: 'Users in production' },
  { value: '2+', label: 'Years shipping' },
  { value: '10+', label: 'Modules built' },
  { value: '2', label: 'Engineers mentored' },
]

export const contactCta = {
  heading: ['Have something', 'worth building?'],
  body: 'I’m looking for engineering roles where I can own features end to end and ship them to real users.',
} as const
