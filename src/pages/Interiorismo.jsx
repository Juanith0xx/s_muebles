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
    titulo: "Mesas de Reunión",
    descripcion: `Mesas de Reunión enchapadas en HPL o en madera barnizadas con Poliuretano (PU) con opciones de base metálica o MDF enchapado y variadas alternativas para canalización eléctrica y de datos. Variedad de terminación en cantos (madera sólida, chaflán o canto recto bicapa.`,
    imagenes: [
      { src: "/img/Interiorismo/Mesa_Reunion_movix_8.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_coloso.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_FL_Smidth.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_Frusan.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_Magnus_Capital.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_McCann.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_movix_3.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_Nestle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_nestle_18.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_Penta.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_PLink.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_PLink_2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_Plink_7.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunion_PLink3.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Interiorismo/Mesa_Reunon_Octogone.webp", descripcion: "mueble de cliente descripcion" },
    ],
  },
  {
    titulo: "Palillajes y Revestimientos",
    descripcion: `Construidos en MDF revestidos en madera o HPL 0,8 mm en variadas especies y colores con elementos de fijación a la vista metálicos u ocultos mediante taquetes de madera en piso y cielo.`,
    imagenes: [
      { src: "/img/Palillajes/Palillaje_Carey.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Celosia_horizontar_Fernandez_Wood2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Palillaje_CHEP_05.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Palillaje_Inv_Norte_Sur.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Palillaje_CHEP_08.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Palillaje_Fernandez_Wood.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Palillaje_Inv_Norte_Sur.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Palillaje_Nestle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Revestimiento_Acustico_ACHS.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Revestimiento_acustico_ACHS2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Revestimiento_Transoceanica.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Revestimiento_Transoceanica2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Revestimiento_Vantrust.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Palillaje_Carey2.webp", descripcion: "mueble de cliente descripcion" },
    ],
  },
  {
    titulo: "Proyectos Especiales",
    descripcion: `Nuestro departamento de Ingeniería da soluciones constructivas inteligentes para todos los encargos de mobiliario en los mas diversos materiales para las áreas de Hotelería, Oficinas Corporativas, Clínico Hospitalarias y Residenciales.`,
    imagenes: [
      { src: "/img/Palillajes/Palillaje_Carey.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Consulta_medica_Bupa_Plaza_Norte.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Consulta_medica_Bupa.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Consulta_medica_Bupa2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Laboratorio_Bio_Bio.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Laboratorio_Bio_Bio2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Laboratorio_Bio_Bio3.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Laboratorio_Bio_Bio4.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Laboratorio_Bio _Bio5.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Laboratorio_Bio_Bio6.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Palillajes/Mueble_apoyo_enfermeria_Bupa.webp", descripcion: "mueble de cliente descripcion" },
    ],
  },
  {
    titulo: "Recepciones",
    descripcion: `Nuestra empresa colabora con arquitectos y diseñadores para dar la identidad que cada empresa requiere plasmar a través del mobiliario. En este esquema, proponemos soluciones técnicas que abordan el equipamiento integral de espacios de trabajo.`,
     imagenes: [
      { src: "/img/lockers/Lockers_ACHS_Los_Andes.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/lockers/Estantes_Falp_2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/lockers/Estantes_Falp.webp", descripcion: "mueble de cliente descripcion" },
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

const Interiorismo = () => {
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
        Interiorismo Corporativo
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
          seccion.titulo === "Mesas de Reunión" ||
          seccion.titulo === "Palillajes y Revestimientos";

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
          href="/contacto"
          className="inline-block bg-sky-700 text-white font-semibold px-6 py-3 rounded-full  transition-colors"
        >
          Solicitar Cotización
        </a>
      </motion.div>
    </div>
  );
};

export default Interiorismo