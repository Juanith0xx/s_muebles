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
    titulo: "Vantrust",
    descripcion: ``,
     imagenes: [
      { src: "/img/Emblematicos/Vantrust/Maeson_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Recepcion_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Sala_de_reuniones_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Escritorio_Gerencia_1_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Escritorio_Gerencia_2_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Escritorio_Gerencia_detalle_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Escritorio_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Kitchenette_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Meson_Cafeteria_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Recepcion_2_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Sala_reuniones_2_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Sala_reuniones_3_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Sala_reuniones_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Revestimientos_Vantrust.webp", descripcion: "" },
      { src: "/img/Emblematicos/Vantrust/Puerta_Vantrust.webp", descripcion: "" },
     ], 
  },
     {
    titulo: "FALP",
    descripcion: ``,
     imagenes: [
      { src: "/img/Emblematicos/FALP/respaldo_HPL_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Procedimientos_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Estantes_HPL_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Estacion_Enfermeria_1_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Estacion_Enfermeria_2_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Estacion_Enfermeria_3_Falp.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Estacion_Enfermeria_4_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Estacion_Enfermeria_4b_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Estacion_Enfermeria_5_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Estacion_Enfermeria_6_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Estante_Vidriado_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Estantes_Lockers_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Laboratorio_FALP.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Laboratorio_FALP2.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Laboratorio_FALP3.webp", descripcion: "" },
      { src: "/img/Emblematicos/FALP/Estante_HLP_FALP.webp", descripcion: "" },
     ], 
  },  
  {
    titulo: "CCHC",
    descripcion: ``,
    imagenes: [
      { src: "/img/Emblematicos/CCHC/Closet_CCHC.webp", descripcion: "" },
      { src: "/img/Emblematicos/CCHC/Closet_CCHC2.webp", descripcion: "" },
      { src: "/img/Emblematicos/CCHC/Lockers_HPL_CCHC.webp", descripcion: "" },
      { src: "/img/Emblematicos/CCHC/Lockers_HPL_CCHC2.webp", descripcion: "" },
      { src: "/img/Emblematicos/CCHC/Meson_Krion_Cafeteria_CCHC.webp", descripcion: "" },
      { src: "/img/Emblematicos/CCHC/Meson_Krion_Cafeteria_CCHC2.webp", descripcion: "" },
      { src: "/img/Emblematicos/CCHC/Meson_Krion_Casino_CCHC.webp", descripcion: "" },
    ],
  },
 
   {
    titulo: "Hotel Mandarin Oriental",
    descripcion: ``,
     imagenes: [
      { src: "/img/Emblematicos/H_Mandarin/Suite_1_Mandarin_Oriental.webp", descripcion: "" },
      { src: "/img/Emblematicos/H_Mandarin/Suite_2_Mandarin_Oriental.webp", descripcion: "" },
      { src: "/img/Emblematicos/H_Mandarin/Suite_3_Mandarin_Oriental.webp", descripcion: "" },
      { src: "/img/Emblematicos/H_Mandarin/Suite_4_Mandarin_Oriental.webp", descripcion: "" },
      { src: "/img/Emblematicos/H_Mandarin/Suite_5_Filigrana_Kitchenette.webp", descripcion: "" },
      { src: "/img/Emblematicos/H_Mandarin/Revestimientos_Mandarin_Oriental.webp", descripcion: "" },
      { src: "/img/Emblematicos/H_Mandarin/Revestimiento_TV_Mandarin_Oriental.webp", descripcion: "" },
      { src: "/img/Emblematicos/H_Mandarin/Puertas_Marcos_Mandrin_Oriental.webp", descripcion: "" },
      { src: "/img/Emblematicos/H_Mandarin/Endolados_Revestimientos_Mandarin_Oriental.webp", descripcion: "" },
      { src: "/img/Emblematicos/H_Mandarin/Maletero_Mandarin_Oriental.webp", descripcion: "" }
     ], 
  },
   {
    titulo: "Consulta Oftalmológica Kennedy COK",
    descripcion: ``,
    imagenes: [
      { src: "/img/Emblematicos/COK/Cielo_COK.webp", descripcion: "" },
      { src: "/img/Emblematicos/COK/Puertas_Cielo_Consultas_COK.webp", descripcion: "" },
      { src: "/img/Emblematicos/COK/Puertas_laminadas_COK.webp", descripcion: "" },
      { src: "/img/Emblematicos/COK/Recepcion_Cielo_COK.webp", descripcion: "" },
      { src: "/img/Emblematicos/COK/Recepcion_COK.webp", descripcion: "" },
      { src: "/img/Emblematicos/COK/Revestimiento_escalera_COK.webp", descripcion: "" },
    ],
  },
  {
    titulo: "Correa & Gubbins",
    descripcion: ``,
    imagenes: [
      { src: "/img/Emblematicos/CG/Recepcion.webp", descripcion: "" },
      { src: "/img/Emblematicos/CG/Sala-Reuniones-correagubbins.webp", descripcion: "" },      
      { src: "/img/Emblematicos/CG/Estante-correagubbins.webp", descripcion: "" },
      { src: "/img/Emblematicos/CG/Recepcion-2-correagubbins.webp", descripcion: "" },
      { src: "/img/Emblematicos/CG/Recepcion-2-correagubbins2.webp", descripcion: "" },
      { src: "/img/Emblematicos/CG/Cafeteria-correagubbins.webp", descripcion: "" },
      { src: "/img/Emblematicos/CG/Sala-Reuniones-correagubbins2.webp", descripcion: "" },
      { src: "/img/Emblematicos/CG/Tabiques-Retroiluminados-correagubbins.webp", descripcion: "" },
      { src: "/img/Emblematicos/CG/Estantes-y-Paneles-correagubbins.webp", descripcion: "" },
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
        galleryRef.current[titulo].openGallery(4);
      }
    }, 100);
  };

  return (
    <div className="px-6 pt-14 sm:px-10 lg:px-28 py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
     <Helmet>
  <title>Proyectos Emblemáticos en Mobiliario Clínico | Sistema Muebles</title>
  <meta
    name="description"
    content="Descubre nuestros proyectos emblemáticos en mobiliario clínico y hospitalario a medida. Soluciones para estaciones de enfermería, laboratorios, áreas limpias y más, con diseño funcional, durabilidad y eficiencia sanitaria."
  />
  <meta
    name="keywords"
    content="mobiliario clínico, muebles hospitalarios, estaciones de enfermería, diseño sanitario, laboratorios, áreas limpias, proyectos emblemáticos, Vanstrust, krion, HPL, MDF laminado, soluciones modulares"
  />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Proyectos Emblemáticos en Mobiliario Clínico | Sistema Muebles" />
  <meta property="og:description" content="Explora nuestros proyectos destacados en mobiliario clínico personalizado, con materiales premium y diseño funcional para entornos sanitarios." />
  <meta property="og:image" content="https://tusitioweb.cl/img/emblematicos.jpg" />
  <meta property="og:url" content="https://sistemamuebles.cl/proyectos-emblematicos" />
  <meta name="twitter:card" content="summary_large_image" />
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
        Para estos proyectos como el común denominador es la fabricación integral, tanto del mobiliario como del resto de los elementos incluidos en la habilitación, tales como Revestimientos, Palillajes, Recepciones y otros, destacando un lenguaje de diseño único para cada proyecto.
      </motion.p>

      {secciones.map((seccion, index) => {
        const mostrarBotonVerMas =
          seccion.titulo === "CCHC" ||
          seccion.titulo === "COK" || 
          seccion.titulo === "Correa & Gubbins" ||
          seccion.titulo === "Hotel Mandarin Oriental" || 
          seccion.titulo === "Vantrust" ||
          seccion.titulo === "FALP";

        const imagenesVisibles = mostrarBotonVerMas
          ? seccion.imagenes.slice(0, 4)
          : seccion.imagenes;

        const imagenesOcultas = mostrarBotonVerMas
          ? seccion.imagenes.slice(4)
          : [];

        const esCentrada =
          (seccion.titulo === "Estaciones de Enfermería" ||
            seccion.titulo === "Estantes y Lockers") &&
                    imagenesVisibles.length === 3;

        return (
          <motion.section
            key={index}
            className={`mb-20 flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={index + 1}
          >
            <div className="w-full lg:w-1/2">
             <h2
            className={`text-2xl sm:text-3xl font-semibold text-[#011E31] font-[Poppins] dark:text-sky-400 mb-4 ${
            seccion.titulo === "Vantrust" ||
            seccion.titulo === "CCHC" ||
            seccion.titulo === "COK" ? "text-right ml-auto" : ""
            }`}
            >
            {seccion.titulo}
            </h2>
              <p className="text-sm sm:text-base font-barlow text-gray-700 dark:text-gray-300 leading-relaxed">
                {seccion.descripcion}
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                download={false}
                elementClassNames={
                  esCentrada
                    ? "grid grid-cols-2 grid-rows-2 gap-5"
                    : `grid gap-5 ${
                        imagenesVisibles.length === 3
                          ? "grid-cols-2"
                          : "grid-cols-1 sm:grid-cols-2"
                      }`
                }
                onInit={(ref) => {
                  galleryRef.current[seccion.titulo] = ref.instance;
                }}
              >
                {esCentrada ? (
                  <>
                    {imagenesVisibles.slice(0, 2).map((img, i) => (
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
                    <a
                      href={imagenesVisibles[2].src}
                      data-sub-html={`<p>${imagenesVisibles[2].descripcion}</p>`}
                      className="col-span-2 flex justify-center"
                    >
                      <img
                        src={imagenesVisibles[2].src}
                        alt={`${seccion.titulo} - Foto 3`}
                        loading="lazy"
                        className="w-1/2 h-64 object-cover rounded-xl shadow-md brightness-105 hover:scale-105 transition-transform duration-300"
                      />
                    </a>
                  </>
                ) : (
                  <>
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
                  </>
                )}

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
                <div className="text-center mt-4">
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

  {/*  <motion.div
        className="bg-[#011E31] text-white rounded-2xl p-10 text-center mt-20 shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={secciones.length + 1}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">
          ¿Tienes un proyecto clínico en mente?
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
      </motion.div> */}
    </div>
  );
};

export default PEmblematicos