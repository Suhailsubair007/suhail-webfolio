<template>
  <div class="min-h-screen bg-surface">
    <a
      href="#main"
      class="sr-only bg-fg px-5 py-3 text-sm text-ink-900 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
    >
      Skip to content
    </a>

    <SiteHeader />

    <main id="main" tabindex="-1" class="focus:outline-none">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>
