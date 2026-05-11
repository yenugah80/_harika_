'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Track page views
function usePageTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }
  }, [pathname, searchParams])
}

function PageTracker() {
  usePageTracking()
  return null
}

// Event tracking utility
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Specific event trackers
export const trackClick = (elementName: string, section: string) => {
  trackEvent('click', section, elementName)
}

export const trackExternalLink = (url: string) => {
  trackEvent('external_link', 'outbound', url)
}

export const trackDownload = (fileName: string) => {
  trackEvent('download', 'file', fileName)
}

export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName)
}

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', 'scroll', sectionName)
}

export const trackBlogRead = (postSlug: string, readTime: number) => {
  trackEvent('blog_read', 'content', postSlug, readTime)
}

// Analytics component with Google Analytics 4
export function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageTracker />
      </Suspense>
    </>
  )
}

// Declare gtag on window
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
  }
}
