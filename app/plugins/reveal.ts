interface RevealOptions {
  delay?: number
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
        obs.unobserve(entry.target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
  )

  setTimeout(() => {
    for (const el of document.querySelectorAll(`[data-reveal]:not(.${REVEALED})`)) {
      el.classList.add(REVEALED)
    }
  }, 3000)

  return observer
}

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
