import React from 'react'
import FadeIn from '../components/FadeIn'
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Digital Launch",
    category: "Web & App",
    number: "01",
    color: "bg-[#8A2BE2]", // Purple
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Brand Campaign",
    category: "Advertising",
    number: "02",
    color: "bg-[#FF4500]", // Orange/Red
    span: "col-span-1",
  },
  {
    title: "Annual Gala",
    category: "Events",
    number: "03",
    color: "bg-[#00FA9A]", // Medium Spring Green
    span: "col-span-1",
    textDark: true,
  },
  {
    title: "Media Strategy",
    category: "Consulting",
    number: "04",
    color: "bg-[#1E90FF]", // Dodger Blue
    span: "col-span-1 md:col-span-2",
  }
]

// Geometric SVGs
const Star = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
)

const Bolt = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
  </svg>
)

export default function Work() {
  return (
    <div id="work" className="bg-[#0C0C0C] bg-grid-pattern min-h-screen relative z-20 pt-32 pb-40 px-6 md:px-10 overflow-hidden border-t border-[#D7E2EA]/10">
      <div className="max-w-7xl mx-auto flex flex-col relative w-full">
        
        {/* Massive Header */}
        <FadeIn y={40} className="mb-16 flex flex-col">
          <h1 className="font-black uppercase text-[clamp(4rem,15vw,200px)] leading-[0.8] text-[#D7E2EA] tracking-tighter">
            SELECTED
          </h1>
          <div className="flex items-center gap-4 md:gap-10">
            <motion.div 
              className="bg-[#FFD700] text-[#0C0C0C] rounded-full w-16 h-16 md:w-32 md:h-32 flex items-center justify-center shrink-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-8 h-8 md:w-16 md:h-16">
                <Star />
              </div>
            </motion.div>
            <h1 className="font-black uppercase text-[clamp(4rem,15vw,200px)] leading-[0.8] text-[#D7E2EA] tracking-tighter">
              WORK
            </h1>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full auto-rows-[250px]">
          
          {/* Main featured block */}
          <FadeIn delay={0.1} y={30} className="col-span-1 md:col-span-2 row-span-2 bento-card bg-[#1a1a1a] p-8 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div className="bg-[#D7E2EA] text-[#0C0C0C] text-sm font-bold uppercase px-4 py-2 rounded-full">
                Featured
              </div>
              <div className="w-12 h-12 text-[#FFD700]">
                <Star />
              </div>
            </div>
            <div>
              <h3 className="text-5xl font-black text-white uppercase tracking-tight mb-2">Digital Launch</h3>
              <p className="text-[#D7E2EA]/60 text-xl font-light">Web & App</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#8A2BE2]/20 blur-[50px] rounded-full mix-blend-screen pointer-events-none" />
          </FadeIn>

          {/* Abstract Shape Block 1 */}
          <FadeIn delay={0.2} y={30} className="bento-card bg-[#FF4500] p-8 flex items-center justify-center text-[#0C0C0C] relative overflow-hidden group">
            <motion.div 
              className="w-32 h-32"
              whileHover={{ scale: 1.1, rotate: 15 }}
            >
              <Bolt />
            </motion.div>
          </FadeIn>

          {/* Project Block */}
          <FadeIn delay={0.3} y={30} className="bento-card bg-[#1a1a1a] p-8 flex flex-col justify-between group">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">Brand Campaign</h3>
            <div className="flex justify-between items-end">
              <span className="text-[#D7E2EA]/60">Advertising</span>
              <span className="text-4xl font-black text-[#D7E2EA]/20">02</span>
            </div>
          </FadeIn>

          {/* Project Block with light background */}
          <FadeIn delay={0.4} y={30} className="bento-card bg-[#00FA9A] p-8 flex flex-col justify-between text-[#0C0C0C] group">
            <h3 className="text-3xl font-black uppercase tracking-tight">Annual Gala</h3>
            <div className="flex justify-between items-end">
              <span className="opacity-80 font-medium">Events</span>
              <span className="text-4xl font-black opacity-20">03</span>
            </div>
          </FadeIn>

          {/* Abstract Shape Block 2 */}
          <FadeIn delay={0.5} y={30} className="col-span-1 md:col-span-2 bento-card bg-[#1E90FF] p-8 flex items-center justify-center relative overflow-hidden group text-[#0C0C0C]">
             <div className="absolute inset-0 bg-[#0C0C0C]/10 pattern-dots" />
             <div className="relative z-10 text-center">
               <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Creative<br/>Studio</h3>
             </div>
          </FadeIn>

          {/* Project Block */}
          <FadeIn delay={0.6} y={30} className="bento-card bg-[#1a1a1a] p-8 flex flex-col justify-between group">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">Media Strategy</h3>
            <div className="flex justify-between items-end">
              <span className="text-[#D7E2EA]/60">Consulting</span>
              <span className="text-4xl font-black text-[#D7E2EA]/20">04</span>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  )
}
