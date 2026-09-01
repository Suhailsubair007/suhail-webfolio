<script setup lang="ts">
/**
 * Technologies in the metadata rail.
 *
 * Set one per line on desktop, where the rail is a narrow column and a
 * middot-separated run would break in the wrong places and strand its
 * separators. On mobile the rail collapses above the content, so five stacked
 * lines would push the company name below the fold — there it flows inline
 * instead, which is the same information at a third of the height.
 */
defineProps<{ items: string[] }>()
</script>

<template>
  <ul class="rail-stack label">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </ul>
</template>
