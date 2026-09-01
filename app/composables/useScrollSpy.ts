/**
 * Tracks which in-page section is currently in view, for the nav indicator.
 *
 * Handles three things a naive IntersectionObserver gets wrong:
 *   1. A short final section may never enter the observation band, so the last
 *      id is force-selected once the page is scrolled to the bottom.
 *   2. Clicking a hash link smooth-scrolls *through* every intermediate
 *      section, which strobes the indicator — so activation is locked briefly
 *      after a click.
 *   3. Nothing runs during SSR; the observer is created on mount and torn down
 *      with the effect scope.
 */
export function useScrollSpy(ids: string[]) {
  const activeId = ref('')

  if (import.meta.server) return { activeId, lock: () => {} }

  let unlockAt = 0
  let observer: IntersectionObserver | undefined

  /** Suppress observer updates while a smooth scroll is in flight. */
  function lock(id: string) {
    activeId.value = id
    unlockAt = Date.now() + 600
  }

  function onScroll() {
    if (Date.now() < unlockAt) return
    const atBottom
      = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
    if (atBottom && ids.length) activeId.value = ids[ids.length - 1]!
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < unlockAt) return
        for (const entry of entries) {
          if (entry.isIntersecting) activeId.value = entry.target.id
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })

  onScopeDispose(() => {
    observer?.disconnect()
    window.removeEventListener('scroll', onScroll)
  })

  return { activeId, lock }
}
