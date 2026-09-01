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
  title: `${entry.title} — ${profile.name}`,
  description: entry.summary,
  path: `/work/${entry.slug}`,
  ogType: 'article',
})
</script>

<template>
  <article class="page py-section">
    <p>
      <TextLink to="/" :arrow="false">
        <span aria-hidden="true">&#8592;</span> Back
      </TextLink>
    </p>

    <!--
      The complete record for one engagement. The homepage shows the leading
      three points; everything is here.
    -->
    <header class="mt-14 border-b border-border pb-14">
      <h1 class="text-3xl text-fg">
        {{ entry.title }}
      </h1>
      <p class="mt-4 max-w-[30ch] text-2xl text-fg-muted">
        {{ entry.summary }}
      </p>
    </header>

    <MetaRail class="mt-14">
      <template #meta>
        <p class="label text-fg">
          {{ entry.period }}
        </p>
        <p class="label mt-1">
          {{ entry.subtitle }}
        </p>
        <p v-if="entry.location" class="label mt-1">
          {{ entry.location }}
        </p>
        <RailStack :items="entry.stack" />
        <p v-for="link in entry.links" :key="link.href" class="mt-6">
          <TextLink :href="link.href" external>
            {{ link.label }}
          </TextLink>
        </p>
      </template>

      <div>
        <h2 class="label">
          {{ entry.kind === 'role' ? 'What I owned' : 'Scope' }}
        </h2>

        <ul class="mt-8 space-y-9">
          <li
            v-for="(item, i) in entry.sections"
            :key="item.title"
            v-reveal="{ delay: Math.min(i, 5) * 50 }"
            class="max-w-prose border-l border-border pl-6"
          >
            <h3 class="text-lg text-fg">
              {{ item.title }}
            </h3>
            <p v-if="item.description" class="mt-2 text-fg-muted">
              {{ item.description }}
            </p>
          </li>
        </ul>
      </div>
    </MetaRail>

    <nav aria-label="Other case studies" class="mt-20 border-t border-border pt-10">
      <p class="label">More work</p>
      <ul class="mt-6 flex flex-wrap gap-x-10 gap-y-4">
        <li v-for="other in others" :key="other.slug">
          <TextLink :to="`/work/${other.slug}`">
            {{ other.title }}
          </TextLink>
        </li>
      </ul>
    </nav>
  </article>
</template>
