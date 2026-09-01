export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

/** Matches the meta[name=theme-color] values so the browser chrome follows. */
const THEME_COLOR: Record<Theme, string> = {
  dark: '#0b0d10',
  light: '#f5f6f7',
}

/**
 * Must match the transition duration in `.theme-transition` (motion.css).
 * The class is removed on this timer, so a shorter value here would cut the
 * cross-fade off mid-way.
 */
const CROSSFADE_MS = 320

let crossfadeTimer: ReturnType<typeof setTimeout> | undefined

/**
 * Paints the theme change as a cross-fade rather than a hard cut.
 *
 * The transition lives on a class that is added for the length of the switch
 * and then removed, rather than sitting on the elements permanently. A
 * standing `transition: color, background-color` on every element would also
 * catch every hover and focus change on the page, making the whole interface
 * feel like it were lagging half a second behind the pointer.
 */
function withCrossfade(mutate: () => void) {
  const root = document.documentElement
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduced) {
    mutate()
    return
  }

  root.classList.add('theme-transition')
  mutate()

  // Re-toggling mid-fade restarts the timer instead of stripping the class
  // early and leaving the second change to snap.
  clearTimeout(crossfadeTimer)
  crossfadeTimer = setTimeout(() => {
    root.classList.remove('theme-transition')
  }, CROSSFADE_MS)
}

/**
 * The active colour theme.
 *
 * Shared across every caller via `useState`, so the header toggle and anything
 * else reading it stay in sync.
 *
 * The value is resolved before first paint by the inline script in
 * `nuxt.config.ts` — this composable adopts whatever that script already wrote
 * to the document rather than deciding again, which is what keeps the toggle
 * from flashing on hydration.
 */
export function useTheme() {
  const theme = useState<Theme>('theme', () => 'dark')

  function paint(next: Theme) {
    document.documentElement.dataset.theme = next
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[next])
  }

  function toggle() {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'

    withCrossfade(() => {
      theme.value = next
      paint(next)
    })

    try {
      localStorage.setItem(STORAGE_KEY, next)
    }
    catch {
      // Private mode or blocked storage: the choice just will not persist.
    }
  }

  onMounted(() => {
    // Adopt what the head script resolved, falling back to storage and then to
    // the system preference if the attribute has been stripped.
    let resolved: Theme | undefined
    const attr = document.documentElement.dataset.theme
    if (attr === 'light' || attr === 'dark') resolved = attr
    if (!resolved) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === 'light' || stored === 'dark') resolved = stored
      }
      catch {
        // Storage unavailable; fall through to the system preference.
      }
    }
    theme.value = resolved
      ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

    // The state is authoritative from here: anything that strips or rewrites
    // the attribute (head reconciliation, a stray script) is corrected rather
    // than silently winning. No cross-fade on this path — it also runs on
    // mount, and fading the page in on load is not a theme change.
    watchEffect(() => paint(theme.value))

    // Follow the system while the visitor has expressed no preference of
    // their own.
    const media = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null
      try {
        stored = localStorage.getItem(STORAGE_KEY)
      }
      catch {
        // Storage unavailable; treat it as no stored preference.
      }
      if (stored) return
      withCrossfade(() => {
        theme.value = event.matches ? 'light' : 'dark'
      })
    }

    media.addEventListener('change', onChange)
    onScopeDispose(() => {
      media.removeEventListener('change', onChange)
      clearTimeout(crossfadeTimer)
    })
  })

  return { theme, toggle }
}
