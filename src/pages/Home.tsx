import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import MarqueeSection from '../components/MarqueeSection'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // 'HELLO' moves left: maps from 0 to -400px
  const helloX = useTransform(scrollYProgress, [0, 1], [0, -400])
  
  // 'THERE' moves right: maps from 0 to 400px
  const thereX = useTransform(scrollYProgress, [0, 1], [0, 400])

  return (
    <div id="home" ref={containerRef} className="min-h-screen bg-[#0C0C0C] w-full flex flex-col relative overflow-hidden">
      {/* Hero Section */}
      <section className="h-[100dvh] w-full flex flex-col justify-center items-center relative z-10 overflow-hidden">
        
        {/* Big Background Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none mt-[-5vh]">
          <FadeIn delay={0.15} y={40} className="w-full text-center flex flex-col items-center overflow-visible">
            <motion.h1 
              style={{ x: helloX }}
              className="font-black uppercase tracking-tight whitespace-nowrap text-[24vw] sm:text-[22vw] md:text-[24vw] lg:text-[26vw] leading-[0.75] text-transparent bg-clip-text bg-gradient-to-b from-[#D22B2B] to-[#6A1212]"
            >
              HELLO
            </motion.h1>
            <motion.h1 
              style={{ x: thereX }}
              className="font-black uppercase tracking-tight whitespace-nowrap text-[24vw] sm:text-[22vw] md:text-[24vw] lg:text-[26vw] leading-[0.75] text-transparent bg-clip-text bg-gradient-to-b from-[#D22B2B] to-[#6A1212]"
            >
              THERE
            </motion.h1>
          </FadeIn>
        </div>

        {/* Center Portrait */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] z-10 pointer-events-none">
          <FadeIn delay={0.4} y={30}>
            <Magnet padding={150} strength={3} className="pointer-events-auto">
              <div className="w-[320px] sm:w-[420px] md:w-[550px] lg:w-[650px]">
                <img 
                  src="/anas-3d.png" 
                  alt="My 3D Portrait" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </Magnet>
          </FadeIn>
        </div>

      </section>

      {/* Marquee Section */}
      <MarqueeSection />
    </div>
  )
}
