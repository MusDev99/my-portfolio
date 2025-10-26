'use client'

import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Enhanced Particle class
    class Particle {
      x: number = 0
      y: number = 0
      size: number = 0
      speedX: number = 0
      speedY: number = 0
      color: string = ''
      opacity: number = 0
      pulseSpeed: number = 0
      pulsePhase: number = 0

      constructor() {
        if (!canvas) return
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.3 + 0.1
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
        
        // Create gradient colors
        const colors = [
          'rgba(99, 102, 241, ', // Primary blue
          'rgba(139, 92, 246, ', // Purple
          'rgba(59, 130, 246, ', // Blue
          'rgba(16, 185, 129, ', // Emerald
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        if (!canvas) return
        this.x += this.speedX
        this.y += this.speedY
        this.pulsePhase += this.pulseSpeed

        // Wrap around edges with smooth transition
        if (this.x > canvas.width + 10) this.x = -10
        if (this.x < -10) this.x = canvas.width + 10
        if (this.y > canvas.height + 10) this.y = -10
        if (this.y < -10) this.y = canvas.height + 10
      }

      draw() {
        if (!ctx) return
        
        // Pulsing effect
        const pulseOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.1
        
        ctx.save()
        ctx.globalAlpha = pulseOpacity
        
        // Create gradient for each particle
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        )
        gradient.addColorStop(0, this.color + '0.8)')
        gradient.addColorStop(1, this.color + '0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      }
    }

    // Connection line class
    class Connection {
      particle1: Particle
      particle2: Particle
      opacity: number = 0

      constructor(p1: Particle, p2: Particle) {
        this.particle1 = p1
        this.particle2 = p2
      }

      update() {
        const dx = this.particle1.x - this.particle2.x
        const dy = this.particle1.y - this.particle2.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Fade in/out based on distance
        if (distance < 120) {
          this.opacity = Math.max(0, (120 - distance) / 120 * 0.3)
        } else {
          this.opacity = 0
        }
      }

      draw() {
        if (!ctx || this.opacity === 0) return
        
        ctx.save()
        ctx.globalAlpha = this.opacity
        
        // Create gradient line
        const gradient = ctx.createLinearGradient(
          this.particle1.x, this.particle1.y,
          this.particle2.x, this.particle2.y
        )
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.1)')
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.2)')
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.1)')
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(this.particle1.x, this.particle1.y)
        ctx.lineTo(this.particle2.x, this.particle2.y)
        ctx.stroke()
        
        ctx.restore()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const connections: Connection[] = []
    const particleCount = Math.min(window.innerWidth * window.innerHeight / 15000, 80)

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Create connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        connections.push(new Connection(particles[i], particles[j]))
      }
    }

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return
      
      // Clear canvas with subtle fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
        
        // Mouse interaction - repel particles
        const dx = particle.x - mouseX
        const dy = particle.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.speedX += (dx / distance) * force * 0.01
          particle.speedY += (dy / distance) * force * 0.01
        }
      })

      // Update and draw connections
      connections.forEach(connection => {
        connection.update()
        connection.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1e293b 50%, #0a0a0a 100%)'
      }}
    />
  )
}

export default AnimatedBackground 