import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const services = [
  {
    number: "01",
    title: "NOTHING PHONE (3) CONCEPT",
    description: "A high-fidelity scrollytelling concept utilizing Canvas and Framer Motion for deep architectural visualization.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "AI-POWERED PORTFOLIO",
    description: "A dark, brutalist web experience showcasing structural editorial design and smooth micro-interactions.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "ECO-CONNECT REALTIME",
    description: "A real-time communication platform built on WebSocket architecture, engineered for latency-free data flow.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2026&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "MATION SAAS PLATFORM",
    description: "An Instagram DM Automation SaaS featuring a complex, node-based automation builder and robust backend integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  }
]

export default function Work() {
  return (
    <div id="work" className="bg-white w-full min-h-screen py-32 px-6 md:px-10 font-['Kanit'] relative z-20 transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-start w-full">
          <span className="font-mono text-[#FF5949] text-[11px] tracking-[0.2em] uppercase mb-8">
            [ PROJECTS ]
          </span>
          <motion.h2 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-black text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[1.1] tracking-wide"
          >
            STRUCTURAL CODE <br />
            BUILT FOR SCALE
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col w-full">
          {services.map((service, index) => (
            <motion.div 
              key={service.number}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full relative group flex flex-col hover:bg-[#0A0A0A] transition-colors duration-500"
            >
              {/* Top border line slide in */}
              <motion.div 
                className="absolute top-0 left-0 h-[1px] bg-black/10 group-hover:bg-white/10 transition-colors duration-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: "easeInOut" }}
              />

              <div className="flex flex-col md:flex-row w-full py-12 md:py-16 px-4 md:px-8 items-start md:items-center">
                
                {/* Left Column (30%): Number & Title */}
                <div className="w-full md:w-[30%] flex flex-col mb-8 md:mb-0">
                  <span className="font-mono text-[64px] text-black opacity-10 group-hover:opacity-100 group-hover:text-[#FF5949] leading-none mb-4 block transition-all duration-500">
                    {service.number}
                  </span>
                  <h3 className="text-black group-hover:text-white text-[20px] font-bold uppercase tracking-wider transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Center Column (40%): Description & Link */}
                <div className="w-full md:w-[40%] flex flex-col pr-8 md:pr-16 mb-8 md:mb-0">
                  <p className="text-[#555555] group-hover:text-[#888888] text-[14px] font-light leading-[1.8] mb-6 max-w-sm transition-colors duration-500">
                    {service.description}
                  </p>
                  <a href="#" className="text-black group-hover:text-[#FF5949] text-[13px] font-light underline-slide w-fit uppercase tracking-widest flex items-center gap-2 transition-colors group/link duration-500">
                    View project <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                {/* Right Column (30%): Image */}
                <div className="w-full md:w-[30%] h-[300px] md:h-[400px] overflow-hidden relative">
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-[#FF5949] flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ArrowUpRight className="text-[#FF5949] w-8 h-8" />
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
          
          {/* Final Bottom Border */}
          <motion.div 
            className="w-full h-[1px] bg-black/10 mt-0"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
          />
        </div>

      </div>
    </div>
  )
}
