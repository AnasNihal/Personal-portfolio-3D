import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

const Magic3D = () => {
  return (
    <div className="w-[280px] sm:w-[400px] md:w-[500px] aspect-square md:aspect-video relative flex items-center justify-center [perspective:1000px]">
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-48 h-48 sm:w-64 sm:h-64 [transform-style:preserve-3d]"
      >
        {/* Core glowing orb */}
        <div className="absolute inset-[35%] bg-[#D7E2EA] rounded-full blur-[15px] animate-pulse" style={{ transform: "translateZ(0px)" }} />
        <div className="absolute inset-[42%] bg-white rounded-full blur-[5px]" style={{ transform: "translateZ(0px)" }} />

        {/* 3D Rings */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-[1px] sm:border-[2px] border-[#D7E2EA]/30 rounded-full"
            style={{
              boxShadow: "0 0 20px rgba(215, 226, 234, 0.15), inset 0 0 20px rgba(215, 226, 234, 0.15)",
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Orbiting particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-[#D7E2EA] rounded-full blur-[1px]"
            initial={{
              x: "50%",
              y: "50%",
              z: 0,
            }}
            animate={{
              x: ["50%", `${50 + (Math.random() * 120 - 60)}%`, "50%"],
              y: ["50%", `${50 + (Math.random() * 120 - 60)}%`, "50%"],
              z: [0, Math.random() * 300 - 150, 0],
              opacity: [0, 1, 0],
              scale: [0, Math.random() + 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
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

      {/* Center 3D Magic */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <Magic3D />
      </motion.div>
    </motion.div>
  )
}
