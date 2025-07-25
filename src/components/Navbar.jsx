import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  Package,
  Building2,
  Newspaper,
  Phone,
  Users,
} from "lucide-react";
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
      icon: <BookOpen size={32} />,
      items: [
        ["/catalogo/puertas_hpl_marcos", "Puertas HPL y Marcos Telescópicos"],
      ],
    },
    {
      label: "Productos",
      icon: <Package size={32} />,
      items: [
        ["/producto/clinicos-hospitalarios", "Clinicos-Hospitalarios"],
        ["/producto/puertas_hpl_marcos", "Puertas HPL y Marcos Telescópicos"],
        ["/producto/interiorismo", "Interiorismo Corporativo"],
        ["/productos/soluciones_integrales", "Muebles Integrales"],
        ["/productos/residencial_hoteles", "Residencial y Hoteles"],
      ],
    },
    {
      label: "Proyectos",
      icon: <Building2 size={32} />,
      items: [
        [
          "https://www.linkedin.com/company/sistemamuebles/",
          "Proyectos Emblemáticos",
          true,
        ],
      ],
    },
    {
      label: "Blog",
      icon: <Newspaper size={32} />,
      items: [
        [
          "https://www.linkedin.com/company/sistemamuebles/posts/",
          "Artículos Técnicos",
          true,
        ],
      ],
    },
    {
      label: "Contacto",
      icon: <Phone size={32} />,
      items: [
        ["/contacto/contact", "Formulario de Contacto"],
        ["https://wa.me/56912345678", "Whatsapp", true],
        [
          "https://www.linkedin.com/company/sistemamuebles",
          "LinkedIn",
          true,
        ],
      ],
    },
    {
      label: "Sobre Nosotros",
      icon: <Users size={32} />,
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
              className="h-12 w-auto cursor-pointer"
              src="/img/Logo.webp"
              alt="Logo"
            />
          </RouterLink>

          <ul className="hidden md:flex gap-6 text-lg font-[Poppins]">
            <li className="relative group" key={catalogoMenu.label}>
              <span className="cursor-pointer hover:text-xl font-semibold pr-4">
                {catalogoMenu.label} <span className="ml-1">▾</span>
              </span>
              <ul className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 transition bg-white text-gray-800 shadow-lg mt-2 rounded-md py-2 px-2 w-68 z-10">
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
                  <ul className="absolute opacity-0 invisible group-hover:visible group-hover:opacity-100 transition bg-white text-gray-800 shadow-lg mt-2 rounded-md py-2 px-2 w-68 z-10">
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
        <div className="md:hidden px-2">
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Menú móvil visual con animación */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#011E31]/70 z-50 overflow-y-auto px-4 pt-20 pb-10 fade-slide-in">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => {
                setMenuOpen(false);
                setActiveSection(null);
              }}
              className="text-white"
            >
              <X size={28} />
            </button>
          </div>

         <div className="grid grid-cols-2 gap-4 text-white">
  {menus.map((menu) => {
    const commonClasses =
      "flex flex-col items-center justify-center gap-2 w-full h-28 rounded-xl bg-blue-800 hover:bg-red-500 transition text-sm font-medium";

    return (
      <div key={menu.label}>
        {menu.href ? (
          <RouterLink
            to={menu.href}
            onClick={() => setMenuOpen(false)}
            className={commonClasses}
          >
            {menu.icon}
            <span>{menu.label}</span>
          </RouterLink>
        ) : (
          <button
            onClick={() => handleSectionClick(menu)}
            className={`${commonClasses} ${
              activeSection === menu.label ? "ring-2 ring-white" : ""
            }`}
          >
            {menu.icon}
            <span>{menu.label}</span>
          </button>
        )}
      </div>
    );
  })}
</div>

          {/* Submenú dinámico con animación */}
          {activeSection && (
            <div className="mt-6 fade-slide-in">
              <ul className="space-y-2 text-white font-[Barlow]">
                {menus
                  .find((menu) => menu.label === activeSection)
                  ?.items.map(([href, name, external]) => (
                    <li key={name}>
                      {external ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMenuOpen(false)}
                          className="block px-2 py-1 hover:underline font-semibold"
                        >
                          {name}
                        </a>
                      ) : (
                        <RouterLink
                          to={href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-2 py-1 hover:underline font-semibold"
                        >
                          {name}
                        </RouterLink>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          )}
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
