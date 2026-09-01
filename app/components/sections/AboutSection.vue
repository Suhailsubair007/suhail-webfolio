<script setup lang="ts">
import { about, profile } from '#shared/content'
</script>

<template>
  <section id="about" class="page py-section">
    <SectionLabel v-reveal text="About" />

    <!--
      A wider left column than the metadata rail elsewhere: the portrait is the
      only photograph on the site, and at rail width it read as an afterthought
      rather than as the person the page is about.
    -->
    <div class="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] lg:gap-20">
      <div v-reveal>
        <img
          :src="profile.avatar"
          alt="Suhail Subair"
          width="1080"
          height="1080"
          loading="lazy"
          decoding="async"
          class="w-40 border border-border object-cover sm:w-56 lg:w-full"
        >
        <p class="mt-5 text-fg">
          {{ profile.name }}
        </p>
        <p class="mt-0.5 text-sm text-fg-subtle">
          {{ profile.role }} · {{ profile.location }}
        </p>
      </div>

      <div>
        <!-- The lead carries the argument; the paragraphs support it. Setting
             all three at body size made none of them the point. -->
        <p v-reveal="{ delay: 60 }" class="max-w-[26ch] text-2xl text-fg">
          {{ about.lead }}
        </p>

        <div v-reveal="{ delay: 110 }" class="mt-8 max-w-prose space-y-5 text-lg text-fg-muted">
          <p v-for="(paragraph, i) in about.paragraphs" :key="i">
            {{ paragraph }}
          </p>
        </div>

        <!-- The same claims, for the reader who does not read paragraphs. -->
        <dl v-reveal="{ delay: 160 }" class="mt-12 border-t border-border">
          <div
            v-for="item in about.focus"
            :key="item.label"
            class="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:gap-6"
          >
            <dt class="w-36 shrink-0 text-sm font-medium text-accent">
              {{ item.label }}
            </dt>
            <dd class="text-fg-muted">
              {{ item.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
