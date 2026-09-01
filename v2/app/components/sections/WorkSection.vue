<script setup lang="ts">
import { projects, selectedWork } from '#shared/content'

const featured = projects.filter(project => project.featured)
</script>

<template>
  <section id="work" class="py-section">
    <div class="container-wide">
      <SectionHeading
        v-reveal
        eyebrow="Selected work"
        title="Products I’ve built."
        lede="Experience above describes the roles. This is what actually got shipped, and what each system had to do."
      />

      <!-- Products delivered inside a role. Framed by what was built rather
           than by employment, so it complements the timeline instead of
           repeating it. -->
      <ul class="mt-14 grid gap-6 md:grid-cols-2">
        <li
          v-for="(item, i) in selectedWork"
          :key="item.slug"
          v-reveal="{ delay: i * 70 }"
        >
          <SurfaceCard as="article" interactive class="flex h-full flex-col p-7 sm:p-8">
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span class="font-mono text-2xs tracking-[0.14em] text-accent uppercase">
                {{ item.context }}
              </span>
              <time class="font-mono text-2xs text-fg-subtle">{{ item.period }}</time>
            </div>

            <h3 class="mt-4 text-xl font-medium text-fg">
              {{ item.name }}
            </h3>

            <p class="mt-3 flex-1 text-sm text-fg-muted">
              {{ item.summary }}
            </p>

            <ul class="mt-6 flex flex-wrap gap-2">
              <StackChip v-for="tech in item.stack" :key="tech" :label="tech" />
            </ul>

            <div class="mt-6 flex flex-wrap items-center gap-5 border-t border-border pt-5">
              <NuxtLink
                :to="`/work/${item.slug}`"
                class="group inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-gold-200"
              >
                Read the deep dive
                <AppIcon name="arrow-up-right" :size="16" class="arrow-nudge" />
                <span class="sr-only">on {{ item.name }}</span>
              </NuxtLink>

              <a
                v-if="item.url"
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-1.5 text-sm text-fg-subtle transition-colors hover:text-fg"
              >
                Visit site
                <AppIcon name="arrow-up-right" :size="16" class="arrow-nudge" />
                <span class="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </SurfaceCard>
        </li>
      </ul>

      <!-- The independent product gets the wide treatment. -->
      <div
        v-for="project in featured"
        :key="project.id"
        v-reveal="{ delay: 70 }"
        class="mt-6"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>
