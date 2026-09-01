export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

const THEME_COLOR: Record<Theme, string> = {
  dark: '#0b0d10',
  light: '#f5f6f7',
}

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
      // Private mode or blocked storage: the choice just will not persist.
    }
  }

  function toggle() {
    apply(theme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
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

    watchEffect(() => {
      document.documentElement.dataset.theme = theme.value
      document.querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', THEME_COLOR[theme.value])
    })

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
