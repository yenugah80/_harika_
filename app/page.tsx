import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Blog } from '@/components/sections/Blog'
import { Contact } from '@/components/sections/Contact'
import { Starfield } from '@/components/animations/Starfield'
import { GlowingLines } from '@/components/animations/GlowingLines'

export default function Home() {
  return (
    <>
      {/* Animated background layers */}
      <Starfield />
      <GlowingLines />

      {/* Gradient orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        {/* Floating orb 1 - top left */}
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-float-slow" />

        {/* Floating orb 2 - bottom right */}
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] animate-float-slow animation-delay-3000" />

        {/* Floating orb 3 - center */}
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px] animate-pulse-subtle animation-delay-5000" />

        {/* Floating orb 4 - top right */}
        <div className="absolute top-[5%] right-[20%] w-[300px] h-[300px] bg-secondary/8 rounded-full blur-[100px] animate-float-slow animation-delay-7000" />

        {/* Floating orb 5 - bottom left */}
        <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-primary/8 rounded-full blur-[130px] animate-float-slow animation-delay-2000" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid opacity-30" />
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
