import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const secciones = [
  {
    titulo: "Emblematicos",
    descripcion: `Para estos proyectos como el común denominador es la fabricación integral, tanto del mobiliario como del resto de los elementos incluidos en la habilitación, tales como Revestimientos, Palillajes, Recepciones y otros, destacando un lenguaje de diseño único para cada proyecto.
.`,
    imagenes: [
      { src: "/img/Puertas_HPL/Puerta_doble_hoja_marco_telescopico.webp", descripcion: "" },
      { src: "/img/Puertas_HPL/Puertas_con_marcos_telescopicos.webp", descripcion: "" },
      { src: "/img/Puertas_HPL/Puerta_plomada_marco_telescpico_2.webp", descripcion: "" },
      { src: "/img/Puertas_HPL/Puertas_HPL_marcos_telescopicos.webp", descripcion: "" },
      { src: "/img/Puertas_HPL/Bisagra_Marco_Telescopico.webp", descripcion: "" },
      { src: "/img/Puertas_HPL/Marco_Telescopico_2.webp", descripcion: "" },
      { src: "/img/Puertas_HPL/Marco_Telescopico.webp", descripcion: "" },      
      { src: "/img/Puertas_HPL/Puerta_HPL_cerradura.webp", descripcion: "" }, 
      { src: "/img/Puertas_HPL/Puertas_HPL_marcos_telescopicos.webp", descripcion: "" }, 
       { src: "/img/Puertas_HPL/Puerta_plomada_marco_telescopico.webp", descripcion: "" },
    ],
  },
  
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const PEmblematicos = () => {
  const galleryRef = useRef({});

  const handleVerMas = (titulo) => {
    setTimeout(() => {
      if (galleryRef.current[titulo]) {
        galleryRef.current[titulo].openGallery(6);
      }
    }, 100);
  };

  return (
    <div className="px-6 pt-14 sm:px-10 lg:px-28 py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Helmet>
  <title>Proyectos Emblemáticos en Arquitectura Interior y Soluciones Hospitalarias | Sistema Muebles</title>
  <meta
    name="description"
    content="Explora nuestros proyectos emblemáticos en clínicas, hospitales, hoteles y oficinas. Soluciones personalizadas en mobiliario técnico, puertas HPL, interiorismo y diseño funcional. Calidad, innovación y eficiencia constructiva en cada implementación."
  />
  <meta
    name="keywords"
    content="proyectos emblemáticos, arquitectura interior, soluciones hospitalarias, diseño clínico, puertas HPL, mobiliario institucional, interiorismo corporativo, diseño funcional, clínicas modernas, hospitales, hoteles, oficinas"
  />
</Helmet>

      <motion.h1
        className="text-3xl sm:text-5xl font-bold font-poppins text-center text-[#011E31] dark:text-white mt-10 mb-6 pt-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Proyectos Emblematicos
      </motion.h1>

      <motion.p
        className="text-lg font-barlow text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeIn}
      >
       Proyectos emblemáticos de alto impacto en arquitectura interior y soluciones hospitalarias. Implementaciones modernas, funcionales y personalizadas en clínicas, hoteles, oficinas y espacios residenciales. Diseño integral con acabados premium, eficiencia constructiva y resultados duraderos. Inspiración real para tus próximos proyectos.
      </motion.p>

      {secciones.map((seccion, index) => {
        const mostrarBotonVerMas =
        seccion.titulo === "Emblematicos";

        const imagenesVisibles = mostrarBotonVerMas
          ? seccion.imagenes.slice(0, 6)
          : seccion.imagenes;

        const imagenesOcultas = mostrarBotonVerMas
          ? seccion.imagenes.slice(6)
          : [];

        const esCentrada =
          (seccion.titulo === "Estaciones de Enfermería" ||
            seccion.titulo === "Estantes y Lockers") &&
                    imagenesVisibles.length === 3;

        return (
          <motion.section
  key={index}
  className="mb-20 flex flex-col items-center gap-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ diez: true }}
  variants={fadeIn}
  custom={index + 1}
>
  <div className="max-w-4xl mx-auto text-center px-4">
    <h2 className="text-2xl sm:text-3xl font-semibold text-[#011E31] font-[Poppins] dark:text-sky-400 mb-4">
      {seccion.titulo}
    </h2>
    <p className="text-sm sm:text-base font-barlow text-gray-700 dark:text-gray-300 leading-relaxed">
      {seccion.descripcion}
    </p>
  </div>

  <div className="w-full">
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
      onInit={(ref) => {
        galleryRef.current[seccion.titulo] = ref.instance;
      }}
    >
      {imagenesVisibles.map((img, i) => (
        <a
          key={i}
          href={img.src}
          data-sub-html={`<p>${img.descripcion}</p>`}
          className="block rounded-xl overflow-hidden shadow-md"
        >
          <img
            src={img.src}
            alt={`${seccion.titulo} - Foto ${i + 1}`}
            loading="lazy"
            className="w-full h-64 object-cover brightness-105 hover:scale-105 transition-transform duration-300"
          />
        </a>
      ))}
      {imagenesOcultas.map((img, i) => (
        <a
          key={`hidden-${i}`}
          href={img.src}
          data-sub-html={`<p>${img.descripcion}</p>`}
          className="hidden"
        >
          <img src={img.src} alt={`Oculta - ${i + 5}`} loading="lazy" />
        </a>
      ))}
    </LightGallery>

    {mostrarBotonVerMas && imagenesOcultas.length > 0 && (
      <div className="text-center mt-6">
        <button
          onClick={() => handleVerMas(seccion.titulo)}
          className="bg-[#011E31] text-white px-5 py-2 rounded-full hover:bg-sky-700 transition"
        >
          Ver más
        </button>
      </div>
    )}
  </div>
</motion.section>

        );
      })}

      <motion.div
        className="bg-[#011E31] text-white rounded-2xl p-10 text-center mt-20 shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={secciones.length + 1}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          ¿Buscas una solución integral en puertas HPL y marcos telescópicos para tu empresa, clínica o institución?
        </h3>
        <p className="text-base sm:text-lg mb-5">
          Cuéntanos tus requerimientos y recibe una propuesta personalizada sin costo.
        </p>
        <a
          href="/contacto/contact"
          className="inline-block bg-sky-700 text-white font-semibold px-6 py-3 rounded-full  transition-colors"
        >
          Solicitar Cotización
        </a>
      </motion.div>
    </div>
  );
};

export default PEmblematicos