<script setup lang="ts">
import { about, highlights, profile } from '#shared/content'
</script>

<template>
  <section id="about" class="py-section">
    <div class="container-wide">
      <SectionHeading
        v-reveal
        eyebrow="About"
        title="Engineer across the whole stack, accountable for the whole product."
        :lede="about.lead"
      />

      <div class="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
        <div v-reveal="{ delay: 70 }" class="space-y-5 text-fg-muted">
          <p v-for="(paragraph, i) in about.paragraphs" :key="i" class="max-w-prose">
            {{ paragraph }}
          </p>
        </div>

        <div v-reveal="{ delay: 140 }" class="space-y-10">
          <img
            :src="profile.avatar"
            alt="Suhail Subair"
            width="1080"
            height="1080"
            loading="lazy"
            decoding="async"
            class="aspect-square w-full max-w-xs rounded-xl border border-border object-cover"
          >

          <div>
            <h3 class="font-mono text-2xs tracking-[0.18em] text-fg-subtle uppercase">
              What I focus on
            </h3>
            <ul class="mt-5 space-y-3">
              <li
                v-for="area in about.focusAreas"
                :key="area"
                class="flex gap-3 text-sm text-fg-muted"
              >
                <span aria-hidden="true" class="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                {{ area }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Verified metrics, drawn straight from the resume. -->
      <dl
        v-reveal="{ delay: 70 }"
        class="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 lg:grid-cols-4"
      >
        <div v-for="highlight in highlights" :key="highlight.label">
          <dt class="sr-only">
            {{ highlight.label }}
          </dt>
          <dd>
            <StatBlock :value="highlight.value" :label="highlight.label" />
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
