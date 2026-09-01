<template>
  <div class="min-h-screen bg-surface">
    <a
      href="#main"
      class="sr-only rounded-full bg-accent px-5 py-3 text-sm font-medium text-ink-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
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
