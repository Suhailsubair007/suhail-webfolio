import Lenis from 'lenis'

/**
 * Eased wheel scrolling.
 *
 * Lenis intercepts wheel input and interpolates the scroll position, which is
 * what produces the weighted feel of a well-made agency site. It is a real
 * trade-off: it takes over an interaction the browser already does correctly,
 * so everything below is about giving that control back wherever taking it
 * would cost the reader something.
 *
 *   • Reduced motion              — never initialised at all.
 *   • Touch                       — left native. Interpolating a platform's
 *                                   own momentum scrolling fights it, and
 *                                   mobile browsers do this better than we can.
 *   • Keyboard, find-in-page,
 *     scroll anchoring            — preserved, because Lenis drives the real
 *                                   window scroll rather than transforming a
 *                                   container. Native `scroll` events still
 *                                   fire, so the scroll spy and the header
 *                                   need no changes.
 *
 * `scroll-behavior: smooth` is switched off while Lenis runs — the two
 * animate the same property and fight each other.
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const lenis = new Lenis({
    // ~1s to settle. Long enough to read as weighted, short enough that a
    // deliberate scroll still feels answered.
    duration: 1.05,
    easing: t => Math.min(1, 1.001 - 2 ** (-10 * t)),
    // Native momentum on touch devices is better than anything interpolated
    // on top of it.
    syncTouch: false,
    smoothWheel: true,
  })

  // The CSS smooth scroll and Lenis both animate scroll position.
  document.documentElement.style.scrollBehavior = 'auto'

  let frame = 0
  function raf(time: number) {
    lenis.raf(time)
    frame = requestAnimationFrame(raf)
  }
  frame = requestAnimationFrame(raf)

  // Exposed so the anchor handler can hand jumps to Lenis instead of racing it.
  nuxtApp.provide('lenis', lenis)

  // There is no app:unmounted runtime hook, and on a static site the app is
  // never torn down in production anyway. This matters only for dev HMR,
  // where without it each reload would leave another rAF loop running.
  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    })
  }
})
