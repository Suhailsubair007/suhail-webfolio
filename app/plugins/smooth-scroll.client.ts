/**
 * Smooth scrolling for in-page anchors.
 *
 * `scroll-behavior: smooth` on the root is declared too, but relying on it
 * alone is fragile: it is silently disabled in a few browser and OS
 * configurations, and it gives no control over the sticky header offset beyond
 * `scroll-margin-top`.
 *
 * Driving it here means one code path for every in-page link — the nav, the
 * hero actions, the skip link — with the header height subtracted and reduced
 * motion honoured explicitly rather than by side effect.
 */

/** Matches the sticky header height so a target never lands underneath it. */
function headerOffset() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--spacing-header')
  const parsed = Number.parseFloat(raw)
  const rem = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
  return (Number.isNaN(parsed) ? 4.5 : parsed) * rem + 24
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function scrollToId(id: string) {
  const target = document.getElementById(id)
  if (!target) return false

  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset()

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })

  // Move focus for keyboard and screen-reader users, without a second jump.
  target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })

  return true
}

export default defineNuxtPlugin(() => {
  function onClick(event: MouseEvent) {
    // Let the browser handle modified clicks (new tab, download, etc.).
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    const anchor = (event.target as Element | null)?.closest?.('a[href^="#"]')
    if (!(anchor instanceof HTMLAnchorElement)) return

    const id = anchor.getAttribute('href')?.slice(1)
    if (!id) return

    if (scrollToId(id)) {
      event.preventDefault()
      // Keep the URL shareable without letting the browser jump to the target.
      history.replaceState(null, '', `#${id}`)
    }
  }

  document.addEventListener('click', onClick)
})
