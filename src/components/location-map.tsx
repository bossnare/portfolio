"use client"

import dynamic from 'next/dynamic'

const LocationMapClient = dynamic((
    () => import('@/src/components/location-map-client'),
    {
        ssr: false,
        loading: (<div className="h-100 w-full bg-zinc-300 dark:bg-zinc-800 animate-pulse rounded-3xl" />)
  }
);
    }
))

export function LocationMap() {
    return(
        <LocationMapClient />
    )
}