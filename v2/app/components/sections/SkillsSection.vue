<script setup lang="ts">
import { skills } from '#shared/content'
</script>

<template>
  <section id="skills" class="py-section">
    <div class="container-wide">
      <SectionHeading
        v-reveal
        eyebrow="Stack"
        title="What I build with."
        lede="Grouped by where each tool actually sits in a system, not ranked by a made-up proficiency bar."
      />

      <dl class="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(group, i) in skills"
          :key="group.category"
          v-reveal="{ delay: (i % 3) * 70 }"
          class="border-t border-border pt-6"
        >
          <dt class="font-mono text-2xs tracking-[0.18em] text-accent uppercase">
            {{ group.category }}
          </dt>
          <dd>
            <ul class="mt-5 flex flex-wrap gap-2">
              <StackChip v-for="item in group.items" :key="item" :label="item" />
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
