import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as RouterLink } from 'react-router-dom';     // para ruta a "/"
import { Link as ScrollLink } from 'react-scroll';         // para scroll interno



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 pr-8 text-black flex justify-between items-center w-full fixed top-0 left-0 z-50">
      {/* Logo: a la home real */}
      <RouterLink to="/">
        <img className="w-50 h-auto cursor-pointer" src="/img/Logo.jpg" alt="Logo" />
      </RouterLink>

      {/* Menú de escritorio */}
      <ul className="hidden md:flex gap-8 text-lg font-Popins pl-8">
        <li>
          <ScrollLink
            to="nosotros"
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:no-underline cursor-pointer !text-[#6a7282] font-[Poppins] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full"
          >
            Nosotros
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="nuestros_clientes"
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:no-underline cursor-pointer !text-[#6a7282] font-[Poppins] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full"
          >
            Nuestros Clientes
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="nuestra_fabrica"
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:no-underline cursor-pointer !text-[#6a7282] font-[Poppins] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full"
          >
            Nuestra Fábrica
          </ScrollLink>
        </li>

        {/* Submenú Proyectos con scroll a secciones */}
        <li className="relative group">
          <span className="hover:no-underline cursor-pointer !text-[#6a7282] font-[Poppins] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full">
            Proyectos <span className="ml-1">▾</span>
          </span>
          <ul className="absolute hidden group-hover:block bg-white  shadow-lg mt-2 rounded-md py-2 px-2 w-68 z-10">
            {[
              ['oficinas_corporativas','Oficinas Corporativas'],
              ['muebles_clinicos-hospitalarios','Muebles Clínicos - Hospitalarios'],
              ['puertas','Puertas'],
              ['revestimiento_fenolico','Revestimiento Fenólico'],
              ['marcos_telescopicos','Marcos Telescópicos']
            ].map(([id,label]) => (
              <li key={id}>
                <ScrollLink
                  to={id}
                  smooth
                  duration={500}
                  offset={-80}
                  className="block px-4 py-2 cursor-pointer !text-gray-500 rounded-md hover:bg-red-700 hover:!text-white"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </li>

        <li>
          {/* Si Servicios es una ruta distinta */}
          <RouterLink to="/servicios" className="hover:no-underline cursor-pointer !text-[#6a7282] font-[Poppins] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full">
            Servicios
          </RouterLink>
        </li>
      </ul>

      {/* Menú móvil */}
      <div className="md:hidden px-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-4 text-lg font-[Popins] p-4">
            <li>
              <ScrollLink to="nosotros" smooth duration offset={-80} className="hover:no-underline cursor-pointer !text-[#6a7282] font-[Poppins] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full">
                Nosotros
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="nuestros_clientes" smooth duration offset={-80} className="hover:no-underline cursor-pointer !text-[#6a7282] font-[Poppins] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full">
                Nuestros Clientes
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="nuestra_fabrica" smooth duration offset={-80} className="hover:no-underline cursor-pointer !text-[#6a7282] font-[Poppins] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full">
                Nuestra Fábrica
              </ScrollLink>
            </li>
            {/* Proyectos móvil */}
            <li>
              <span className="hover:no-underline cursor-pointer !text-[#6a7282] font-[Poppins] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full">Proyectos</span>
              <ul className="pl-4 mt-2 !text-gray-500">
                {['oficinas_corporativas','muebles_clinicos-hospitalarios','puertas','revestimiento_fenolico','marcos_telescopicos']
                  .map(id => (
                    <li key={id}>
                      <ScrollLink to={id} smooth duration offset={-80} className="block px-4 py-2 hover:bg-red-700 !text-gray-500 !font-[Poppins] hover:!text-white hover:font-semibold rounded-md">
                      { id.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase()) }

                      </ScrollLink>
                    </li>
                ))}
              </ul>
            </li>
            <li>
              <RouterLink 
               to="/servicios" 
               className="hover:no-underline cursor-pointer !text-[#6a7282] font-[Poppins] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full">
                Servicios
              </RouterLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;