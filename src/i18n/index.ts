import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en'
import fr from './locales/fr'
import ru from './locales/ru'
import es from './locales/es'
import de from './locales/de'
import ar from './locales/ar'
import { hi } from './locales/hi'
import ko from './locales/ko'

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'es', label: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ko', label: '한국어', flag: '🇰🇷', dir: 'ltr' },
]

const resources = { en, fr, ru, es, de, ar, hi, ko }

// Easily extensible: just add to SUPPORTED_LANGUAGES + resources
export function addLanguage(code: string, translations: Record<string, unknown>, label: string, flag: string, dir: 'ltr' | 'rtl' = 'ltr') {
  i18n.addResourceBundle(code, 'translation', translations, true, true)
  SUPPORTED_LANGUAGES.push({ code, label, flag, dir })
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('aegis_lang') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  defaultNS: 'translation',
})

export default i18n
