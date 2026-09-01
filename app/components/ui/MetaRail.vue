<script setup lang="ts">
/**
 * A metadata rail entry: secondary information on the left, content on the
 * right. Collapses to a stacked single column below `md`.
 *
 * This is the page's structural signature. It exists so that dates, locations
 * and technologies are subordinate by position rather than by decoration —
 * no badges, no pills, no cards.
 */
withDefaults(defineProps<{ as?: string }>(), { as: 'div' })
</script>

<template>
  <component :is="as" class="rail">
    <div class="md:pt-1">
      <slot name="meta" />
    </div>
    <div>
      <slot />
    </div>
  </component>
</template>
