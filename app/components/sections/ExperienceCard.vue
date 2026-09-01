<script setup lang="ts">
import type { ExperienceItem } from '#shared/types/portfolio'

defineProps<{ role: ExperienceItem }>()
</script>

<template>
  <SurfaceCard as="article" class="p-7 sm:p-9">
    <div class="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
      <div>
        <h3 class="text-xl font-medium text-fg">
          <a
            v-if="role.companyUrl"
            :href="role.companyUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            {{ role.company }}
            <AppIcon name="arrow-up-right" :size="16" class="arrow-nudge text-fg-subtle" />
            <span class="sr-only">(opens in a new tab)</span>
          </a>
          <template v-else>{{ role.company }}</template>
        </h3>
        <p class="mt-1 text-sm text-fg-subtle">
          {{ role.role }} · {{ role.location }}
        </p>
      </div>

      <div class="flex items-center gap-3">
        <span
          v-if="role.current"
          class="inline-flex items-center gap-1.5 rounded-full border border-gold-700 bg-gold-700/15 px-2.5 py-1 font-mono text-2xs text-accent"
        >
          <span aria-hidden="true" class="size-1.5 rounded-full bg-accent" />
          Current
        </span>
        <time :datetime="role.startDate" class="font-mono text-2xs text-fg-subtle">
          {{ role.period }}
        </time>
      </div>
    </div>

    <p class="mt-5 max-w-prose text-fg-muted">
      {{ role.summary }}
    </p>

    <ul class="mt-7 space-y-4 border-t border-border pt-7">
      <li v-for="bullet in role.bullets" :key="bullet.title" class="flex gap-3.5">
        <span aria-hidden="true" class="mt-2.5 size-1 shrink-0 rounded-full bg-accent-dim" />
        <p class="text-sm text-fg-muted">
          <strong class="font-medium text-fg">{{ bullet.title }}.</strong>
          {{ bullet.description }}
        </p>
      </li>
    </ul>

    <ul class="mt-7 flex flex-wrap gap-2">
      <StackChip v-for="tech in role.stack" :key="tech" :label="tech" />
    </ul>

    <NuxtLink
      :to="`/work/${role.id}`"
      class="group mt-7 inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-gold-200"
    >
      Read the deep dive
      <AppIcon name="arrow-up-right" :size="16" class="arrow-nudge" />
      <span class="sr-only">on {{ role.company }}</span>
    </NuxtLink>
  </SurfaceCard>
</template>
