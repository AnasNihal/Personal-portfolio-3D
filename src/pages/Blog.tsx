import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const posts = [
  {
    id: "CODE",
    title: "Mastering Canvas Animations",
    excerpt: "Deep dive into syncing scroll progress with HTML5 Canvas for high-fidelity web experiences.",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "AI",
    title: "Building AI Workflows",
    excerpt: "Integrating LLMs and prompt engineering within complex full-stack Next.js applications.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "SYSTEMS",
    title: "Real-Time Architecture",
    excerpt: "Scaling WebSocket connections and handling real-time data flow in production environments.",
    image: "https://images.unsplash.com/photo-1551703599-6b3e8379aa81?q=80&w=2026&auto=format&fit=crop"
  },
  {
    id: "HARDWARE",
    title: "Pushing Render Limits",
    excerpt: "Optimizing WebGL and React Three Fiber to prevent hardware throttling during intensive 3D scenes.",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2070&auto=format&fit=crop"
  }
]

const BlogCard = ({ post, index }: { post: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex flex-col group cursor-pointer w-full">
      {/* Category Code */}
      <div className="mb-4">
        <span className="font-mono text-[11px] text-[#FF5949] uppercase tracking-[0.1em]">
          {post.id}
        </span>
      </div>

      {/* Image with Clip Path Reveal */}
      <div className="w-full aspect-video overflow-hidden relative mb-6">
        <div 
          className={`w-full h-full clip-path-reveal ${isInView ? 'is-inview' : ''}`}
          style={{ transitionDelay: `${index * 80}ms` }}
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          />
        </div>
        
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-black/40 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center">
          <span className="text-white text-4xl font-light transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            →
          </span>
        </div>
      </div>

      {/* Title & Excerpt */}
      <div className="flex flex-col">
        <h3 className="text-white text-[20px] font-bold uppercase tracking-wide mb-2">
          {post.title}
        </h3>
        <p className="text-[#888888] text-[13px] font-light leading-[1.6]">
          {post.excerpt}
        </p>
      </div>
    </div>
  )
}

export default function Blog() {
  return (
    <div id="blog" className="bg-[#0A0A0A] w-full min-h-screen py-32 px-6 md:px-10 font-['Kanit'] relative z-20">
      <div className="max-w-[1440px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-start w-full">
          <span className="font-mono text-[#FF5949] text-[11px] tracking-[0.2em] uppercase mb-8">
            [ JOURNAL ]
          </span>
          <motion.h2 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[1.1] tracking-wide"
          >
            TECHNICAL INSIGHTS
          </motion.h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-16 w-full mb-20">
          {posts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full flex justify-start"
        >
          <a href="#" className="text-white text-[14px] font-light underline-slide w-fit uppercase tracking-widest flex items-center gap-2 hover:text-[#FF5949] transition-colors group">
            All posts <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

      </div>
    </div>
  )
}
