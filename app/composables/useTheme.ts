export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

/** Matches the meta[name=theme-color] values so the browser chrome follows. */
const THEME_COLOR: Record<Theme, string> = {
  dark: '#0b0d10',
  light: '#f5f6f7',
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

  function apply(next: Theme) {
    theme.value = next
    if (import.meta.server) return

    document.documentElement.dataset.theme = next
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[next])

    try {
      localStorage.setItem(STORAGE_KEY, next)
    }
    catch {
      // Private mode or blocked storage: the choice simply won't persist.
    }
  }

  function toggle() {
    apply(theme.value === 'dark' ? 'light' : 'dark')
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
      catch { /* ignore */ }
    }
    theme.value = resolved
      ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

    // The state is authoritative from here: anything that strips or rewrites
    // the attribute (head reconciliation, a stray script) is corrected rather
    // than silently winning.
    watchEffect(() => {
      document.documentElement.dataset.theme = theme.value
      document.querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', THEME_COLOR[theme.value])
    })

    // Follow the system while the visitor has expressed no preference of
    // their own.
    const media = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null
      try {
        stored = localStorage.getItem(STORAGE_KEY)
      }
      catch { /* ignore */ }
      if (stored) return
      theme.value = event.matches ? 'light' : 'dark'
      document.documentElement.dataset.theme = theme.value
      document.querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', THEME_COLOR[theme.value])
    }

    media.addEventListener('change', onChange)
    onScopeDispose(() => media.removeEventListener('change', onChange))
  })

  return { theme, toggle }
}
