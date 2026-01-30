'use client'

import { motion } from 'framer-motion'

export function GlowingLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(239, 84%, 67%)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(189, 94%, 43%)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="line-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="hsl(270, 91%, 65%)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="glow-line">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal moving lines */}
        {[15, 35, 55, 75, 90].map((y, i) => (
          <motion.line
            key={`h-${i}`}
            x1="-200"
            y1={`${y}%`}
            x2="200"
            y2={`${y}%`}
            stroke={`url(#line-gradient-${(i % 3) + 1})`}
            strokeWidth="1"
            filter="url(#glow-line)"
            initial={{ x1: '-200', x2: '0' }}
            animate={{ x1: '100%', x2: '120%' }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Vertical moving lines */}
        {[10, 30, 50, 70, 90].map((x, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${x}%`}
            y1="-200"
            x2={`${x}%`}
            y2="200"
            stroke={`url(#line-gradient-${(i % 3) + 1})`}
            strokeWidth="0.5"
            filter="url(#glow-line)"
            initial={{ y1: '-200', y2: '0' }}
            animate={{ y1: '100%', y2: '120%' }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
          />
        ))}

        {/* Diagonal accent lines */}
        <motion.line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="url(#line-gradient-1)"
          strokeWidth="0.5"
          strokeDasharray="20 40"
          filter="url(#glow-line)"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -120 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="url(#line-gradient-2)"
          strokeWidth="0.5"
          strokeDasharray="20 40"
          filter="url(#glow-line)"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -120 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    </div>
  )
}
