<script setup lang="ts">
const { theme, toggle } = useTheme()

const label = computed(() =>
  theme.value === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
)
</script>

<template>
  <button
    type="button"
    class="inline-flex size-10 items-center justify-center rounded-full border border-border text-fg-muted transition-colors duration-[var(--duration-base)] hover:border-border-strong hover:text-fg"
    :title="label"
    @click="toggle"
  >
    <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" :size="17" />
    <span class="sr-only">{{ label }}</span>
  </button>
</template>
