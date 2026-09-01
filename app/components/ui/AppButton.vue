<script setup lang="ts">
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
