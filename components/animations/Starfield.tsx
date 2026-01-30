'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      const stars: Star[] = []
      const numStars = Math.floor((canvas.width * canvas.height) / 8000)

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        })
      }
      starsRef.current = stars
    }

    const draw = (time: number) => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        // Twinkle effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase)
        const currentOpacity = star.opacity + twinkle * 0.2

        // Draw star glow
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        )
        gradient.addColorStop(0, `hsla(239, 84%, 67%, ${currentOpacity})`)
        gradient.addColorStop(0.5, `hsla(189, 94%, 43%, ${currentOpacity * 0.3})`)
        gradient.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw star core
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(0, 0%, 100%, ${currentOpacity})`
        ctx.fill()

        // Slow upward drift
        star.y -= star.speed
        if (star.y < -10) {
          star.y = canvas.height + 10
          star.x = Math.random() * canvas.width
        }
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    resizeCanvas()
    draw(0)

    window.addEventListener('resize', resizeCanvas)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
