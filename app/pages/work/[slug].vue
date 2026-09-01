<script setup lang="ts">
import { caseStudies, findCaseStudy, profile } from '#shared/content'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const study = computed(() => findCaseStudy(slug.value))

// A slug outside the derived set is a genuine 404, not an empty page.
if (!study.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Case study not found',
    fatal: true,
  })
}

const entry = study.value!

const others = caseStudies.filter(item => item.slug !== entry.slug)

usePageSeo({
  title: `${entry.title} — ${entry.subtitle} · ${profile.name}`,
  description: entry.summary,
  path: `/work/${entry.slug}`,
  ogType: 'article',
})
</script>

<template>
  <article class="py-section">
    <div class="container-content">
      <NuxtLink
        to="/"
        class="group inline-flex items-center gap-1.5 font-mono text-2xs tracking-[0.14em] text-fg-subtle uppercase transition-colors hover:text-accent"
      >
        <span aria-hidden="true">&larr;</span>
        Back to portfolio
      </NuxtLink>

      <header class="mt-10 border-b border-border pb-10">
        <Eyebrow>{{ entry.kind === 'role' ? 'Case study · Role' : 'Case study · Product' }}</Eyebrow>

        <h1 class="mt-5 text-4xl font-medium">
          {{ entry.title }}
        </h1>

        <p class="mt-4 text-lg text-fg-subtle">
          {{ entry.subtitle }}<template v-if="entry.location"> · {{ entry.location }}</template>
        </p>

        <p class="mt-2 font-mono text-2xs text-fg-subtle">
          {{ entry.period }}
        </p>

        <p class="mt-8 max-w-prose text-lg text-fg-muted">
          {{ entry.summary }}
        </p>

        <div v-if="entry.links.length" class="mt-8 flex flex-wrap gap-3">
          <AppButton
            v-for="link in entry.links"
            :key="link.href"
            :href="link.href"
            variant="secondary"
            external
          >
            {{ link.label }}
            <AppIcon name="arrow-up-right" :size="16" />
          </AppButton>
        </div>
      </header>

      <section class="mt-12">
        <h2 class="font-mono text-2xs tracking-[0.18em] text-accent uppercase">
          {{ entry.kind === 'role' ? 'What I owned' : 'Scope' }}
        </h2>

        <ol class="mt-8 space-y-10">
          <li
            v-for="(item, i) in entry.sections"
            :key="item.title"
            v-reveal="{ delay: Math.min(i, 5) * 70 }"
            class="grid gap-4 border-t border-border pt-8 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-8"
          >
            <p class="font-mono text-2xs text-fg-faint" aria-hidden="true">
              {{ String(i + 1).padStart(2, '0') }}
            </p>
            <div>
              <h3 class="text-xl font-medium text-fg">
                {{ item.title }}
              </h3>
              <p v-if="item.description" class="mt-3 max-w-prose text-fg-muted">
                {{ item.description }}
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section class="mt-14 border-t border-border pt-10">
        <h2 class="font-mono text-2xs tracking-[0.18em] text-accent uppercase">
          Technologies
        </h2>
        <ul class="mt-6 flex flex-wrap gap-2">
          <StackChip v-for="tech in entry.stack" :key="tech" :label="tech" />
        </ul>
      </section>

      <nav aria-label="Other case studies" class="mt-16 border-t border-border pt-10">
        <h2 class="font-mono text-2xs tracking-[0.18em] text-fg-subtle uppercase">
          More work
        </h2>
        <ul class="mt-6 grid gap-4 sm:grid-cols-2">
          <li v-for="other in others" :key="other.slug">
            <NuxtLink
              :to="`/work/${other.slug}`"
              class="group block rounded-xl border border-border bg-surface-card/70 p-6 transition-colors duration-[var(--duration-base)] hover:border-border-strong"
            >
              <p class="font-mono text-2xs text-fg-subtle">
                {{ other.subtitle }}
              </p>
              <p class="mt-2 flex items-center gap-1.5 text-lg text-fg">
                {{ other.title }}
                <AppIcon name="arrow-up-right" :size="16" class="arrow-nudge text-accent" />
              </p>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </article>
</template>
