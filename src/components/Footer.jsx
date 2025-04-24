import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer  className="bg-[#d33834] text-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo y descripción */}
        <div className="text-center md:text-left text-xs">
          <h1 className="text-2xl font-bold font-[Poppins]">Sistema Muebles</h1>
          <p className="mt-4 text-white">
            Muebles a medida con diseño, calidad y pasión. Transformamos tus
            espacios en lugares únicos.
          </p>
        </div>

        {/* Navegación */}
        <div className="text-center md:text-left font-[Poppins]">
          <h2 className="text-xl font-semibold mb-4">Navegación</h2>
          <ul className="space-y-2">
            <li><ScrollLink to="home" smooth={true} duration={500} offset={-70} className="hover:underline cursor-pointer !text-white font-[Poppins] ">Inicio</ScrollLink></li>
            <li><ScrollLink to="nosotros" smooth={true} duration={500} offset={-70} className="hover:underline cursor-pointer !text-white font-[Poppins] ">Nosotros</ScrollLink></li>
            <li><ScrollLink to="nuestros_clientes" smooth={true} duration={500} offset={-70} className="hover:underline cursor-pointer !text-white font-[Poppins] ">Nuestros Clientes</ScrollLink></li>
            
          </ul>
        </div>

        {/* Contacto */}
        <div className="text-center md:text-left font-[Poppins]">
          <h2 className="text-lg font-semibold mb-4">Contacto</h2>
          <ul className="space-y-3 text-white text-sm">
            {/*
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaPhoneAlt /> +56 9 1234 5678
            </li> */}
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaEnvelope /> contacto@sistemamuebles.cl
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaMapMarkerAlt /> Cerrillos , Santiago , Chile.
            </li>
          </ul>
        </div>

        {/* Horarios */}
        <div className="text-center md:text-left font-[Poppins]">
          <h2 className="text-lg font-semibold mb-4">Horarios</h2>
          <ul className="text-white text-sm space-y-2">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaClock /> Lunes a Viernes: 9:00 - 18:00
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaClock /> Sábados: Cerrado
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaClock /> Domingos: Cerrado
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-12 border-t border-white/30 pt-6 text-center text-white/80 text-sm font-[Poppins]">
        © {new Date().getFullYear()} Sistema Muebles. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
