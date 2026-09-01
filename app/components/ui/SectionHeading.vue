<script setup lang="ts">
/**
 * The single source of section headings.
 *
 * Owning the <h2> here is deliberate: no section component can accidentally
 * emit a stray heading level and break the document outline.
 */
defineProps<{
  eyebrow: string
  title: string
  lede?: string
}>()
</script>

<template>
  <header class="max-w-prose">
    <Eyebrow>{{ eyebrow }}</Eyebrow>
    <h2 class="mt-5 text-3xl font-medium">
      {{ title }}
    </h2>
    <p v-if="lede" class="mt-5 text-lg text-fg-subtle">
      {{ lede }}
    </p>
  </header>
</template>
