import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 pr-8 text-black flex justify-between items-center w-full fixed top-0 left-0 z-50 ">
      {/* Logo */}
      <div className="px-4">
        <img className="w-50 h-auto" src="/img/Logo.jpg" alt="Logo" />
      </div>

      {/* Menú de escritorio */}
      <ul className="hidden md:flex gap-8 text-lg font-Popins pl-8">
        <li><a href="#nosotros" className="hover:underline !text-gray-500 hover:!font-bold">Nosotros</a></li>
        <li><a href="#nuestros_clientes" className="hover:underline  !text-gray-500 hover:!font-bold">Nuestros Clientes</a></li>
        <li><a href="#nuestra_fabrica" className="hover:underline  !text-gray-500 hover:!font-bold">Nuestra Fabrica</a></li>

        {/* Submenú Proyectos */}
        <li className="relative group">
          <a href="#proyectos" className="hover:underline flex items-center  !text-gray-500 hover:!font-bold">
            Proyectos <span className="ml-1">▾</span>
          </a>
          <ul className="absolute hidden group-hover:block bg-white text-[1rem] text-black shadow-lg mt-2 rounded-md py-2 px-2 w-48 z-10">
            <li>
              <a href="#oficinas_corporativas" className="block px-4 py-2 !text-gray-500 hover:bg-[#d33834] hover:!text-white rounded-md">Oficinas Corporativas</a>
            </li>
            <li>
              <a href="#muebles_clinicos-hospitalarios" className="block px-4 py-2 !text-gray-500 hover:bg-[#d33834] hover:!text-white rounded-md">Muebles Clinicos - Hospitalarios</a>
            </li>
            <li>
              <a href="#puertas" className="block px-4 py-2 !text-gray-500 hover:bg-[#d33834] hover:!text-white rounded-md">Puertas</a>
            </li>
            <li>
              <a href="#revestimiento_fenolico" className="block px-4 py-2 !text-gray-500 hover:bg-[#d33834] hover:!text-white rounded-md">Revestimineto Fenolico</a>
            </li>
            <li>
              <a href="#marcos_telescopicos" className="block px-4 py-2 !text-gray-500 hover:bg-[#d33834] hover:!text-white rounded-md">Marcos Telescopicos</a>
            </li>
          </ul>
        </li>

        <li><a href="#servicio" className="hover:underline !text-gray-500 hover:!font-bold">Servicios</a></li>
      </ul>

      {/* Botón hamburguesa (visible en móvil) */}
      <div className="md:hidden px-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden ">
          <ul className="flex flex-col gap-4 text-lg p-4 ">
            <li><a href="#home" className="hover:underline !text-gray-500">Nosotros</a></li>
            <li><a href="#nosotros" className="hover:underline !text-gray-500">Nuestros Clientes</a></li>
            <li><a href="#contacto" className="hover:underline !text-gray-500">Nuestra Fabrica</a></li>

            {/* Submenú Proyectos en móvil */}
            <li>
              <span className="font-semibold font-Popins !text-gray-500">Proyectos</span>
              <ul className="pl-4 mt-2 text-gray-500">
                <li><a href="#oficinas_corporativas" className="block px-4 py-2 !text-gray-500 hover:bg-[#d33834] hover:!text-white rounded-md">Oficinas Corporativas</a></li>
                <li><a href="#muebles_clinicos-hospitalarios" className="block px-4 py-2 !text-gray-500 hover:bg-[#d33834] hover:!text-white rounded-md">Muebles Clinicos - Hospitalarios</a></li>
                <li><a href="#puertas" className="block px-4 py-2 !text-gray-500 hover:bg-[#d33834] hover:!text-white rounded-md">Puertas</a></li>
                <li><a href="#revestimiento_fenolico" className="block px-4 py-2 !text-gray-500 hover:bg-[#d33834] hover:!text-white rounded-md">Revestimiento Fenolico</a></li>
                <li><a href="#marcos_telescopicos" className="block px-4 py-2 !text-gray-500 hover:bg-[#d33834] hover:!text-white rounded-md">Marcos Telescopicos</a></li>
              </ul>
            </li>

            <li><a href="#contacto" className="hover:underline !text-gray-500">Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
