import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { MatrixBackground } from '@/components/animations/MatrixBackground'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yenuga.com'),
  title: {
    default: 'Harika Y | Senior AI/ML Engineer',
    template: '%s | Harika Y',
  },
  description:
    'Lead AI Engineer at Macy\'s with 8+ years experience building production-grade AI systems. Specializing in LLMs, RAG, LangChain, and ML pipelines across retail, banking, and technology.',
  keywords: [
    'AI Engineer',
    'ML Engineer',
    'LLM Developer',
    'LangChain',
    'LangGraph',
    'RAG',
    'Python',
    'Machine Learning',
    'GenAI',
    'Data Science',
    'Databricks',
    'AWS',
    'Azure',
  ],
  authors: [{ name: 'Harika Y' }],
  creator: 'Harika Y',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yenuga.com',
    siteName: 'Harika Y Portfolio',
    title: 'Harika Y | Senior AI/ML Engineer',
    description:
      'Building intelligent AI systems and ML pipelines. Lead AI Engineer at Macy\'s with expertise in LLMs, RAG, and GenAI.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Harika Y - Senior AI/ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harika Y | Senior AI/ML Engineer',
    description: 'Building intelligent AI systems and ML pipelines',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Harika Y',
              jobTitle: 'Lead AI Engineer',
              worksFor: {
                '@type': 'Organization',
                name: "Macy's",
              },
              url: 'https://yenuga.com',
              sameAs: [
                'https://linkedin.com/in/harika-ye',
                'https://github.com/yenugah80',
                'https://harikayenuga.medium.com',
              ],
              knowsAbout: [
                'Artificial Intelligence',
                'Machine Learning',
                'Large Language Models',
                'LangChain',
                'LangGraph',
                'RAG',
                'Python',
                'Data Engineering',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased noise">
        <MatrixBackground />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
