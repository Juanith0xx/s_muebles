import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const proyectos = [
  {
    id: 1,
    title: "Proyecto CCHC",
    description: "Diseño clínico modular con integración de Häfele y Cabinarent.",
    image: "/img/Emblematicos/CCHC/cchc_1.jpg",
    link: "/proyectos/cchc",
  },
  {
    id: 2,
    title: "COK",
    description: "Proyecto de remodelación interior en estilo moderno.",
    image: "/img/Emblematicos/COK/cok_1.jpg",
    link: "/proyectos/COK",
  },
  {
    id: 3,
    title: "Correa & Gubbins",
    description: "Proyecto de remodelación interior en estilo moderno.",
    image: "/img/Emblematicos/CyG/c&b_1.webp",
    link: "/proyectos/Correa&Gubbins",
  },
  {
    id: 4,
    title: "FALP",
    description: "Solución industrial eficiente con estructura desmontable.",
    image: "/img/Emblematicos/FALP/falp_1.jpg",
    link: "/proyectos/Falp",
  },
];

const ProyectosEmblematicos = () => {
  return (
    <section id="proyectos-emblematicos" className="px-6 py-12 bg-[#142063] mt-10 ">
      <h2 className="text-xl md:text-4xl font-bold text-white text-left mb-10 font-[Poppins]">
        Proyectos Emblemáticos
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-[1200px] mx-auto"
      >
        {proyectos.map((proyecto) => (
          <SwiperSlide key={proyecto.id}>
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={proyecto.image}
                alt={proyecto.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold mb-1 font-[Inter]">
                  {proyecto.title}
                </h3>
                <p className="text-white text-sm font-[Source Sans 3]">
                  {proyecto.description}
                </p>
                <a
                  href={proyecto.link}
                  className="mt-3 inline-block text-sm text-white font-semibold underline"
                >
                  Ver más →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProyectosEmblematicos;
