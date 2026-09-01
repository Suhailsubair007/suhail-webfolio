<script setup lang="ts">
import type { ProjectItem } from '#shared/types/portfolio'

defineProps<{ project: ProjectItem }>()
</script>

<template>
  <SurfaceCard as="article" class="grid gap-10 p-7 sm:p-9 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
    <div>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span class="font-mono text-2xs tracking-[0.14em] text-accent uppercase">
          {{ project.kind }}
        </span>
        <time class="font-mono text-2xs text-fg-subtle">{{ project.period }}</time>
      </div>

      <h3 class="mt-4 text-xl font-medium text-fg">
        {{ project.name }}
      </h3>

      <p class="mt-4 max-w-prose text-fg-muted">
        {{ project.tagline }}
      </p>

      <ul class="mt-7 flex flex-wrap gap-2">
        <StackChip v-for="tech in project.stack" :key="tech" :label="tech" />
      </ul>

      <div class="mt-7 flex flex-wrap items-center gap-4">
        <NuxtLink
          :to="`/work/${project.id}`"
          class="group inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-gold-200"
        >
          Read the deep dive
          <AppIcon name="arrow-up-right" :size="16" class="arrow-nudge" />
          <span class="sr-only">on {{ project.name }}</span>
        </NuxtLink>

        <!-- Rendered only when a real destination exists. -->
        <a
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-1.5 text-sm text-fg-subtle transition-colors hover:text-fg"
        >
          {{ link.label }}
          <AppIcon name="arrow-up-right" :size="16" class="arrow-nudge" />
          <span class="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>

    <div class="lg:border-l lg:border-border lg:pl-10">
      <h4 class="font-mono text-2xs tracking-[0.18em] text-fg-subtle uppercase">
        Scope
      </h4>
      <ul class="mt-5 space-y-3">
        <li
          v-for="feature in project.features"
          :key="feature"
          class="flex gap-3 text-sm text-fg-muted"
        >
          <span aria-hidden="true" class="mt-2 size-1 shrink-0 rounded-full bg-accent-dim" />
          {{ feature }}
        </li>
      </ul>
    </div>
  </SurfaceCard>
</template>
