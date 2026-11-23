<script setup lang="ts">
import { navigation, profile } from '#shared/content'

const route = useRoute()
const homePrefix = computed(() => route.path === '/' ? '' : '/')

const sectionIds = navigation.map(item => item.href.replace('#', ''))
const { activeId, lock } = useScrollSpy(sectionIds)

const scrolled = ref(false)
const currentSection = computed(() => !homePrefix.value && scrolled.value ? activeId.value : '')
const menuOpen = ref(false)
const menuButton = useTemplateRef<HTMLButtonElement>('menuButton')

function onScroll() {
  const threshold = scrolled.value ? 16 : 48
  scrolled.value = window.scrollY > threshold
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

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="sticky top-0 z-50 pointer-events-none"
    :class="{ 'is-compact': scrolled }"
    @keydown.esc="menuOpen && closeMenu(true)"
  >
    <div class="page header-row">
      <a
        :href="`${homePrefix}#top`"
        class="header-brand group pointer-events-auto inline-flex w-fit whitespace-nowrap items-center gap-2.5 font-semibold uppercase text-fg"
        @click="onNavigate('#top')"
      >
        <span
          aria-hidden="true"
          class="size-1.5 rounded-full bg-accent transition-transform duration-[var(--duration-base)] group-hover:scale-150"
        />
        {{ profile.name }}
      </a>

      <nav aria-label="Sections" class="desktop-nav pointer-events-auto hidden sm:block">
        <ul class="nav-list relative flex items-center gap-4 sm:gap-5 md:gap-7">
          <li v-for="item in navigation" :key="item.href">
            <a
              :href="`${homePrefix}${item.href}`"
              :aria-current="currentSection === item.href.slice(1) ? 'true' : undefined"
              class="nav-link relative flex h-11 items-center text-sm transition-colors duration-[var(--duration-base)]"
              :class="currentSection === item.href.slice(1) ? 'is-active text-fg' : 'text-fg-subtle hover:text-fg'"
              @click="onNavigate(item.href)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="header-actions pointer-events-auto flex items-center gap-1 justify-self-end">
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
      class="mobile-nav pointer-events-auto sm:hidden"
    >
      <ul class="flex flex-col px-4 py-2">
        <li v-for="item in navigation" :key="item.href">
          <a
            :href="`${homePrefix}${item.href}`"
            :aria-current="currentSection === item.href.slice(1) ? 'true' : undefined"
            class="flex min-h-12 items-center text-lg"
            :class="currentSection === item.href.slice(1) ? 'text-fg' : 'text-fg-subtle'"
            @click="onNavigate(item.href)"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header-row {
  position: relative;
  display: grid;
  height: var(--spacing-header);
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  isolation: isolate;
}

.desktop-nav {
  position: relative;
  isolation: isolate;
}

.desktop-nav::before,
.header-row::before,
.mobile-nav {
  border: 1px solid color-mix(in srgb, var(--color-fg) 16%, transparent);
  background: color-mix(in srgb, var(--color-surface-raised) 92%, transparent);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.14),
    0 8px 26px rgb(0 0 0 / 0.12);
}

@supports (backdrop-filter: blur(1px)) {
  .desktop-nav::before,
  .header-row::before,
  .mobile-nav {
    background: color-mix(in srgb, var(--color-surface-raised) 72%, transparent);
    backdrop-filter: blur(18px) saturate(155%);
  }
}

.desktop-nav::before,
.header-row::before {
  content: "";
  position: absolute;
  z-index: -1;
  border-radius: 999px;
  opacity: 0;
  transform: scale(1.2, 1.08);
  transition:
    opacity 320ms var(--ease-out-quint),
    transform 400ms var(--ease-out-quint);
}

.desktop-nav::before {
  inset: 0;
}

.nav-list {
  padding-inline: 1.375rem;
  transition: padding 400ms var(--ease-out-quint);
}

.nav-link::after {
  bottom: 0.5rem;
}

.is-compact .nav-list {
  padding-inline: 0.875rem;
}

.header-row::before {
  inset: 0.55rem max(0.625rem, calc((100% - 32rem) / 2)) 0.55rem;
}

.is-compact .desktop-nav::before,
.is-compact .header-row::before {
  opacity: 1;
  transform: scale(1);
}

.mobile-nav {
  position: absolute;
  inset: 100% 0 auto;
  width: min(calc(100% - 1.25rem), 32rem);
  margin: 0 auto;
  border-radius: 1.25rem;
}

@media (width >= 40rem) {
  .header-row {
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  }

  .header-row::before {
    display: none;
  }

  .header-brand,
  .header-actions {
    transition:
      opacity 260ms var(--ease-out-quint),
      transform 360ms var(--ease-out-quint),
      visibility 260ms;
  }

  .is-compact .header-brand:not(:focus-visible),
  .is-compact .header-actions:not(:focus-within) {
    opacity: 0;
    visibility: hidden;
  }

  .is-compact .header-brand {
    transform: translateX(0.75rem);
  }

  .is-compact .header-actions {
    transform: translateX(-0.75rem);
  }
}

@media (width < 40rem) {
  .header-row {
    max-width: 33.25rem;
  }
}
</style>
