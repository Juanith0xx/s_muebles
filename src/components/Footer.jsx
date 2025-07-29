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
    <footer className="bg-gray-600 text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-10">
        {/* Logo y descripción */}
        <div className="text-center sm:text-left text-sm">
          <h1 className="!text-3xl font-bold font-[Poppins] mb-2">Sistema Muebles</h1>
          <p className="text-white/90 leading-relaxed font-[Barlow]">
            Soluciones Constructivas Inteligentes.
          </p>
        </div>

        {/* Navegación 
        <div className="text-center sm:text-left font-[Poppins] text-sm">
          <h2 className="text-xl font-bold underline mb-3">Navegación</h2>
          <ul className="space-y-2">
            {["Inicio", "nosotros"].map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth
                  duration={500}
                  offset={-70}
                  className="hover:underline cursor-pointer !text-white font-semibold font-[Barlow]"
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
        <div className="text-center sm:text-left font-[Poppins] text-sm">
          <h2 className="text-xl font-bold underline mb-3">Contacto</h2>
          <ul className="space-y-2">
            <li className="flex justify-center sm:justify-start items-center gap-2 font-semibold font-[Barlow]">
              <FaEnvelope /> contacto@sistemamuebles.cl
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2 font-semibold font-[Barlow]">
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
              className="group transition-transform duration-300 "
            >
              <FaWhatsapp className="text-2xl text-white group-hover:text-green-500 group-hover:scale-135 transition-all duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/sistemamuebles"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group transition-transform duration-300 "
            >
              <FaLinkedin className="text-2xl text-white group-hover:text-[#0a66c2] group-hover:scale-135 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Horarios */}
        <div className="text-center sm:text-left font-[Poppins] text-sm">
          <h2 className="text-xl font-bold underline mb-3">Horarios</h2>
          <ul className="space-y-2">
            <li className="flex justify-center sm:justify-start items-center gap-2 font-semibold font-[Barlow]">
              <FaClock /> Lunes a Viernes: 9:00 - 18:00
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2 font-semibold font-[Barlow]">
              <FaClock /> Sábados: Cerrado
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2 font-semibold font-[Barlow]">
              <FaClock /> Domingos: Cerrado
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs font-[Poppins]">
        <p className="text-white/80 font-semibold">
          © {new Date().getFullYear()} Sistema Muebles. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;