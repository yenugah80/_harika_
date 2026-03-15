import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Harika Y - AI/ML Engineer',
    short_name: 'Harika Y',
    description: 'Lead AI Engineer specializing in LLMs, RAG, and production ML systems',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#3b9eff',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
