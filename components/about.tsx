"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Leaves */}
      <div className="absolute -left-10 top-20 opacity-20 rotate-45">
        <Image src="/leaf.png" alt="Leaf decoration" width={100} height={100} />
      </div>
      <div className="absolute right-10 bottom-20 opacity-20 -rotate-12">
        <Image src="/leaf.png" alt="Leaf decoration" width={80} height={80} />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Conócenos</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre cómo Lempiny Lemy está transformando la gestión del agua con soluciones innovadoras y sostenibles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3 scale-105"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/about-image.jpg"
                  alt="Sobre Lempiny Lemy"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                15+ años
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-emerald-800">Nuestra Historia</h3>
            <p className="text-gray-600">
              Fundada en 2008, Lempiny Lemy nació con la visión de revolucionar la forma en que gestionamos y
              conservamos el agua. Comenzamos como un pequeño equipo de ingenieros y ecologistas apasionados, y hoy
              somos líderes en soluciones hídricas sostenibles.
            </p>

            <h3 className="text-2xl font-bold text-emerald-800 pt-4">Nuestra Misión</h3>
            <p className="text-gray-600">
              Nuestra misión es proteger el recurso más valioso del planeta mediante tecnologías innovadoras y prácticas
              sostenibles que garanticen agua limpia para todos, ahora y en el futuro.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-blue-500 text-3xl font-bold mb-2">98%</div>
                <p className="text-gray-600">Eficiencia en nuestros sistemas de filtración</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-blue-500 text-3xl font-bold mb-2">500+</div>
                <p className="text-gray-600">Proyectos completados en todo el mundo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

