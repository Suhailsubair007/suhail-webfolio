<script setup lang="ts">
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
