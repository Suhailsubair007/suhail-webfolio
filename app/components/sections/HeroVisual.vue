<script setup lang="ts">
/**
 * "System Trace" — an abstract schematic of the stack this portfolio
 * describes: clients → gateway → services → data → infrastructure.
 *
 * Hand-authored SVG rather than an image or a canvas: it is ~3KB, scales
 * perfectly, inherits palette tokens, and animates only `stroke-dashoffset`
 * and `transform`, so it stays on the compositor. Purely decorative — the
 * <h1> carries all the meaning — hence aria-hidden.
 *
 * Trace lengths are measured at authoring time and hardcoded, so no JS is
 * needed to drive the packet animation.
 */
const traces = [
  { d: 'M110 96 L110 130 L240 130 L240 158', len: 192 },
  { d: 'M370 96 L370 130 L240 130 L240 158', len: 192 },
  { d: 'M240 222 L240 252 L104 252 L104 286', len: 200 },
  { d: 'M240 222 L240 286', len: 64 },
  { d: 'M240 222 L240 252 L376 252 L376 286', len: 200 },
  { d: 'M104 350 L104 380 L240 380 L240 414', len: 200 },
  { d: 'M376 350 L376 380 L240 380 L240 414', len: 200 },
  { d: 'M240 350 L240 414', len: 64 },
  { d: 'M240 478 L240 508', len: 30 },
]

const nodes = [
  [110, 96], [370, 96], [240, 158], [104, 286], [240, 286],
  [376, 286], [240, 414], [240, 478], [240, 508],
] as const
</script>

<template>
  <div class="relative isolate">
    <!-- Ambient aura behind the schematic. -->
    <div
      aria-hidden="true"
      class="aura pointer-events-none absolute inset-0 -z-10 blur-[52px]"
      style="background: radial-gradient(50% 45% at 50% 38%, rgb(227 200 139 / 0.13), transparent 72%)"
    />

    <svg
      viewBox="0 0 480 560"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      aria-hidden="true"
      focusable="false"
      class="h-auto w-full"
    >
      <g stroke="var(--color-border-strong)" stroke-width="1">
        <!-- Tier 1 — clients: a browser and a phone. -->
        <rect x="50" y="16" width="120" height="80" rx="8" fill="var(--color-ink-900)" />
        <path d="M50 38 H170" stroke="var(--color-border)" />
        <circle cx="62" cy="27" r="2.5" fill="var(--color-border-strong)" stroke="none" />
        <circle cx="71" cy="27" r="2.5" fill="var(--color-border-strong)" stroke="none" />

        <rect x="342" y="10" width="56" height="86" rx="10" fill="var(--color-ink-900)" />
        <path d="M362 18 H378" stroke="var(--color-border)" stroke-width="2" stroke-linecap="round" />

        <!-- Tier 2 — gateway. -->
        <rect
          x="150" y="158" width="180" height="64" rx="8"
          fill="var(--color-ink-900)" stroke="var(--color-gold-600)"
        />
        <path d="M174 190 H306" stroke="var(--color-gold-700)" stroke-dasharray="3 5" />

        <!-- Tier 3 — services. -->
        <rect x="52" y="286" width="104" height="64" rx="8" fill="var(--color-ink-900)" />
        <rect
          x="188" y="286" width="104" height="64" rx="8"
          fill="var(--color-ink-900)" stroke="var(--color-accent-dim)"
        />
        <rect x="324" y="286" width="104" height="64" rx="8" fill="var(--color-ink-900)" />

        <!-- Tier 4 — data: schema plates. -->
        <rect x="150" y="414" width="180" height="64" rx="8" fill="var(--color-ink-900)" />
        <g stroke="var(--color-border)">
          <path d="M170 432 H310" />
          <path d="M170 446 H310" />
          <path d="M170 460 H270" />
        </g>

        <!-- Tier 5 — infrastructure plate. -->
        <rect x="20" y="508" width="440" height="44" rx="8" fill="var(--color-ink-900)" />
      </g>

      <!-- Infrastructure dot matrix. -->
      <g fill="var(--color-fg-faint)">
        <template v-for="row in 2" :key="`r${row}`">
          <circle
            v-for="col in 6"
            :key="`d${row}-${col}`"
            :cx="60 + (col - 1) * 72"
            :cy="518 + (row - 1) * 16"
            r="2"
          />
        </template>
      </g>

      <!-- Static traces. -->
      <g stroke="var(--color-ink-700)" stroke-width="1" stroke-linecap="square">
        <path v-for="(trace, i) in traces" :key="`t${i}`" :d="trace.d" />
      </g>

      <!-- Animated packets, permanently out of phase so the loop never reads. -->
      <g stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round">
        <path
          v-for="(trace, i) in traces"
          :key="`c${i}`"
          class="trace-comet"
          :d="trace.d"
          :style="{ '--trace-len': `${trace.len}px`, 'animation-delay': `${-0.9 * i}s` }"
        />
      </g>

      <!-- Junction nodes. -->
      <g fill="var(--color-accent)">
        <circle
          v-for="([cx, cy], i) in nodes"
          :key="`n${i}`"
          class="node-pulse"
          :cx="cx"
          :cy="cy"
          r="3"
          :style="{ 'animation-delay': `${0.44 * i}s` }"
        />
      </g>
    </svg>
  </div>
</template>
