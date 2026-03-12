import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Harika Y - AI/ML Engineer',
    short_name: 'Harika Y',
    description: 'Lead AI Engineer specializing in LLMs, RAG, and production ML systems',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f7ff',
    theme_color: '#e85d4c',
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
