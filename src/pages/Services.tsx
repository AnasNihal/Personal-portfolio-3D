import React from 'react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

const services = [
  {
    num: "01",
    name: "Web & App Development",
    desc: "Business websites, e-commerce platforms, landing pages, and UI/UX design. We build digital products that perform and impress."
  },
  {
    num: "02",
    name: "Advertising & Media Buying",
    desc: "TV, radio, outdoor, and online advertising. Media planning and strategy that reaches the right audience at the right time."
  },
  {
    num: "03",
    name: "Event Production & Management",
    desc: "Corporate events, exhibitions, trade shows, stage design, and event branding. We create experiences people remember."
  },
  {
    num: "04",
    name: "Media Consultancy",
    desc: "Brand strategy, marketing strategy, content planning, and media training. We align your vision with results."
  }
]

export default function Services() {
  return (
    <div id="services" className="bg-[#FFFFFF] text-[#0C0C0C] min-h-screen rounded-t-[60px] -mt-14 relative z-20 pt-32 pb-20 px-6 md:px-10">
      <FadeIn y={40}>
        <h1 className="font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none text-center mb-28 text-[#0C0C0C]">
          Services
        </h1>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col w-full">
        {services.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1} y={30} className="w-full">
            <div className="flex flex-col md:flex-row md:items-center py-12 border-b border-[#0C0C0C]/15 w-full gap-6 md:gap-16">
              <div className="text-[clamp(3rem,10vw,140px)] font-black leading-none shrink-0 md:w-32 text-[#0C0C0C]">
                {s.num}
              </div>
              <div className="flex flex-col gap-3 flex-1 pt-2">
                <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-tight text-[#0C0C0C]">
                  {s.name}
                </h3>
                <p className="font-light opacity-60 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C]">
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-32 flex flex-col items-center justify-center text-center gap-8">
        <FadeIn y={30}>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-[#0C0C0C]">Let's Work Together</h2>
        </FadeIn>
        <FadeIn delay={0.1} y={30}>
          <p className="font-light opacity-60 text-lg md:text-xl max-w-lg mb-8 text-[#0C0C0C]">
            Ready to start your next big project? Get in touch with us today.
          </p>
          <ContactButton href="/contact" />
        </FadeIn>
      </div>
    </div>
  )
}
