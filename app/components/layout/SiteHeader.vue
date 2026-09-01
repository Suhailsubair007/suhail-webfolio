<script setup lang="ts">
import { navigation, profile } from '#shared/content'

const sectionIds = navigation.map(item => item.href.replace('#', ''))
const { activeId, lock } = useScrollSpy(sectionIds)

const scrolled = ref(false)
const menuOpen = ref(false)
const menuButton = useTemplateRef<HTMLButtonElement>('menuButton')

function onScroll() {
  scrolled.value = window.scrollY > 80
}

function closeMenu(returnFocus = false) {
  menuOpen.value = false
  if (returnFocus) menuButton.value?.focus()
}

function onNavigate(href: string) {
  lock(href.replace('#', ''))
  closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onScopeDispose(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-colors duration-[var(--duration-base)]"
    :class="scrolled || menuOpen
      ? 'border-b border-border bg-surface/85 backdrop-blur-md'
      : 'border-b border-transparent'"
  >
    <div class="container-wide flex h-header items-center justify-between gap-6">
      <a
        href="#top"
        class="font-display text-lg text-fg transition-colors hover:text-accent"
        @click="onNavigate('#top')"
      >
        {{ profile.name }}
      </a>

      <nav aria-label="Sections" class="hidden md:block">
        <ul class="flex items-center gap-1">
          <li v-for="item in navigation" :key="item.href">
            <a
              :href="item.href"
              :aria-current="activeId === item.href.slice(1) ? 'true' : undefined"
              class="inline-flex h-9 items-center rounded-full px-4 text-sm transition-colors duration-[var(--duration-base)]"
              :class="activeId === item.href.slice(1)
                ? 'bg-surface-card text-accent'
                : 'text-fg-subtle hover:text-fg'"
              @click="onNavigate(item.href)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <AppButton href="#contact" variant="secondary" class="max-sm:hidden">
          Let’s talk
        </AppButton>

        <button
          ref="menuButton"
          type="button"
          class="inline-flex size-11 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:text-fg md:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon :name="menuOpen ? 'close' : 'menu'" :size="22" />
        </button>
      </div>
    </div>

    <nav
      v-show="menuOpen"
      id="mobile-nav"
      aria-label="Sections"
      class="border-t border-border md:hidden"
      @keydown.esc="closeMenu(true)"
    >
      <ul class="container-wide flex flex-col py-3">
        <li v-for="item in navigation" :key="item.href">
          <a
            :href="item.href"
            :aria-current="activeId === item.href.slice(1) ? 'true' : undefined"
            class="flex min-h-12 items-center text-base"
            :class="activeId === item.href.slice(1) ? 'text-accent' : 'text-fg-muted'"
            @click="onNavigate(item.href)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
