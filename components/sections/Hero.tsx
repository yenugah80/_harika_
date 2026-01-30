'use client'

import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Sparkles, Zap, Code2, Brain, Database, Cloud, Cpu } from 'lucide-react'
import { TextRotator } from '@/components/animations/TextRotator'

const roles = [
  'RAG that actually retrieves',
  'agents that close tickets, not create them',
  'fraud models protecting $2B daily',
  'LLM apps with sub-2s latency',
  'ML that survived Black Friday',
]

const stats = [
  { value: '8+', label: 'Years Deep in ML', icon: Zap },
  { value: '$2B+', label: 'Protected Daily', icon: Code2 },
  { value: '99.9%', label: 'Uptime Shipped', icon: Sparkles },
]

// Floating tech icons around the hero
const floatingIcons = [
  { Icon: Brain, x: '10%', y: '20%', delay: 0, size: 24 },
  { Icon: Database, x: '85%', y: '25%', delay: 0.5, size: 20 },
  { Icon: Cloud, x: '5%', y: '60%', delay: 1, size: 22 },
  { Icon: Cpu, x: '90%', y: '65%', delay: 1.5, size: 26 },
  { Icon: Code2, x: '15%', y: '80%', delay: 2, size: 18 },
  { Icon: Sparkles, x: '80%', y: '85%', delay: 2.5, size: 20 },
]

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block pointer-events-none"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon
            size={size}
            className="text-primary/40"
            strokeWidth={1.5}
          />
        </motion.div>
      ))}

      {/* Animated rings behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] rounded-full border border-primary/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full border border-secondary/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full border border-accent/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container-custom mx-auto px-4 md:px-8 pt-20 md:pt-0 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-muted-foreground">
              Open to opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Harika Yenuga</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4"
          >
            Senior AI/ML Engineer shipping
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 h-12 md:h-14"
          >
            <TextRotator texts={roles} interval={2500} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Currently leading GenAI at{' '}
            <span className="text-primary font-medium">Macy&#39;s</span>. Previously caught fraud at{' '}
            <span className="text-accent font-medium">Bank of America</span> and built retail ML at{' '}
            <span className="text-secondary font-medium">Apple</span>. I ship AI that works Monday morning, not just in notebooks.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-10"
          >
            <MapPin size={16} className="text-primary" />
            <span>United States</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={18} />
              View My Work
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/harika-ye"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group relative px-6 py-4 rounded-2xl glass card-shine cursor-default"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                custom={index}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)',
                  }}
                />
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary/60 group-hover:text-primary transition-colors group-hover:scale-110 transform duration-300" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
