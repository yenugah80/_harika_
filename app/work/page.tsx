import { Metadata } from 'next'
import { WorkPage } from '@/components/pages/WorkPage'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Projects and work by Harika Yenuga - AI/ML Engineer building production systems at scale.',
}

export default function Work() {
  return <WorkPage />
}
