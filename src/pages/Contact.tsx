import FadeIn from '../components/FadeIn'

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z" />
  </svg>
)

export default function Contact() {
  return (
    <div id="contact" className="bg-[#0C0C0C] bg-grid-pattern w-full flex flex-col pt-24 pb-12 relative z-50 overflow-hidden border-t border-[#D7E2EA]/10">

      <div className="flex flex-col w-full max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Massive header */}
        <FadeIn y={40} className="flex flex-col md:flex-row justify-between items-start md:items-end w-full">
          <h1 className="font-black uppercase text-[clamp(4rem,15vw,200px)] leading-[0.8] text-[#D7E2EA] tracking-tighter">
            SAY<br />HELLO
          </h1>
          <div className="w-16 h-16 md:w-24 md:h-24 text-[#8A2BE2] mb-4 md:mb-8 animate-pulse">
            <PlusIcon />
          </div>
        </FadeIn>

      </div>
    </div>
  )
}
