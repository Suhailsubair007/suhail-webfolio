<script setup lang="ts">
/** The one place card elevation is defined, so it can be tuned globally. */
withDefaults(
  defineProps<{
    as?: string
    /** Adds the hover lift. Off for non-interactive surfaces. */
    interactive?: boolean
  }>(),
  { as: 'div', interactive: false },
)
</script>

<template>
  <component
    :is="as"
    class="rounded-xl border border-border bg-surface-card/70 shadow-card"
    :class="interactive && 'card-lift'"
  >
    <slot />
  </component>
</template>
