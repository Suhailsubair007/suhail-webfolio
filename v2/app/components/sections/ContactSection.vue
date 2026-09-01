<script setup lang="ts">
import { contactCta, profile, socials } from '#shared/content'
</script>

<template>
  <section id="contact" class="relative overflow-hidden py-section">
    <div aria-hidden="true" class="dot-grid pointer-events-none absolute inset-0" />

    <div class="container-wide relative">
      <div v-reveal class="max-w-prose">
        <Eyebrow>Contact</Eyebrow>
        <h2 class="mt-5 text-3xl font-medium">
          {{ contactCta.heading }}<br>
          <span class="font-display italic text-accent">{{ contactCta.accent }}</span>
        </h2>
        <p class="mt-6 text-lg text-fg-muted">
          {{ contactCta.body }}
        </p>
      </div>

      <div v-reveal="{ delay: 70 }" class="mt-10 flex flex-wrap gap-3">
        <AppButton :href="`mailto:${profile.email}`" size="lg">
          <AppIcon name="mail" :size="18" />
          {{ profile.email }}
        </AppButton>
        <AppButton :href="profile.resumeUrl" variant="secondary" size="lg" external>
          <AppIcon name="download" :size="18" />
          Download résumé
        </AppButton>
      </div>

      <ul v-reveal="{ delay: 140 }" class="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        <li v-for="social in socials" :key="social.label">
          <a
            :href="social.href"
            :target="social.icon === 'github' || social.icon === 'linkedin' ? '_blank' : undefined"
            :rel="social.icon === 'github' || social.icon === 'linkedin' ? 'noopener noreferrer' : undefined"
            class="group flex min-h-16 items-center gap-4 bg-surface-card/70 px-6 py-4 transition-colors duration-[var(--duration-base)] hover:bg-surface-card"
          >
            <AppIcon :name="social.icon" class="shrink-0 text-fg-subtle transition-colors group-hover:text-accent" />
            <span class="min-w-0">
              <span class="block text-2xs tracking-[0.14em] text-fg-subtle uppercase">
                {{ social.label }}
              </span>
              <span class="block truncate text-sm text-fg">{{ social.handle }}</span>
            </span>
            <AppIcon
              name="arrow-up-right"
              :size="16"
              class="arrow-nudge ml-auto shrink-0 text-fg-subtle"
            />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
