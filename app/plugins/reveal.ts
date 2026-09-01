/**
 * `v-reveal` — scroll-triggered entrance.
 *
 * One IntersectionObserver is shared by every element on the page. The hidden
 * state itself lives in CSS (see motion.css) behind a `scripting: enabled`
 * query, so this directive only ever *adds* visibility — if the observer never
 * runs, content is shown normally.
 *
 * Registered universally rather than client-only: the server must emit the
 * `data-reveal` attribute so the element is already hidden in the delivered
 * HTML. Revealing it after hydration instead would flash the content in, out,
 * and back in again.
 */

interface RevealOptions {
  /** Stagger offset in milliseconds. */
  delay?: number
  /** Distance travelled, as a CSS length. */
  y?: string
}

const REVEALED = 'is-revealed'

let observer: IntersectionObserver | undefined

function getObserver() {
  if (observer) return observer

  observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add(REVEALED)
        // Reveal is one-way. Re-hiding on scroll-up reads as a glitch.
        obs.unobserve(entry.target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
  )

  // Failsafe: a wedged observer must never leave the page invisible.
  setTimeout(() => {
    for (const el of document.querySelectorAll(`[data-reveal]:not(.${REVEALED})`)) {
      el.classList.add(REVEALED)
    }
  }, 3000)

  return observer
}

/** Custom properties the CSS reads for stagger and travel distance. */
function revealStyle(options: RevealOptions | undefined) {
  const style: Record<string, string> = {}
  if (options?.delay) style['--reveal-delay'] = `${options.delay}ms`
  if (options?.y) style['--reveal-y'] = options.y
  return style
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement, RevealOptions | undefined>('reveal', {
    getSSRProps(binding) {
      return { 'data-reveal': '', 'style': revealStyle(binding.value) }
    },

    mounted(el, binding) {
      el.dataset.reveal = ''
      for (const [prop, value] of Object.entries(revealStyle(binding.value))) {
        el.style.setProperty(prop, value)
      }
      getObserver().observe(el)
    },

    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})
