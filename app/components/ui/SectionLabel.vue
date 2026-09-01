<script setup lang="ts">
/**
 * A section marker: the section's heading, set small above a full-width rule.
 *
 * This renders a real <h2>. Visual size and semantic level are independent —
 * the page's outline has to be navigable by screen reader even though the
 * design deliberately keeps these labels quiet. Without it the document runs
 * h1 → h3 and every section is unreachable by heading navigation.
 */
defineProps<{ text: string }>()
</script>

<template>
  <div class="border-t border-border pt-4">
    <h2 class="label-accent">{{ text }}</h2>
  </div>
</template>
