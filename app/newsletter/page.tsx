import { Metadata } from 'next'
import { NewsletterPage } from '@/components/pages/NewsletterPage'

export const metadata: Metadata = {
  title: 'Newsletter | Harika Yenuga',
  description: 'Join my newsletter for insights on AI, machine learning, and building production-ready systems. No spam, just valuable content.',
  openGraph: {
    title: 'Newsletter | Harika Yenuga',
    description: 'Join my newsletter for insights on AI, machine learning, and building production-ready systems.',
  },
}

export default function Newsletter() {
  return <NewsletterPage />
}
