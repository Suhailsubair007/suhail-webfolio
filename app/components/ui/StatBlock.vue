<script setup lang="ts">
defineProps<{ value: string, label: string }>()
</script>

<template>
  <div>
    <p class="font-display text-4xl leading-none text-accent">
      {{ value }}
    </p>
    <p class="mt-3 text-xs text-fg-subtle">
      {{ label }}
    </p>
  </div>
</template>
