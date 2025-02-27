"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Droplets, Factory, Shield, BarChart3 } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Droplets className="w-12 h-12 text-blue-500" />,
      title: "Gestión del Agua",
      description:
        "Soluciones integrales para la gestión eficiente y sostenible de recursos hídricos en entornos urbanos e industriales.",
    },
    {
      icon: <Factory className="w-12 h-12 text-blue-500" />,
      title: "Sistemas de Purificación",
      description:
        "Tecnología avanzada de filtración y purificación que garantiza agua limpia y segura para consumo y uso industrial.",
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Protección de Ecosistemas",
      description:
        "Programas de conservación y restauración de ecosistemas acuáticos para preservar la biodiversidad y los recursos naturales.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-500" />,
      title: "Consultoría Corporativa",
      description:
        "Asesoramiento especializado para empresas que buscan optimizar su consumo de agua y reducir su huella hídrica.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-blue-900 to-emerald-900 text-white relative overflow-hidden"
    >
      {/* Wave Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg viewBox="0 0 1440 320" className="absolute top-0 left-0 w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,170.7C960,160,1056,160,1152,176C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluciones Corporativas</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Ofrecemos un conjunto completo de servicios diseñados para optimizar la gestión del agua en su organización
            y contribuir a un futuro más sostenible.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10 group"
            >
              <div className="bg-gradient-to-br from-blue-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-blue-100">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <button className="bg-white text-emerald-900 hover:bg-blue-100 px-8 py-3 rounded-full font-medium transition-colors shadow-lg">
            Ver Todos los Servicios
          </button>
        </motion.div>
      </div>
    </section>
  )
}

