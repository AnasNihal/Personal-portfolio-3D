import React, { useEffect, useState } from 'react'
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
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Decorative details */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
        className="absolute top-8 left-8 text-[#D7E2EA]/50 text-xs font-mono uppercase tracking-widest hidden md:block"
      >
        SYS.INIT_01 <br/>
        LAT: 40.7128° N <br/>
        LNG: 74.0060° W
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
        className="absolute top-8 right-8 text-[#D7E2EA]/50 text-xs font-mono uppercase tracking-widest text-right hidden md:block"
      >
        CONNECTION: SECURE <br/>
        BANDWIDTH: OPTIMAL <br/>
        STATUS: ONLINE
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-8 text-[#D7E2EA] text-sm font-mono uppercase tracking-widest flex items-center gap-4"
      >
        <span className="w-2 h-2 rounded-full bg-[#D7E2EA] animate-pulse" />
        LOADING SEQUENCE ... {progress}%
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 right-8 text-[#D7E2EA]/50 text-sm font-mono uppercase tracking-widest hidden md:block"
      >
        [ AGENCY PORTFOLIO ]
      </motion.div>

      {/* Center Video */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[280px] sm:w-[400px] md:w-[500px] aspect-video relative"
      >
        <div className="absolute inset-0 border border-[#D7E2EA]/20 rounded-xl pointer-events-none z-10" />
        <video 
          src="/anas-vid.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover rounded-xl bg-[#1a1a1a]"
        />
      </motion.div>
    </motion.div>
  )
}
