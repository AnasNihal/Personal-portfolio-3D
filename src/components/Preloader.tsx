import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

const nameLetters = [
  { char: 'A', delay: 0.35 },
  { char: 'N', delay: 0.52 },
  { char: 'A', delay: 0.68 },
  { char: 'S', delay: 0.84 },
]

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isAssembled, setIsAssembled] = useState(false)

  useEffect(() => {
    // Total duration before onComplete is called
    const timer = window.setTimeout(() => {
      onComplete()
    }, 3500)

    // Track when letters settle to start floating
    const assemblyTimer = window.setTimeout(() => {
      setIsAssembled(true)
    }, 2200) // 0.84s + 1.35s duration approx

    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(assemblyTimer)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0C0C0C] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_30%,rgba(7,7,10,0.8)_100%)]" />

      {/* Main Container */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
        {/* Name Row */}
        <div className="flex items-end overflow-visible pb-2 relative">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={`${letter.char}-${i}`}
              initial={{ y: '120%', rotate: 4, opacity: 0 }}
              animate={isAssembled ? {
                y: [0, -12 - i * 2, 0],
                rotate: [0, 0.2, 0],
                opacity: 1,
              } : {
                y: 0,
                rotate: 0,
                opacity: 1,
              }}
              transition={isAssembled ? {
                y: { duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: (3.5 + i * 0.4) * 1.2, repeat: Infinity, ease: "easeInOut" }
              } : {
                delay: letter.delay,
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="font-bigshoulders font-black text-[clamp(80px,25vw,380px)] text-[#D7E2EA] inline-block tracking-[-0.04em] leading-[0.75] relative"
              style={{ textShadow: '0 0 150px rgba(255,89,73,0.15)' }}
            >
              {letter.char}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Minimal Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3], scaleY: [1, 1.2, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#FF5949] to-transparent"
        />
        <span className="font-cormorant text-[9px] tracking-[0.5em] uppercase text-[#D7E2EA]/30">Explore</span>
      </motion.div>
    </motion.div>
  )
}
