export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

const THEME_COLOR: Record<Theme, string> = {
  dark: '#0b0d10',
  light: '#f5f6f7',
}

const CROSSFADE_MS = 320

let crossfadeTimer: ReturnType<typeof setTimeout> | undefined

function readStored(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  }
  catch {
    return null
  }
}

function writeStored(next: Theme): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, next)
    return true
  }
  catch {
    return false
  }
}

function withCrossfade(mutate: () => void) {
  const root = document.documentElement
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduced) {
    mutate()
    return
  }

  root.classList.add('theme-transition')
  mutate()

  clearTimeout(crossfadeTimer)
  crossfadeTimer = setTimeout(() => {
    root.classList.remove('theme-transition')
  }, CROSSFADE_MS)
}

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

    writeStored(next)
  }

  onMounted(() => {
    let resolved: Theme | undefined
    const attr = document.documentElement.dataset.theme
    if (attr === 'light' || attr === 'dark') resolved = attr
    if (!resolved) {
      const stored = readStored()
      if (stored === 'light' || stored === 'dark') resolved = stored
    }
    theme.value = resolved
      ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

    watchEffect(() => paint(theme.value))

    const media = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (event: MediaQueryListEvent) => {
      if (readStored()) return
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
