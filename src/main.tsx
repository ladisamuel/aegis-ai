import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { router } from './routes/router'
import './i18n'
import './index.css'
import 'primeicons/primeicons.css';

// Apply initial theme class before paint
const savedTheme = localStorage.getItem('aegis_theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.documentElement.classList.add('dark')
}
  
// Apply initial language direction
const savedLang = localStorage.getItem('aegis_lang') || 'en'
const rtlLangs = ['ar', 'he', 'fa', 'ur']
if (rtlLangs.includes(savedLang)) {
  document.documentElement.setAttribute('dir', 'rtl')
}
document.documentElement.setAttribute('lang', savedLang)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
)
