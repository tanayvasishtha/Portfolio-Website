'use client'

import { useEffect, useRef } from 'react'

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  )
}

export const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    // Responsive resize
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    window.addEventListener('resize', handleResize)

    // Star and comet data (reduced for perf)
    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.1 + 0.3,
      twinkle: Math.random() * 100,
    }))
    const comets = Array.from({ length: 2 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.5,
      vx: Math.random() * 1.5 + 1.2,
      vy: Math.random() * 0.3 + 0.1,
      len: Math.random() * 60 + 60,
      alpha: Math.random() * 0.4 + 0.4,
    }))

    // Cursor trail
    let mouse = { x: width / 2, y: height / 2 }
    let trail: { x: number; y: number; t: number }[] = []
    const onMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY }
      trail.push({ x: e.clientX, y: e.clientY, t: Date.now() })
      if (trail.length > 12) trail.shift()
    }
    if (!isTouchDevice()) window.addEventListener('mousemove', onMouseMove)

    // Animation loop (throttled to ~50fps)
    let frame: number
    let last = 0
    const animate = (now: number) => {
      if (now - last < 20) { frame = requestAnimationFrame(animate); return }
      last = now
      ctx.clearRect(0, 0, width, height)
      // Draw cosmic radial gradient
      const grad = ctx.createRadialGradient(width * 0.6, height * 0.4, 0, width * 0.6, height * 0.4, Math.max(width, height) * 0.7)
      grad.addColorStop(0, '#0a0a0f')
      grad.addColorStop(0.7, '#1a223f')
      grad.addColorStop(1, '#000')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)
      // Draw faint video overlay (simulate with purple/black blend for perf)
      ctx.globalAlpha = 0.13
      ctx.fillStyle = 'linear-gradient(180deg, #0a0a0f 60%, #1a223f 100%)'
      ctx.fillRect(0, 0, width, height)
      ctx.globalAlpha = 1
      // Draw stars
      for (const s of stars) {
        ctx.save()
        ctx.globalAlpha = 0.7 + 0.3 * Math.sin((Date.now() / 400) + s.twinkle)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI)
        ctx.fillStyle = '#fff'
        ctx.shadowColor = '#fff'
        ctx.shadowBlur = 3
        ctx.fill()
        ctx.restore()
      }
      // Draw comets
      for (const c of comets) {
        ctx.save()
        ctx.globalAlpha = c.alpha
        // comet gradient: white/gold core, soft fade
        const grad = ctx.createLinearGradient(c.x, c.y, c.x - c.len, c.y - c.len * 0.2)
        grad.addColorStop(0, '#fff')
        grad.addColorStop(0.2, '#f6ad55') // gold
        grad.addColorStop(0.7, 'rgba(255,255,255,0.08)')
        grad.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.moveTo(c.x, c.y)
        ctx.lineTo(c.x - c.len, c.y - c.len * 0.2)
        ctx.strokeStyle = grad
        ctx.lineWidth = 2.2
        ctx.shadowColor = '#fff'
        ctx.shadowBlur = 12
        ctx.stroke()
        ctx.restore()
        // Move comet
        c.x += c.vx
        c.y += c.vy
        if (c.x - c.len > width || c.y - c.len * 0.2 > height) {
          c.x = -Math.random() * 200
          c.y = Math.random() * height * 0.5
        }
      }
      // Draw cursor trail and main cursor (desktop only)
      if (!isTouchDevice()) {
        for (let i = 0; i < trail.length; i++) {
          const t = trail[i]
          const alpha = (i + 1) / trail.length
          ctx.save()
          ctx.globalAlpha = 0.12 + 0.25 * alpha
          ctx.beginPath()
          ctx.arc(t.x, t.y, 10 * alpha, 0, 2 * Math.PI)
          ctx.fillStyle = `rgba(246,173,85,0.5)` // gold
          ctx.shadowColor = '#fff'
          ctx.shadowBlur = 8
          ctx.fill()
          ctx.restore()
        }
        ctx.save()
        ctx.globalAlpha = 0.8
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 8, 0, 2 * Math.PI)
        ctx.fillStyle = '#fff'
        ctx.shadowColor = '#f6ad55'
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.restore()
      }
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (!isTouchDevice()) window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  // Hide default cursor only on desktop
  useEffect(() => {
    if (!isTouchDevice()) {
      document.body.style.cursor = 'none'
      return () => {
        document.body.style.cursor = ''
      }
    }
  }, [])

  return (
    <>
      {/* Video background behind everything */}
      <video
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
        src="/planet.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ zIndex: -2 }}
      />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}
      />
    </>
  )
} 