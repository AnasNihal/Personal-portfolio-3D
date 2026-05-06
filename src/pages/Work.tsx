import React from 'react'
import FadeIn from '../components/FadeIn'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: "Digital Launch",
    category: "Web & App",
    number: "01",
    images: [
      "/anas-3d.png",
      "/anas-3d.png"
    ]
  },
  {
    title: "Brand Campaign",
    category: "Advertising",
    number: "02",
    images: [
      "/anas-3d.png",
      "/anas-3d.png"
    ]
  },
  {
    title: "Annual Gala",
    category: "Events",
    number: "03",
    images: [
      "/anas-3d.png",
      "/anas-3d.png"
    ]
  }
]

export default function Work() {
  return (
    <div id="work" className="bg-[#0C0C0C] min-h-screen rounded-t-[60px] -mt-14 relative z-20 pt-32 pb-40 px-6 md:px-10">
      <FadeIn y={40} className="mb-24 flex justify-center">
        <h1 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none text-center">
          Our Work
        </h1>
      </FadeIn>

      <div className="max-w-7xl mx-auto flex flex-col relative w-full">
        {projects.map((proj, i) => (
          <ProjectCard 
            key={proj.number}
            title={proj.title}
            category={proj.category}
            number={proj.number}
            index={i}
            totalCards={projects.length}
            images={proj.images}
          />
        ))}
      </div>
    </div>
  )
}
