import React from 'react'

interface ContactButtonProps {
  href?: string
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}

export default function ContactButton({ href, onClick, children = "Contact Us", className = '' }: ContactButtonProps) {
  const inner = (
    <span className="text-white uppercase tracking-widest font-medium text-sm md:text-base">
      {children}
    </span>
  )

  const classes = `inline-flex items-center justify-center px-8 py-4 rounded-full ${className}`
  const style = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181,1,167,0.25), 4px 4px 12px #7721B1 inset',
    outline: '2px solid #E3E3E3',
    outlineOffset: '-3px'
  }

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick()
    } else if (href) {
      e.preventDefault()
      // Extract target id from href (e.g. '/contact' -> 'contact')
      const targetId = href.replace('/', '').replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <button onClick={handleClick} className={classes} style={style}>
      {inner}
    </button>
  )
}
