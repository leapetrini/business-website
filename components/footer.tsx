import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Lempiny Lemy Logo" width={40} height={40} />
              <span className="text-xl font-bold">LEMPINY LEMY</span>
            </div>
            <p className="text-blue-100">
              Soluciones innovadoras para la gestión sostenible del agua, protegiendo nuestro recurso más valioso para
              las generaciones futuras.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-blue-100 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-blue-100 hover:text-white transition-colors">
                  Conócenos
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-blue-100 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#sustainability" className="text-blue-100 hover:text-white transition-colors">
                  Sostenibilidad
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Gestión del Agua
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Sistemas de Purificación
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Protección de Ecosistemas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Consultoría Corporativa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                  Soluciones Industriales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Boletín Informativo</h3>
            <p className="text-blue-100 mb-4">
              Suscríbete para recibir noticias y actualizaciones sobre sostenibilidad hídrica.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">© 2025 Lempiny Lemy. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-blue-100 hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-blue-100 hover:text-white transition-colors">
              Términos de Servicio
            </Link>
            <Link href="#" className="text-blue-100 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

