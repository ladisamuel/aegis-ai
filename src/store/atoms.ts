import { atom } from 'recoil'

// ─── Theme Atom ───────────────────────────────────────────────────────────────
export type Theme = 'light' | 'dark'

const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem('aegis_theme') as Theme | null
  if (stored) return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const themeAtom = atom<Theme>({
  key: 'themeAtom',
  default: getInitialTheme(),
  effects: [
    ({ onSet }) => {
      onSet((newTheme) => {
        localStorage.setItem('aegis_theme', newTheme)
        const root = document.documentElement
        if (newTheme === 'dark') {
          root.classList.add('dark')
        } else {
          root.classList.remove('dark')
        }
      })
    },
  ],
})

// ─── Language Atom ────────────────────────────────────────────────────────────
export const languageAtom = atom<string>({
  key: 'languageAtom',
  default: localStorage.getItem('aegis_lang') || 'en',
  effects: [
    ({ onSet }) => {
      onSet((lang) => {
        localStorage.setItem('aegis_lang', lang)
      })
    },
  ],
})

// ─── Auth Atom ────────────────────────────────────────────────────────────────
export interface AuthUser {
  id: string
  email: string
  name: string
  role: 'admin' | 'analyst' | 'viewer'
  tenantId: string
}

export interface AuthState {
  user: AuthUser | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
}

export const authAtom = atom<AuthState>({
  key: 'authAtom',
  default: {
    user: null,
    token: localStorage.getItem('aegis_token'),
    isAuthenticated: !!localStorage.getItem('aegis_token'),
    isLoading: false,
  },
})
