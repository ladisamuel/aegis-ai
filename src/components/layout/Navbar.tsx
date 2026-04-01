import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useRecoilState } from 'recoil'
import { themeAtom, languageAtom } from '../../store/atoms';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import { isRTL } from '../../utils/helpers';
import logo from '../../assets/logo/aegisLogo.png'

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.25 3.75 10.15 9 11.25C17.25 21.15 21 16.25 21 11V5L12 1z"/>
  </svg>
)

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [theme, setTheme] = useRecoilState(themeAtom)
  const [language, setLanguage] = useRecoilState(languageAtom)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code)
    setLanguage(code)
    const dir = isRTL(code) ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', code)
    setLangOpen(false)
  }

  const currentLang = SUPPORTED_LANGUAGES.find(l => l.code === language) || SUPPORTED_LANGUAGES[0]

  const navLinks = [
    { key: 'features', href: '#features' },
    { key: 'howItWorks', href: '#how-it-works' },
    { key: 'pricing', href: '#pricing' },
    { key: 'company', href: '#company' },
  ]

  const isHome = location.pathname === '/'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Aegis AI Home">
            <div className="h-14 py-2">
              <img src={logo} alt="" className='h-full' />
            </div>
            
            <span className="font-display font-800 text-xl tracking-tight text-gray-900 dark:text-white">
              Aegis<span className="text-aegis-500 dark:text-cyber-400">.</span>AI
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={isHome ? link.href : `/${link.href}`}
                className="px-4 py-2 text-sm font-body font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all duration-150"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </div>

          {/* Desktop right controls */}
          <div className="hidden md:flex items-center gap-2">

            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(v => !v)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-body text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all"
                aria-label="Select language"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <GlobeIcon />
                <span className="text-base leading-none">{currentLang.flag}</span>
                <span className="hidden lg:block text-xs font-medium">{currentLang.code.toUpperCase()}</span>
                <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden z-50">
                  <div className="p-1.5 grid grid-cols-1 gap-0.5" role="listbox">
                    {SUPPORTED_LANGUAGES.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        role="option"
                        aria-selected={language === lang.code}
                        className={`flex items-center gap-3 w-full px-3 py-2.5 text-sm rounded-lg text-left transition-all ${
                          language === lang.code
                            ? 'bg-aegis-50 dark:bg-aegis-950/60 text-aegis-700 dark:text-cyber-400 font-medium'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        <p className="text-xl  leading-none">{lang.flag}</p>
                        <p className="">{lang.label}</p>
                        {language === lang.code && (
                          <svg className="w-4 h-4 ml-auto text-aegis-500 dark:text-cyber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all"
              aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-body font-medium 
              
              bg-cyan-400 rounded hover:bg-cyan-900
              text-gray-600
              
              dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {t('nav.login')}
            </Link>

            {/* Get Started */}
            {/* <Link
              to="/register"
              className="px-4 py-2 text-sm font-body font-semibold text-white bg-aegis-600 hover:bg-aegis-700 dark:bg-cyber-500 dark:hover:bg-cyber-600 dark:text-gray-600 rounded-lg transition-all duration-200 shadow-sm hover:shadow-aegis-500/25 dark:hover:shadow-cyber-400/25 hover:shadow-md"
            >
              {t('nav.getStarted')}
            </Link> */}
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.key}
              href={isHome ? link.href : `/${link.href}`}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-body font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}

          {/* Mobile Language */}
          <div className="pt-2 pb-1">
            <p className="px-4 text-xs font-body font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">Language</p>
            <div className="grid grid-cols-2 gap-1">
              {SUPPORTED_LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => { changeLanguage(lang.code); setMobileOpen(false) }}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg transition-all ${
                    language === lang.code
                      ? 'bg-aegis-50 dark:bg-aegis-950/60 text-aegis-700 dark:text-cyber-400 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="font-body text-xs">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-center text-sm font-body font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              {t('nav.login')}
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-center text-sm font-body font-semibold text-white bg-aegis-600 dark:bg-cyber-500 dark:text-gray-950 rounded-lg hover:bg-aegis-700 dark:hover:bg-cyber-600 transition-all"
            >
              {t('nav.getStarted')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
