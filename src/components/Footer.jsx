import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#d33834] text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo y descripción */}
        <div className="text-center md:text-left text-xs">
          <h1 className="text-2xl font-bold font-[Montserrat]">Sistema Muebles</h1>
          <p className="mt-4 text-white">
            Muebles a medida con diseño, calidad y pasión. Transformamos tus
            espacios en lugares únicos.
          </p>
        </div>

        {/* Navegación */}
        <div className="text-center md:text-left font-[Montserrat]">
          <h2 className="text-xl font-semibold mb-4">Navegación</h2>
          <ul className="space-y-2">
            <li><ScrollLink to="home" smooth={true} duration={500} offset={-70} className="hover:underline cursor-pointer !text-white font-[Montserrat] font-semibold">Inicio</ScrollLink></li>
            <li><ScrollLink to="nosotros" smooth={true} duration={500} offset={-70} className="hover:underline cursor-pointer !text-white font-[Montserrat] font-semibold">Nosotros</ScrollLink></li>
            <li><ScrollLink to="nuestros_clientes" smooth={true} duration={500} offset={-70} className="hover:underline cursor-pointer !text-white font-[Montserrat] font-semibold">Nuestros Clientes</ScrollLink></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="text-center md:text-left font-[Montserrat]">
          <h2 className="text-lg font-semibold mb-4">Contacto</h2>
          <ul className="space-y-3 text-white text-sm">
            <li className="flex justify-center md:justify-start items-center gap-2 font-semibold">
              <FaEnvelope /> contacto@sistemamuebles.cl
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2 font-semibold">
              <FaMapMarkerAlt /> Cerrillos , Santiago , Chile.
            </li>
          </ul>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-white/80"
            >
              <FaWhatsapp className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/company/sistemamuebles"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white/80"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Horarios */}
        <div className="text-center md:text-left font-[Montserrat]">
          <h2 className="text-lg font-semibold mb-4">Horarios</h2>
          <ul className="text-white text-sm space-y-2">
            <li className="flex justify-center md:justify-start items-center gap-2 font-semibold">
              <FaClock /> Lunes a Viernes: 9:00 - 18:00
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2 font-semibold">
              <FaClock /> Sábados: Cerrado
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2 font-semibold">
              <FaClock /> Domingos: Cerrado
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior sin íconos */}
      <div className="mt-12 border-t border-white/30 pt-6 text-center font-[Montserrat]">
        <p className="text-white/90 text-sm font-bold">
          © {new Date().getFullYear()} Sistema Muebles. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
