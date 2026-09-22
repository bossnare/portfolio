'use client';

import dynamic from 'next/dynamic';

const LocationMapClient = dynamic(
  () => import('./location-map-client').then((module) => module.LocationMapClient),
  {
    ssr: false,
    loading: () => (
      <div className="h-100 w-full animate-pulse rounded-3xl bg-zinc-300 dark:bg-zinc-800" />
    ),
  },
);

export function LocationMap() {
  return <LocationMapClient />;
}
