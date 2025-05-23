import { useEffect, useRef } from 'react'

export const WormholeBackground = () => {
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

    // Fewer, more performant stars
    const stars = Array.from({ length: 80 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: Math.random() * Math.max(width, height) * 0.5 + 80,
      speed: Math.random() * 0.012 + 0.008,
      size: Math.random() * 1.1 + 0.4,
      color: Math.random() > 0.7 ? '#f6ad55' : '#fff',
    }))

    let t = 0
    let frame: number
    let last = 0
    const animate = (now: number) => {
      // Throttle to ~45fps
      if (now - last < 22) { frame = requestAnimationFrame(animate); return }
      last = now
      t += 0.012
      ctx.clearRect(0, 0, width, height)
      // Draw deep wormhole tunnel
      const cx = width / 2
      const cy = height / 2
      const maxR = Math.max(width, height) * 0.5
      // Tunnel glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR)
      grad.addColorStop(0, '#fff')
      grad.addColorStop(0.08, '#b3e0ff')
      grad.addColorStop(0.18, '#6b46c1')
      grad.addColorStop(0.32, '#1a223f')
      grad.addColorStop(0.7, '#0a0a1a')
      grad.addColorStop(1, '#000')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)
      // Tunnel rings (more subtle)
      for (let r = maxR * 0.22; r < maxR; r += maxR * 0.14) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(cx, cy, r + Math.sin(t * 2 + r * 0.04) * 6, 0, 2 * Math.PI)
        ctx.strokeStyle = 'rgba(179,224,255,0.08)'
        ctx.lineWidth = 1.5 + Math.sin(t * 2 + r * 0.1) * 0.7
        ctx.shadowColor = '#b3e0ff'
        ctx.shadowBlur = 4
        ctx.globalAlpha = 0.13
        ctx.stroke()
        ctx.restore()
      }
      // Swirling tunnel lines (fewer, more subtle)
      for (let i = 0; i < 24; i++) {
        const angle = (i / 24) * Math.PI * 2 + t * 0.8
        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(angle)
        ctx.beginPath()
        for (let r = 60; r < maxR; r += 10) {
          const swirl = Math.sin(t * 2.5 + r * 0.045 + i) * 8
          ctx.lineTo(r + swirl, swirl)
        }
        ctx.strokeStyle = 'rgba(179,224,255,0.07)'
        ctx.lineWidth = 1.5
        ctx.shadowColor = '#b3e0ff'
        ctx.shadowBlur = 4
        ctx.stroke()
        ctx.restore()
      }
      // Draw subtle, small stars being pulled in
      for (const s of stars) {
        ctx.save()
        ctx.translate(cx, cy)
        const spiral = Math.sin(t * 2 + s.radius * 0.04) * 7
        const x = Math.cos(s.angle + t * s.speed * 8) * (s.radius + spiral)
        const y = Math.sin(s.angle + t * s.speed * 8) * (s.radius + spiral)
        ctx.beginPath()
        ctx.arc(x, y, s.size, 0, 2 * Math.PI)
        ctx.fillStyle = s.color
        ctx.globalAlpha = 0.7
        ctx.shadowColor = s.color
        ctx.shadowBlur = 5
        ctx.fill()
        ctx.restore()
        // Animate star radius (move inward)
        s.radius -= 0.7 + s.speed * 18
        if (s.radius < 60) {
          s.radius = maxR + 80
          s.angle = Math.random() * Math.PI * 2
        }
      }
      // Bright glowing core
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, maxR * 0.09 + Math.sin(t * 2) * 2, 0, 2 * Math.PI)
      ctx.globalAlpha = 0.7
      ctx.shadowColor = '#fff'
      ctx.shadowBlur = 50
      ctx.fillStyle = '#fff'
      ctx.fill()
      ctx.restore()
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, willChange: 'transform' }}
    />
  )
} 