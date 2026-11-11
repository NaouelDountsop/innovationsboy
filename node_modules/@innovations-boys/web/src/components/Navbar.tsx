import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Menu, X } from 'lucide-react'
import { WhatsAppIcon, YouTubeIcon } from './BrandIcons'
import { ThemeToggle } from './ThemeToggle'
import type { Theme } from '../hooks/useTheme'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'

const LANGUAGES: { code: Language; label: string; flagSrc: string }[] = [
  { code: 'fr', label: 'Français', flagSrc: '/flags/fr.svg' },
  { code: 'en', label: 'English', flagSrc: '/flags/gb.svg' },
]

type NavbarProps = {
  lang: Language
  onLangChange: (nextLang: Language) => void
  theme: Theme
  onThemeToggle: () => void
}

export function Navbar({
  lang,
  onLangChange,
  theme,
  onThemeToggle,
}: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const currentLanguage =
    LANGUAGES.find((item) => item.code === lang) ?? LANGUAGES[0]
  const t = translations[lang]

  const navItems = [
    { label: t.nav.home, href: '#home', active: true },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.studio, href: '#cameroun', highlight: true },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex h-16 max-w-350 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3">
            <div className="h-24 w-24 translate-y-4 overflow-hidden rounded-full">
              <img
                src="/logo.jpeg"
                alt="Innovations Boys"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="text-[15px] font-extrabold tracking-tight text-slate-900 dark:text-white">
                Innovations Boys
              </p>
              <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
                {t.nav.brandTagline}
              </p>
            </div>
          </a>

          <div className="ml-4 hidden items-center gap-2 lg:flex">
            <a
              href="https://wa.me/237680571917"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[#25D366] transition hover:bg-[#25D366]/10 dark:bg-slate-800 dark:hover:bg-[#25D366]/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@Ivan46"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[#FF0000] transition hover:bg-[#FF0000]/10 dark:bg-slate-800 dark:hover:bg-[#FF0000]/20"
            >
              <YouTubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1.5 text-[13px] font-medium transition hover:text-[#F6BA36] ${
                item.active
                  ? 'text-[#F6BA36]'
                  : item.highlight
                    ? 'text-[#E0A82E] dark:text-[#F6BA36]'
                    : 'text-slate-800 dark:text-slate-200'
              }`}
            >
              {item.label}
              {item.highlight && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#F6BA36]" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="hidden rounded-lg bg-[#F6BA36] px-5 py-2.5 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#E0A82E] sm:inline-block"
          >
            {t.nav.quote}
          </a>
          <ThemeToggle
            theme={theme}
            onToggle={onThemeToggle}
            label={t.nav.themeToggle}
          />
          <div ref={langRef} className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setLangOpen((value) => !value)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={t.nav.chooseLanguage}
              className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[11px] font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <img
                src={currentLanguage.flagSrc}
                alt=""
                aria-hidden="true"
                className="h-4 w-6 rounded-[3px] object-cover"
              />
              {currentLanguage.code.toUpperCase()}
              <ChevronDown
                className={`h-3 w-3 text-slate-400 transition ${
                  langOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {langOpen && (
              <div
                role="listbox"
                aria-label={t.nav.availableLanguages}
                className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                {LANGUAGES.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    role="option"
                    aria-selected={language.code === lang}
                    onClick={() => {
                      onLangChange(language.code)
                      setLangOpen(false)
                    }}
                    className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition hover:bg-slate-50 dark:hover:bg-slate-700 ${
                      language.code === lang
                        ? 'font-semibold text-[#1E5AA2] dark:text-[#8db8f0]'
                        : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    <img
                      src={language.flagSrc}
                      alt=""
                      aria-hidden="true"
                      className="h-4 w-6 rounded-[3px] object-cover"
                    />
                    {language.label}
                    {language.code === lang && (
                      <Check className="ml-auto h-4 w-4" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={t.nav.openMenu}
          >
            {open ? (
              <X className="h-6 w-6 text-slate-900 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 transition-colors dark:border-slate-800 dark:bg-slate-900 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-800 dark:text-slate-200"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
              {LANGUAGES.map((language) => (
                <button
                  key={language.code}
                  type="button"
                  onClick={() => onLangChange(language.code)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    language.code === lang
                      ? 'bg-slate-100 text-[#1E5AA2] dark:bg-slate-800 dark:text-[#8db8f0]'
                      : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <img
                    src={language.flagSrc}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-6 rounded-[3px] object-cover"
                  />
                  {language.code.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-2 rounded-lg bg-[#F6BA36] px-5 py-2.5 text-center text-sm font-bold text-white"
            >
              {t.nav.quote}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
