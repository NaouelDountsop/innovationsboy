import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ServicesSection } from './components/ServicesSection'
import { SiteFooter } from './components/SiteFooter'
import { StudioSection } from './components/StudioSection'
import { useTheme } from './hooks/useTheme'
import type { Language } from './i18n/translations'
import { translations } from './i18n/translations'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'fr'
    return window.localStorage.getItem('lang') === 'en' ? 'en' : 'fr'
  })

  useEffect(() => {
    window.localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = translations[lang]
  const [selectedProjectImage, setSelectedProjectImage] = useState<string | null>(null)

  const projectGallery = [
    '/3D%201.jpg',
    '/3D%202.jpg',
    '/3D%203.jpg',
    '/3D%204.jpg',
    '/3D%205.jpg',
    '/3D%206.jpg',
    '/Plan%20.png',
    '/plan%202.png',
    '/plan%203.png',
  ]

  const projectGalleryScroll = `
    @keyframes projectScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `

  return (
    <div className="min-h-screen bg-[#1E5AA2] font-sans text-white antialiased dark:bg-slate-950">
      <Navbar
        lang={lang}
        onLangChange={setLang}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <main>
        <Hero lang={lang} />
        <AboutSection lang={lang} />
        <ServicesSection lang={lang} />

        <section
          id="projects"
          className="bg-white px-5 py-14 text-[#1E5AA2] transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-8 lg:px-6.5"
        >
          <style>{projectGalleryScroll}</style>

          <div className="mx-auto max-w-[1620px]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-5">
                <span className="h-1 w-20 rounded-full bg-[#FFC226]" />
                <span className="text-lg font-semibold uppercase tracking-wide text-[#FFC226] sm:text-xl">
                  {t.projects.eyebrow}
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                {t.projects.titleLine1}
                <br />
                <span className="text-[#FFC226]">{t.projects.titleLine2}</span>{' '}
                {t.projects.titleLine3}
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-[#1D2952] dark:text-slate-300 sm:text-lg">
                {t.projects.description}
              </p>
            </div>

            <div className="relative mt-10 overflow-hidden rounded-3xl border border-[#EAF0FF] bg-[#F8FAFF] p-3 shadow-[0_20px_50px_rgba(30,90,162,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div
                className="flex w-max gap-4"
                style={{ animation: 'projectScroll 48s linear infinite' }}
              >
                {[...projectGallery, ...projectGallery].map((image, index) => (
                  <button
                    key={`project-${index}`}
                    type="button"
                    onClick={() => setSelectedProjectImage(image)}
                    className="block overflow-hidden rounded-3xl border border-[#E4EAF8] bg-white shadow-sm transition hover:scale-[1.01] focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                    aria-label={t.projects.expandImage}
                  >
                    <img
                      src={image}
                      alt={`${t.projects.imageAlt} ${index + 1}`}
                      draggable={false}
                      className="h-55 w-75 object-cover sm:h-75 sm:w-105 lg:h-105 lg:w-155"
                    />
                  </button>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                <img
                  src="/logo.jpeg"
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className="h-56 w-56 rounded-full object-cover opacity-40 shadow-md sm:h-80 sm:w-80"
                />
              </div>
            </div>
          </div>
        </section>

        {selectedProjectImage && (
          <div
            className="fixed inset-0 z-60 flex items-center justify-center bg-[#091A31]/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProjectImage(null)}
          >
            <div
              className="relative max-h-[92vh] w-full max-w-275 overflow-hidden rounded-3xl border border-white/10 bg-[#F8FAFF] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] dark:bg-slate-900 sm:p-4"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProjectImage(null)}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#1E5AA2] shadow-md transition hover:bg-white dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                aria-label={t.projects.closeImage}
              >
                ✕
              </button>

              <img
                src={selectedProjectImage}
                alt={t.projects.largeImageAlt}
                draggable={false}
                className="max-h-[84vh] w-full rounded-2xl object-contain"
              />
              <div className="pointer-events-none absolute inset-0 z-1 flex items-center justify-center">
                <img
                  src="/logo.jpeg"
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className="h-96 w-96 rounded-full object-cover opacity-35 shadow-md sm:h-144 sm:w-144"
                />
              </div>
            </div>
          </div>
        )}

        <StudioSection lang={lang} />

        <ContactSection lang={lang} />

        <SiteFooter lang={lang} />
      </main>
    </div>
  )
}

export default App
