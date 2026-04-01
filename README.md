# Aegis AI — Frontend

AI-Powered Intrusion Detection SaaS — Landing Page + Auth

## Tech Stack

| Layer | Library |
|---|---|
| Framework | React 18 + Vite + TypeScript |
| Styling | TailwindCSS 3 (dark mode via `class`) |
| State | Recoil (atoms) |
| Forms | Formik + Yup |
| API | Axios |
| Routing | React Router v6 |
| i18n | react-i18next (8 languages built-in) |

## Project Structure

```
src/
├── assets/                  # Static assets (images, icons)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Nav with theme toggle + language switcher
│   │   └── Footer.tsx        # Full footer with links + socials
│   ├── sections/
│   │   ├── HeroSection.tsx   # Hero + live dashboard mockup
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   └── PricingSection.tsx
│   └── ui/                  # Shared UI primitives (future)
├── i18n/
│   ├── index.ts              # i18next config + addLanguage() helper
│   └── locales/
│       ├── en.ts  fr.ts  ru.ts  es.ts
│       ├── de.ts  ar.ts  hi.ts  ko.ts
├── pages/
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   └── RegisterPage.tsx
├── routes/
│   ├── router.tsx
│   └── layout/
│       ├── DefaultLayout.tsx  # Public pages (Navbar + Footer)
│       └── AuthLayout.tsx     # Login/Register (dark, minimal)
├── store/
│   └── atoms.ts              # themeAtom, languageAtom, authAtom
└── utils/
    ├── apiClient.ts           # Axios instance with interceptors
    ├── formValidation.ts      # Yup schemas
    └── helpers.ts             # cn(), isRTL(), etc.
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.example .env

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
```

## Features

### 🌙 Dark / Light Mode
- Automatic system preference detection
- Persisted to `localStorage`
- Toggled via Navbar button
- Uses Tailwind's `class` strategy

### 🌍 Internationalization (8 languages)
Built-in: **English, French, Russian, Spanish, German, Arabic, Hindi, Korean**

Arabic is RTL — `dir="rtl"` is applied to `<html>` automatically.

#### Adding a new language
```ts
// In any component or at startup:
import { addLanguage } from '@/i18n'

addLanguage(
  'pt',                        // language code
  { translation: { ... } },    // your translation object
  'Português',                  // display name
  '🇧🇷',                        // flag emoji
  'ltr'                         // 'ltr' | 'rtl'
)
```

### 📋 Forms (Formik + Yup)
- `LoginPage`: email + password + rememberMe
- `RegisterPage`: name + email + company + password + confirm + terms
- All schemas in `src/utils/formValidation.ts`

### 🔐 Auth State (Recoil)
```ts
import { useRecoilValue } from 'recoil'
import { authAtom } from '@/store/atoms'

const { isAuthenticated, user } = useRecoilValue(authAtom)
```

### 🛣️ Adding New Pages
1. Create `src/pages/MyPage.tsx`
2. Add route in `src/routes/router.tsx`
3. Add to `DefaultLayout` children for public, or `AuthLayout` for auth pages

## Design System

| Token | Value |
|---|---|
| Primary (light) | `aegis-600` (#148f84) |
| Primary (dark) | `cyber-400` (#00ffd5) |
| Font display | Syne |
| Font body | DM Sans |
| Font mono | JetBrains Mono |

## Next Pages

Upload your next page screenshot and I'll build it with matching structure:
- Dashboard (`/dashboard`)
- Alert Detail (`/alerts/:id`)
- Settings (`/settings`)
- Rule Editor (`/rules`)
