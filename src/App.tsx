import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="main-wrapper w-full bg-[#0C0C0C] min-h-screen font-['Kanit']">
        <div className="relative z-[100]" style={{ opacity: loading ? 0 : 1, transition: 'opacity 1s ease' }}>
          <Navbar />
        </div>

        <motion.div 
          initial={false}
          animate={{
            y: loading ? 100 : 0,
            scale: loading ? 0.95 : 1,
            opacity: loading ? 0 : 1,
            filter: loading ? 'blur(10px)' : 'blur(0px)'
          }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="w-full origin-bottom"
          style={{ pointerEvents: loading ? 'none' : 'auto' }}
        >
          <Home />
          <Work />
          <About />
          <Contact />
          <Footer />
        </motion.div>
      </div>
      <CustomCursor />
    </>
  )
}

export default App
