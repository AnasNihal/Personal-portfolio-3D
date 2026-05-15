import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 3.5 seconds total loading
    const duration = 3500
    const interval = 50
    let current = 0

    const timer = setInterval(() => {
      current += interval
      const rawProgress = (current / duration) * 100
      setProgress(Math.min(Math.round(rawProgress), 100))

      if (current >= duration) {
        clearInterval(timer)
        setTimeout(() => {
          onComplete()
        }, 300)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0C0C0C] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Character Walking Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center overflow-hidden rounded-full border border-[#D7E2EA]/10 shadow-[0_0_30px_rgba(215,226,234,0.05)]"
        >
          {/* Intro Video */}
          <video
            src="/video.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* LOADING text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#D7E2EA] font-sans font-medium tracking-[0.2em] uppercase text-lg md:text-xl">
            LOADING
          </span>
          <div className="w-32 h-[2px] bg-[#D7E2EA]/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#D7E2EA]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
