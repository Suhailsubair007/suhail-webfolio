<script setup lang="ts">
import { highlights, profile } from '#shared/content'
</script>

<template>
  <section id="top" class="page pt-16 pb-section sm:pt-24">
    <p v-reveal class="label-accent">
      {{ profile.eyebrow }}
    </p>

    <!--
      The page's thesis, set as large as the measure allows. Lines are authored
      in the content layer rather than left to wrap, so the rag is deliberate
      at every width instead of accidental.
    -->
    <h1 class="mt-8 text-display text-fg sm:mt-10">
      <span
        v-for="(line, i) in profile.headline"
        :key="line"
        v-reveal="{ delay: i * 80, y: '1.25rem' }"
        class="block"
      >{{ line }}</span>
    </h1>

    <div class="mt-14 border-t border-border pt-10 sm:mt-20">
      <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
        <div v-reveal="{ delay: 120 }">
          <p class="max-w-prose text-lg text-fg-muted">
            {{ profile.tagline }}
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <AppButton href="#work">
              View the work
              <span aria-hidden="true" class="arrow">&#8594;</span>
            </AppButton>
            <TextLink :href="`mailto:${profile.email}`" :arrow="false">
              Get in touch
            </TextLink>
            <TextLink :href="profile.resumeUrl" external :arrow="false">
              Résumé
            </TextLink>
          </div>
        </div>

        <!--
          Figures sit in the rail rather than in stat cards. They are verified
          numbers, so they earn a place above the fold — but not four glowing
          panels.
        -->
        <dl
          v-reveal="{ delay: 180 }"
          class="grid grid-cols-2 gap-x-10 gap-y-6 lg:grid-cols-1 lg:gap-y-5 lg:border-l lg:border-border lg:pl-10"
        >
          <div v-for="item in highlights" :key="item.label" class="lg:flex lg:items-baseline lg:gap-4">
            <dd class="tabular text-xl text-accent lg:w-24">
              {{ item.value }}
            </dd>
            <dt class="label mt-1 lg:mt-0">
              {{ item.label }}
            </dt>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
