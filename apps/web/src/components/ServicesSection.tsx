import {
  ArrowLeft,
  ArrowRight,
  Box,
  Check,
  Code2,
  HardHat,
  Play,
  X,
} from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { YouTubeIcon } from './BrandIcons'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'

type Service = {
  title: string
  description: string
  items: string[]
  image: string
  icon: ReactNode
  href: string
}

const SERVICE_ICONS = [
  <HardHat className="h-9 w-9 text-white" strokeWidth={1.8} />,
  <Box className="h-9 w-9 text-white" strokeWidth={1.8} />,
  <Code2 className="h-9 w-9 text-white" strokeWidth={1.8} />,
]

type ServicesSectionProps = {
  lang: Language
}

export function ServicesSection({ lang }: ServicesSectionProps) {
  const t = translations[lang]
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const services: Service[] = t.services.items.map((service, index) => ({
    title: service.title,
    description: service.description,
    items: [...service.list],
    image: ['/ingenieurie%20et%20BTP.jpg', '/Bim%20et%20Innovation.jpg', '/creation%20digitale.jpg'][index],
    icon: SERVICE_ICONS[index],
    href: '#contact',
  }))

  const engineeringPlans = ['/Plan%20.png', '/plan%202.png', '/plan%203.png']
  const bimGallery = [
    '/3D%201.jpg',
    '/3D%202.jpg',
    '/3D%203.jpg',
    '/3D%204.jpg',
    '/3D%205.jpg',
    '/3D%206.jpg',
  ]

  const digitalVideos = [
    { id: 'RjxtsqpVEMs', url: 'https://youtu.be/RjxtsqpVEMs' },
    { id: 'QqxHkcSeHmo', url: 'https://youtu.be/QqxHkcSeHmo' },
    { id: 'vJ98rUOSC5o', url: 'https://youtu.be/vJ98rUOSC5o' },
  ]
  const videoLabel = lang === 'fr' ? 'Vidéo' : 'Video'
  const watchOnYouTube =
    lang === 'fr' ? 'Terminer sur YouTube' : 'Finish on YouTube'

  const openGallery = (title: string) => {
    setSelectedService(title)
    setGalleryIndex(0)
    setActiveVideo(null)
  }

  const closeGallery = () => {
    setSelectedService(null)
    setGalleryIndex(0)
    setActiveVideo(null)
  }

  const getGalleryImages = (title: string) => {
    if (title === 'Ingénierie & BTP' || title === 'Engineering & Construction') {
      return engineeringPlans
    }

    if (title === 'BIM & Innovation' || title === 'BIM & Innovation') {
      return bimGallery
    }

    return []
  }

  const isEngineeringService = (title: string) =>
    title === 'Ingénierie & BTP' || title === 'Engineering & Construction'

  const isBimService = (title: string) =>
    title === 'BIM & Innovation' || title === 'BIM & Innovation'

  const isDigitalService = (title: string) =>
    title === 'Création digitale' || title === 'Digital creation'

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FCFCFE] px-5 py-14 font-sans text-[#1E5AA2] transition-colors dark:bg-slate-950 dark:text-slate-100 sm:px-8 lg:px-6.5"
    >
      <div className="relative mx-auto max-w-[1620px]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-5">
            <span className="h-1 w-20 rounded-full bg-[#FFC226]" />
            <span className="text-lg font-semibold uppercase tracking-wide text-[#FFC226] sm:text-xl">
              {t.services.eyebrow}
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            {lang === 'fr' ? (
              <>
                {t.services.titleLine1}
                <br />
                à vos <span className="text-[#FFC226]">{t.services.titleLine2}</span>
              </>
            ) : (
              <>
                {t.services.titleLine1}
                <br />
                <span className="text-[#FFC226]">{t.services.titleLine2}</span>
              </>
            )}
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-[#1D2952] dark:text-slate-300 sm:text-lg">
            {t.services.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-4xl border border-[#E4EAF8] bg-white shadow-[0_8px_30px_rgba(10,31,68,0.08)] transition-colors dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-57.5 bg-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />

                <svg
                  className="absolute -bottom-px left-0 w-full"
                  viewBox="0 0 500 40"
                  preserveAspectRatio="none"
                  height="40"
                >
                  <path
                    d="M0 30 C 130 40, 330 40, 500 8 L500 41 L0 41 Z"
                    className="fill-white dark:fill-slate-900"
                  />
                  <path
                    d="M0 30 C 130 40, 330 40, 500 8"
                    fill="none"
                    stroke="#FFC226"
                    strokeWidth="3"
                  />
                </svg>

                <div className="absolute -bottom-6 left-9 z-10 flex h-21 w-21 items-center justify-center rounded-2xl bg-[#1E5AA2] shadow-lg">
                  {service.icon}
                </div>
              </div>

              <div className="px-9 pb-8 pt-9">
                <h3 className="text-[28px] font-extrabold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-95 text-[18px] leading-7 text-[#2B3A63] dark:text-slate-300">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 text-[18px] text-[#1D2952] dark:text-slate-200"
                    >
                      <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-[#FFC226]">
                        <Check
                          className="h-3.5 w-3.5 text-white"
                          strokeWidth={3.5}
                        />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {isEngineeringService(service.title) ||
                isBimService(service.title) ||
                isDigitalService(service.title) ? (
                  <button
                    type="button"
                    onClick={() => openGallery(service.title)}
                    className="mt-6 inline-flex items-center gap-3 border-b-[3px] border-[#FFC226] pb-1 text-left text-[19px] font-bold text-[#1E5AA2] transition hover:gap-4 dark:text-[#8db8f0]"
                  >
                    {t.services.cta}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                ) : (
                  <a
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-3 border-b-[3px] border-[#FFC226] pb-1 text-[19px] font-bold text-[#1E5AA2] transition hover:gap-4 dark:text-[#8db8f0]"
                  >
                    {t.services.cta}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedService && (
        <div
          // className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/70 p-4"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/80 p-2 sm:p-3"
          onClick={closeGallery}
        >
          <div
            // className="w-full max-w-[96vw] rounded-[30px] border border-[#E4EAF8] bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.25)] sm:p-6 lg:max-w-[1200px]"
            className={`flex w-full max-w-[98vw] max-h-[96vh] flex-col overflow-hidden rounded-[30px] border border-[#E4EAF8] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.25)] dark:border-slate-800 dark:bg-slate-900 ${
              isDigitalService(selectedService)
                ? 'p-3 sm:p-4 lg:h-[94vh] lg:max-w-[1600px]'
                : 'p-4 sm:p-6 lg:max-w-300'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`flex items-center justify-between gap-4 ${
                isDigitalService(selectedService) ? 'mb-3' : 'mb-5'
              }`}
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFC226]">
                  {t.services.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-[#1E5AA2] dark:text-[#8db8f0] sm:text-3xl">
                  {selectedService}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeGallery}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DFE9FF] bg-[#F5F8FF] text-[#1E5AA2] transition hover:bg-[#EAF1FF] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                aria-label={t.services.closeGallery}
              >
                <X className="h-5 w-5" strokeWidth={2.2} />
              </button>
            </div>

            {isDigitalService(selectedService) ? (
              <div className="flex min-h-0 flex-1 flex-col">
                <div className="mb-4 flex flex-col gap-3 rounded-[18px] border border-[#E4EAF8] bg-[#F7F9FD] p-3 dark:border-slate-800 dark:bg-slate-950 sm:flex-row sm:items-center sm:gap-4 sm:p-4">
                  <img
                    src="/logo.jpeg"
                    alt="Innovations Boys"
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-[#FFC226]/50 sm:h-14 sm:w-14"
                  />
                  <p className="min-w-0 flex-1 text-sm leading-6 text-[#1D2952] dark:text-slate-300">
                    {t.services.digitalDescription}
                  </p>
                  <a
                    href="https://www.youtube.com/@Ivan46"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FF0000] px-4 py-2 text-sm font-bold text-white transition hover:brightness-110"
                  >
                    <YouTubeIcon className="h-4 w-4" />
                    {t.studio.youtube.cta}
                  </a>
                </div>

                {activeVideo ? (
                  (() => {
                    const video = digitalVideos.find(
                      (item) => item.id === activeVideo,
                    )
                    const index = digitalVideos.findIndex(
                      (item) => item.id === activeVideo,
                    )

                    if (!video) return null

                    return (
                      <div className="flex flex-1 flex-col">
                        <div className="relative min-h-[42vh] w-full flex-1 overflow-hidden rounded-[20px] border border-[#E4EAF8] bg-black shadow-sm dark:border-slate-800 sm:min-h-[56vh]">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                            title={`${videoLabel} ${index + 1}`}
                            className="absolute inset-0 h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => setActiveVideo(null)}
                            className="inline-flex items-center gap-2 rounded-full border border-[#DFE9FF] bg-[#F5F8FF] px-4 py-2 text-sm font-bold text-[#1E5AA2] transition hover:bg-[#EAF1FF] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            {t.services.backToVideos}
                          </button>

                          <a
                            href={video.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E5AA2] transition hover:underline dark:text-[#8db8f0]"
                          >
                            {watchOnYouTube}
                            <YouTubeIcon className="h-4 w-4 text-[#FF0000]" />
                          </a>
                        </div>
                      </div>
                    )
                  })()
                ) : (
                  <div className="grid max-h-[58vh] min-h-0 flex-1 content-start gap-5 overflow-y-auto pr-1 sm:grid-cols-2 lg:max-h-none">
                    {digitalVideos.map((video, index) => (
                      <div
                        key={video.id}
                        className="overflow-hidden rounded-[20px] border border-[#E4EAF8] bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:last:col-span-2 sm:last:mx-auto sm:last:w-[calc(50%-0.625rem)]"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveVideo(video.id)}
                          className="group relative block aspect-video w-full"
                          aria-label={`${videoLabel} ${index + 1}`}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                            alt={`${videoLabel} ${index + 1}`}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                          <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/40">
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-lg">
                              <Play className="ml-0.5 h-7 w-7 fill-white" />
                            </span>
                          </span>
                        </button>
                        <div className="flex items-center justify-between gap-3 px-3 py-2.5">
                          <span className="truncate text-sm font-semibold text-slate-700 dark:text-slate-300">
                            {videoLabel} {index + 1}
                          </span>
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-[#1E5AA2] transition hover:underline dark:text-[#8db8f0]"
                          >
                            {watchOnYouTube}
                            <YouTubeIcon className="h-3.5 w-3.5 text-[#FF0000]" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
            <div className="relative">
              {(() => {
                const galleryImages = getGalleryImages(selectedService)
                const total = galleryImages.length || 1

                return (
                  <>
                    <button
                      type="button"
                      onClick={() => setGalleryIndex((current) => (current - 1 + total) % total)}
                      className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#DFE9FF] bg-white/90 text-[#1E5AA2] shadow-lg backdrop-blur-sm transition hover:scale-105 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-100"
                      aria-label={t.services.previousImage}
                    >
                      <ArrowLeft className="h-5 w-5" strokeWidth={2.2} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setGalleryIndex((current) => (current + 1) % total)}
                      className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#DFE9FF] bg-white/90 text-[#1E5AA2] shadow-lg backdrop-blur-sm transition hover:scale-105 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-100"
                      aria-label={t.services.nextImage}
                    >
                      <ArrowRight className="h-5 w-5" strokeWidth={2.2} />
                    </button>

                    <div className="overflow-hidden rounded-[20px] border border-[#E4EAF8] bg-[#F7F9FD] p-2 dark:border-slate-800 dark:bg-slate-950 sm:p-3">
                      <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
                      >
                        {galleryImages.map((image, index) => (
                          <div
                            key={`${image}-${index}`}
                            className="w-full min-w-full shrink-0 overflow-hidden rounded-2xl border border-[#E4EAF8] bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                          >
                            <div className="relative flex h-[52vh] min-h-75 max-h-[72vh] items-center justify-center bg-[#F8FAFF] p-2 dark:bg-slate-900 sm:h-[60vh] sm:min-h-95 sm:p-3">
                              <img
                                src={image}
                                alt={`${selectedService} ${index + 1}`}
                                draggable={false}
                                className="h-full w-full rounded-2xl object-contain"
                              />
                              <div className="pointer-events-none absolute inset-0 z-1 flex items-center justify-center">
                                <img
                                  src="/logo.jpeg"
                                  alt=""
                                  aria-hidden="true"
                                  draggable={false}
                                  className="h-88 w-88 rounded-full object-cover opacity-35 shadow-md sm:h-128 sm:w-lg"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )
              })()}
            </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
