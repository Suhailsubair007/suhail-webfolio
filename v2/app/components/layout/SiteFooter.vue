<script setup lang="ts">
import { profile, socials } from '#shared/content'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border">
    <div class="container-wide flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="font-display text-xl text-fg">
          {{ profile.name }}
        </p>
        <p class="mt-1 flex items-center gap-1.5 text-xs text-fg-subtle">
          <AppIcon name="map-pin" :size="14" />
          {{ profile.location }}
        </p>
      </div>

      <ul class="flex items-center gap-2">
        <li v-for="social in socials" :key="social.label">
          <a
            :href="social.href"
            :target="social.icon === 'github' || social.icon === 'linkedin' ? '_blank' : undefined"
            :rel="social.icon === 'github' || social.icon === 'linkedin' ? 'noopener noreferrer' : undefined"
            class="inline-flex size-11 items-center justify-center rounded-full border border-border text-fg-subtle transition-colors duration-[var(--duration-base)] hover:border-border-strong hover:text-accent"
          >
            <AppIcon :name="social.icon" />
            <span class="sr-only">{{ social.label }} — {{ social.handle }}</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="container-wide border-t border-border py-6">
      <p class="text-2xs text-fg-subtle">
        © {{ year }} {{ profile.name }} · Built with Nuxt, Vue and TypeScript
      </p>
    </div>
  </footer>
</template>
