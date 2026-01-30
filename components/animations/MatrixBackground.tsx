'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  speed: number
  char: string
  opacity: number
  fontSize: number
}

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Characters for the matrix effect (data/AI themed)
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>{}[]()=+-*/%&|^!?:;.,~`#@$_AIMLデータ分析機械学習'

    let particles: Particle[] = []
    let animationFrameId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const columns = Math.floor(canvas.width / 20)

      for (let i = 0; i < columns; i++) {
        particles.push({
          x: i * 20,
          y: Math.random() * canvas.height,
          speed: 0.5 + Math.random() * 2,
          char: chars[Math.floor(Math.random() * chars.length)],
          opacity: Math.random() * 0.5 + 0.1,
          fontSize: 10 + Math.random() * 8,
        })
      }
    }

    const animate = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Primary color (indigo) with varying opacity
        const hue = 239 // Indigo hue
        const saturation = 84
        const lightness = 67

        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${particle.opacity})`
        ctx.font = `${particle.fontSize}px 'JetBrains Mono', monospace`
        ctx.fillText(particle.char, particle.x, particle.y)

        // Move particle down
        particle.y += particle.speed

        // Randomly change character
        if (Math.random() > 0.98) {
          particle.char = chars[Math.floor(Math.random() * chars.length)]
        }

        // Reset when off screen
        if (particle.y > canvas.height) {
          particle.y = -20
          particle.opacity = Math.random() * 0.5 + 0.1
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="canvas-overlay"
      style={{ opacity: 0.4 }}
      aria-hidden="true"
    />
  )
}
