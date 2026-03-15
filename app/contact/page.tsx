import { Metadata } from 'next'
import { ContactPage } from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Harika Yenuga - AI/ML Engineer. Open to opportunities and collaborations.',
}

export default function Contact() {
  return <ContactPage />
}
