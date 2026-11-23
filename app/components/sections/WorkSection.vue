<script setup lang="ts">
import { selectedWork } from '#shared/content'

const [featured, ...rest] = selectedWork
</script>

<template>
  <section id="work" class="page py-section">
    <SectionLabel v-reveal text="Selected work" />

    <article v-if="featured" class="border-b border-border py-9">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
        <div v-reveal>
          <h3 class="text-2xl text-fg">
            {{ featured.name }}
          </h3>
          <p class="mt-3 max-w-prose text-lg text-fg-muted">
            {{ featured.thesis }}
          </p>
        </div>

        <div v-reveal="{ delay: 90 }" class="lg:pt-3">
          <RailMeta
            :period="featured.period"
            :place="featured.context"
            :stack="featured.stack"
            class="mb-8 lg:hidden"
          />

          <p class="max-w-prose text-lg text-fg-muted">
            {{ featured.contribution }}
          </p>

          <div class="mt-8 hidden lg:block">
            <RailMeta
              :period="featured.period"
              :place="featured.context"
              :stack="featured.stack"
            />
          </div>

          <div class="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
            <TextLink :to="`/work/${featured.slug}`">
              Read the case study
            </TextLink>
            <TextLink v-if="featured.url" :href="featured.url" external>
              Visit the site
            </TextLink>
          </div>
        </div>
      </div>
    </article>

    <ol>
      <li v-for="item in rest" :key="item.slug" class="border-b border-border py-8">
        <MetaRail as="article">
          <template #meta>
            <RailMeta :period="item.period" :place="item.context" :stack="item.stack" />
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
                Visit {{ item.name }}
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
