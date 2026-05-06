import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  })

  const words = text.split(' ')

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap relative justify-center`}>
      {words.map((word, i) => {
        const startIdx = words.slice(0, i).join(' ').length + (i > 0 ? 1 : 0)
        return (
          <span key={i} className="relative mr-[0.25em] mb-[0.25em]">
            {word.split('').map((char, j) => {
              const charIdx = startIdx + j
              const start = charIdx / text.length
              const end = start + 0.1
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
              return (
                <span key={j} className="relative inline-block">
                  <span className="invisible">{char}</span>
                  <motion.span style={{ opacity }} className="absolute left-0 top-0">
                    {char}
                  </motion.span>
                </span>
              )
            })}
          </span>
        )
      })}
    </p>
  )
}
