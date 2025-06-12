import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);


  return (
    <nav className="bg-white p-4 pr-8 text-black flex justify-center items-center w-full fixed top-0 left-0 z-50">
      <RouterLink to="/">
        <img className="w-50 h-auto cursor-pointer" src="/img/Logo.jpg" alt="Logo" />
      </RouterLink>

      {/* Menú de escritorio */}
      <ul className="hidden md:flex gap-8 text-lg font-Popins pl-8">
        <li className="relative group">
      <span className="hover:no-underline cursor-pointer !text-gray-800 font-[Montserrat] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-800 hover:after:w-full">
          Nosotros <span className="ml-1">▾</span>
      </span>
      <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md py-2 px-2 w-52 z-10">
       {[
         ['/nosotros/equipo', 'Nuestro Equipo'],
         ['/nosotros/fabrica', 'Nuestra Fábrica'],
         ['/nosotros/servicios', 'Servicios'],
       ].map(([to, label]) => (
          <li key={to}>
        <RouterLink
          to={to}
          className="block px-4 py-2 cursor-pointer !text-gray-800 rounded-md hover:bg-red-700 hover:!text-white hover:font-medium hover:font-[Montserrat]"
        >
          {label}
        </RouterLink>
        </li>
           ))}
        </ul>
        </li>
        <li className="relative group">
  <span className="hover:no-underline cursor-pointer !text-grey-800 font-[Montserrat] hover:text-lg hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-800 hover:after:w-full">
    Productos <span className="ml-1">▾</span>
  </span>
  <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md py-2 px-2 w-72 z-10">
    {[
      ['/productos/proyectos_clinicos_hospitalarios', 'Proyectos Clinicos Hospitalarios'],
      ['/productos/puertas_hpl_marcos_telescopicos', 'Puertas HPL y Marcos Telescopicos'],
      ['/productos/proyectos_int_corporativos', 'Proyectos Int. Corporativos'],
      ['/productos/puertas_especiales','Puertas Especiales'],
      ['/productos/palillage_celocias_especiales','Palillages y Celocias Especiles'],
      ['/productos/mobiliario_a_medida','Mobiliario a Medida'],
      ['/productos/recepciones','Recepciones']
    ].map(([to, label]) => (
      <li key={to}>
        <RouterLink
          to={to}
          className="block px-4 py-2 cursor-pointer !text-gray-800 rounded-md hover:bg-red-700 hover:!text-white hover:font-medium hover:font-[Montserrat]"
        >
          {label}
        </RouterLink>
      </li>
       ))}
      </ul>
      </li>

        <li className="relative group">
        <span className="hover:no-underline cursor-pointer !text-grey-800 font-[Montserrat] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-800 hover:after:w-full">
         Alianzas <span className="ml-1">▾</span>
        </span>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md py-2 px-2 w-48 z-10 ">
         {[
            ['/alianzas/hafele', 'Hafele'],
            ['/alianzas/porcelanosa', 'Porcelanosa'],
            ['/alianzas/abet_laminati', 'Abet Laminati'],
            ['/alianzas/robfu', 'Robfu'],
            ['/alianzas/merino', 'Merino'],
            ['/alianzas/cabinarent', 'Cabinarent'],
         ].map(([to, label]) => (
        <li key={to}>
        <RouterLink
          to={to}
          className="block px-4 py-2 cursor-pointer !text-gray-800 rounded-md hover:bg-red-700 hover:!text-white hover:font-medium hover:font-[Montserrat]"
        >
          {label}
        </RouterLink>
        </li>
       ))}
        </ul>
        </li>

        <li className="relative group">
        <span className="hover:no-underline cursor-pointer !text-grey-800 font-[Montserrat] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-800 hover:after:w-full">
         Apent <span className="ml-1">▾</span>
        </span>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md py-2 px-2 w-54 z-10 ">
         {[
            ['/apent/marcos_y_puertas', 'Marcos y Puertas'],
         ].map(([to, label]) => (
        <li key={to}>
        <RouterLink
          to={to}
          className="block px-4 py-2 cursor-pointer !text-gray-800 rounded-md hover:bg-red-700 hover:!text-white hover:font-medium hover:font-[Montserrat]"
        >
          {label}
        </RouterLink>
        </li>
       ))}
        </ul>
        </li>

        <li>
          <ScrollLink to="contacto" smooth duration={500} offset={-80} className="hover:no-underline cursor-pointer !text-grey-800 font-[Montserrat] hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full">
            Contactanos
          </ScrollLink>
        </li>
      </ul>
      

      {/* Menú móvil */}
      <div className="md:hidden px-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
    <ul className="flex flex-col gap-2 text-lg font-[Montserrat] p-4">
      {/* Nosotros */}
      <li>
        <details className="group">
          <summary className="cursor-pointer text-grey-800 font-semibold font-[Montserrat] flex justify-between items-center">
            Nosotros <span>▾</span>
          </summary>
          <ul className="pl-4 mt-2 text-gray-800 font-[Montserrat]">
            {[
              ['/nosotros/equipo', 'Nuestro Equipo'],
              ['/nosotros/fabrica', 'Nuestra Fábrica'],
              ['/nosotros/servicios', 'Servicios'],
            ].map(([to, label]) => (
              <li key={to}>
                <RouterLink
                  to={to}
                  onClick={closeMenu}
                  className="block px-2 py-2 rounded-md hover:bg-red-700 hover:!text-white hover:font-medium hover:font-[Montserrat]"
                >
                  {label}
                </RouterLink>
              </li>
            ))}
          </ul>
        </details>
      </li>

      {/* Productos */}
      <li>
        <details className="group">
          <summary className="cursor-pointer text-grey-800 font-semibold font-[Montserrat] flex justify-between items-center">
            Productos <span>▾</span>
          </summary>
          <ul className="pl-4 mt-2 text-gray-800 font-[Montserrat]">
            {[
              ['/productos/proyectos_clinicos_hospitalarios', 'Proyectos Clínicos Hospitalarios'],
              ['/productos/puertas_hpl_marcos_telescopicos', 'Puertas HPL y Marcos Telescópicos'],
              ['/productos/proyectos_int_corporativos', 'Proyectos Int. Corporativos'],
              ['/productos/puertas_especiales','Puertas Especiales'],
              ['/productos/palillage_celocias_especiales','Palillages y Celosías Especiales'],
              ['/productos/mobiliario_a_medida','Mobiliario a Medida'],
              ['/productos/recepciones','Recepciones']
            ].map(([to, label]) => (
              <li key={to}>
                <RouterLink
                  to={to}
                  onClick={closeMenu}
                  className="block px-2 py-2 rounded-md hover:bg-red-700 hover:!text-white hover:font-semibold hover:font-[Montserrat]"
                >
                  {label}
                </RouterLink>
              </li>
            ))}
          </ul>
        </details>
      </li>

      {/* Alianzas */}
      <li>
        <details className="group">
          <summary className="cursor-pointer text-gray-800 font-semibold font-[Montserrat] flex justify-between items-center">
            Alianzas <span>▾</span>
          </summary>
          <ul className="pl-4 mt-2 text-gray-800 font-[Montserrat]">
            {[
              ['/alianzas/hafele', 'Hafele'],
              ['/alianzas/porcelanosa', 'Porcelanosa'],
              ['/alianzas/abet_laminati', 'Abet Laminati'],
              ['/alianzas/robfu', 'Robfu'],
              ['/alianzas/merino', 'Merino'],
              ['/alianzas/cabinarent', 'Cabinarent'],
            ].map(([to, label]) => (
              <li key={to}>
                <RouterLink
                  to={to}
                  onClick={closeMenu}
                  className="block px-2 py-2 rounded-md hover:bg-red-700 hover:!text-white hover:font-semibold"
                >
                  {label}
                </RouterLink>
              </li>
            ))}
          </ul>
        </details>
      </li>

      <li>
        <details className="group">
          <summary className="cursor-pointer text-grey-800 font-semibold font-[Montserrat] flex justify-between items-center">
            Apent <span>▾</span>
          </summary>
          <ul className="pl-4 mt-2 text-gray-800 font-[Montserrat]">
            {[
              ['/apent/marcos_y_puertas', 'Marcos y Puertas'],
            ].map(([to, label]) => (
              <li key={to}>
                <RouterLink
                  to={to}
                  onClick={closeMenu}
                  className="block px-2 py-2 rounded-md hover:bg-red-700 hover:!text-white hover:font-semibold"
                >
                  {label}
                </RouterLink>
              </li>
            ))}
          </ul>
        </details>
      </li>

      {/* Contacto */}
      <li>
        <ScrollLink
          to="contacto"
          smooth
          duration={500}
          offset={-80}
          className="cursor-pointer text-grey-800 font-[Montserrat] font-semibold hover:text-xl hover:font-semibold relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#D33834] after:transition-all after:duration-500 hover:after:w-full"
          onClick={closeMenu}
        >
          Contáctanos
        </ScrollLink>
      </li>
    </ul>
  </div>
)}

    </nav>
  );
};

export default Navbar;
