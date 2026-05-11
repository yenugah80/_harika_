'use client'

import { forwardRef, useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Elegant card with subtle gradient border on hover
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'outline' | 'elevated'
  hover?: 'lift' | 'glow' | 'border' | 'none'
  children: React.ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = 'lift', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white/[0.02] border border-white/[0.06]',
      glass: 'bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]',
      outline: 'bg-transparent border border-white/[0.1]',
      elevated: 'bg-white/[0.04] border border-white/[0.08] shadow-2xl shadow-black/20',
    }

    const hovers = {
      lift: 'hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10',
      glow: 'hover:border-white/[0.15] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]',
      border: 'hover:border-white/[0.2]',
      none: '',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl transition-all duration-300 ease-out',
          variants[variant],
          hovers[hover],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// Card with mouse-follow gradient effect
interface GradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  gradientColor?: string
  gradientSize?: number
}

export function GradientCard({
  children,
  className,
  gradientColor = 'rgba(120, 119, 198, 0.15)',
  gradientSize = 400,
  ...props
}: GradientCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.06]',
        'transition-all duration-300 hover:border-white/[0.12]',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Gradient follow effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${gradientSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent 60%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

// Interactive card with lift and scale effect
interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
}

export function InteractiveCard({ children, className }: InteractiveCardProps) {
  return (
    <motion.div
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-white/[0.02] border border-white/[0.06]',
        'cursor-pointer',
        className
      )}
      whileHover={{
        y: -4,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

// Feature card for bento grid
interface FeatureCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <GradientCard className={cn('p-6 md:p-8', className)}>
      {icon && (
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08]">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{description}</p>
    </GradientCard>
  )
}

// Project card
interface ProjectCardProps {
  title: string
  description: string
  tags?: string[]
  image?: string
  href?: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  tags = [],
  image,
  href,
  className,
}: ProjectCardProps) {
  const Wrapper = href ? motion.a : motion.div

  return (
    <Wrapper
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={cn(
        'group block overflow-hidden rounded-2xl',
        'bg-white/[0.02] border border-white/[0.06]',
        'transition-all duration-500',
        'hover:border-white/[0.12] hover:bg-white/[0.04]',
        className
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Image */}
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-4">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/[0.05] text-white/60 border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  )
}

// Stat card
interface StatCardProps {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div
      className={cn(
        'p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]',
        'text-center',
        className
      )}
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-white/40">{label}</div>
    </div>
  )
}
