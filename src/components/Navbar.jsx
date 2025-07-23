import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

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
      label: "Productos",
      items: [
        ["/producto/clinicos-hospitalarios", "Clinicos-Hospitalarios"],
        ["/producto/puertas_hpl_marcos", "Puertas HPL y Marcos Telescópicos"],
        ["/producto/interiorismo", "Interiorismo Corporativo"],
        ["/productos/muebles_integrales", "Muebles Integrales"],
        ["/productos/residencial_hoteles", "Residencial y Hoteles"],
      ],
    },
    {
      label: "Proyectos",
      items: [
        ["https://www.linkedin.com/company/sistemamuebles/", "Proyectos Emblematicos"],
      ],
    },
    {
      label: "Blog",
      items: [
        ["https://www.linkedin.com/company/sistemamuebles/posts/", "Artículos Técnicos", true],
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

  // Extraemos el menú "Catálogo"
  const catalogoMenu = menus.find(menu => menu.label === "Catálogo");

  // Menús sin "Catálogo"
  const otherMenus = menus.filter(menu => menu.label !== "Catálogo");

  return (
    <>
      {/* Navbar superior */}
      <nav className="bg-white p-4 text-gray-600 flex justify-between items-center w-full fixed top-0 left-0 z-50 shadow-md">
        {/* Logo + Catálogo */}
        <div className="flex items-center gap-8">
          <RouterLink to="/">
            <img
              className="h-12 w-auto cursor-pointer"
              src="/img/Logo.webp"
              alt="Logo"
            />
          </RouterLink>

          {/* Catálogo menu desktop */}
          <ul className="hidden md:flex gap-6 text-lg font-[Poppins]">
            <li className="relative group" key={catalogoMenu.label}>
              <span className="cursor-pointer hover:text-xl font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#142063] after:transition-all after:duration-800 hover:after:w-full pr-4">
                {catalogoMenu.label} <span className="ml-1">▾</span>
              </span>
              <ul className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-[-10px] transition-all duration-500 ease-out bg-white text-gray-800 shadow-lg mt-2 rounded-md py-2 px-2 w-68 z-10">
                {catalogoMenu.items.map(([href, name, external]) => (
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
          </ul>
        </div>

        {/* Otros menús desktop */}
        <ul className="hidden md:flex gap-6 text-lg font-[Poppins]">
          {otherMenus.map(({ label, items }) => (
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

      {/* Sidebar móvil con animaciones y scroll */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-[#970C10] z-50 shadow-lg transform transition-all duration-500 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4 border-b text-white">
          <span className="text-lg font-semibold font-[Poppins] animate-slide-in-right">
            Menú
          </span>
          <button onClick={closeMenu}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-6">
          {menus.map(({ label, items }, index) => (
            <div key={label} className="animate-slide-in-right">
              <p className="text-sm font-bold text-white mb-1">{label}</p>
              <ul className="space-y-2 ml-2 font-[Barlow] animate-slide-in-left">
                {items.map(([href, name, external]) => (
                  <li key={name}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="text-sm text-white hover:underline"
                      >
                        {name}
                      </a>
                    ) : (
                      <RouterLink
                        to={href}
                        onClick={closeMenu}
                        className="text-sm text-white hover:underline"
                      >
                        {name}
                      </RouterLink>
                    )}
                  </li>
                ))}
              </ul>
              {index < menus.length - 1 && (
                <hr className="my-4 border-t border-white" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animations */}
      <style>
        {`
          @keyframes slide-in-right {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }

          @keyframes slide-in-left {
            0% { transform: translateX(-20px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }

          .animate-slide-in-right {
            animation: slide-in-right 0.5s ease-out forwards;
          }

          .animate-slide-in-left {
            animation: slide-in-left 0.5s ease-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
