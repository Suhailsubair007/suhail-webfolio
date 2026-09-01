<script setup lang="ts">
import { experience } from '#shared/content'
</script>

<template>
  <section id="experience" class="py-section">
    <div class="container-wide">
      <SectionHeading
        v-reveal
        eyebrow="Experience"
        title="Where I’ve shipped."
        lede="Two full stack roles, both with end-to-end ownership — backend architecture through to store release."
      />

      <ol class="mt-14 space-y-6">
        <li
          v-for="(role, i) in experience"
          :key="role.id"
          v-reveal="{ delay: i * 70 }"
        >
          <ExperienceCard :role="role" />
        </li>
      </ol>
    </div>
  </section>
</template>
