import React, { useEffect, useState } from "react";
import {
Menu,
  X,
  Library,
  Boxes,
  Landmark,
  PenLine,
  MessageCircle,
  UserSquare,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

const menus = [
  {
    label: "Catálogos",
    icon: <Library size={24} />,
    items: [
      ["/catalogo/puertas_hpl_marcos", "Puertas HPL y Marcos Telescópicos"],
    ],
  },
  {
    label: "Productos",
    icon: <Boxes size={24} />,
    items: [
      ["/producto/clinicos-hospitalarios", "Clínicos-Hospitalarios"],
      ["/producto/puertas_hpl_marcos", "Puertas HPL y Marcos Telescópicos"],
      ["/producto/interiorismo", "Interiorismo Corporativo"],
      ["/productos/soluciones_integrales", "Soluciones Integrales"],
      ["/productos/residencial_hoteles", "Residencial y Hotelero"],
    ],
  },
  {
    label: "Proyectos",
    icon: <Landmark size={24} />,
    items: [
      ["/proyectos/proyectos_emblematicos", "Proyectos Emblemáticos"],
    ],
  },
  {
    label: "Noticias",
    icon: <PenLine size={24} />,
    href: "/noticias",
  },
  {
    label: "Contacto",
    icon: <MessageCircle size={24} />,
    items: [
      ["/contacto/contact", "Formulario de Contacto"],
      ["https://wa.me/56992319956", "Whatsapp", true],
      ["https://www.linkedin.com/company/sistemamuebles", "LinkedIn", true],
    ],
  },
  {
    label: "Sobre Nosotros",
    icon: <UserSquare size={24} />,
    href: "/nosotros",
  },
];

  const handleSectionClick = (menu) => {
    if (menu.href) {
      setMenuOpen(false);
    } else {
      setActiveSection(menu.label === activeSection ? null : menu.label);
    }
  };

  const catalogoMenu = menus.find((menu) => menu.label === "Catálogos");
  const otherMenus = menus.filter((menu) => menu.label !== "Catálogos");

  return (
    <>
      {/* Navbar escritorio */}
      <nav className="bg-white p-4 text-gray-600 flex justify-between items-center w-full fixed top-0 left-0 z-50 shadow-md">
        <div className="flex items-center gap-8">
          <RouterLink to="/">
            <img
              className="h-16 w-auto cursor-pointer"
              src="/img/Logo.webp"
              alt="Logo"
            />
          </RouterLink>

          <ul className="hidden md:flex gap-6 text-lg font-[Poppins]">
            <li className="relative group" key={catalogoMenu.label}>
              <span className="cursor-pointer hover:text-xl font-semibold pr-4">
                {catalogoMenu.label} <span className="ml-1">▾</span>
              </span>
              <ul className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 transition bg-white text-gray-800 shadow-lg mt-2 rounded-md py-2 px-2 w-70 z-10">
                {catalogoMenu.items.map(([href, name, external]) => (
                  <li key={name}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-[#142063] hover:text-white"
                      >
                        {name}
                      </a>
                    ) : (
                      <RouterLink
                        to={href}
                        className="block px-4 py-2 hover:bg-[#142063] hover:text-white hover:text-base hover:rounded-md transition-all duration-200"
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

        <ul className="hidden md:flex gap-6 text-lg font-[Poppins]">
          {otherMenus.map((menu) => (
            <li className="relative group" key={menu.label}>
              {menu.href ? (
                <RouterLink
                  to={menu.href}
                  className="hover:text-xl font-semibold pr-4"
                >
                  {menu.label}
                </RouterLink>
              ) : (
                <>
                  <span className="cursor-pointer hover:text-xl font-semibold pr-4">
                    {menu.label} <span className="ml-1">▾</span>
                  </span>
                  <ul className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-300 transition bg-white text-gray-800 shadow-lg mt-6 rounded-md py-2 px-2 w-74 z-12">
                    {menu.items.map(([href, name, external]) => (
                      <li key={name}>
                        {external ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 hover:bg-[#142063] hover:text-white hover:text-base hover:rounded-md transition-all duration-200"
                          >
                            {name}
                          </a>
                        ) : (
                          <RouterLink
                            to={href}
                            className="block px-4 py-2 hover:bg-[#142063] hover:text-white hover:text-base hover:rounded-md transition-all duration-200"
                          >
                            {name}
                          </RouterLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Botón móvil */}
        <div className="md:hidden px-2 ">
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Menú móvil visual con animación */}
     {/* Menú móvil estilo lista */}
{menuOpen && (
  <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 overflow-y-auto fade-slide-in">
    
    {/* Cierre */}
    <div className="flex justify-end p-4">
      <button
        onClick={() => {
          setMenuOpen(false);
          setActiveSection(null);
        }}
        className="text-[#142063] focus:outline-none focus:ring-0 focus:border-none"
      >
        <X size={28} />
      </button>
    </div>

    {/* Lista de navegación */}
    <ul className="flex flex-col gap-6 px-8 text-[#142063] font-[Poppins] text-lg">
      {menus.map((menu) => (
        <li key={menu.label}>
          {menu.href ? (
            <RouterLink
              to={menu.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-[#142063] hover:font-semibold transition focus:outline-none focus:ring-0 focus:border-none"
            >
              {menu.icon}
              {menu.label}
            </RouterLink>
          ) : (
            <>
              <button
                onClick={() => handleSectionClick(menu)}
                className={`flex items-center w-full gap-3 px-3 py-2 rounded-md transition-all 
                  focus:outline-none focus:ring-0 focus:border-none 
                  ${
                    activeSection === menu.label
                      ? "border border-[#142063] text-[#142063] font-semibold"
                      : "text-[#142063] hover:text-[#142063] hover:font-semibold"
                  }`}
              >
                {menu.icon}
                {menu.label}
              </button>

              {/* Submenú */}
              {activeSection === menu.label && menu.items && (
                <ul className="ml-10 mt-2 flex flex-col gap-3 text-base !bg-grey-500 !text-white rounded-lg p-3 ">
                  {menu.items.map(([href, name, external]) => (
                    <li key={name}>
                      {external ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMenuOpen(false)}
                          className="hover:underline text-[#142063] focus:outline-none focus:ring-0 focus:border-none"
                        >
                          {name}
                        </a>
                      ) : (
                        <RouterLink
                          to={href}
                          onClick={() => setMenuOpen(false)}
                          className="hover:underline text-[#142063] focus:outline-none focus:ring-0 focus:border-none"
                        >
                          {name}
                        </RouterLink>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </li>
      ))}
    </ul>

    {/* Botones inferiores */}
    <div className="flex flex-col gap-4 px-8 mt-10 pb-8">
      <RouterLink
        to="/contacto/contact"
        onClick={() => setMenuOpen(false)}
        className="flex items-center justify-center gap-2 bg-[#142063] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#0f1a52] transition focus:outline-none focus:ring-0 focus:border-none"
      >
        <MessageCircle size={20} />
        Contacto
      </RouterLink>

      <a
        href="https://wa.me/56992319956"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-600 transition focus:outline-none focus:ring-0 focus:border-none"
      >
        <FaWhatsapp alt="WhatsApp" className="h-5 w-5" />
        WhatsApp
      </a>
    </div>

  </div>
)}


      {/* Animaciones */}
      <style>
        {`
          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .fade-slide-in {
            animation: fadeSlideIn 0.5s ease-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
