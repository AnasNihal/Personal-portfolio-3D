import React from 'react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import { motion } from 'framer-motion'

const services = [
  {
    num: "01",
    name: "Web & App",
    desc: "Business websites, e-commerce platforms, landing pages, and UI/UX design.",
    color: "bg-[#0C0C0C]", // Dark
    textColor: "text-[#D7E2EA]",
    accent: "text-[#8A2BE2]", // Purple
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    num: "02",
    name: "Media Buying",
    desc: "TV, radio, outdoor, and online advertising.",
    color: "bg-[#1E90FF]", // Blue
    textColor: "text-[#0C0C0C]",
    accent: "text-white",
    span: "col-span-1",
  },
  {
    num: "03",
    name: "Event Prod.",
    desc: "Corporate events, exhibitions, and stage design.",
    color: "bg-[#FF4500]", // Orange
    textColor: "text-[#0C0C0C]",
    accent: "text-white",
    span: "col-span-1",
  },
  {
    num: "04",
    name: "Consultancy",
    desc: "Brand strategy, marketing, and media training.",
    color: "bg-[#0C0C0C]", // Dark
    textColor: "text-[#D7E2EA]",
    accent: "text-[#00FA9A]", // Green
    span: "col-span-1 md:col-span-2",
  }
]

// Geometric SVG
const AbstractShape = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full opacity-20">
    <path d="M50 0L100 50L50 100L0 50Z" />
  </svg>
)

export default function Services() {
  return (
    <div id="services" className="bg-[#0C0C0C] bg-grid-pattern min-h-screen relative z-20 pt-32 pb-20 px-6 md:px-10 overflow-hidden border-t border-[#D7E2EA]/10">
      
      {/* Huge Header */}
      <FadeIn y={40} className="mb-16 flex flex-col items-center">
        <h1 className="font-black uppercase text-[clamp(4rem,15vw,200px)] leading-[0.85] text-[#D7E2EA] tracking-tighter text-center">
          WHAT WE DO
        </h1>
        <div className="mt-8 bg-[#D7E2EA] text-[#0C0C0C] px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm">
          Services
        </div>
      </FadeIn>

      <div className="max-w-7xl mx-auto flex flex-col w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 w-full auto-rows-[250px]">
          
          {/* Main Service */}
          <FadeIn delay={0.1} y={30} className="col-span-1 md:col-span-2 row-span-2 bento-card bg-[#1a1a1a] p-10 flex flex-col justify-between group overflow-hidden">
            <div className="flex justify-between items-start z-10">
              <span className="text-6xl md:text-8xl font-black text-[#8A2BE2]">01</span>
              <div className="w-16 h-16 text-[#8A2BE2] animate-spin-slow">
                <AbstractShape />
              </div>
            </div>
            <div className="z-10 mt-auto">
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 leading-none">Web & App<br/>Design</h3>
              <p className="text-[#D7E2EA]/70 text-lg md:text-xl font-light max-w-sm">
                Business websites, e-commerce platforms, landing pages, and complete UI/UX design systems.
              </p>
            </div>
            {/* Glossy gradient orb */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#8A2BE2]/30 blur-[60px] rounded-full pointer-events-none" />
          </FadeIn>

          {/* Service 2 */}
          <FadeIn delay={0.2} y={30} className="bento-card bg-[#1E90FF] p-8 flex flex-col justify-between group text-[#0C0C0C]">
            <span className="text-5xl font-black text-white">02</span>
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-2 leading-tight">Media<br/>Buying</h3>
              <p className="font-medium opacity-80 text-sm">TV, radio, outdoor, and online advertising campaigns.</p>
            </div>
          </FadeIn>

          {/* Service 3 */}
          <FadeIn delay={0.3} y={30} className="bento-card bg-[#FF4500] p-8 flex flex-col justify-between group text-[#0C0C0C]">
            <span className="text-5xl font-black text-white">03</span>
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-2 leading-tight">Event<br/>Prod.</h3>
              <p className="font-medium opacity-80 text-sm">Corporate events, exhibitions, and stage design.</p>
            </div>
          </FadeIn>

          {/* Decorative Block */}
          <FadeIn delay={0.4} y={30} className="col-span-1 md:col-span-2 bento-card bg-[#00FA9A] p-10 flex items-center justify-center text-[#0C0C0C] relative overflow-hidden group">
            <h3 className="text-[clamp(3rem,6vw,5rem)] font-black uppercase tracking-tighter leading-none text-center">
              We Build<br/>Reality
            </h3>
            {/* Grid pattern overlay for this specific block */}
            <div className="absolute inset-0 bg-[#0C0C0C]/5 pattern-dots pointer-events-none" />
          </FadeIn>

          {/* Service 4 */}
          <FadeIn delay={0.5} y={30} className="col-span-1 md:col-span-2 bento-card bg-[#1a1a1a] p-10 flex flex-col md:flex-row justify-between items-start md:items-end group">
            <div className="flex flex-col h-full justify-between mb-6 md:mb-0">
              <span className="text-6xl font-black text-[#00FA9A] mb-auto">04</span>
              <div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-2">Consultancy</h3>
                <p className="text-[#D7E2EA]/70 text-lg font-light max-w-sm">Brand strategy, marketing, and media training.</p>
              </div>
            </div>
            <motion.div 
              className="w-20 h-20 text-[#00FA9A] hidden md:block"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <AbstractShape />
            </motion.div>
          </FadeIn>

        </div>
      </div>

      <div className="mt-32 flex flex-col items-center justify-center text-center gap-8 relative z-10">
        <FadeIn y={30}>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black uppercase text-[#D7E2EA] tracking-tight">Let's Work Together</h2>
        </FadeIn>
        <FadeIn delay={0.1} y={30}>
          <ContactButton href="/contact" />
        </FadeIn>
      </div>
    </div>
  )
}
