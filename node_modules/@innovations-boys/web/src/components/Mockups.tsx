import {
  Droplets,
  Hammer,
  PaintBucket,
  Play,
  Search,
  Wrench,
  Zap,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { YouTubeStats } from './YouTubeStats'

export function IBMark({ size = 28 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center font-black leading-none text-[#1E5AA2]"
      style={{ fontSize: size, width: size * 1.25, height: size }}
    >
      <span className="absolute left-[10%] top-[4%] h-[24%] w-[20%] -skew-x-12 bg-[#F6BA36]" />
      iB
    </div>
  )
}

export function PhoneFrame({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative rounded-[34px] bg-[#101218] p-[6px] shadow-[0_24px_45px_rgba(0,0,0,0.45)] ring-1 ring-white/25 ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-white">
        <div className="absolute left-1/2 top-[6px] z-20 h-[13px] w-[54px] -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  )
}

export function LaptopFrame({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-t-[14px] bg-[#1b1d24] p-[7px] shadow-xl ring-1 ring-white/10">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-[5px] bg-white">
          {children}
        </div>
      </div>
      <div className="relative -mx-[4%] h-[11px] rounded-b-[14px] bg-linear-to-b from-[#dfe2e9] to-[#a7abb7] shadow-lg">
        <div className="absolute left-1/2 top-0 h-[4px] w-[16%] -translate-x-1/2 rounded-b-md bg-[#8b8f9b]" />
      </div>
    </div>
  )
}

export function HardHat({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" className={className}>
      <ellipse cx="100" cy="124" rx="98" ry="13" fill="#D99A00" />
      <path
        d="M16 114 C16 50 56 10 100 10 C144 10 184 50 184 114 Z"
        fill="#FFC226"
      />
      <path d="M86 12 H114 V114 H86 Z" fill="#F2A900" />
      <path
        d="M38 92 C44 56 70 30 100 25"
        stroke="#FFE59A"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        opacity=".75"
      />
      <rect x="8" y="108" width="184" height="15" rx="7.5" fill="#FFB300" />
    </svg>
  )
}

const CATEGORIES = [
  { icon: Hammer, label: 'BTP' },
  { icon: Wrench, label: 'Outillage' },
  { icon: Zap, label: 'Électrique' },
  { icon: Droplets, label: 'Plomberie' },
  { icon: PaintBucket, label: 'Peinture' },
]

export function YouTubePhoneScreen() {
  return (
    <div className="h-full bg-white text-[#0f0f0f]">
      <div className="flex items-center gap-2 bg-linear-to-r from-[#0d2043] to-[#1a3a7a] px-3 pb-3 pt-7">
        <span className="text-[11px] text-white/80">‹</span>
        <div className="rounded bg-white p-[2px]">
          <IBMark size={13} />
        </div>
        <div className="leading-tight">
          <p className="text-[11px] font-bold italic text-white">
            Innovations <span className="text-[#FFC226]">Boys</span>
          </p>
          <p className="text-[5px] text-white/70">
            Ingénierie | Digital | Studio
          </p>
        </div>
      </div>

      <div className="px-3 pt-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
            <IBMark size={17} />
          </div>
          <div className="leading-tight">
            <p className="text-[12px] font-bold">Innovations Boys</p>
            <p className="text-[7px] text-slate-500">@Ivan46</p>
            <YouTubeStats variant="phone" fallbackSubscribers="12,4 k" fallbackVideos="245" />
          </div>
        </div>
        <button className="mt-2.5 w-full rounded-full bg-[#0f0f0f] py-[7px] text-[9px] font-semibold text-white">
          S’abonner
        </button>
      </div>

      <div className="mt-3 flex gap-4 border-b border-slate-200 px-3 text-[8px] text-slate-600">
        <span className="border-b-2 border-[#0f0f0f] pb-1.5 font-semibold text-[#0f0f0f]">
          Accueil
        </span>
        <span>Vidéos</span>
        <span>Shorts</span>
        <span>Playlists</span>
      </div>

      <div className="px-3 pt-3">
        <div className="relative h-[100px] overflow-hidden rounded-lg bg-linear-to-b from-[#7fb4ec] via-[#c9dff3] to-[#b98a52]">
          <svg viewBox="0 0 200 100" className="absolute inset-0 h-full w-full">
            <rect x="55" y="48" width="90" height="44" fill="#e8d3b0" />
            <polygon points="45,50 100,18 155,50" fill="#a8532f" />
            <rect x="70" y="60" width="16" height="16" fill="#4a6fa5" />
            <rect x="114" y="60" width="16" height="16" fill="#4a6fa5" />
            <rect x="93" y="68" width="14" height="24" fill="#7a4a2a" />
          </svg>
          <p className="absolute bottom-1.5 left-2 rounded bg-black/55 px-1 text-[7px] font-bold text-[#FFC226]">
            Construction d’une maison
          </p>
          <span className="absolute bottom-1.5 right-1.5 rounded bg-black/80 px-1 text-[6px] font-semibold text-white">
            12:36
          </span>
        </div>

        <div className="mt-2 flex gap-2">
          <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-slate-200">
            <IBMark size={11} />
          </div>
          <div className="leading-tight">
            <p className="text-[8.5px] font-semibold">
              Construction d’une maison de A à Z | Épisode 1
            </p>
            <p className="mt-0.5 text-[6.5px] text-slate-500">
              Innovations Boys · 25 k vues · il y a 2 semaines
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function YouTubeDesktopScreen() {
  const videos = [
    {
      t: 'Construction d’une maison en 10 étapes',
      c: 'from-[#c98b4f] to-[#6e4a2a]',
    },
    { t: 'Cours & Astuces BTP : Dessinateur', c: 'from-[#d7a21c] to-[#3a3a3a]' },
    { t: 'Tutoriel AutoCAD / BTP débutant', c: 'from-[#2d5db3] to-[#0f2a66]' },
  ]
  return (
    <div className="flex h-full text-[#0f0f0f]">
      <div className="flex w-[22px] flex-col items-center gap-2 border-r border-slate-100 pt-5">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-[7px] w-[7px] rounded-sm bg-slate-300" />
        ))}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1 px-2 py-1 text-[5px] font-semibold">
          <span className="rounded-sm bg-[#FF0000] px-[3px] text-white">▶</span>
          Chaîne
        </div>
        <div className="mx-2 flex h-[46px] items-center gap-2 rounded bg-linear-to-r from-[#0d2043] to-[#1a3a7a] px-3">
          <div className="rounded bg-white/95 px-1 py-[1px]">
            <IBMark size={16} />
          </div>
          <div className="leading-tight">
            <p className="text-[10px] font-bold italic text-white">
              Innovations <span className="text-[#FFC226]">Boys</span>
            </p>
            <p className="text-[5px] text-white/70">
              Ingénierie | Digital | Studio
            </p>
          </div>
        </div>
        <div className="mx-2 mt-2 flex items-center gap-2">
          <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-slate-200">
            <IBMark size={12} />
          </div>
          <div className="flex-1 leading-tight">
            <p className="text-[8px] font-bold">Innovations Boys</p>
            <YouTubeStats variant="desktop" fallbackSubscribers="12,4 k" fallbackVideos="245" />
          </div>
          <span className="rounded-full bg-[#0f0f0f] px-2 py-[2px] text-[5px] font-semibold text-white">
            S’abonner
          </span>
        </div>
        <div className="mx-2 mt-2 flex gap-3 border-b border-slate-200 text-[5px] text-slate-600">
          <span className="border-b border-black pb-1 font-semibold text-black">
            Accueil
          </span>
          <span>Vidéos</span>
          <span>Shorts</span>
          <span>Playlists</span>
          <span>Communauté</span>
        </div>
        <div className="mx-2 mt-2 grid grid-cols-3 gap-1.5">
          {videos.map((v) => (
            <div key={v.t}>
              <div className={`h-[42px] rounded bg-linear-to-br ${v.c}`} />
              <p className="mt-1 text-[5px] font-semibold leading-tight">{v.t}</p>
              <p className="text-[4px] text-slate-500">Innovations Boys</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ChariowDesktopScreen() {
  return (
    <div className="h-full bg-white">
      <div className="flex items-center gap-3 bg-[#0d2043] px-3 py-[5px]">
        <span className="text-[10px] font-black text-white">Chariow</span>
        <div className="flex h-[10px] flex-1 items-center gap-1 rounded-sm bg-white/90 px-1 text-[5px] text-slate-400">
          <Search className="h-[6px] w-[6px]" /> Rechercher un produit
        </div>
        <span className="text-[5px] text-white/80">Accueil · Boutique · Panier</span>
      </div>

      <div className="flex items-center justify-between bg-linear-to-r from-[#0d2043] to-[#17408f] px-4 py-3">
        <div>
          <p className="text-[11px] font-bold leading-tight text-white">
            Des produits
            <br />
            pour tous vos projets
          </p>
          <span className="mt-1.5 inline-block rounded-sm bg-[#FFC226] px-2 py-[2px] text-[5px] font-bold text-[#1E5AA2]">
            Découvrir
          </span>
        </div>
        <div className="flex h-[56px] w-[110px] items-center justify-center rounded-md bg-linear-to-br from-[#2b4a8c] to-[#0f2a66]">
          <Wrench className="h-7 w-7 text-[#FFC226]" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 px-3 pt-3">
        {CATEGORIES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#EEF2FB] ring-1 ring-slate-200">
              <Icon className="h-[14px] w-[14px] text-[#1E5AA2]" />
            </div>
            <span className="text-[5px] text-slate-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ChariowPhoneScreen() {
  return (
    <div className="h-full bg-white">
      <div className="bg-[#0d2043] px-2.5 pb-2 pt-5">
        <p className="text-center text-[10px] font-black text-white">Chariow</p>
        <div className="mt-1.5 flex h-[11px] items-center gap-1 rounded-sm bg-white/90 px-1 text-[5px] text-slate-400">
          <Search className="h-[6px] w-[6px]" /> Rechercher un produit
        </div>
      </div>
      <div className="mx-2 mt-2 rounded-md bg-linear-to-br from-[#0d2043] to-[#17408f] p-2">
        <p className="text-[8.5px] font-bold leading-tight text-white">
          Vos produits,
          <br />
          au meilleur prix
        </p>
        <span className="mt-1.5 inline-block rounded-sm bg-[#FFC226] px-1.5 py-[1px] text-[5px] font-bold text-[#1E5AA2]">
          Découvrir
        </span>
        <div className="mt-2 flex h-[34px] items-center justify-center rounded bg-white/10">
          <Hammer className="h-5 w-5 text-[#FFC226]" />
        </div>
      </div>
      <p className="mx-2 mt-2.5 text-[7px] font-bold">Catégories</p>
      <div className="mx-2 mt-1.5 grid grid-cols-3 gap-1.5">
        {CATEGORIES.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-0.5 rounded-md bg-[#F3F5FA] py-1.5"
          >
            <Icon className="h-3 w-3 text-[#1E5AA2]" />
            <span className="text-[5px] text-slate-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function YouTubePhoneMockup() {
  return (
    <PhoneFrame className="h-[500px] w-[250px]">
      <YouTubePhoneScreen />
    </PhoneFrame>
  )
}

export function ChariowMockup() {
  return (
    <div className="relative h-[430px] w-[400px] shrink-0">
      <LaptopFrame className="absolute bottom-[56px] left-[30px] w-[340px]">
        <ChariowDesktopScreen />
      </LaptopFrame>
      <PhoneFrame className="absolute bottom-[26px] right-0 h-[236px] w-[116px] rounded-[22px] p-[4px]">
        <ChariowPhoneScreen />
      </PhoneFrame>
      <HardHat className="absolute -right-2 bottom-0 w-[140px] drop-shadow-xl" />
    </div>
  )
}

export function HeroMockup() {
  return (
    <div className="relative h-[395px] w-[724px] overflow-hidden bg-[#0b1530]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(150,90,255,0.45),transparent_35%),radial-gradient(circle_at_30%_0%,rgba(70,120,255,0.35),transparent_40%),radial-gradient(circle_at_95%_70%,rgba(40,200,255,0.25),transparent_30%)]" />
      <div className="absolute right-[-10px] top-[30px] h-[150px] w-[150px] rounded-3xl bg-black/50 blur-[2px]" />

      <LaptopFrame className="absolute left-[44px] top-[80px] w-[370px]">
        <YouTubeDesktopScreen />
      </LaptopFrame>

      <PhoneFrame className="absolute left-[390px] top-[128px] h-[275px] w-[140px] rounded-[26px] p-[5px]">
        <ChariowPhoneScreen />
      </PhoneFrame>

      <div className="absolute left-[342px] top-[56px] flex h-[54px] w-[72px] items-center justify-center rounded-2xl bg-[#FF0000] shadow-lg">
        <Play className="h-6 w-6 fill-white text-white" />
      </div>

      <div className="absolute left-[536px] top-[222px] flex h-[60px] w-[60px] items-center justify-center rounded-2xl border-2 border-white bg-[#0d2043]/70 backdrop-blur-sm">
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 fill-none stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      </div>
    </div>
  )
}
