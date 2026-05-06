import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Work', id: 'work' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    links.forEach((link) => {
      const element = document.getElementById(link.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 pt-6 md:pt-8 flex justify-center items-center mix-blend-difference pointer-events-none">
      <div className="flex justify-center gap-6 md:gap-12 pointer-events-auto">
        {links.map((link) => {
          const isActive = activeSection === link.id
          return (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`font-sans uppercase tracking-[0.15em] text-xs md:text-sm lg:text-[0.9rem] transition-colors duration-300 ${
                isActive ? 'text-white font-medium' : 'text-white/60 hover:text-white font-light'
              }`}
            >
              {link.name}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
