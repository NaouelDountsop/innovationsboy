import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Code2,
  ShieldCheck,
} from 'lucide-react'
import { WhatsAppIcon, YouTubeIcon } from './BrandIcons'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'

const FEATURES = [
  { icon: ShieldCheck, labelFr: 'Design premium', labelEn: 'Premium design' },
  { icon: CheckCircle2, labelFr: 'Suivi direct', labelEn: 'Direct follow-up' },
  { icon: Clock, labelFr: 'Livraison à temps', labelEn: 'On-time delivery' },
  { icon: Award, labelFr: 'Portfolio prouvé', labelEn: 'Proven portfolio' },
]

type HeroProps = {
  lang: Language
}

export function Hero({ lang }: HeroProps) {
  const t = translations[lang]

  return (
    <section id="home" className="relative overflow-hidden bg-[#0d2043]">
      <img
        src="/hero.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = 'none'
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#0d2043]/95 via-[#1E5AA2]/80 to-[#16294a]/40" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#F6BA36]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-350 items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex w-full max-w-145 items-center gap-2 rounded-full border border-[#F6BA36]/10 bg-linear-to-r from-[#F6BA36]/20 to-[#F6BA36]/5 px-4 py-2.5 backdrop-blur-sm">
            <Award className="h-3 w-3 text-[#F6BA36]" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F6BA36]">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="mt-8 text-[44px] font-extrabold leading-[1.1] tracking-tight sm:text-[56px]">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
            <br />
            {t.hero.titleLine3}
          </h1>

          <p className="mt-8 max-w-110 text-[16px] leading-relaxed text-slate-300">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-full bg-[#F6BA36] px-6 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-[#F6BA36]/20 transition hover:bg-[#E0A82E]"
            >
              {t.hero.quote}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#team"
              className="rounded-full border border-white/10 bg-[#1b2f55]/70 px-6 py-3.5 text-[14px] font-bold text-white backdrop-blur-sm transition hover:bg-[#233a66]"
            >
              {t.hero.team}
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white/10 bg-[#1b2f55]/70 px-6 py-3.5 text-[14px] font-bold text-white backdrop-blur-sm transition hover:bg-[#233a66]"
            >
              {t.hero.portfolio}
            </a>
          </div>

          <div className="mt-14 grid max-w-140 grid-cols-2 gap-6 sm:grid-cols-4">
            {FEATURES.map(({ icon: Icon, labelFr, labelEn }) => (
              <div key={labelFr} className="flex flex-col gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1e3256]/80 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-[#F6BA36]" />
                </div>
                <span className="text-[10px] font-semibold text-slate-400">
                  {lang === 'fr' ? labelFr : labelEn}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1 shadow-2xl shadow-black/40">
            <div className="relative h-105 w-full overflow-hidden rounded-xl bg-linear-to-br from-[#1b2f55]/80 via-[#16294a]/70 to-[#0d2043]/80 sm:h-130 lg:h-155">
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="h-16 w-16 text-[#F6BA36]/20" />
              </div>
              <img
                src="/hero.jpg"
                alt="Studio digital Innovations Boys"
                className="relative z-10 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <a
          href="#contact-form"
          aria-label="WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:brightness-110"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
        <div className="flex items-center gap-3">
          <a
            href="https://www.youtube.com/@Ivan46"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-xl transition hover:brightness-110"
          >
            <YouTubeIcon className="h-7 w-7" />
          </a>
          <a
            href="https://ecbpliux.mychariow.shop/citool-cadimage-archicad-29-pack-dactivation"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chariow"
            className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-xl ring-1 ring-black/5 transition hover:brightness-110"
          >
            <img
              src="/chariow.png"
              alt="Chariow"
              className="h-full w-full object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
