<script setup lang="ts">
import { profile } from '#shared/content'
</script>

<template>
  <section id="top" class="page hero-enter pt-6 pb-6 sm:pt-10 sm:pb-8">
    <div class="rounded-3xl border border-border bg-surface-raised p-4 sm:p-8 lg:p-10">
      <div class="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,32%)] sm:gap-x-8">
        <div class="sm:self-end">
          <h1 class="text-3xl font-semibold text-fg">
            {{ profile.name }}
          </h1>
          <p class="mt-2 text-sm font-medium text-accent sm:text-base">
            {{ profile.role }}
          </p>
        </div>

        <img
          :src="profile.avatar"
          :alt="profile.name"
          width="768"
          height="768"
          fetchpriority="high"
          class="size-20 justify-self-end rounded-full object-cover ring-1 ring-accent/40 ring-offset-4 ring-offset-surface-raised sm:row-span-2 sm:size-auto sm:w-full sm:max-w-56"
        >

        <div class="col-span-2 min-w-0 sm:col-span-1 sm:self-start">
          <p class="max-w-prose text-fg-muted">
            {{ profile.tagline }}
          </p>

          <div class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <AppButton href="#work" class="rounded-lg">
              View my work
              <span aria-hidden="true" class="arrow">&#8594;</span>
            </AppButton>
            <TextLink :href="`mailto:${profile.email}`" :arrow="false">
              Get in touch
            </TextLink>
            <TextLink :href="profile.resumeUrl" external :arrow="false">
              Resume
            </TextLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
