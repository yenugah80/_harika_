import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'

// Dynamic imports for below-fold sections
const About = dynamic(() => import('@/components/sections/About').then(mod => ({ default: mod.About })))
const Skills = dynamic(() => import('@/components/sections/Skills').then(mod => ({ default: mod.Skills })))
const Newsletter = dynamic(() => import('@/components/sections/Newsletter').then(mod => ({ default: mod.Newsletter })))
const HomeCallToAction = dynamic(() => import('@/components/sections/HomeCallToAction').then(mod => ({ default: mod.HomeCallToAction })))

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Newsletter />
      <HomeCallToAction />
    </main>
  )
}
