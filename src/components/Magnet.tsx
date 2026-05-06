import React, { useRef, useState, useEffect } from 'react'

interface MagnetProps {
  children: React.ReactNode
  padding?: number
  strength?: number
  className?: string
}

export default function Magnet({ children, padding = 150, strength = 3, className = '' }: MagnetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      
      const distance = Math.sqrt(distX * distX + distY * distY)
      
      if (distance < padding) {
        setIsHovered(true)
        setPosition({
          x: (distX / padding) * (width / strength),
          y: (distY / padding) * (height / strength)
        })
      } else {
        setIsHovered(false)
        setPosition({ x: 0, y: 0 })
      }
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      setPosition({ x: 0, y: 0 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [padding, strength])

  return (
    <div ref={containerRef} className={`${className} relative`}>
      <div
        className="will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isHovered ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        }}
      >
        {children}
      </div>
    </div>
  )
}
