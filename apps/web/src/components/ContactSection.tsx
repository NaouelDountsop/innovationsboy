import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowRight,
  ChevronDown,
  LayoutGrid,
  Mail,
  MessageCircle,
  Quote,
  User,
} from 'lucide-react'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { WhatsAppIcon, YouTubeIcon } from './BrandIcons'

const WHATSAPP_NUMBER = '237680571917'

const fieldBase =
  'w-full rounded-lg border border-[#D8E0F0] bg-white text-[14px] text-[#0A1F44] outline-none transition placeholder:text-[#2B3A63] focus:border-[#1E5AA2] focus:ring-2 focus:ring-[#1E5AA2]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-[#8db8f0] dark:focus:ring-[#8db8f0]/20'

export function ContactSection({ lang }: { lang: Language }) {
  const t = translations[lang]
  const [sent, setSent] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const whatsappMessage = [
      t.contact.waGreeting,
      '',
      `${t.contact.namePlaceholder.replace(' *', '')} : ${name}`,
      `${t.contact.emailPlaceholder.replace(' *', '')} : ${email}`,
      `${t.contact.subjectPlaceholder.replace(' *', '')} : ${subject}`,
      '',
      message,
    ].join('\n')

    const nextWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

    setWhatsappUrl(nextWhatsappUrl)
    setSent(true)
    form.reset()
    window.open(nextWhatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const networks = [
    {
      name: 'YouTube',
      text: t.contact.networks.youtube,
      href: 'https://www.youtube.com/@Ivan46',
      external: true,
      logo: (
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#FF0000] text-white">
          <YouTubeIcon className="h-7 w-7" />
        </span>
      ),
    },
    {
      name: 'WhatsApp',
      text: t.contact.networks.whatsapp,
      href: '#contact-form',
      external: false,
      logo: (
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white">
          <WhatsAppIcon className="h-7 w-7" />
        </span>
      ),
    },
    {
      name: 'Chariow',
      text: t.contact.networks.chariow,
      href: 'https://ecbpliux.mychariow.shop',
      external: true,
      logo: (
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#1E5AA2]">
          <img
            src="/chariow.png"
            alt=""
            className="h-8 w-8 rounded-full bg-white object-cover"
          />
        </span>
      ),
    },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FFF9EF] px-5 py-14 font-sans text-[#0A1F44] transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-8 lg:px-[26px]"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10">
          <div className="flex items-center gap-4">
            <span className="h-[3px] w-[56px] rounded-full bg-[#FFC226]" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F0B020] dark:text-[#FFC226]">
              {t.contact.eyebrow}
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1E3F8F] dark:text-slate-100 sm:text-4xl">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-[130px] w-[110px] rounded-3xl bg-[#FFC226] sm:-left-6 sm:-top-6" />
            <div className="relative h-[420px] overflow-hidden rounded-[26px] bg-gradient-to-br from-[#3b73b8] via-[#1E5AA2] to-[#0A1F44] shadow-xl lg:h-full lg:min-h-[470px]">
              <img
                src="/equipe.jpg"
                alt={t.about.teamImageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A3C96]/95 via-[#0A3C96]/80 to-transparent px-7 pb-8 pt-20">
                <Quote className="h-9 w-9 fill-[#FFC226] text-[#FFC226]" />
                <p className="mt-2 max-w-[260px] text-[22px] font-bold italic leading-[28px] text-white">
                  {t.contact.quote}
                </p>
                <div className="mt-3 h-[3px] w-[64px] rounded-full bg-[#FFC226]" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-5 h-[90px] w-[130px] rounded-3xl bg-[#FFC226] sm:-right-6" />
            <div className="relative rounded-[26px] bg-white p-7 shadow-[0_15px_40px_rgba(10,31,68,0.10)] dark:bg-slate-900 dark:shadow-[0_15px_40px_rgba(0,0,0,0.35)] sm:p-9">
              <div className="flex items-center gap-4">
                <span className="h-[3px] w-[56px] rounded-full bg-[#FFC226]" />
                <span className="text-[17px] font-semibold text-[#F0B020] dark:text-[#FFC226]">
                  {t.contact.formEyebrow}
                </span>
              </div>

              <h3 className="mt-2 text-[32px] font-extrabold tracking-tight text-[#1E3F8F] dark:text-slate-100 sm:text-[36px]">
                {t.contact.formTitle}
              </h3>
              <p className="mt-3 max-w-[470px] text-[15px] leading-[24px] text-[#2B3A63] dark:text-slate-300">
                {t.contact.formDescription}
              </p>

              <form
                id="contact-form"
                onSubmit={onSubmit}
                className="mt-7 scroll-mt-28 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="relative block">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 fill-[#1E3F8F] text-[#1E3F8F] dark:fill-[#8db8f0] dark:text-[#8db8f0]" />
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      placeholder={t.contact.namePlaceholder}
                      className={`${fieldBase} h-[50px] pl-12 pr-3`}
                    />
                  </label>
                  <label className="relative block">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#1E3F8F] dark:text-[#8db8f0]" />
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder={t.contact.emailPlaceholder}
                      className={`${fieldBase} h-[50px] pl-12 pr-3`}
                    />
                  </label>
                </div>

                <label className="relative block">
                  <LayoutGrid className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 fill-[#1E3F8F] text-[#1E3F8F] dark:fill-[#8db8f0] dark:text-[#8db8f0]" />
                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className={`${fieldBase} h-[50px] appearance-none pl-12 pr-10`}
                  >
                    <option value="" disabled>
                      {t.contact.subjectPlaceholder}
                    </option>
                    {t.contact.subjects.map((subject) => (
                      <option key={subject}>{subject}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0A1F44] dark:text-slate-300" />
                </label>

                <label className="relative block">
                  <MessageCircle className="pointer-events-none absolute left-4 top-4 h-[18px] w-[18px] text-[#1E3F8F] dark:text-[#8db8f0]" />
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    className={`${fieldBase} resize-y px-12 py-3.5`}
                  />
                </label>

                <button
                  type="submit"
                  className="flex h-[58px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#FFC226] to-[#FFD23F] text-[16px] font-bold text-[#0A1F44] shadow-[0_6px_16px_rgba(255,194,38,0.45)] transition hover:brightness-95"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {t.contact.submit}
                  <ArrowRight className="h-5 w-5" />
                </button>

                {sent ? (
                  <div className="space-y-3 text-center">
                    <p className="text-[13px] font-semibold text-emerald-600 dark:text-emerald-400">
                      {t.contact.success}
                    </p>
                    {whatsappUrl ? (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:brightness-110"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        {t.contact.openWhatsApp}
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <p className="text-center text-[11px] text-[#2B3A63] dark:text-slate-400">
                    {t.contact.required}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[3px] w-[64px] rounded-full bg-[#FFC226]" />
            <span className="text-[20px] font-semibold text-[#F0B020] dark:text-[#FFC226]">
              {t.contact.socialEyebrow}
            </span>
            <span className="h-[3px] w-[64px] rounded-full bg-[#FFC226]" />
          </div>

          <h3 className="mt-2 text-[30px] font-extrabold tracking-tight text-[#1E3F8F] dark:text-slate-100 sm:text-[36px]">
            {t.contact.socialTitle}
          </h3>
          <p className="mt-2 text-[15px] text-[#2B3A63] dark:text-slate-300">
            {t.contact.socialDescription}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {networks.map((network) => (
              <a
                key={network.name}
                href={network.href}
                target={network.external ? '_blank' : undefined}
                rel={network.external ? 'noreferrer' : undefined}
                className="group flex flex-col items-center rounded-2xl bg-white px-4 pb-5 pt-6 text-center shadow-[0_8px_24px_rgba(10,31,68,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(10,31,68,0.14)] dark:bg-slate-900 dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_14px_30px_rgba(0,0,0,0.5)]"
              >
                {network.logo}
                <h4 className="mt-3 text-[16px] font-bold">
                  {network.name}
                </h4>
                <p className="mt-1.5 min-h-[40px] text-[12.5px] leading-[18px] text-[#2B3A63] dark:text-slate-300">
                  {network.text}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1E5AA2] dark:text-[#8db8f0]">
                  {t.contact.follow}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
