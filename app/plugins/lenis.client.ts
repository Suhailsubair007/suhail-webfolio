import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const lenis = new Lenis({
    duration: 1.05,
    easing: t => Math.min(1, 1.001 - 2 ** (-10 * t)),
    syncTouch: false,
    smoothWheel: true,
  })

  document.documentElement.style.scrollBehavior = 'auto'

  let frame = 0
  function raf(time: number) {
    lenis.raf(time)
    frame = requestAnimationFrame(raf)
  }
  frame = requestAnimationFrame(raf)

  nuxtApp.provide('lenis', lenis)

  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    })
  }
})
