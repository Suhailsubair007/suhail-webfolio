<script setup lang="ts">
import { navigation, profile } from '#shared/content'

const sectionIds = navigation.map(item => item.href.replace('#', ''))
const { activeId, lock } = useScrollSpy(sectionIds)

const scrolled = ref(false)
const menuOpen = ref(false)
const menuButton = useTemplateRef<HTMLButtonElement>('menuButton')

function onScroll() {
  scrolled.value = window.scrollY > 24
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
    :class="scrolled || menuOpen ? 'border-b border-border bg-surface/90 backdrop-blur' : 'border-b border-transparent'"
  >
    <div class="page flex h-header items-center justify-between gap-6">
      <a href="#top" class="text-fg" @click="onNavigate('#top')">
        {{ profile.name }}
      </a>

      <nav aria-label="Sections" class="hidden sm:block">
        <ul class="flex items-center gap-7">
          <li v-for="item in navigation" :key="item.href">
            <!--
              The active section is marked by a rule under the label, not by a
              filled pill. aria-current carries it for assistive tech.
            -->
            <a
              :href="item.href"
              :aria-current="activeId === item.href.slice(1) ? 'true' : undefined"
              class="border-b py-1 text-sm transition-colors duration-[var(--duration-base)]"
              :class="activeId === item.href.slice(1)
                ? 'border-accent text-fg'
                : 'border-transparent text-fg-subtle hover:text-fg'"
              @click="onNavigate(item.href)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-1">
        <ThemeToggle />

        <button
          ref="menuButton"
          type="button"
          class="flex h-11 items-center px-2 text-sm text-fg sm:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? 'Close' : 'Menu' }}
        </button>
      </div>
    </div>

    <nav
      v-show="menuOpen"
      id="mobile-nav"
      aria-label="Sections"
      class="border-t border-border sm:hidden"
      @keydown.esc="closeMenu(true)"
    >
      <ul class="page flex flex-col py-2">
        <li v-for="item in navigation" :key="item.href">
          <a
            :href="item.href"
            :aria-current="activeId === item.href.slice(1) ? 'true' : undefined"
            class="flex min-h-12 items-center text-lg"
            :class="activeId === item.href.slice(1) ? 'text-fg' : 'text-fg-subtle'"
            @click="onNavigate(item.href)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
