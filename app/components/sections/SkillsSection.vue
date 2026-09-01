<script setup lang="ts">
import { achievements, education, skills } from '#shared/content'
</script>

<template>
  <section id="skills" class="page py-section">
    <SectionLabel v-reveal text="Skills" />

    <dl class="mt-12">
      <div
        v-for="(group, i) in skills"
        :key="group.category"
        v-reveal="{ delay: Math.min(i, 3) * 50 }"
        class="rail border-b border-border py-6 first:border-t"
      >
        <dt class="text-sm font-medium text-accent md:pt-1">
          {{ group.category }}
        </dt>
        <dd class="text-lg text-fg-muted">
          {{ group.items.join(' · ') }}
        </dd>
      </div>
    </dl>

    <div class="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
      <div v-reveal>
        <h3 class="text-sm font-medium text-accent">
          Education
        </h3>
        <div v-for="item in education" :key="item.id" class="mt-5">
          <p class="text-lg text-fg">
            {{ item.degree }}, {{ item.field }}
          </p>
          <p class="mt-1 text-fg-muted">
            {{ item.institution }} · {{ item.location }}
          </p>
          <p class="tabular mt-2 text-sm text-fg-subtle">
            <time :datetime="item.startDate">{{ item.period }}</time>
            <template v-if="item.note"> · {{ item.note }}</template>
          </p>
        </div>
      </div>

      <div v-reveal="{ delay: 80 }">
        <h3 class="text-sm font-medium text-accent">
          Certifications & achievements
        </h3>
        <ul class="mt-5 border-t border-border">
          <li
            v-for="item in achievements"
            :key="item.title"
            class="flex gap-5 border-b border-border py-3.5"
          >
            <time class="tabular w-12 shrink-0 text-sm text-fg-subtle">{{ item.year }}</time>
            <span class="text-fg-muted">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
