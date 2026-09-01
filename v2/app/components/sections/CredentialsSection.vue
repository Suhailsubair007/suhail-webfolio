<script setup lang="ts">
import { achievements, education } from '#shared/content'
</script>

<template>
  <section id="credentials" class="py-section">
    <div class="container-wide">
      <SectionHeading
        v-reveal
        eyebrow="Background"
        title="Education and credentials."
      />

      <div class="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
        <div v-reveal>
          <h3 class="font-mono text-2xs tracking-[0.18em] text-fg-subtle uppercase">
            Education
          </h3>
          <ul class="mt-6 space-y-6">
            <li v-for="item in education" :key="item.id">
              <p class="text-lg text-fg">
                {{ item.degree }}, {{ item.field }}
              </p>
              <p class="mt-1 text-sm text-fg-muted">
                {{ item.institution }} · {{ item.location }}
              </p>
              <time :datetime="item.startDate" class="mt-2 block font-mono text-2xs text-fg-subtle">
                {{ item.period }}
              </time>
              <p v-if="item.note" class="mt-3 text-sm text-fg-subtle">
                {{ item.note }}
              </p>
            </li>
          </ul>
        </div>

        <div v-reveal="{ delay: 70 }">
          <h3 class="font-mono text-2xs tracking-[0.18em] text-fg-subtle uppercase">
            Achievements & certifications
          </h3>
          <ul class="mt-6 divide-y divide-border border-t border-border">
            <li
              v-for="item in achievements"
              :key="item.title"
              class="flex gap-6 py-5"
            >
              <time class="shrink-0 font-mono text-2xs text-accent">{{ item.year }}</time>
              <div>
                <p class="text-sm font-medium text-fg">
                  {{ item.title }}
                </p>
                <p class="mt-1 text-sm text-fg-subtle">
                  {{ item.description }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
