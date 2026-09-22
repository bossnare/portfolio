'use client';

import { MapContainer, Marker, TileLayer, ZoomControl } from 'react-leaflet';
import L, { type LatLngTuple } from 'leaflet';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

const position: LatLngTuple = [-18.909707, 47.552839]; // [lat, lng]

export function LocationMapClient() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(media.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDark(event.matches);
    };

    media.addEventListener('change', handleChange);

    return () => media.removeEventListener('change', handleChange);
  }, []);

  const homeIcon = L.divIcon({
    className: '',
    html: `
    <div class="relative flex size-10 items-center justify-center">
      <div class="absolute size-10 animate-ping rounded-full bg-[#5b2eff]/60"></div>
      <img src="/images/christo.png" class="absolute -right-2 -bottom-4 size-8 z-10 rounded-full object-cover" />

      <div class="relative flex size-8 items-center justify-center
        rounded-full border-2 border-white
        bg-[#5b2eff] shadow-lg shadow-black/30">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          class="size-4"
        >
          <path d="m3 11 9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
        </svg>
      </div>
    </div>
  `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  const theme = isDark ? 'dark' : 'light';

  const mapTiles = {
    light: {
      url: 'https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png',
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; Alidade',
      subdomains: ['a', 'b', 'c', 'd'],
    },
    dark: {
      url: 'https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png',
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; Alidade',
      subdomains: ['a', 'b', 'c', 'd'],
    },
  };

  const tiles = mapTiles[theme];

  return (
    <div className="overflow-hidden rounded-3xl bg-background group border border-zinc-300 dark:border-white/12">
      <div className="relative w-full h-100">
        <MapContainer
          center={position}
          zoom={14}
          scrollWheelZoom={false}
          zoomControl={false}
          className="size-full"
        >
          <TileLayer
            key={theme}
            url={tiles.url}
            attribution={tiles.attribution}
            subdomains={tiles.subdomains}
          />
          <Marker position={position} icon={homeIcon} />
          <ZoomControl position="topright" />
        </MapContainer>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-400 h-24 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-between gap-4 p-5">
            <div>
              <p className="font-medium">Antananarivo, Madagascar</p>
              <p className="mt-1 text-sm text-foreground/80">
                Based in Madagascar
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`}
              target="_blank"
              rel="nooper noreferrer"
              className="border border-zinc-300 dark:border-white/12 shrink-0 rounded-full px-4 py-2 text-sm font-medium"
            >
              View map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
