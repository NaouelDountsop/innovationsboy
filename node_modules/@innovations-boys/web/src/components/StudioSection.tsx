import { ArrowRight, Check, Play, ShoppingCart } from 'lucide-react'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { HeroMockup, YouTubePhoneMockup } from './Mockups'

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3.5 text-[17px]">
          <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#FFC226]">
            <Check className="h-3.5 w-3.5 text-white" strokeWidth={3.5} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function StudioSection({ lang }: { lang: Language }) {
  const t = translations[lang]

  return (
    <section
      id="cameroun"
      className="relative overflow-hidden bg-[#FCFCFE] font-sans text-[#1E5AA2] transition-colors dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="relative mx-auto max-w-[1620px] px-5 pb-16 sm:px-8 lg:px-[26px]">
        <div className="relative 2xl:min-h-[395px]">
          <div className="pt-8 sm:pt-10 lg:max-w-[760px] 2xl:max-w-[720px] 2xl:pt-8">
            <div className="flex items-center gap-5">
              <span className="h-1 w-20 rounded-full bg-[#FFC226]" />
              <span className="text-lg font-semibold uppercase tracking-wide text-[#FFC226] sm:text-xl">
                {t.studio.eyebrow}
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              {t.studio.titleLine1}
              <br />
              <span className="text-[#FFC226]">{t.studio.titleLine2}</span>{' '}
              {lang === 'fr' ? 'et' : 'and'}
              <br />
              <span className="text-[#1E5AA2] dark:text-slate-100">{t.studio.titleLine3}</span>
            </h2>

            <p className="mt-8 max-w-[680px] text-[18px] leading-[30px] text-[#2B3A63] dark:text-slate-300">
              {t.studio.description}
            </p>
          </div>

          <div
            className="relative mt-10 h-[200px] overflow-hidden rounded-bl-[120px] bg-[#0b1530] sm:h-[340px] 2xl:absolute 2xl:right-[-26px] 2xl:top-0 2xl:mt-0 2xl:h-[395px] 2xl:w-[50%]"
            style={{ clipPath: 'polygon(7% 0, 100% 0, 100% 100%, 0 100%)' }}
          >
            <div className="origin-top-left scale-[.5] sm:scale-[.85] 2xl:scale-100">
              <HeroMockup />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 2xl:grid-cols-2 2xl:gap-[28px]">
          <article className="relative overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_78%_12%,rgba(255,40,40,0.5),transparent_34%),radial-gradient(circle_at_62%_4%,rgba(255,90,40,0.35),transparent_30%),linear-gradient(135deg,#1a0505,#3a0808_50%,#5c0d0d)] text-white shadow-[0_20px_50px_rgba(120,0,0,0.35)]">
            <div className="absolute inset-0 bg-linear-to-r from-[#1a0505]/95 via-[#1a0505]/85 to-[#1a0505]/55" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full bg-[#FF0000]/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-[#FFC226]/10 blur-3xl" />

            <div className="relative p-8 sm:p-[33px] 2xl:min-h-[527px]">
              <div className="max-w-[420px] 2xl:max-w-[380px]">
                <div className="flex items-center gap-4">
                  <span className="flex h-[52px] w-[70px] items-center justify-center rounded-xl bg-[#FF0000] shadow-[0_10px_28px_rgba(255,0,0,0.45)]">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </span>
                  <div className="leading-tight">
                    <span className="block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#FF9F9F]">
                      {t.studio.youtube.label}
                    </span>
                    <span className="text-[20px] font-semibold">YouTube</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <h3 className="text-[40px] font-extrabold leading-tight tracking-tight">
                    Innovations Boys
                  </h3>
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30"
                    aria-label={t.studio.youtube.verified}
                  >
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3.5} />
                  </span>
                </div>
                <p className="mt-1 text-[21px] text-[#FFD4D4]">
                  BTP · Digital · Studio
                </p>
                <div className="mt-3 h-[3px] w-[44px] rounded-full bg-[#FFC226]" />

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
                  <span>
                    <strong className="font-bold text-white">12,4 k</strong>{' '}
                    <span className="text-white/60">{t.studio.youtube.subscribers}</span>
                  </span>
                  <span className="h-3.5 w-px bg-white/20" />
                  <span>
                    <strong className="font-bold text-white">245</strong>{' '}
                    <span className="text-white/60">{t.studio.youtube.videos}</span>
                  </span>
                  <span className="h-3.5 w-px bg-white/20" />
                  <span>
                    <strong className="font-bold text-white">+25 k</strong>{' '}
                    <span className="text-white/60">{t.studio.youtube.views}</span>
                  </span>
                </div>

                <p className="mt-6 text-[17px] leading-[24px] text-white/90">
                  {t.studio.youtube.text}
                </p>

                <div className="mt-7">
                  <CheckList items={t.studio.youtube.checklist} />
                </div>

                <a
                  href="https://www.youtube.com/@Ivan46"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-flex h-[62px] items-center gap-4 rounded-full bg-[#FFC226] pl-[22px] pr-8 text-[18px] font-bold text-[#3a0808] shadow-[0_14px_34px_rgba(255,194,38,0.3)] transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#3a0808]">
                    <Play className="h-4 w-4 fill-[#FFC226] text-[#FFC226]" />
                  </span>
                  {t.studio.youtube.cta}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-8 flex justify-center 2xl:absolute 2xl:bottom-[-70px] 2xl:right-[28px] 2xl:mt-0">
                <a
                  href="https://www.youtube.com/@Ivan46"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t.studio.youtube.cta}
                >
                  <YouTubePhoneMockup />
                </a>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[28px] border border-[#E9EDF7] bg-linear-to-br from-white via-white to-[#F3F5FA] shadow-[0_20px_50px_rgba(10,31,68,0.10)] transition-colors dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="relative p-8 sm:p-[26px] sm:pl-[27px] 2xl:min-h-[527px]">
              <div className="max-w-[330px]">
                <div className="flex items-center gap-4">
                  <div className="flex h-[56px] w-[56px] items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-[#E9EDF7] shadow-sm dark:bg-slate-800 dark:ring-slate-700">
                    <img
                      src="/chariow.png"
                      alt="Logo Chariow"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-[20px] font-semibold">
                    {t.studio.shop.label}
                  </span>
                </div>

                <h3 className="mt-5 text-[62px] font-black leading-none tracking-tight text-[#1E5AA2] dark:text-[#8db8f0]">
                  {t.studio.shop.title}
                </h3>

                <p className="mt-4 text-[19px] font-bold leading-[26px]">
                  {t.studio.shop.subtitle}
                </p>
                <div className="mt-3 h-[3px] w-[44px] rounded-full bg-[#FFC226]" />

                <p className="mt-6 text-[17px] leading-[24px] text-[#2B3A63] dark:text-slate-300">
                  {t.studio.shop.description}
                </p>

                <div className="mt-5 text-[#1D2952] dark:text-slate-200">
                  <CheckList items={t.studio.shop.checklist} />
                </div>

                <a
                  href="https://ecbpliux.mychariow.shop/citool-cadimage-archicad-29-pack-dactivation"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex h-[52px] items-center gap-4 rounded-full bg-[#FFC226] px-[22px] text-[16px] font-bold text-[#1E5AA2] transition hover:brightness-95"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {t.studio.shop.cta}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-8 flex justify-center 2xl:absolute 2xl:bottom-0 2xl:right-[-24px] 2xl:mt-0 2xl:flex 2xl:items-end 2xl:justify-end">
                <div className="w-full max-w-[360px] overflow-hidden 2xl:w-[360px]">
                  <a
                    href="https://ecbpliux.mychariow.shop/citool-cadimage-archicad-29-pack-dactivation"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visiter notre site Chariow"
                  >
                    <img
                      src="/charriot.png"
                      alt="Chariow"
                      className="mx-auto h-[260px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(13,32,67,0.18)] sm:h-[300px] 2xl:ml-auto 2xl:h-[390px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
