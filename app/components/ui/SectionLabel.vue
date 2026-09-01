<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <div class="border-t border-border pt-4">
    <h2 class="label-accent">{{ text }}</h2>
  </div>
</template>
