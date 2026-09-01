<script setup lang="ts">
import { highlights, profile } from '#shared/content'
</script>

<template>
  <section id="top" class="page hero-enter relative pt-8 pb-section sm:pt-12">
    <div aria-hidden="true" class="hero-grid pointer-events-none absolute inset-0 -z-10" />

    <p class="label-accent">
      {{ profile.eyebrow }}
    </p>

    <h1 class="headline-set mt-6 text-display text-balance text-fg sm:mt-8 sm:text-wrap">
      <span v-for="(variant, v) in profile.headlines" :key="v" class="headline-variant">
        <span
          v-for="(line, i) in variant"
          :key="i"
          class="inline sm:block"
        ><span
          v-for="(segment, j) in line"
          :key="j"
          :class="segment.accent && 'text-accent'"
        >{{ segment.text }}</span>{{ ' ' }}</span>
      </span>
    </h1>

    <div class="mt-16 sm:mt-24">
      <p class="max-w-prose text-lg text-fg-muted">
        {{ profile.tagline }}
      </p>

      <div class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <AppButton href="#work">
          View the work
          <span aria-hidden="true" class="arrow">&#8594;</span>
        </AppButton>
        <TextLink :href="`mailto:${profile.email}`" :arrow="false">
          Get in touch
        </TextLink>
        <TextLink :href="profile.resumeUrl" external :arrow="false">
          Resume
        </TextLink>
      </div>
    </div>

    <dl
      class="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-8 sm:mt-14 lg:grid-cols-4"
    >
      <div v-for="item in highlights" :key="item.label">
        <dd class="tabular text-2xl leading-none text-accent">
          {{ item.value }}
        </dd>
        <dt class="mt-3 text-sm text-fg-subtle">
          {{ item.label }}
        </dt>
      </div>
    </dl>
  </section>
</template>
