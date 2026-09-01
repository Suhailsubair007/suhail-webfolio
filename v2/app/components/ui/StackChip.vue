<script setup lang="ts">
/**
 * Typographic technology chip.
 *
 * Deliberately not a logo: the legacy repo's brand SVGs hardcode black fills
 * and are invisible on this palette, and type reads better against the
 * serif/champagne system anyway.
 */
defineProps<{ label: string }>()
</script>

<template>
  <li
    class="rounded-full border border-border bg-surface-raised/70 px-3 py-1.5 font-mono text-2xs text-fg-subtle"
  >
    {{ label }}
  </li>
</template>
