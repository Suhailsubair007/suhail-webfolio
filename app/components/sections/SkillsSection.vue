<script setup lang="ts">
import { achievements, education, skills } from '#shared/content'
</script>

<template>
  <section id="skills" class="page py-section">
    <SectionLabel v-reveal text="Toolkit" />

    <!--
      Set as prose, not as a badge wall. Technology is evidence for the claims
      above it, so it reads as a short list rather than forty pills.
    -->
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

    <!-- Background, compressed to a single rail rather than its own section. -->
    <MetaRail class="mt-16">
      <template #meta>
        <p class="text-sm font-medium text-accent">Background</p>
      </template>

      <div v-reveal class="max-w-prose">
        <p v-for="item in education" :key="item.id" class="text-lg text-fg">
          {{ item.degree }} {{ item.field }}, {{ item.institution }}
          <span class="tabular block text-sm text-fg-subtle">{{ item.period }} · First Class Distinction</span>
        </p>

        <p class="mt-6 text-sm text-fg-subtle">
          {{ achievements.filter(a => !a.title.startsWith('B.Tech')).map(a => a.title).join(' · ') }}
        </p>
      </div>
    </MetaRail>
  </section>
</template>
