import { useRef } from 'react'
import LiveProjectButton from './LiveProjectButton'

interface ProjectCardProps {
  title: string
  category: string
  number: string
  index: number
  totalCards: number
  images: string[]
}

export default function ProjectCard({ title, category, number, index, totalCards, images }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // To do a real parallax scale based on the window scroll, we track the container.
  // But a simple static scale based on index + sticky positioning achieves the layered look nicely.
  const staticScale = 1 - (totalCards - 1 - index) * 0.03

  return (
    <div ref={containerRef} className="h-[85vh] w-full flex items-center justify-center sticky top-24 mb-24">
      <div 
        className="w-full h-full border-2 border-[#D7E2EA] rounded-[60px] p-8 bg-[#0C0C0C] flex flex-col gap-6"
        style={{ 
          transform: `scale(${staticScale})`,
          transformOrigin: 'top center'
        }}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4 text-[#D7E2EA] text-xl font-medium uppercase tracking-widest">
            <span>{number}</span>
            <span>—</span>
            <span>{category}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-[#D7E2EA] uppercase tracking-tight">{title}</h3>
          <LiveProjectButton />
        </div>
        
        <div className="flex-1 w-full flex gap-4 h-full overflow-hidden mt-4">
          <div className="w-[40%] h-full rounded-[40px] overflow-hidden bg-[#1a1a1a]">
            {images[0] && <img src={images[0]} alt={`${title} image 1`} className="w-full h-full object-cover" />}
          </div>
          <div className="w-[60%] h-full rounded-[40px] overflow-hidden bg-[#1a1a1a]">
            {images[1] && <img src={images[1]} alt={`${title} image 2`} className="w-full h-full object-cover" />}
          </div>
        </div>
      </div>
    </div>
  )
}
