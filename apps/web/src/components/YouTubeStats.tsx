import { useEffect, useState } from 'react'

type YouTubeStatsState = {
  subscriberCount: string
  videoCount: string
}

type YouTubeStatsProps = {
  variant?: 'phone' | 'desktop'
  fallbackSubscribers?: string
  fallbackVideos?: string
  channelHandle?: string
  channelId?: string
}

const DEFAULT_HANDLE = 'Ivan46'
const DEFAULT_SUBSCRIBERS = '12,4 k'
const DEFAULT_VIDEOS = '245'
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string | undefined

function formatCompactCount(value: number) {
  return new Intl.NumberFormat('fr-FR', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
}

function normalizeHandle(handle?: string) {
  return (handle ?? DEFAULT_HANDLE).replace(/^@/, '')
}

export function YouTubeStats({
  variant = 'desktop',
  fallbackSubscribers = DEFAULT_SUBSCRIBERS,
  fallbackVideos = DEFAULT_VIDEOS,
  channelHandle,
  channelId,
}: YouTubeStatsProps) {
  const [stats, setStats] = useState<YouTubeStatsState>({
    subscriberCount: fallbackSubscribers,
    videoCount: fallbackVideos,
  })
  const [loading, setLoading] = useState(() => Boolean(YOUTUBE_API_KEY))

  useEffect(() => {
    if (!YOUTUBE_API_KEY) {
      return
    }

    const configuredChannelId = (channelId ?? import.meta.env.VITE_YOUTUBE_CHANNEL_ID) as
      | string
      | undefined
    const configuredHandle =
      (channelHandle ?? import.meta.env.VITE_YOUTUBE_CHANNEL_HANDLE) as string | undefined

    const params = new URLSearchParams({
      part: 'statistics,snippet',
      key: YOUTUBE_API_KEY,
    })

    if (configuredChannelId) {
      params.set('id', configuredChannelId)
    } else {
      params.set('forHandle', normalizeHandle(configuredHandle))
    }

    let ignore = false

    fetch(`https://www.googleapis.com/youtube/v3/channels?${params.toString()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('YouTube API request failed')
        }
        return response.json() as Promise<{
          items?: Array<{
            statistics?: {
              subscriberCount?: string
              videoCount?: string
            }
          }>
        }>
      })
      .then((data) => {
        if (ignore) return

        const item = data.items?.[0]
        const subscriberCount = item?.statistics?.subscriberCount
        const videoCount = item?.statistics?.videoCount

        if (subscriberCount && videoCount) {
          setStats({
            subscriberCount: formatCompactCount(Number(subscriberCount)),
            videoCount: formatCompactCount(Number(videoCount)),
          })
        }
      })
      .catch(() => {
        if (!ignore) {
          setStats({
            subscriberCount: fallbackSubscribers,
            videoCount: fallbackVideos,
          })
        }
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [fallbackSubscribers, fallbackVideos, channelHandle, channelId])

  if (variant === 'phone') {
    return (
      <p className="text-[7px] text-slate-500">
        {loading ? 'Chargement…' : `${stats.subscriberCount} abonnés · ${stats.videoCount} vidéos`}
      </p>
    )
  }

  return (
    <p className="text-[5px] text-slate-500">
      {loading ? 'Chargement…' : `@Ivan46 · ${stats.subscriberCount} abonnés · ${stats.videoCount} vidéos`}
    </p>
  )
}
