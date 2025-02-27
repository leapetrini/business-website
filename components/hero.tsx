"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Header from "./header"
import { motion } from "framer-motion"

export default function Hero() {
  const leafRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) / 50
      const moveY = (clientY - window.innerHeight / 2) / 50

      leafRefs.current.forEach((leaf, index) => {
        if (leaf) {
          const factor = (index + 1) * 0.2
          leaf.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px) rotate(${moveX}deg)`
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-900"
    >
      <Header />

      {/* Decorative Leaves */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (leafRefs.current[i] = el)}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            opacity: 0.6 + Math.random() * 0.4,
            transform: `rotate(${Math.random() * 360}deg)`,
            zIndex: 1,
          }}
        >
          <Image src="/leaf.png" alt="Leaf decoration" width={40} height={40} className="w-auto h-auto" />
        </div>
      ))}

      {/* Wave Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full h-full">
          <path
            fill="#0099ff"
            fillOpacity="0.5"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg viewBox="0 0 1440 320" className="absolute top-0 left-0 w-full h-full">
          <path
            fill="#0099ff"
            fillOpacity="0.3"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-white mb-12 lg:mb-0">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Lempiny Lemy
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 text-blue-100 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Liderando el camino en soluciones sostenibles para el agua. Nuestra misión es preservar este recurso vital y
            garantizar un futuro más limpio y saludable para las generaciones venideras.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors shadow-lg">
              LEARN MORE
            </button>
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <div className="w-6 h-6 rounded-full bg-blue-400"></div>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <div className="w-6 h-6 rounded-full bg-blue-400"></div>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <div className="w-6 h-6 rounded-full bg-blue-400"></div>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <Image src="/water-drop.png" alt="Water Drop Logo" width={400} height={400} className="relative z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

