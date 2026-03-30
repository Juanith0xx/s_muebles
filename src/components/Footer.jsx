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
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
    
    {/* Sistema Muebles a la izquierda */}
    <div className="text-center sm:text-left font-[Poppins] order-1 sm:order-1">
      <h1 className="text-3xl font-bold mb-2">Sistema Muebles</h1>
      <p className="text-white/90 leading-relaxed font-[Barlow]">
        Soluciones Constructivas Inteligentes.
      </p>
    </div>

    {/* Contacto al centro */}
    <div className="text-center font-[Poppins] order-2 sm:order-2">
      <h2 className="text-xl font-bold underline mb-3">Contacto</h2>
      <ul className="space-y-2 font-[Barlow] font-semibold">
        <li className="flex justify-center items-left gap-2">
          <FaEnvelope /> contacto@sistemamuebles.cl
        </li>
        <li className="flex justify-center items-center gap-2">
          <FaMapMarkerAlt /> La Pintana, Santiago, Chile
        </li>
      </ul>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://wa.me/56983031086" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="group">
          <FaWhatsapp className="text-2xl group-hover:text-green-500 group-hover:scale-135 transition-all duration-300" />
        </a>
        <a href="https://www.linkedin.com/company/sistemamuebles" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
          <FaLinkedin className="text-2xl group-hover:text-[#0a66c2] group-hover:scale-135 transition-all duration-300" />
        </a>
      </div>
    </div>

    {/* Horarios a la derecha */}
    <div className="text-center sm:text-right font-[Poppins] order-3 sm:order-3">
      <h2 className="text-xl font-bold text-center underline mb-3">Horarios</h2>
      <ul className="space-y-2 font-[Barlow] font-semibold">
        <li className="flex justify-center sm:justify-centar items-left gap-2">
          <FaClock /> Lunes a Viernes: 9:00 - 18:00
        </li>
        <li className="flex justify-center sm:justify-centar items-left gap-2">
          <FaClock /> Sábados: Cerrado
        </li>
        <li className="flex justify-center sm:justify-centar items-left gap-2">
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