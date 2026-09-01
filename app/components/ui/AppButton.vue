<script setup lang="ts">
/**
 * Polymorphic action: a <NuxtLink> for internal routes, an <a> for external or
 * protocol URLs, a <button> when there is no destination.
 *
 * The primary action carries the accent — it is the page's focal point, and
 * the one place a filled colour earns its keep.
 *
 * It fills with `accent-solid`, not `accent`. The two differ per theme: the
 * amber that reads as text on paper is a dark bronze, and filling a button
 * with it put dark text on a dark ground. `on-accent` is the colour that
 * belongs on top of the fill, whichever theme is active.
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
  primary: 'bg-accent-solid text-on-accent hover:brightness-110',
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
