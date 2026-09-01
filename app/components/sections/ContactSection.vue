<script setup lang="ts">
import { contactCta, profile, socials } from '#shared/content'
</script>

<template>
  <section id="contact" class="page py-section">
    <SectionLabel v-reveal text="Contact" />

    <p class="mt-12 text-3xl text-fg">
      <span
        v-for="(line, i) in contactCta.heading"
        :key="line"
        v-reveal="{ delay: i * 70 }"
        class="block"
      >{{ line }}</span>
    </p>

    <MetaRail class="mt-12">
      <template #meta>
        <p class="label">
          {{ profile.availability }}
        </p>
      </template>

      <div v-reveal="{ delay: 100 }">
        <p class="max-w-prose text-lg text-fg-muted">
          {{ contactCta.body }}
        </p>

        <!-- The address itself is the call to action, at a size worth reading. -->
        <p class="mt-9">
          <a
            :href="`mailto:${profile.email}`"
            class="underline-sweep text-xl text-fg sm:text-2xl"
          >{{ profile.email }}</a>
        </p>

        <ul class="mt-9 flex flex-wrap gap-x-8 gap-y-3">
          <li v-for="social in socials.filter(s => s.icon !== 'mail')" :key="social.label">
            <TextLink :href="social.href" external>
              {{ social.label }}
            </TextLink>
          </li>
          <li>
            <TextLink :href="profile.resumeUrl" external>
              Résumé
            </TextLink>
          </li>
        </ul>
      </div>
    </MetaRail>
  </section>
</template>
