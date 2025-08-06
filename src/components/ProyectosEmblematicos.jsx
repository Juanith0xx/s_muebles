import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // 1. Importar Autoplay

import "swiper/css";
import "swiper/css/navigation";

const proyectos = [
  {
    id: 1,
    title: "Proyecto Vantrunst",
    description: "",
    image: "/img/Emblematicos/Vantrust/Escritorio_Gerencia_1_Vantrust.webp",
    link: "/proyectos/proyectos_emblematicos",
  },
  {
    id: 2,
    title: "FALP",
    description: "",
    image: "/img/Emblematicos/FALP/Estacion_Enfermeria_6_FALP.webp",
    link: "/proyectos/proyectos_emblematicos",
  },
  {
    id: 3,
    title: "CCHC",
    description: "",
    image: "/img/Emblematicos/CCHC/Meson_Krion_Cafeteria_CCHC.webp",
    link: "/proyectos/proyectos_emblematicos",
  },
  {
    id: 4,
    title: "Hotel Mandarin Oriente",
    description: "",
    image: "/img/Emblematicos/H_Mandarin/Suite_1_Mandarin_Oriental.webp",
    link: "/proyectos/proyectos_emblematicos",
  },
  {
    id: 5,
    title: "COK",
    description: "",
    image: "/img/Emblematicos/COK/Cielo_COK.webp",
    link: "/proyectos/proyectos_emblematicos",
  },
  {
    id: 6,
    title: "Correa & Gubbins",
    description: "",
    image: "/img/Emblematicos/CG/Recepcion-2-correagubbins.webp",
    link: "/proyectos/proyectos_emblematicos",
  },
];

const ProyectosEmblematicos = () => {
  return (
    <section id="proyectos-emblematicos" className="px-6 py-12 bg-gray-600 mt-10 ">
      <h2 className="text-xl md:text-4xl font-bold text-white text-left mb-10 font-[Poppins]">
        Proyectos Emblemáticos
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]} // 2. Agregar Autoplay aquí
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }} // 3. Activar autoplay
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
