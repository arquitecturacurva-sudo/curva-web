import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1b] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Image
              src="/logos/curva-icono.png"
              alt="CURVA Arquitectura"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Arquitectura contemporánea definida por formas fluidas y diseño atemporal.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="nav-text text-sm mb-6">Navegación</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="nav-text text-sm mb-6">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Ciudad de México, México</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>contacto@curva.mx</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="nav-text text-sm mb-6">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CURVA Arquitectura. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-500 hover:text-white text-sm transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

