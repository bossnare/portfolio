import type {MetadataRoute} from 'next'
import {works} from '@/src/data/works'

const BASE_URL = "https://christorazafimanga.is-a.dev"

export default function sitemap(): MetadataRoute.Sitemap {
    const projectUrls: MetadataRoute.Sitemap = works.map((work) => ({
        url: `${BASE_URL}/works/${work.id}`,
        changeFrequency: "monthly",
        priority: 0.7
    }))

    return [
        {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
        },
        {
        url: `${BASE_URL}/about`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
        },
        {
        url: `${BASE_URL}/works`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
        },
        {
        url: `${BASE_URL}/experience`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
        },
        {
        url: `${BASE_URL}/contact`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
        },
        ...projectUrls,
        {
        url: `${BASE_URL}/cv`,
        changeFrequency: "monthly",
        priority: 0.8,
        },
        {
        url: `${BASE_URL}/christo_razafimanga_cv.pdf`,
        changeFrequency: "monthly",
        priority: 0.7,
        },
    ]

}