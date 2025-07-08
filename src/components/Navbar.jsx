import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const menus = [
    {
      label: "Catálogo",
      items: [
        ["/catalogo/hpl", "Placas y Muebles Fenólicos HPL"],
        ["/catalogo/krion", "KRION"],
        ["/catalogo/marcos", "Marcos Telescópicos"],
        ["/catalogo/puertas", "Puertas"],
        ["/catalogo/cuarzo", "Superficies de Cuarzo"],
        ["/catalogo/cortinas", "Cortinas Roller"]
      ]
    },
    {
      label: "Servicios",
      items: [
        ["/servicios/hospitales", "Soluciones para Hospitales"],
        ["/servicios/clinicas", "Clínicas y Laboratorios"],
        ["/servicios/corporativos", "Espacios Corporativos"],
        ["/servicios/residencial", "Residencial"]
      ]
    },
    {
      label: "Proyectos",
      items: [
        ["/proyectos/galeria", "Galería de Proyectos"],
        ["/proyectos/exitos", "Casos de Éxito"]
      ]
    },
    {
      label: "Blog",
      items: [
        ["/blog/articulos", "Artículos Técnicos"],
        ["/blog/tendencias", "Tendencias en Materiales"],
        ["/blog/guias", "Guías de Especificaciones"]
      ]
    },
    {
      label: "Contacto",
      items: [
        ["/contacto/contact", "Formulario de Contacto"],
        ["https://wa.me/56912345678", "Whatsapp", true],
        ["https://www.linkedin.com/company/empresa", "LinkedIn", true]
      ]
    },
    {
      label: "Sobre Nosotros",
      items: [
        ["/nosotros/equipo", "Equipo"],
        ["/nosotros/fabrica", "Fábrica Propia"],
        ["/nosotros/certificaciones", "Certificaciones"]
      ]
    }
  ];

  return (
    <nav className="bg-[#142063] p-4 text-white flex justify-between items-center w-full fixed top-0 left-0 z-50 mr-8">
      <div className="flex items-center gap-6 mt-2 mb-4">
        <RouterLink to="/">
          <img className="h-12 w-auto cursor-pointer" src="/img/Logo.jpg" alt="Logo" />
        </RouterLink>

        {/* Catálogo Mega Menu */}
        <div className="relative group hidden md:block text-xl font-[Poppins]">
          <span className="cursor-pointer text-white hover:text-xl font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-white after:transition-all after:duration-500 hover:after:w-full">
            Catálogo <span className="ml-1">▾</span>
          </span>
          <ul className="absolute left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-[-10px] transition-all duration-500 ease-out bg-white text-gray-800 shadow-lg mt-2 rounded-md py-2 px-2 w-84 z-10">
            {menus[0].items.map(([href, name]) => (
              <li key={name}>
                <RouterLink
                  to={href}
                  className="block px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white hover:font-semibold font-[Barlow]"
                >
                  {name}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="hidden md:flex gap-6 text-lg font-[Poppins]">
        {menus.slice(1).map(({ label, items }) => (
          <li className="relative group" key={label}>
            <span className="cursor-pointer hover:text-xl font-semibold font-[Poppins] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-white after:transition-all after:duration-500 hover:after:w-full pr-4">
              {label} <span className="ml-1">▾</span>
            </span>
            <ul className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-[-10px] transition-all duration-500 ease-out bg-white text-gray-800 shadow-lg mt-2 rounded-md py-2 px-2 w-68 z-10">
              {items.map(([href, name, external]) => (
                <li key={name}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white hover:font-semibold font-[Barlow]"
                    >
                      {name}
                    </a>
                  ) : (
                    <RouterLink
                      to={href}
                      className="block px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white hover:font-semibold font-[Barlow]"
                    >
                      {name}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Botón móvil */}
      <div className="md:hidden px-4">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
