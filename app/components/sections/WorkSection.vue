<script setup lang="ts">
import { selectedWork } from '#shared/content'

/**
 * Work is ordered by strength in the data layer. The first entry carries the
 * argument and gets the display treatment; the rest are set as rail entries.
 * Equal weight for every project would waste the strongest one.
 */
const [featured, ...rest] = selectedWork
</script>

<template>
  <section id="work" class="page py-section">
    <SectionLabel v-reveal text="Selected work" />

    <!-- Featured. -->
    <article v-if="featured" class="border-b border-border py-14">
      <h3 v-reveal class="text-3xl text-fg">
        {{ featured.name }}
      </h3>

      <p v-reveal="{ delay: 60 }" class="mt-5 max-w-[24ch] text-2xl text-fg-muted">
        {{ featured.thesis }}
      </p>

      <MetaRail class="mt-12">
        <template #meta>
          <p class="label-accent">
            {{ featured.period }}
          </p>
          <p class="label mt-1">
            {{ featured.context }}
          </p>
          <RailStack :items="featured.stack" />
        </template>

        <div v-reveal="{ delay: 100 }">
          <p class="max-w-prose text-lg text-fg-muted">
            {{ featured.contribution }}
          </p>

          <p v-if="featured.outcome" class="mt-8 border-l border-border pl-5">
            <span class="label block">Outcome</span>
            <span class="tabular mt-1 block text-xl text-accent">{{ featured.outcome }}</span>
          </p>

          <div class="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
            <TextLink :to="`/work/${featured.slug}`">
              Read the case study
            </TextLink>
            <TextLink v-if="featured.url" :href="featured.url" external>
              Visit the site
            </TextLink>
          </div>
        </div>
      </MetaRail>
    </article>

    <!-- Supporting work. -->
    <ol>
      <li v-for="item in rest" :key="item.slug" class="border-b border-border py-12">
        <MetaRail as="article">
          <template #meta>
            <p class="label-accent">
              {{ item.period }}
            </p>
            <p class="label mt-1">
              {{ item.context }}
            </p>
            <RailStack :items="item.stack" />
          </template>

          <div v-reveal="{ delay: 60 }">
            <h3 class="text-xl text-fg">
              {{ item.name }}
            </h3>

            <p class="mt-3 max-w-prose text-lg text-fg-muted">
              {{ item.thesis }}
            </p>

            <p class="mt-4 max-w-prose text-fg-muted">
              {{ item.contribution }}
            </p>

            <div class="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
              <TextLink :to="`/work/${item.slug}`">
                Read the case study<span class="sr-only"> for {{ item.name }}</span>
              </TextLink>
              <TextLink v-if="item.url" :href="item.url" external>
                Visit the site
              </TextLink>
            </div>
          </div>
        </MetaRail>
      </li>
    </ol>
  </section>
</template>
