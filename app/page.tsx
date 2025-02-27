import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Sustainability from "@/components/sustainability"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Sustainability />
      <Contact />
      <Footer />
    </main>
  )
}

