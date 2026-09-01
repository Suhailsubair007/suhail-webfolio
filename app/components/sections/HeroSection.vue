<script setup lang="ts">
import { profile, topSkills } from '#shared/content'
</script>

<template>
  <section id="top" class="relative overflow-hidden">
    <div aria-hidden="true" class="dot-grid pointer-events-none absolute inset-0" />

    <div class="container-wide relative grid items-center gap-16 py-section lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
      <!-- Copy. On mobile the visual sits behind this, so it is ordered first. -->
      <div class="relative z-10">
        <p class="font-mono text-2xs tracking-[0.18em] text-accent uppercase">
          {{ profile.eyebrow }}
        </p>

        <h1 class="mt-7 text-4xl font-medium">
          {{ profile.headlineLead }}<br>
          <span class="font-display italic text-accent">{{ profile.headlineAccent }}</span>
        </h1>

        <p class="mt-7 max-w-prose text-lg text-fg-muted">
          {{ profile.tagline }}
        </p>

        <ul class="mt-8 flex flex-wrap gap-2">
          <StackChip v-for="skill in topSkills" :key="skill" :label="skill" />
        </ul>

        <div class="mt-10 flex flex-wrap gap-3">
          <AppButton href="#work" size="lg">
            View my work
          </AppButton>
          <AppButton href="#contact" variant="secondary" size="lg">
            Let’s connect
          </AppButton>
          <AppButton :href="profile.resumeUrl" variant="ghost" size="lg" external>
            <AppIcon name="download" :size="18" />
            Résumé
          </AppButton>
        </div>

        <p class="mt-10 flex items-start gap-2.5 text-xs text-fg-subtle">
          <span
            aria-hidden="true"
            class="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
          />
          <span class="max-w-prose">{{ profile.availability }}</span>
        </p>
      </div>

      <!-- Visual. Below lg it drops behind the copy so it never competes with
           the h1 for the mobile LCP. -->
      <div
        class="pointer-events-none absolute inset-0 opacity-35 lg:pointer-events-auto lg:relative lg:inset-auto lg:opacity-100"
      >
        <HeroVisual class="mx-auto h-full max-w-md lg:max-w-none" />
      </div>
    </div>
  </section>
</template>
