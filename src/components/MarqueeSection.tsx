import { useEffect, useRef, useState } from 'react'

const imagesRow1 = [
  'hero-space-voyage-preview-eECLH3Yc.gif',
  'hero-codenest-preview-Cgppc2qV.gif',
  'hero-vex-ventures-preview-BczMFIiw.gif',
  'hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'hero-asme-preview-B_nGDnTP.gif',
  'hero-transform-data-preview-Cx5OU29N.gif',
  'hero-vitara-preview-Cjz2QYyU.gif',
  'hero-terra-preview-BFjrCr7T.gif',
  'hero-skyelite-preview-DHaZIgUv.gif',
  'hero-aethera-preview-DknSlcTa.gif',
  'hero-designpro-preview-D8c5_een.gif'
]

const imagesRow2 = [
  'hero-stellar-ai-preview-D3HL6bw1.gif',
  'hero-xportfolio-preview-D4A8maiC.gif',
  'hero-orbit-web3-preview-BXt4OttD.gif',
  'hero-nexora-preview-cx5HmUgo.gif',
  'hero-evr-ventures-preview-DZxeVFEX.gif',
  'hero-planet-orbit-preview-DWAP8Z1P.gif',
  'hero-new-era-preview-CocuDUm9.gif',
  'hero-wealth-preview-B70idl_u.gif',
  'hero-luminex-preview-CxOP7ce6.gif',
  'hero-celestia-preview-0yO3jXO8.gif'
]

const BASE_URL = 'https://motionsites.ai/assets/'

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.offsetTop
      const calcOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(calcOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#0C0C0C] overflow-hidden w-full flex flex-col gap-6">
      <div 
        className="flex gap-6 will-change-transform w-max"
        style={{ transform: `translate3d(${-1000 + offset}px, 0, 0)` }}
      >
        {[...imagesRow1, ...imagesRow1].map((img, i) => (
          <div key={i} className="w-[280px] sm:w-[340px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px] rounded-2xl overflow-hidden shrink-0 bg-[#1a1a1a]">
            <img src={`${BASE_URL}${img}`} alt="Project thumbnail" loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      
      <div 
        className="flex gap-6 will-change-transform w-max"
        style={{ transform: `translate3d(${-200 - offset}px, 0, 0)` }}
      >
        {[...imagesRow2, ...imagesRow2].map((img, i) => (
          <div key={i} className="w-[280px] sm:w-[340px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px] rounded-2xl overflow-hidden shrink-0 bg-[#1a1a1a]">
            <img src={`${BASE_URL}${img}`} alt="Project thumbnail" loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
