import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#d33834] text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo y descripción */}
        <div className="text-center sm:text-left text-sm">
          <h1 className="text-2xl font-bold font-[Montserrat] mb-2">Sistema Muebles</h1>
          <p className="text-white/90 leading-relaxed">
            Muebles a medida con diseño, calidad y pasión. Transformamos tus
            espacios en lugares únicos.
          </p>
        </div>

        {/* Navegación */}
        <div className="text-center sm:text-left font-[Montserrat] text-sm">
          <h2 className="text-xl font-semibold mb-3">Navegación</h2>
          <ul className="space-y-2">
            {["home", "nosotros", "nuestros_clientes"].map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth
                  duration={500}
                  offset={-70}
                  className="hover:underline cursor-pointer !text-white font-semibold"
                >
                  {section
                    .replace("_", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div className="text-center sm:text-left font-[Montserrat] text-sm">
          <h2 className="text-xl font-semibold mb-3">Contacto</h2>
          <ul className="space-y-2">
            <li className="flex justify-center sm:justify-start items-center gap-2 font-semibold">
              <FaEnvelope /> contacto@sistemamuebles.cl
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2 font-semibold">
              <FaMapMarkerAlt /> Cerrillos, Santiago, Chile
            </li>
          </ul>

          {/* Redes sociales */}
          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-white/80"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/company/sistemamuebles"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white/80"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Horarios */}
        <div className="text-center sm:text-left font-[Montserrat] text-sm">
          <h2 className="text-xl font-semibold mb-3">Horarios</h2>
          <ul className="space-y-2">
            <li className="flex justify-center sm:justify-start items-center gap-2 font-semibold">
              <FaClock /> Lunes a Viernes: 9:00 - 18:00
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2 font-semibold">
              <FaClock /> Sábados: Cerrado
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2 font-semibold">
              <FaClock /> Domingos: Cerrado
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs font-[Montserrat]">
        <p className="text-white/80 font-semibold">
          © {new Date().getFullYear()} Sistema Muebles. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
