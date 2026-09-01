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

  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset())

  const lenis = (useNuxtApp() as { $lenis?: { scrollTo: (t: number, o?: object) => void } }).$lenis
  if (lenis && !prefersReducedMotion()) {
    lenis.scrollTo(top, { duration: 1.05 })
  }
  else {
    window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }

  target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })

  return true
}

export default defineNuxtPlugin(() => {
  function onClick(event: MouseEvent) {
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    const anchor = (event.target as Element | null)?.closest?.('a[href^="#"]')
    if (!(anchor instanceof HTMLAnchorElement)) return

    const id = anchor.getAttribute('href')?.slice(1)
    if (!id) return

    if (scrollToId(id)) {
      event.preventDefault()
      history.replaceState(null, '', `#${id}`)
    }
  }

  document.addEventListener('click', onClick)
})
