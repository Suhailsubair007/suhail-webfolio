<script setup lang="ts">
/**
 * Polymorphic action: a <NuxtLink> for internal routes, an <a> for external or
 * protocol URLs, a <button> when there is no destination.
 *
 * The primary action is bone, not amber. Reserving the accent for interaction
 * states is what keeps it meaningful — a page where every button glows gold
 * has no accent at all.
 */
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary'
    external?: boolean
  }>(),
  { variant: 'primary', external: false },
)

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const VARIANTS = {
  primary: 'bg-fg text-ink-900 hover:bg-white',
  secondary: 'border border-border text-fg hover:border-border-strong',
} as const
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="tag === 'button' ? 'button' : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="group inline-flex h-11 items-center gap-2 px-5 text-sm transition-colors duration-[var(--duration-base)]"
    :class="VARIANTS[variant]"
  >
    <slot />
    <span v-if="external" class="sr-only">(opens in a new tab)</span>
  </component>
</template>
