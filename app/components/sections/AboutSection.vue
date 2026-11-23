<script setup lang="ts">
import { about } from '#shared/content'
</script>

<template>
  <section id="about" class="page py-section">
    <SectionLabel v-reveal text="About" />

    <div class="mt-7 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
      <div v-reveal="{ delay: 60 }" class="max-w-prose space-y-4 text-fg-muted">
        <p class="text-lg font-medium text-fg">
          {{ about.lead }}
        </p>
        <p v-for="(paragraph, i) in about.paragraphs" :key="i">
          {{ paragraph }}
        </p>
      </div>

      <dl v-reveal="{ delay: 110 }" class="border-t border-border">
        <div
          v-for="item in about.focus"
          :key="item.label"
          class="flex flex-col gap-1 border-b border-border py-3 sm:flex-row sm:gap-5"
        >
          <dt class="w-28 shrink-0 text-sm font-medium text-accent">
            {{ item.label }}
          </dt>
          <dd class="text-sm text-fg-muted">
            {{ item.value }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
