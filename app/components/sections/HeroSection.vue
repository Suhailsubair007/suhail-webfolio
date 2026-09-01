<script setup lang="ts">
import { highlights, profile } from '#shared/content'
</script>

<template>
  <section id="top" class="page hero-enter relative pt-8 pb-section sm:pt-12">
    <!--
      A grid behind the hero, and only the hero. It carries no meaning, so it
      is aria-hidden and inert; everything about how it is drawn and where it
      shows lives in `.hero-grid` in main.css.
    -->
    <div aria-hidden="true" class="hero-grid pointer-events-none absolute inset-0 -z-10" />

    <p class="label-accent">
      {{ profile.eyebrow }}
    </p>

    <!--
      The page's thesis, set as large as the measure allows. Lines are authored
      in the content layer rather than left to wrap, so the rag is deliberate
      at every width instead of accidental.

      Deliberately NOT reveal-animated. This is the LCP element: gating it
      behind hydration meant it shipped at opacity 0 and stayed invisible until
      240KB of JavaScript had parsed, then staggered in over 160ms. See
      `.hero-enter` in motion.css for the entrance that replaced it.
    -->
    <!--
      The authored line breaks are a desktop composition. Below `sm` the
      longest line no longer fits the measure, and forcing it stranded "schema"
      on a line of its own — so there the spans run inline and the browser
      balances the wrap instead.
    -->
    <h1 class="headline-set mt-6 text-display text-balance text-fg sm:mt-8 sm:text-wrap">
      <!--
        Every variant is rendered; the inline head script picks one before
        first paint and CSS shows only that. Choosing after hydration would
        swap the headline in front of the reader and put the LCP element back
        behind JavaScript, which is the jank this page was just fixed for.

        Each line ends in a real space, not a CSS ::after. Generated content
        never appears in textContent, so the heading read "wholeproduct" to
        anything extracting or copying it. Written as {{ ' ' }} because Vue
        strips whitespace-only text nodes containing a newline. Between block
        spans it collapses; below `sm`, where lines run inline, it separates.
      -->
      <span v-for="(variant, v) in profile.headlines" :key="v" class="headline-variant">
        <span
          v-for="(line, i) in variant"
          :key="i"
          class="inline sm:block"
        ><span
          v-for="(segment, j) in line"
          :key="j"
          :class="segment.accent && 'text-accent'"
        >{{ segment.text }}</span>{{ ' ' }}</span>
      </span>
    </h1>

    <!--
      No rule between the headline and this. The headline is already a block of
      solid type; a hairline under it read as a second edge in a place that
      needed none, and it held the tagline a screen's worth of space away from
      the sentence it belongs to. Whitespace does the separating now.
    -->
    <div class="mt-16 sm:mt-24">
      <p class="max-w-prose text-lg text-fg-muted">
        {{ profile.tagline }}
      </p>

      <div class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <AppButton href="#work">
          View the work
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

    <!--
      The figures sit across the full measure as the hero's base rather than in
      a side column. Four equal tracks align the labels by construction — the
      previous layout put the value in a fixed-width box, which "10,000+"
      overflowed, knocking its label out of line with the other three.
    -->
    <dl
      class="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-8 sm:mt-14 lg:grid-cols-4"
    >
      <div v-for="item in highlights" :key="item.label">
        <dd class="tabular text-2xl leading-none text-accent">
          {{ item.value }}
        </dd>
        <dt class="mt-3 text-sm text-fg-subtle">
          {{ item.label }}
        </dt>
      </div>
    </dl>
  </section>
</template>
