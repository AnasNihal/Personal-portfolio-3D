import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'

const IMG_PLACEHOLDER = "/anas-3d.png"

export default function Contact() {
  return (
    <div id="contact" className="bg-[#0C0C0C] min-h-screen w-full flex flex-col pt-32 relative z-50 overflow-hidden">
      
      {/* Decorative corners */}
      <FadeIn delay={0.1} x={-80} y={0} className="absolute top-20 left-10 hidden md:block opacity-30">
        <img src={IMG_PLACEHOLDER} alt="Moon" className="w-32 object-contain" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} className="absolute top-20 right-10 hidden md:block opacity-30">
        <img src={IMG_PLACEHOLDER} alt="Lego" className="w-24 object-contain" />
      </FadeIn>

      <div className="flex-1 flex flex-col items-center px-6 md:px-10 pb-20 w-full max-w-6xl mx-auto relative z-10">
        <FadeIn y={40} className="mb-12">
          <h1 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none text-center">
            Let's Talk
          </h1>
        </FadeIn>

        <div className="mb-20 w-full flex justify-center">
          <AnimatedText 
            text="Tell us about your project, your brand, or your vision. We'll take it from there and build something extraordinary." 
            className="text-[#D7E2EA] font-medium text-center max-w-[600px] text-[clamp(1rem,2vw,1.35rem)] leading-relaxed"
          />
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">
          {[
            { icon: <Mail className="w-8 h-8 mb-4 text-[#D7E2EA]" />, label: "Email", value: "hello@agency.com" },
            { icon: <Phone className="w-8 h-8 mb-4 text-[#D7E2EA]" />, label: "Phone", value: "+1 (555) 000-0000" },
            { icon: <MapPin className="w-8 h-8 mb-4 text-[#D7E2EA]" />, label: "Location", value: "New York, NY" }
          ].map((item, i) => (
            <FadeIn key={item.label} delay={0.2 + (i * 0.1)} y={30} className="w-full">
              <div className="bg-[#1a1a1a] border border-[#D7E2EA]/20 rounded-[30px] p-8 flex flex-col items-center text-center hover:bg-[#222] transition-colors h-full">
                {item.icon}
                <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-sm mb-2">{item.label}</span>
                <span className="text-[#D7E2EA] font-medium text-lg">{item.value}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Contact Form */}
        <FadeIn delay={0.5} y={30} className="w-full max-w-3xl mb-32">
          <form className="flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <input type="text" placeholder="Name" className="bg-transparent border-b border-[#D7E2EA]/30 focus:border-[#D7E2EA] text-[#D7E2EA] font-light py-4 w-full outline-none transition-colors" />
              <input type="email" placeholder="Email" className="bg-transparent border-b border-[#D7E2EA]/30 focus:border-[#D7E2EA] text-[#D7E2EA] font-light py-4 w-full outline-none transition-colors" />
            </div>
            <input type="text" placeholder="Company" className="bg-transparent border-b border-[#D7E2EA]/30 focus:border-[#D7E2EA] text-[#D7E2EA] font-light py-4 w-full outline-none transition-colors" />
            <textarea placeholder="Message" rows={4} className="bg-transparent border-b border-[#D7E2EA]/30 focus:border-[#D7E2EA] text-[#D7E2EA] font-light py-4 w-full outline-none transition-colors resize-none mb-8" />
            
            <div className="flex justify-center">
              <ContactButton>Send Message</ContactButton>
            </div>
          </form>
        </FadeIn>

        {/* Footer */}
        <div className="w-full flex flex-col gap-10 border-t border-[#D7E2EA]/10 pt-10">
          <div className="flex justify-center gap-8">
            <a href="#" className="uppercase tracking-widest text-[#D7E2EA]/50 hover:text-[#D7E2EA] text-sm transition-colors">Instagram</a>
            <a href="#" className="uppercase tracking-widest text-[#D7E2EA]/50 hover:text-[#D7E2EA] text-sm transition-colors">LinkedIn</a>
            <a href="#" className="uppercase tracking-widest text-[#D7E2EA]/50 hover:text-[#D7E2EA] text-sm transition-colors">Behance</a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[#D7E2EA]/40 text-sm gap-4">
            <span>[AGENCY NAME]</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
