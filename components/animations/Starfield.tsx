'use client'

import { useEffect, useRef, useState } from 'react'

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Delay animation start to not block initial paint
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      const stars: Star[] = []
      // Reduced star count - max 80 stars instead of screen-based calculation
      const numStars = Math.min(80, Math.floor((canvas.width * canvas.height) / 20000))

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.4 + 0.2,
        })
      }
      starsRef.current = stars
    }

    let lastTime = 0
    const targetFPS = 30 // Limit to 30 FPS instead of 60
    const frameInterval = 1000 / targetFPS

    const draw = (time: number) => {
      if (!ctx || !canvas) return

      // Throttle to 30 FPS
      const delta = time - lastTime
      if (delta < frameInterval) {
        animationRef.current = requestAnimationFrame(draw)
        return
      }
      lastTime = time - (delta % frameInterval)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Simple drawing without expensive gradients
      starsRef.current.forEach((star) => {
        // Simple circle - no gradient, no twinkle calculation
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(150, 170, 255, ${star.opacity})`
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
    animationRef.current = requestAnimationFrame(draw)

    window.addEventListener('resize', resizeCanvas)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  )
}
