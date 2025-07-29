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
    titulo: "Muebles Área Limpia y Área Sucia",
    descripcion: `Mobiliario fabricado con estructura de MDF laminado en ambas caras (HPL 0.8 mm), opción de cubiertas en Krion de 12 mm, zócalo sanitario y bordes anti rebalse. También ofrecemos cubiertas y receptáculos en acero inoxidable con borde sanitario.`,
    imagenes: [
      { src: "/img/hospitalarios/Area_sucia_limpia_Bupa.webp", descripcion: "" },
      { src: "/img/hospitalarios/Area_sucia_limpia_Bupa2.webp", descripcion: "" },
      { src: "/img/hospitalarios/Area_sucia_limpia_Bupa5.webp", descripcion: "" },
      { src: "/img/hospitalarios/Area_sucia_limpia_Bupa6.webp", descripcion: "" },
      { src: "/img/hospitalarios/Area_sucia_limpia_Bupa9.webp", descripcion: "" },
      { src: "/img/hospitalarios/Area_sucia-limpia_Bupa7.webp", descripcion: "" },
      { src: "/img/hospitalarios/Area_sucia_limpia_Clinica_Bio_Bio.webp", descripcion: "" },
      { src: "/img/hospitalarios/Area_sucia_limpia_Clinica_Bio_Bio1.webp", descripcion: "" },
      { src: "/img/hospitalarios/Area_sucia_limpia_Clinica_Bio_Bio2.webp", descripcion: "" },
      { src: "/img/hospitalarios/Area_sucia_limpia_Clinica_Bio_Bio3.webp", descripcion: "" },
    ],
  },
  {
    titulo: "Estaciones de Enfermería",
    descripcion: `Diseños estructurados con perfilería metálica electropintada o costillaje de terciado de 18 mm forrado en MDF. Frentes y cubiertas disponibles en HPL de 12 mm o Krion, ideales para zonas de alta exigencia sanitaria.`,
    imagenes: [
      { src: "/img/enfermeria/Enfermeria_falp1.webp", descripcion: "" },
      { src: "/img/enfermeria/Enfermeria_falp2.webp", descripcion: "" },
      { src: "/img/enfermeria/Enfermeria_postoperatorio_falp.webp", descripcion: "" },
    ],
  },
  {
    titulo: "Consultas, Box y Laboratorios",
    descripcion: `Muebles de laboratorio con estructura metálica y cubiertas en Krion de 12 mm, con zócalo sanitario y anti rebalse. Escritorios médicos con faldón perforado, estructura metálica y cubiertas en MDF HPL 0.8 mm. Herrajes marca Hafele de alta calidad.`,
    imagenes: [
      { src: "/img/laboratorio/Box_urgencia_Bupa.webp", descripcion: "" },
      { src: "/img/laboratorio/Consulta_medica_Bupa_Plaza_Norte.webp", descripcion: "" },
      { src: "/img/laboratorio/Consulta_medica_Bupa.webp", descripcion: "" },
      { src: "/img/laboratorio/Consulta_medica_Bupa2.webp", descripcion: "" },
      { src: "/img/laboratorio/Laboratorio_Bio_Bio.webp", descripcion: "" },
      { src: "/img/laboratorio/Laboratorio_Bio_Bio2.webp", descripcion: "" },
      { src: "/img/laboratorio/Laboratorio_Bio_Bio3.webp", descripcion: "" },
      { src: "/img/laboratorio/Laboratorio_Bio_Bio4.webp", descripcion: "" },
      { src: "/img/laboratorio/Laboratorio_Bio _Bio5.webp", descripcion: "" },
      { src: "/img/laboratorio/Laboratorio_Bio_Bio6.webp", descripcion: "" },
      { src: "/img/laboratorio/Mueble_apoyo_enfermeria_Bupa.webp", descripcion: "" },
    ],
  },
  {
    titulo: "Estantes y Lockers",
    descripcion: `Fabricados en MDF laminado (HPL 0.8 mm) con interiores que incluyen barra de colgar, repisas para calzado, bisagras de cierre suave marca Hafele y opción de puertas vidriadas con marco de aluminio marca HBT.`,
     imagenes: [
      { src: "/img/lockers/Lockers_ACHS_Los_Andes.webp", descripcion: "" },
      { src: "/img/lockers/Estantes_Falp_2.webp", descripcion: "" },
      { src: "/img/lockers/Estantes_Falp.webp", descripcion: "" },
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

const PHospitalarios = () => {
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
        <title>Mobiliario Clínico Hospitalario a Medida | Sistema Muebles</title>
        <meta
          name="description"
          content="Muebles clínicos y hospitalarios a medida. Estaciones de enfermería, laboratorios, áreas limpias, lockers y más. Diseño funcional y sanitariamente eficiente."
        />
        <meta
          name="keywords"
          content="mobiliario hospitalario, estaciones de enfermería, muebles para clínicas, mobiliario médico, lockers hospitalarios, krion, MDF laminado"
        />
      </Helmet>

      <motion.h1
        className="text-3xl sm:text-5xl font-bold font-poppins text-center text-[#011E31] dark:text-white mt-10 mb-6 pt-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        Mobiliario Clínico Hospitalario a Medida
      </motion.h1>

      <motion.p
        className="text-lg font-barlow text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeIn}
      >
        Soluciones a medida para hospitales, clínicas y laboratorios. Diseñamos
        muebles resistentes, seguros y sanitariamente óptimos con materiales como
        Krion, MDF laminado y acero inoxidable.
      </motion.p>

      {secciones.map((seccion, index) => {
        const mostrarBotonVerMas =
          seccion.titulo === "Muebles Área Limpia y Área Sucia" ||
          seccion.titulo === "Consultas, Box y Laboratorios";

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
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#011E31] font-[Poppins] dark:text-sky-400 mb-4">
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

      <motion.div
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
      </motion.div>
    </div>
  );
};

export default PHospitalarios