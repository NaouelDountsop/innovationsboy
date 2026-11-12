import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { WhatsAppIcon, YouTubeIcon } from './BrandIcons'

export function SiteFooter({ lang }: { lang: Language }) {
  const t = translations[lang]

  return (
    <footer className="bg-[#091a31] px-6 py-10 text-white sm:px-8 lg:px-6.5">
      <div className="mx-auto grid max-w-[1620px] gap-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="md:col-span-2 lg:col-span-1">
          <div className="text-2xl font-black tracking-tight text-[#F6BA36]">
            Innovations Boys
          </div>
          <p className="mt-4 max-w-xs text-sm leading-7 text-slate-300">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F6BA36]">
            {t.footer.navigation}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <a href="#home" className="hover:text-white">
                {t.nav.home}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                {t.nav.services}
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                {t.nav.projects}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F6BA36]">
            {t.footer.contact}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>{t.footer.location}</li>
            <li>{t.footer.domain}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F6BA36]">
            {t.footer.follow}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <a
                href="https://www.youtube.com/@Ivan46"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <YouTubeIcon className="h-4 w-4 text-[#FF0000]" />
                YouTube
              </a>
            </li>
            <li>
              <a
                href="#contact-form"
                className="flex items-center gap-2 hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://ecbpliux.mychariow.shop"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <img
                  src="/chariow.png"
                  alt=""
                  className="h-4 w-4 rounded-full bg-white object-cover"
                />
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
  )
}
