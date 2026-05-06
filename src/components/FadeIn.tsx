import React from 'react'
import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  elementType?: keyof React.JSX.IntrinsicElements
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  elementType = 'div',
}: FadeInProps) {
  const MotionComponent = motion.create(elementType as any)

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "50px", amount: 0 }}
      variants={{
        hidden: { opacity: 0, x, y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { delay, duration, ease: [0.25, 0.1, 0.25, 1] }
        }
      }}
    >
      {children}
    </MotionComponent>
  )
}
