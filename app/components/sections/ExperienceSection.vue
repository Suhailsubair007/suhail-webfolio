<script setup lang="ts">
import { experience } from '#shared/content'

const LEAD_BULLETS = 3
const LEAD_STACK = 5
</script>

<template>
  <section id="experience" class="page py-section">
    <SectionLabel v-reveal text="Experience" />

    <ol class="mt-12">
      <li
        v-for="role in experience"
        :key="role.id"
        class="border-b border-border py-12 first:border-t"
      >
        <MetaRail as="article">
          <template #meta>
            <RailMeta
              v-reveal
              :period="role.period"
              :place="role.location"
              :stack="role.stack.slice(0, LEAD_STACK)"
            />
          </template>

          <div v-reveal="{ delay: 60 }">
            <h3 class="text-2xl text-fg">
              <a
                v-if="role.companyUrl"
                :href="role.companyUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="underline-sweep"
              >{{ role.company }}<span class="sr-only"> (opens in a new tab)</span></a>
              <template v-else>{{ role.company }}</template>
            </h3>

            <p class="mt-1 text-fg-subtle">
              {{ role.role }}
            </p>

            <p class="mt-6 max-w-prose text-lg text-fg-muted">
              {{ role.summary }}
            </p>

            <ul class="mt-8 space-y-5">
              <li
                v-for="bullet in role.bullets.slice(0, LEAD_BULLETS)"
                :key="bullet.title"
                class="max-w-prose border-l border-border pl-5"
              >
                <p class="text-fg">
                  {{ bullet.title }}
                </p>
                <p class="mt-1.5 text-sm text-fg-muted">
                  {{ bullet.description }}
                </p>
              </li>
            </ul>

            <p class="mt-8">
              <TextLink :to="`/work/${role.id}`">
                Full record<span class="sr-only"> for {{ role.company }}</span>
              </TextLink>
            </p>
          </div>
        </MetaRail>
      </li>
    </ol>
  </section>
</template>
