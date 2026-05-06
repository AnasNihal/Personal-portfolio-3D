import React from 'react'
import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const IMG_PLACEHOLDER = "/anas-3d.png"

export default function About() {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-32 relative z-40 bg-[#0C0C0C] overflow-hidden">
      
      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} x={-80} y={0} className="absolute top-20 left-10 hidden md:block opacity-30">
        <img src={IMG_PLACEHOLDER} alt="Moon" className="w-32 object-contain" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} className="absolute bottom-20 left-10 hidden md:block opacity-30">
        <img src={IMG_PLACEHOLDER} alt="Object" className="w-40 object-contain" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} className="absolute top-20 right-10 hidden md:block opacity-30">
        <img src={IMG_PLACEHOLDER} alt="Lego" className="w-24 object-contain" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} className="absolute bottom-20 right-10 hidden md:block opacity-30">
        <img src={IMG_PLACEHOLDER} alt="Group" className="w-36 object-contain" />
      </FadeIn>

      <FadeIn y={40} className="mb-16">
        <h1 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none text-center">
          About us
        </h1>
      </FadeIn>

      <div className="mb-24 w-full flex justify-center">
        <AnimatedText 
          text="We are a full-service creative agency specializing in digital experiences, brand strategy, advertising, and event production. With a passion for bold ideas and flawless execution, we help brands stand out and make a lasting impact. Let's create something remarkable together." 
          className="text-[#D7E2EA] font-medium text-center max-w-[600px] text-[clamp(1rem,2vw,1.35rem)] leading-relaxed"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-16 md:gap-32 mb-20">
        <FadeIn delay={0.2} y={30} className="flex flex-col items-center">
          <span className="hero-heading font-black text-6xl md:text-8xl mb-2">10+</span>
          <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm">Years Active</span>
        </FadeIn>
        <FadeIn delay={0.3} y={30} className="flex flex-col items-center">
          <span className="hero-heading font-black text-6xl md:text-8xl mb-2">250</span>
          <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm">Projects Done</span>
        </FadeIn>
        <FadeIn delay={0.4} y={30} className="flex flex-col items-center">
          <span className="hero-heading font-black text-6xl md:text-8xl mb-2">100%</span>
          <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm">Happy Clients</span>
        </FadeIn>
      </div>

      <FadeIn delay={0.5} y={30}>
        <ContactButton href="/contact" />
      </FadeIn>
    </div>
  )
}
