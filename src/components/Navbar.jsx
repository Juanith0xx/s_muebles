import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

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
        ["/catalogo/cortinas", "Cortinas Roller"],
      ],
    },
    {
      label: "Servicios",
      items: [
        ["/servicios/hospitales", "Soluciones para Hospitales"],
        ["/servicios/clinicas", "Clínicas y Laboratorios"],
        ["/servicios/corporativos", "Espacios Corporativos"],
      ],
    },
    {
      label: "Proyectos",
      items: [
        ["/proyectos/galeria", "Galería de Proyectos"],
        ["/proyectos/exitos", "Casos de Éxito"],
      ],
    },
    {
      label: "Blog",
      items: [
        ["/blog/articulos", "Artículos Técnicos"],
        ["/blog/tendencias", "Tendencias en Materiales"],
        ["/blog/guias", "Guías de Especificaciones"],
      ],
    },
    {
      label: "Contacto",
      items: [
        ["/contacto/contact", "Formulario de Contacto"],
        ["https://wa.me/56912345678", "Whatsapp", true],
        ["https://www.linkedin.com/company/sistemamuebles", "LinkedIn", true],
      ],
    },
    {
      label: "Sobre Nosotros",
      items: [
        ["/nosotros/equipo", "Equipo"],
        ["/nosotros/fabrica", "Fábrica Propia"],
        ["/nosotros/certificaciones", "Certificaciones"],
      ],
    },
  ];

  return (
    <>
      {/* Navbar superior */}
      <nav className="bg-white p-4 text-gray-600 flex justify-between items-center w-full fixed top-0 left-0 z-50 shadow-md">
        <div className="flex items-center gap-6">
          <RouterLink to="/">
            <img
              className="h-12 w-auto cursor-pointer"
              src="/img/Logo.webp"
              alt="Logo"
            />
          </RouterLink>
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-6 text-lg font-[Poppins]">
          {menus.map(({ label, items }) => (
            <li className="relative group" key={label}>
              <span className="cursor-pointer hover:text-xl font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#142063] after:transition-all after:duration-800 hover:after:w-full pr-4">
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
                        className="block px-4 py-2 rounded-md hover:bg-[#142063] hover:text-white hover:font-semibold font-[Barlow]"
                      >
                        {name}
                      </a>
                    ) : (
                      <RouterLink
                        to={href}
                        className="block px-4 py-2 rounded-md hover:bg-[#142063] hover:text-white hover:font-semibold font-[Barlow]"
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

        {/* Botón Menú Móvil */}
        <div className="md:hidden px-2">
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Barra vertical fija solo en móvil */}
      <div className="fixed right-0 top-0 h-full w-1 bg-blue-600 z-50 block md:hidden" />

      {/* Sidebar móvil */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white z-50 shadow-lg transform transition-all duration-500 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">Menú</span>
          <button onClick={closeMenu}>
            <X size={24} />
          </button>
        </div>
        <div className="p-4 space-y-4">
          {menus.map(({ label, items }, index) => (
            <div key={label}>
              <p className="text-sm font-bold text-gray-700 mb-1">{label}</p>
              <ul className="space-y-2 ml-2">
                {items.map(([href, name, external]) => (
                  <li key={name}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {name}
                      </a>
                    ) : (
                      <RouterLink
                        to={href}
                        onClick={closeMenu}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {name}
                      </RouterLink>
                    )}
                  </li>
                ))}
              </ul>
              {/* Línea separadora entre secciones */}
              {index < menus.length - 1 && (
                <hr className="my-4 border-t border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fondo oscuro cuando el menú móvil está abierto */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
