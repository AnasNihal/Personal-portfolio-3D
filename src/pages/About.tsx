import FadeIn from '../components/FadeIn'
const PillShape = () => (
  <svg viewBox="0 0 100 40" fill="currentColor" className="w-full h-full">
    <rect width="100" height="40" rx="20" />
  </svg>
)

export default function About() {
  return (
    <div id="about" className="bg-[#0C0C0C] bg-grid-pattern min-h-screen relative z-20 pt-32 pb-32 px-6 md:px-10 overflow-hidden border-t border-[#D7E2EA]/10">
      <div className="max-w-7xl mx-auto flex flex-col w-full relative">
        
        {/* Massive overlapping header */}
        <FadeIn y={40} className="mb-16 flex flex-col md:flex-row items-center md:items-end justify-between">
          <div className="flex flex-col">
            <h1 className="font-black uppercase text-[clamp(4rem,15vw,200px)] leading-[0.8] text-[#D7E2EA] tracking-tighter">
              I AM
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="w-24 md:w-48 text-[#FF4500]">
                <PillShape />
              </div>
              <h1 className="font-black uppercase text-[clamp(4rem,15vw,200px)] leading-[0.8] text-[#D7E2EA] tracking-tighter">
                ANAS
              </h1>
            </div>
          </div>
          

        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full auto-rows-[auto]">
          
          {/* Main text block */}
          <FadeIn delay={0.1} y={30} className="col-span-1 md:col-span-2 bento-card bg-[#1a1a1a] p-8 md:p-12 flex flex-col justify-center text-[#D7E2EA]">
            <p className="font-medium text-[clamp(1.2rem,2.5vw,2rem)] leading-snug tracking-tight">
              I am a passionate 3D artist and creative developer based in the digital realm. I specialize in crafting immersive, interactive 3D experiences for the web.
              <br/><br/>
              With a deep love for modeling, rendering, and coding, I turn bold imaginations into stunning realities. Let's create some magic together.
            </p>
          </FadeIn>

          {/* Stats blocks */}
          <div className="col-span-1 grid grid-rows-2 gap-4 md:gap-6">
            <FadeIn delay={0.2} y={30} className="bento-card bg-[#8A2BE2] p-8 flex flex-col items-center justify-center text-white text-center">
              <h3 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-2">5+</h3>
              <span className="uppercase tracking-widest text-sm font-bold opacity-80">Years Coding</span>
            </FadeIn>
            
            <FadeIn delay={0.3} y={30} className="bento-card bg-[#00FA9A] p-8 flex flex-col items-center justify-center text-[#0C0C0C] text-center">
              <h3 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-2">∞</h3>
              <span className="uppercase tracking-widest text-sm font-bold opacity-80">Coffee Drunk</span>
            </FadeIn>
          </div>



        </div>
      </div>
    </div>
  )
}
