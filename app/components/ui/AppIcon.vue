<script setup lang="ts">
/**
 * Inline icon set.
 *
 * Hand-authored paths rather than an icon dependency: this site needs ten
 * glyphs, and `currentColor` means they inherit accent colours for free.
 */
type IconName
  = | 'github'
    | 'linkedin'
    | 'mail'
    | 'phone'
    | 'map-pin'
    | 'arrow-up-right'
    | 'download'
    | 'chevron-down'
    | 'menu'
    | 'close'
    | 'sun'
    | 'moon'

const props = withDefaults(
  defineProps<{
    name: IconName
    /** Renders as a square of this many pixels. */
    size?: number
  }>(),
  { size: 20 },
)

/** `stroke` icons use the 1.5px outline style; `fill` icons are brand marks. */
const ICONS: Record<IconName, { d: string, mode: 'stroke' | 'fill' }> = {
  'github': {
    mode: 'fill',
    d: 'M12 2C6.475 2 2 6.475 2 12a10 10 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10Z',
  },
  'linkedin': {
    mode: 'fill',
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z',
  },
  'mail': { mode: 'stroke', d: 'M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Zm0 .5 8.4 5.6a1 1 0 0 0 1.2 0L21 8' },
  'phone': { mode: 'stroke', d: 'M15.5 21C8.044 21 3 15.956 3 8.5V6.75A1.75 1.75 0 0 1 4.75 5h2.06a1 1 0 0 1 .96.72l.86 2.98a1 1 0 0 1-.35 1.07l-1.3 1a12.3 12.3 0 0 0 5.25 5.25l1-1.3a1 1 0 0 1 1.07-.35l2.98.86a1 1 0 0 1 .72.96v2.06A1.75 1.75 0 0 1 17.25 21h-1.75Z' },
  'map-pin': { mode: 'stroke', d: 'M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Zm0-8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z' },
  'arrow-up-right': { mode: 'stroke', d: 'M7 17 17 7m0 0H8m9 0v9' },
  'download': { mode: 'stroke', d: 'M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2' },
  'chevron-down': { mode: 'stroke', d: 'm6 9 6 6 6-6' },
  'menu': { mode: 'stroke', d: 'M4 7h16M4 12h16M4 17h16' },
  'close': { mode: 'stroke', d: 'M6 6l12 12M18 6L6 18' },
  'sun': { mode: 'stroke', d: 'M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66 1.41-1.41M4.93 19.07l1.41-1.41m11.32 0 1.41 1.41M4.93 4.93l1.41 1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z' },
  'moon': { mode: 'stroke', d: 'M20 13.4A8.4 8.4 0 0 1 10.6 4a8.4 8.4 0 1 0 9.4 9.4Z' },
}

const icon = computed(() => ICONS[props.name])
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="icon.mode === 'fill' ? 'currentColor' : 'none'"
    :stroke="icon.mode === 'stroke' ? 'currentColor' : 'none'"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path :d="icon.d" />
  </svg>
</template>
