import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'

// Lazy load background animations to not block initial paint
const Starfield = dynamic(() => import('@/components/animations/Starfield').then(mod => ({ default: mod.Starfield })), { ssr: false })
const GlowingLines = dynamic(() => import('@/components/animations/GlowingLines').then(mod => ({ default: mod.GlowingLines })), { ssr: false })

// Dynamic imports for below-fold sections to reduce initial bundle
const About = dynamic(() => import('@/components/sections/About').then(mod => ({ default: mod.About })))
const Experience = dynamic(() => import('@/components/sections/Experience').then(mod => ({ default: mod.Experience })))
const Skills = dynamic(() => import('@/components/sections/Skills').then(mod => ({ default: mod.Skills })))
const Projects = dynamic(() => import('@/components/sections/Projects').then(mod => ({ default: mod.Projects })))
const Blog = dynamic(() => import('@/components/sections/Blog').then(mod => ({ default: mod.Blog })))
const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => ({ default: mod.Contact })))

export default function Home() {
  return (
    <>
      {/* Animated background layers */}
      <Starfield />
      <GlowingLines />

      {/* Gradient orbs - reduced blur for better performance */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        {/* Floating orb 1 - top left */}
        <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

        {/* Floating orb 2 - bottom right */}
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-secondary/10 rounded-full blur-3xl" />

        {/* Floating orb 3 - center */}
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[450px] h-[450px] bg-accent/5 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </>
  )
}
