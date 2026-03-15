'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Mail, Linkedin, Github, BookOpen, ArrowUpRight, Sparkles } from 'lucide-react'
import { TiltCard } from '@/components/ui/TiltCard'

const links = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:yenugaharika555@gmail.com',
    text: 'yenugaharika555@gmail.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/harika-ye',
    text: 'linkedin.com/in/harika-ye',
    color: 'from-blue-600 to-blue-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yenugah80',
    text: 'github.com/yenugah80',
    color: 'from-gray-400 to-gray-600',
  },
  {
    icon: BookOpen,
    label: 'Medium',
    href: 'https://harikayenuga.medium.com',
    text: 'harikayenuga.medium.com',
    color: 'from-green-500 to-emerald-500',
  },
]

const easeOut = [0.16, 1, 0.3, 1]

function FloatingOrb({ delay = 0, size = 400, x = 0, y = 0, color = 'primary' }: {
  delay?: number
  size?: number
  x?: number
  y?: number
  color?: string
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: color === 'primary'
          ? 'radial-gradient(circle, hsl(210 100% 50% / 0.15) 0%, transparent 70%)'
          : 'radial-gradient(circle, hsl(280 100% 50% / 0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, hsl(210 100% 50% / 0.08) 0%, transparent 60%)',
        filter: 'blur(40px)',
      }}
      animate={{
        x: mousePosition.x - 300,
        y: mousePosition.y - 300,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 30,
        mass: 0.5,
      }}
    />
  )
}

export function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), {
    stiffness: 100,
    damping: 30,
  })
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), {
    stiffness: 100,
    damping: 30,
  })
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.95]), {
    stiffness: 100,
    damping: 30,
  })

  return (
    <main ref={containerRef} className="min-h-screen relative overflow-hidden">
      <MouseGlow />

      {/* Floating orbs */}
      <FloatingOrb x={10} y={20} size={500} delay={0} color="primary" />
      <FloatingOrb x={70} y={60} size={400} delay={2} color="secondary" />
      <FloatingOrb x={80} y={10} size={300} delay={4} color="primary" />

      {/* Hero section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <motion.div
          className="text-center max-w-4xl"
          style={{ scale }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white/5 border border-white/10">
              <Sparkles size={14} className="text-primary" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.1, ease: easeOut }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[0.9] mb-8"
          >
            <span className="block">Let&apos;s build</span>
            <span className="block gradient-text">something great</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
            className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Open to AI/ML leadership roles, consulting opportunities,
            and interesting collaborations.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-sm text-white/30">Scroll to connect</span>
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact cards section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-32 relative z-10">
        <motion.div className="max-w-3xl w-full" style={{ y: y1 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white/40 text-sm uppercase tracking-widest mb-12"
          >
            Get in touch
          </motion.p>

          <div className="grid gap-4">
            {links.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: easeOut }}
              >
                <TiltCard>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="group flex items-center gap-6 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-500"
                  >
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} p-[1px] shrink-0`}
                    >
                      <div className="w-full h-full rounded-xl bg-black/80 flex items-center justify-center">
                        <link.icon size={24} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-lg md:text-xl font-medium mb-1 group-hover:text-primary transition-colors duration-300">
                        {link.label}
                      </p>
                      <p className="text-white/40 text-sm md:text-base truncate">
                        {link.text}
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      className="shrink-0"
                      initial={{ x: 0, opacity: 0.3 }}
                      whileHover={{ x: 5, opacity: 1 }}
                    >
                      <ArrowUpRight size={24} className="text-white/30 group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </a>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="min-h-[50vh] flex items-center justify-center px-6 pb-32 relative z-10">
        <motion.div
          className="text-center"
          style={{ y: y2 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl text-white/60 mb-4"
          >
            Response time
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-semibold gradient-text"
          >
            Within 24 hours
          </motion.p>
        </motion.div>
      </section>
    </main>
  )
}
