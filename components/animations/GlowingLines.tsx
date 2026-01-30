'use client'

import { useEffect, useState } from 'react'

// Pure CSS animated lines - no Framer Motion, no SVG filters
export function GlowingLines() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Delay to not block initial paint
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {/* Horizontal lines using Tailwind animations */}
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent top-[15%] animate-line-slide-h1" />
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent top-[45%] animate-line-slide-h2" />
      <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent top-[75%] animate-line-slide-h3" />

      {/* Vertical lines using Tailwind animations */}
      <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent left-[20%] animate-line-slide-v1" />
      <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-secondary/30 to-transparent left-[50%] animate-line-slide-v2" />
      <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent left-[80%] animate-line-slide-v3" />
    </div>
  )
}
