import { ArrowRight, Box, HardHat, Monitor, Play } from 'lucide-react'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'

type AboutSectionProps = {
  lang: Language
}

const featureIcons = [
  <HardHat
    className="h-12 w-12 text-[#1E5AA2] dark:text-[#8db8f0]"
    strokeWidth={1.6}
  />,
  <div className="relative">
    <Monitor
      className="h-12 w-12 text-[#1E5AA2] dark:text-[#8db8f0]"
      strokeWidth={1.6}
    />
    <Box
      className="absolute left-1/2 top-[40%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-[#1E5AA2] dark:text-[#8db8f0]"
      strokeWidth={1.8}
    />
  </div>,
  <div className="flex h-9 w-14 items-center justify-center rounded-xl bg-[#1E5AA2] dark:bg-[#2a6fc4]">
    <Play className="h-4 w-4 fill-white text-white" />
  </div>,
]

export function AboutSection({ lang }: AboutSectionProps) {
  const t = translations[lang]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white text-[#1E5AA2] transition-colors dark:bg-slate-950 dark:text-slate-100"
    >
      <div id="mission" className="sr-only" aria-hidden="true" />
      <div className="absolute inset-0 bg-[#f9f7f1] dark:bg-slate-950" />
      <div className="absolute left-1/3 top-20 h-64 w-64 rounded-full bg-[#FFC226]/20 blur-3xl" />
      <div className="absolute bottom-16 right-10 h-56 w-56 rounded-full bg-[#1E5AA2]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_640px] lg:gap-10">
          <div>
            <div className="flex items-center gap-5">
              <span className="h-1 w-20 rounded-full bg-[#FFC226]" />
              <span className="text-lg font-semibold uppercase tracking-wide text-[#FFC226] sm:text-xl">
                {t.about.eyebrow}
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              {t.about.titleLine1}
              <br />
              <span className="text-[#FFC226]">{t.about.titleLine2}</span> {t.about.titleLine3}
            </h2>

            <div className="mt-8 max-w-3xl space-y-6 text-base leading-8 text-[#1D2952] dark:text-slate-300 sm:text-lg">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <a
              href="#mission"
              className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#FFC226] px-8 py-4 text-base font-bold text-[#1E5AA2] shadow-sm transition hover:brightness-95"
            >
              {t.about.cta}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-160 pb-4 pr-4 pt-5 lg:mx-0 lg:pt-0">
            <div className="absolute -right-4 -top-6 h-64 w-56 rounded-3xl bg-[#FFC226] sm:-right-6 lg:-top-8 lg:right-[-30px]" />
            <div className="absolute -bottom-2 right-0 z-0 h-14 w-24 rounded-br-3xl bg-[#1E5AA2]" />

            <div className="relative z-10 h-105 overflow-hidden rounded-3xl shadow-xl sm:h-140 lg:h-175">
              <img
                src="/equipe.jpg"
                alt={t.about.teamImageAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 pb-2 md:grid-cols-3 md:gap-0 lg:mt-14">
          {t.about.features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-center gap-6 md:px-8 ${
                index === 0 ? 'md:pl-0' : 'md:border-l md:border-[#FFC226]/40'
              }`}
            >
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[#FCF1D2] dark:bg-slate-800">
                {featureIcons[index]}
              </div>
              <div>
                <h3 className="text-2xl font-bold leading-tight">{feature.title}</h3>
                <p className="mt-2 max-w-72 text-base leading-7 text-[#1D2952] dark:text-slate-300">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
