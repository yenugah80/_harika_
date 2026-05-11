'use client'

import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  animation?: 'fade' | 'slide' | 'blur' | 'letter'
  delay?: number
  duration?: number
  stagger?: number
  once?: boolean
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
}

const animations: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  },
  slide: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  },
  letter: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
    },
  },
}

export function AnimatedText({
  text,
  className,
  as = 'p',
  animation = 'fade',
  delay = 0,
  duration,
  stagger = 0.03,
  once = true,
}: AnimatedTextProps) {
  const Tag = motion[as] as typeof motion.p

  if (animation === 'letter') {
    const letters = text.split('')

    return (
      <Tag
        className={cn('inline-block', className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        custom={stagger}
        style={{ transitionDelay: `${delay}s` }}
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            variants={animations.letter}
            className="inline-block"
            style={{
              whiteSpace: letter === ' ' ? 'pre' : 'normal',
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </Tag>
    )
  }

  const variant = animations[animation]
  const customVariant: Variants = duration
    ? {
        ...variant,
        visible: {
          ...variant.visible,
          transition: {
            ...(variant.visible as { transition: object }).transition,
            duration,
            delay,
          },
        },
      }
    : {
        ...variant,
        visible: {
          ...variant.visible,
          transition: {
            ...(variant.visible as { transition: object }).transition,
            delay,
          },
        },
      }

  return (
    <Tag
      className={className}
      variants={customVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {text}
    </Tag>
  )
}

// Word-by-word animation
interface AnimatedWordsProps {
  text: string
  className?: string
  wordClassName?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
  stagger?: number
  once?: boolean
}

export function AnimatedWords({
  text,
  className,
  wordClassName,
  as = 'p',
  delay = 0,
  stagger = 0.08,
  once = true,
}: AnimatedWordsProps) {
  const words = text.split(' ')
  const Tag = motion[as] as typeof motion.p

  return (
    <Tag
      className={cn('flex flex-wrap', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      custom={stagger}
      style={{ transitionDelay: `${delay}s` }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={animations.blur}
          className={cn('inline-block mr-[0.25em]', wordClassName)}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}

// Fade up animation for any element
interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for children
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
