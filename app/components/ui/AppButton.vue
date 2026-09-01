<script setup lang="ts">
/**
 * Polymorphic action: renders a <NuxtLink> for internal routes, an <a> for
 * external/protocol URLs, and a <button> when there is no destination.
 */
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'md' | 'lg'
    /** Set for links that leave the site — adds rel + a visually-hidden hint. */
    external?: boolean
  }>(),
  { variant: 'primary', size: 'md', external: false },
)

const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const VARIANTS = {
  primary:
    'bg-accent text-ink-950 border-transparent hover:bg-gold-200 font-medium',
  secondary:
    'bg-surface-card/60 text-fg border-border hover:border-border-strong hover:bg-surface-card',
  ghost:
    'bg-transparent text-fg-muted border-transparent hover:text-fg hover:bg-surface-card/50',
} as const

const SIZES = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-base',
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
    class="group inline-flex items-center justify-center gap-2 rounded-full border whitespace-nowrap transition-colors duration-[var(--duration-base)] ease-out-quint"
    :class="[VARIANTS[variant], SIZES[size]]"
  >
    <slot />
    <span v-if="external" class="sr-only">(opens in a new tab)</span>
  </component>
</template>
