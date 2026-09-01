<script setup lang="ts">
/**
 * The metadata rail's contents: period, place, and the technologies used.
 *
 * Set in sentence case. All-caps was applied to everything here, which made
 * the rail one flat shout and cost real legibility — "REACT NATIVE" is
 * measurably harder to read than "React Native", and proper nouns lose the
 * shape the eye recognises them by.
 *
 * Caps now survive in exactly one place on the page: the section markers.
 */
defineProps<{
  period: string
  place?: string
  stack?: string[]
}>()
</script>

<template>
  <div>
    <p class="tabular text-sm font-medium text-accent">
      {{ period }}
    </p>
    <p v-if="place" class="mt-0.5 text-sm text-fg-subtle">
      {{ place }}
    </p>

    <ul
      v-if="stack?.length"
      class="mt-5 space-y-1 border-t border-border pt-4 text-sm text-fg-subtle"
    >
      <li v-for="item in stack" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
