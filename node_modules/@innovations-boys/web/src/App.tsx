import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ServicesSection } from './components/ServicesSection'
import { StudioSection } from './components/StudioSection'
import { WhatsAppIcon, YouTubeIcon } from './components/BrandIcons'
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
          className="bg-white px-5 py-14 text-[#1E5AA2] transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-8 lg:px-[26px]"
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

            <div className="mt-10 overflow-hidden rounded-[30px] border border-[#EAF0FF] bg-[#F8FAFF] p-3 shadow-[0_20px_50px_rgba(30,90,162,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div
                className="flex w-max gap-4"
                style={{ animation: 'projectScroll 24s linear infinite' }}
              >
                {[...projectGallery, ...projectGallery].map((image, index) => (
                  <button
                    key={`project-${index}`}
                    type="button"
                    onClick={() => setSelectedProjectImage(image)}
                    className="block overflow-hidden rounded-[24px] border border-[#E4EAF8] bg-white shadow-sm transition hover:scale-[1.01] focus:outline-none dark:border-slate-800 dark:bg-slate-800"
                    aria-label={t.projects.expandImage}
                  >
                    <img
                      src={image}
                      alt={`${t.projects.imageAlt} ${index + 1}`}
                      className="h-[220px] w-[300px] object-cover sm:h-[300px] sm:w-[420px] lg:h-[420px] lg:w-[620px]"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {selectedProjectImage && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#091A31]/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProjectImage(null)}
          >
            <div
              className="relative max-h-[92vh] w-full max-w-[1100px] overflow-hidden rounded-[30px] border border-white/10 bg-[#F8FAFF] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] dark:bg-slate-900 sm:p-4"
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
                className="max-h-[84vh] w-full rounded-[20px] object-contain"
              />
            </div>
          </div>
        )}

        <StudioSection lang={lang} />

        <footer id="contact" className="bg-[#091a31] px-6 py-10 text-white sm:px-8 lg:px-[26px]">
          <div className="mx-auto grid max-w-[1620px] gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div className="md:col-span-2 lg:col-span-1">
              <div className="text-2xl font-black tracking-tight text-[#F6BA36]">Innovations Boys</div>
              <p className="mt-4 max-w-xs text-sm leading-7 text-slate-300">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F6BA36]">{t.footer.navigation}</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li><a href="#home" className="hover:text-white">{t.nav.home}</a></li>
                <li><a href="#about" className="hover:text-white">{t.nav.about}</a></li>
                <li><a href="#services" className="hover:text-white">{t.nav.services}</a></li>
                <li><a href="#projects" className="hover:text-white">{t.nav.projects}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F6BA36]">{t.footer.contact}</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>{t.footer.location}</li>
                <li>{t.footer.domain}</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F6BA36]">{t.footer.follow}</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <a href="https://www.youtube.com/@Ivan46" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                    <YouTubeIcon className="h-4 w-4 text-[#FF0000]" />
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/237680571917" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="https://ecbpliux.mychariow.shop" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                    <img src="/chariow.png" alt="" className="h-4 w-4 rounded-full bg-white object-cover" />
                    Chariow
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-[1620px] border-t border-white/10 pt-5 text-center text-sm text-slate-400">
            {t.footer.rights}
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
