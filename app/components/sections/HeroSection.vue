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
    <!--
      The authored line breaks are a desktop composition. Below `sm` the
      longest line no longer fits the measure, and forcing it stranded "schema"
      on a line of its own — so there the spans run inline and the browser
      balances the wrap instead.
    -->
    <h1 class="mt-8 text-display text-balance text-fg sm:mt-10 sm:text-wrap">
      <span
        v-for="(line, i) in profile.headline"
        :key="line"
        v-reveal="{ delay: i * 80, y: '1.25rem' }"
        class="inline after:content-['_'] sm:block sm:after:content-none"
      >{{ line }}</span>
    </h1>

    <div class="mt-14 border-t border-border pt-10 sm:mt-20">
      <p v-reveal="{ delay: 120 }" class="max-w-prose text-lg text-fg-muted">
        {{ profile.tagline }}
      </p>

      <div v-reveal="{ delay: 160 }" class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
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
      The figures sit across the full measure as the hero's base rather than in
      a side column. Four equal tracks align the labels by construction — the
      previous layout put the value in a fixed-width box, which "10,000+"
      overflowed, knocking its label out of line with the other three.
    -->
    <dl
      v-reveal="{ delay: 200 }"
      class="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-10 sm:mt-20 lg:grid-cols-4"
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
