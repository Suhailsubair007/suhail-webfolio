<script setup lang="ts">
import { education, profile, site, socials, topSkills } from '#shared/content'

const { public: { siteUrl } } = useRuntimeConfig()

// Same form as the home canonical and the sitemap loc: origin with its trailing slash.
const homeUrl = `${siteUrl}/`

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': profile.name,
  'jobTitle': profile.role,
  'email': `mailto:${profile.email}`,
  'telephone': profile.phone,
  'url': homeUrl,
  'image': `${siteUrl}${profile.avatar}`,
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Kochi',
    'addressRegion': 'Kerala',
    'addressCountry': 'IN',
  },
  'sameAs': socials
    .filter(social => social.href.startsWith('http'))
    .map(social => social.href),
  'worksFor': {
    '@type': 'Organization',
    'name': profile.currentCompany.name,
    'url': profile.currentCompany.url,
  },
  'alumniOf': {
    '@type': 'CollegeOrUniversity',
    'name': education[0]?.institution,
  },
  'knowsAbout': topSkills,
}

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': site.shortTitle,
  'url': homeUrl,
  'description': site.description,
}

usePageSeo({
  title: site.title,
  description: site.description,
  path: '/',
  ogType: 'profile',
  jsonLd: [personLd, websiteLd],
})
</script>

<template>
  <HeroSection />
  <AboutSection />
  <ExperienceSection />
  <WorkSection />
  <SkillsSection />
  <ContactSection />
</template>
