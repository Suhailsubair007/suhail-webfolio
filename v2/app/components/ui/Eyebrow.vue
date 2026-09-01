<script setup lang="ts">
withDefaults(defineProps<{ rule?: boolean }>(), { rule: true })
</script>

<template>
  <p class="flex items-center gap-3 font-mono text-2xs tracking-[0.18em] text-accent uppercase">
    <span v-if="rule" aria-hidden="true" class="h-px w-6 bg-accent-dim" />
    <slot />
  </p>
</template>
