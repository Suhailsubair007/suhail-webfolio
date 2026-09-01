<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    external?: boolean
    arrow?: boolean
  }>(),
  { external: false, arrow: true },
)

const tag = computed(() => (props.to ? resolveComponent('NuxtLink') : 'a'))
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="group inline-flex items-center gap-1.5 text-fg"
  >
    <span class="underline-sweep">
      <slot />
    </span>
    <span v-if="arrow" aria-hidden="true" class="arrow text-accent">&#8594;</span>
    <span v-if="external" class="sr-only">(opens in a new tab)</span>
  </component>
</template>
