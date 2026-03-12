import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { Analytics } from '@/components/Analytics'

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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8ff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a12' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://yenuga.com'),
  title: {
    default: 'Harika Yenuga | Lead AI Engineer & Data Scientist',
    template: '%s | Harika Yenuga',
  },
  description:
    'Lead AI Engineer at Macy\'s with 8+ years building production AI systems. Expert in LLMs, RAG architectures, LangChain, GenAI, and ML pipelines. Previously at Apple & Bank of America.',
  keywords: [
    'Harika Yenuga',
    'AI Engineer',
    'ML Engineer',
    'Machine Learning Engineer',
    'Data Scientist',
    'LLM Developer',
    'LangChain Expert',
    'LangGraph',
    'RAG Architecture',
    'Retrieval Augmented Generation',
    'GenAI',
    'Generative AI',
    'Python Developer',
    'PyTorch',
    'TensorFlow',
    'NLP Engineer',
    'MLOps',
    'Databricks',
    'AWS SageMaker',
    'Azure ML',
    'Data Engineering',
    'AI Consulting',
    'Enterprise AI',
    'Retail AI',
    'Banking AI',
    'Fraud Detection ML',
    'Demand Forecasting',
  ],
  authors: [{ name: 'Harika Yenuga', url: 'https://yenuga.com' }],
  creator: 'Harika Yenuga',
  publisher: 'Harika Yenuga',
  category: 'Technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yenuga.com',
    siteName: 'Harika Yenuga - AI Engineer',
    title: 'Harika Yenuga | Lead AI Engineer & Data Scientist',
    description:
      'Building intelligent AI systems at scale. Lead AI Engineer at Macy\'s specializing in LLMs, RAG, LangChain, and production ML pipelines.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Harika Yenuga - Lead AI Engineer specializing in LLMs and GenAI',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harika Yenuga | Lead AI Engineer',
    description: 'Building AI systems that matter. LLMs, RAG, LangChain, GenAI.',
    images: ['/og-image.png'],
    creator: '@harikayenuga',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://yenuga.com',
    types: {
      'application/rss+xml': 'https://yenuga.com/rss.xml',
    },
  },
  other: {
    'msapplication-TileColor': '#8b5cf6',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Harika Y',
  },
}

// Structured Data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://yenuga.com/#website',
      url: 'https://yenuga.com',
      name: 'Harika Yenuga',
      description: 'Lead AI Engineer Portfolio',
      publisher: { '@id': 'https://yenuga.com/#person' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Person',
      '@id': 'https://yenuga.com/#person',
      name: 'Harika Yenuga',
      givenName: 'Harika',
      familyName: 'Yenuga',
      jobTitle: 'Lead AI Engineer',
      description: 'Lead AI Engineer specializing in LLMs, RAG architectures, and production ML systems',
      url: 'https://yenuga.com',
      worksFor: {
        '@type': 'Organization',
        name: "Macy's",
        url: 'https://macys.com',
      },
      alumniOf: [
        { '@type': 'Organization', name: 'Apple Inc.' },
        { '@type': 'Organization', name: 'Bank of America' },
        { '@type': 'CollegeOrUniversity', name: 'Northwood University' },
      ],
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
        'PyTorch',
        'TensorFlow',
        'Data Engineering',
        'MLOps',
        'AWS',
        'Azure',
        'Databricks',
        'NLP',
      ],
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://yenuga.com/#profilepage',
      url: 'https://yenuga.com',
      name: 'Harika Yenuga - AI Engineer Portfolio',
      isPartOf: { '@id': 'https://yenuga.com/#website' },
      about: { '@id': 'https://yenuga.com/#person' },
      mainEntity: { '@id': 'https://yenuga.com/#person' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href="https://yenuga.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="alternate" type="application/rss+xml" title="Harika Yenuga Blog RSS" href="/rss.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
