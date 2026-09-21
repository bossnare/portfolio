"use client"

import {useEffect, useRef} from 'react'
import {Map, Marker} from 'maplibre-gl'
import "maplibre-gl/dist/maplibre-gl.css"

const LOCATION = {
    lng: 47.552839,
    lat: -18.909707
}

export function LocationMap() {
const mapRef = useRef<HTMLDivElement | null>(null)

useEffect(() => {
    if (!mapRef.current) return

    const map = new Map({
        container: mapRef.current,
        style: "https://tiles.openfreemap.org/styles/liberty",
        center: [LOCATION.lng, LOCATION.lat],
        zoom: 14,
        attributionControl: false
    })

    new Marker().setLngLat([LOCATION.lng, LOCATION.lat]).addTo(map)

    return () => map.remove()
}, [])

    return(
        <div className="overflow-hidden rounded-3xl border border-zinc-300 dark:border-white/12">
            <div className="h-80 w-full" ref={mapRef} />
            <div className="border-t p-5">
             <p className="font-medium">Antananarivo, Madagascar</p>
             <p className="mt-1 text-sm text-muted-foreground">Based in Madagascar</p>
            </div>
        </div>
    )
}