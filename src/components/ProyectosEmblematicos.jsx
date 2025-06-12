import React from "react";
import Masonry from "react-masonry-css";

const proyectos = [
  {
    id: 1,
    title: "Clínica Modular Las Condes",
    description: "Diseño clínico modular con integración de Häfele y Cabinarent.",
    image: "/img/proyecto1.jpg",
    link: "/proyectos/clinica-modular",
  },
  {
    id: 2,
    title: "Oficinas Corporativas BAEZA",
    description: "Proyecto de remodelación interior en estilo moderno.",
    image: "/img/proyecto2.jpg",
    link: "/proyectos/oficinas-baeza",
  },
  {
    id: 3,
    title: "Centro Logístico Modular",
    description: "Solución industrial eficiente con estructura desmontable.",
    image: "/img/proyecto3.jpg",
    link: "/proyectos/centro-logistico",
  },
  // Puedes agregar más proyectos aquí...
];

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

const ProyectosEmblematicos = () => {
  return (
    <section id="proyectos-emblematicos" className="px-6 py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10 font-[Montserrat]">
        Proyectos Emblemáticos
      </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="flex flex-col gap-6"
      >
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={proyecto.image}
              alt={proyecto.title}
              className="w-full object-cover h-64"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-[Montserrat]">
                {proyecto.title}
              </h3>
              <p className="text-gray-600 text-sm font-[Montserrat]">
                {proyecto.description}
              </p>
              <a
                href={proyecto.link}
                className="inline-block mt-3 text-[#d33834] font-semibold text-sm hover:underline"
              >
                Ver más →
              </a>
            </div>
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default ProyectosEmblematicos;
