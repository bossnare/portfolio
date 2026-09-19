import type {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
        url:"https://christorazafimanga.is-a.dev",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
        sitemap: "https://christorazafimanga.is-a.dev"
    }
    ]

}