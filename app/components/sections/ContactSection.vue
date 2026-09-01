<script setup lang="ts">
import { contactCta, profile, socials } from '#shared/content'

/**
 * Channels, as rows rather than a loose run of links.
 *
 * Each carries what it is and what it points at, so a recruiter scanning for
 * a GitHub handle finds it without opening anything.
 */
const channels = computed(() => [
  ...socials
    .filter(social => social.icon !== 'mail')
    .map(social => ({
      label: social.label,
      value: social.handle,
      href: social.href,
      external: true,
    })),
  {
    label: 'Résumé',
    value: 'PDF, one page',
    href: profile.resumeUrl,
    external: true,
  },
])
</script>

<template>
  <section id="contact" class="page py-section">
    <SectionLabel v-reveal text="Contact" />

    <div class="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-24">
      <!-- The ask, and the one action that matters. -->
      <div v-reveal>
        <p class="text-3xl text-fg">
          <span v-for="line in contactCta.heading" :key="line" class="block">{{ line }}</span>
        </p>

        <p class="mt-6 max-w-prose text-lg text-fg-muted">
          {{ contactCta.body }}
        </p>

        <!-- The address is the primary call to action, so it is set as one
             rather than hidden behind a button labelled "get in touch". -->
        <p class="mt-10">
          <a
            :href="`mailto:${profile.email}`"
            class="group inline-flex items-baseline gap-3 text-fg"
          >
            <span class="underline-sweep font-display text-xl italic sm:text-2xl">{{ profile.email }}</span>
            <span aria-hidden="true" class="arrow text-accent">&#8594;</span>
          </a>
        </p>
      </div>

      <!-- Everything else, in rows. -->
      <div v-reveal="{ delay: 90 }">
        <ul class="border-t border-border">
          <li v-for="channel in channels" :key="channel.label">
            <a
              :href="channel.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-baseline gap-4 border-b border-border py-4 transition-colors duration-[var(--duration-base)] hover:border-border-strong"
            >
              <span class="w-24 shrink-0 text-sm text-fg-subtle">{{ channel.label }}</span>
              <span class="min-w-0 flex-1 truncate text-fg transition-colors group-hover:text-accent">
                {{ channel.value }}
              </span>
              <span aria-hidden="true" class="arrow shrink-0 text-fg-subtle">&#8594;</span>
              <span class="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        </ul>

        <dl class="mt-8 space-y-4">
          <div class="flex gap-4">
            <dt class="w-24 shrink-0 text-sm text-fg-subtle">
              Based in
            </dt>
            <dd class="text-sm text-fg-muted">
              {{ profile.location }}
            </dd>
          </div>
          <div class="flex gap-4">
            <dt class="w-24 shrink-0 text-sm text-fg-subtle">
              Available
            </dt>
            <dd class="text-sm text-fg-muted">
              {{ profile.availability }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
