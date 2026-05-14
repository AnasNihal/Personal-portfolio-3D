import React from 'react'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z" />
  </svg>
)

export default function Contact() {
  return (
    <div id="contact" className="bg-[#0C0C0C] bg-grid-pattern min-h-screen w-full flex flex-col pt-32 relative z-50 overflow-hidden border-t border-[#D7E2EA]/10">
      
      <div className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-6 md:px-10 pb-20 relative z-10">
        
        {/* Massive header */}
        <FadeIn y={40} className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end w-full">
          <h1 className="font-black uppercase text-[clamp(4rem,15vw,200px)] leading-[0.8] text-[#D7E2EA] tracking-tighter">
            SAY<br/>HELLO
          </h1>
          <div className="w-16 h-16 md:w-24 md:h-24 text-[#8A2BE2] mb-4 md:mb-8 animate-pulse">
            <PlusIcon />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 w-full auto-rows-auto mb-20">
          
          {/* Main Contact Form Block */}
          <FadeIn delay={0.1} y={30} className="col-span-1 lg:col-span-2 bento-card bg-[#1a1a1a] p-8 md:p-12 flex flex-col justify-between">
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">Send a Message</h3>
            <form className="flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <input type="text" placeholder="Your Name" className="bg-[#0C0C0C] border border-[#D7E2EA]/10 rounded-2xl px-6 py-5 text-[#D7E2EA] font-medium outline-none focus:border-[#D7E2EA]/40 transition-colors w-full" />
                <input type="email" placeholder="Your Email" className="bg-[#0C0C0C] border border-[#D7E2EA]/10 rounded-2xl px-6 py-5 text-[#D7E2EA] font-medium outline-none focus:border-[#D7E2EA]/40 transition-colors w-full" />
              </div>
              <input type="text" placeholder="Subject" className="bg-[#0C0C0C] border border-[#D7E2EA]/10 rounded-2xl px-6 py-5 text-[#D7E2EA] font-medium outline-none focus:border-[#D7E2EA]/40 transition-colors w-full" />
              <textarea placeholder="How can we help you?" rows={4} className="bg-[#0C0C0C] border border-[#D7E2EA]/10 rounded-2xl px-6 py-5 text-[#D7E2EA] font-medium outline-none focus:border-[#D7E2EA]/40 transition-colors w-full resize-none" />
              
              <div className="mt-4">
                <ContactButton>Submit Request</ContactButton>
              </div>
            </form>
          </FadeIn>

          {/* Contact Info Blocks */}
          <div className="col-span-1 grid grid-rows-3 gap-4 md:gap-6">
            
            <FadeIn delay={0.2} y={30} className="bento-card bg-[#FFD700] p-8 flex flex-col justify-between text-[#0C0C0C] group cursor-pointer hover:bg-white transition-colors">
              <div className="flex justify-between items-start">
                <Mail className="w-8 h-8" />
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <span className="uppercase tracking-widest text-sm font-bold opacity-80 block mb-1">Email Us</span>
                <span className="font-black text-2xl tracking-tight">hello@agency.com</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} y={30} className="bento-card bg-[#1E90FF] p-8 flex flex-col justify-between text-[#0C0C0C] group cursor-pointer hover:bg-white transition-colors">
              <div className="flex justify-between items-start">
                <Phone className="w-8 h-8" />
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <span className="uppercase tracking-widest text-sm font-bold opacity-80 block mb-1">Call Us</span>
                <span className="font-black text-2xl tracking-tight">+1 (555) 000-0000</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} y={30} className="bento-card bg-[#00FA9A] p-8 flex flex-col justify-between text-[#0C0C0C] group">
              <div className="flex justify-between items-start">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <span className="uppercase tracking-widest text-sm font-bold opacity-80 block mb-1">Visit Us</span>
                <span className="font-black text-2xl tracking-tight">New York, NY</span>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Footer */}
        <div className="w-full flex flex-col gap-10 pt-10 mt-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((social) => (
              <a key={social} href="#" className="bento-card bg-[#1a1a1a] px-8 py-4 uppercase tracking-widest text-[#D7E2EA]/70 hover:text-white text-sm transition-colors font-bold flex items-center gap-2">
                {social} <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="flex justify-center items-center text-[#D7E2EA]/40 text-sm mt-8">
            <span>© {new Date().getFullYear()} PRO CREATIVE. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
