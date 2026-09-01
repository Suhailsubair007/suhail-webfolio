<script setup lang="ts">
import { about, profile } from '#shared/content'
</script>

<template>
  <section id="about" class="page py-section">
    <SectionLabel v-reveal text="About" />

    <MetaRail class="mt-12">
      <template #meta>
        <img
          v-reveal
          :src="profile.avatar"
          alt="Suhail Subair"
          width="1080"
          height="1080"
          loading="lazy"
          decoding="async"
          class="w-28 object-cover md:w-full"
        >
        <p class="mt-4 text-sm text-fg-subtle">
          {{ profile.location }}
        </p>
      </template>

      <div v-reveal="{ delay: 80 }" class="max-w-prose space-y-6 text-lg text-fg-muted">
        <p v-for="(paragraph, i) in about.paragraphs" :key="i">
          {{ paragraph }}
        </p>
      </div>
    </MetaRail>
  </section>
</template>
