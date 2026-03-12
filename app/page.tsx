import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'

// Dynamic imports for below-fold sections
const About = dynamic(() => import('@/components/sections/About').then(mod => ({ default: mod.About })))
const Experience = dynamic(() => import('@/components/sections/Experience').then(mod => ({ default: mod.Experience })))
const Skills = dynamic(() => import('@/components/sections/Skills').then(mod => ({ default: mod.Skills })))
const Projects = dynamic(() => import('@/components/sections/Projects').then(mod => ({ default: mod.Projects })))
const Blog = dynamic(() => import('@/components/sections/Blog').then(mod => ({ default: mod.Blog })))
const Contact = dynamic(() => import('@/components/sections/Contact').then(mod => ({ default: mod.Contact })))

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
  )
}
