"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Leaf, Droplet, Recycle } from "lucide-react"

export default function Sustainability() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: "Compromiso Ambiental",
      description:
        "Nuestras soluciones están diseñadas para minimizar el impacto ambiental y preservar los ecosistemas acuáticos.",
    },
    {
      icon: <Droplet className="w-6 h-6 text-blue-600" />,
      title: "Ahorro de Agua",
      description:
        "Tecnologías que permiten reducir el consumo de agua hasta en un 40% en procesos industriales y domésticos.",
    },
    {
      icon: <Recycle className="w-6 h-6 text-emerald-600" />,
      title: "Economía Circular",
      description: "Implementamos sistemas de reutilización que transforman el agua residual en un recurso valioso.",
    },
  ]

  return (
    <section
      id="sustainability"
      className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-900 to-emerald-900 opacity-10 transform -skew-y-2"></div>
      <div className="absolute -right-20 top-40 opacity-10">
        <Image src="/leaf.png" alt="Leaf decoration" width={200} height={200} className="rotate-45" />
      </div>
      <div className="absolute left-10 bottom-20 opacity-10 -rotate-12">
        <Image src="/leaf.png" alt="Leaf decoration" width={150} height={150} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">Compromiso Legal y Sostenible</h2>
            <p className="text-gray-600 mb-8">
              En Lempiny Lemy, la sostenibilidad no es solo una palabra de moda, es el núcleo de todo lo que hacemos.
              Nuestro compromiso con el medio ambiente y el cumplimiento de todas las normativas legales nos distingue
              como líderes en la industria del agua.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-white p-3 rounded-full shadow-md">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-emerald-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-shadow">
                Conoce Nuestras Políticas
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg transform -rotate-3 scale-105"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/sustainability.jpg"
                  alt="Sostenibilidad"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                100%
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

