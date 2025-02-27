"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-r from-emerald-900/90 to-blue-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Lempiny Lemy Logo" width={40} height={40} className="mr-2" />
          <span className="text-white font-medium hidden sm:inline-block">LEMPINY</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("home")} className="text-white hover:text-blue-300 transition-colors">
            HOME
          </button>
          <button onClick={() => scrollToSection("about")} className="text-white hover:text-blue-300 transition-colors">
            KNOW US
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:text-blue-300 transition-colors"
          >
            CORPORATE
          </button>
          <button
            onClick={() => scrollToSection("sustainability")}
            className="text-white hover:text-blue-300 transition-colors"
          >
            LEGAL
          </button>
          <button onClick={() => scrollToSection("press")} className="text-white hover:text-blue-300 transition-colors">
            PRESS
          </button>
          <button
            onClick={() => scrollToSection("support")}
            className="text-white hover:text-blue-300 transition-colors"
          >
            SUPPORT
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors"
          >
            CONTACT
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-emerald-900 to-blue-900 absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-blue-300 transition-colors text-left py-2"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-blue-300 transition-colors text-left py-2"
            >
              KNOW US
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-blue-300 transition-colors text-left py-2"
            >
              CORPORATE
            </button>
            <button
              onClick={() => scrollToSection("sustainability")}
              className="text-white hover:text-blue-300 transition-colors text-left py-2"
            >
              LEGAL
            </button>
            <button
              onClick={() => scrollToSection("press")}
              className="text-white hover:text-blue-300 transition-colors text-left py-2"
            >
              PRESS
            </button>
            <button
              onClick={() => scrollToSection("support")}
              className="text-white hover:text-blue-300 transition-colors text-left py-2"
            >
              SUPPORT
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors w-full"
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

