import type { HeadlineSegment, Highlight, SocialLink } from '../types/portfolio'

export const profile = {
  name: 'Suhail Subair',
  role: 'Full Stack Developer',
  /** Hero label. One line, no technology list — the work establishes that. */
  eyebrow: 'Software Engineer',
  /**
   * Hero statements, one picked at random per visit.
   *
   * Every variant is the same claim in different words, and every one is
   * backed by the roles in `experience`: he owns the web surface, the mobile
   * app, the backend and the infrastructure under all of it.
   *
   * None uses the first person. An "I build…" construction turns a
   * description of the work into a self-assessment, which is what made the
   * earlier drafts read as boasting. These describe the work and leave the
   * figures underneath to make the case. None repeats the eyebrow above or
   * the tagline below.
   *
   * The first entry is the fallback: it is what renders with JavaScript
   * disabled, and what a crawler that ignores the selection sees first.
   *
   * Adding or removing a variant needs a matching rule in the `.headline-set`
   * block in main.css, and the count updated in the head script in
   * nuxt.config.ts. Both are commented to say so.
   */
  headlines: [
    [
      [{ text: 'The whole stack.' }],
      [{ text: 'Schema', accent: true }, { text: ' to' }],
      [{ text: 'store release', accent: true }, { text: '.' }],
    ],
    [
      [{ text: 'Production systems,' }],
      [{ text: 'built ' }, { text: 'end to end', accent: true }],
      [{ text: 'and kept running.' }],
    ],
    [
      [{ text: 'From ' }, { text: 'data model', accent: true }],
      [{ text: 'to ' }, { text: 'shipped release', accent: true }, { text: '.' }],
      [{ text: 'The whole product.' }],
    ],
  ] satisfies HeadlineSegment[][][],

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
