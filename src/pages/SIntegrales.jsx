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
    titulo: "Butacas",
    descripcion: `Somos representantes de la empresa Kotobuki, líder mundial en fabricación de butacas con 6 plantas manufactureras alrededor del mundo.`,
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
    titulo: "Escritorios y Estaciones",
    descripcion: `Realizamos proyectos a la medida de los requerimientos, sin importar el tipo de materialidad y diseño, logrando de esta forma personalizar el mobiliario, dando identidad propia a cada cliente.`,
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
    titulo: "Estantes y Lockers",
    descripcion: `Tenemos un área de Ingeniería integrada por profesionales del área del diseño industrial que dan solución constructiva a todo tipo de requerimientos de mobiliario, entre ellos, Closets a Medida, Lockers Fenólicos y/o Melamínicos, Estantes de almacenamiento, Estanterías y Racks para Tableros Eléctricos, entre otros.`,
     imagenes: [
      { src: "/img/Recepcion/Recepcion_Banco_de_Chile.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Inv_Norte_Sur.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_movix_6.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Backer_Mackenzie.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Bupa.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Carey.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_CHEP.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Johnson.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason_Detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_McCann-15A.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/recepción_Pacific.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepción_Pacific_detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_penta_01-1.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Penta_Financiero.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-23.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-27.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work2.webp", descripcion: "mueble de cliente descripcion" },
     ], 
  },
    {
    titulo: "Farmacias",
    descripcion: `Integramos materialidades y quincallerías de primer nivel (Hafele), para dar soluciones de mobiliario Retail como el caso de Farmacias Ahumada, a quien fabricamos mobiliario integral para sus locales a lo largo del país.`,
     imagenes: [
      { src: "/img/Recepcion/Recepcion_Banco_de_Chile.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Inv_Norte_Sur.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_movix_6.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Backer_Mackenzie.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Bupa.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Carey.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_CHEP.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Johnson.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason_Detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_McCann-15A.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/recepción_Pacific.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepción_Pacific_detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_penta_01-1.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Penta_Financiero.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-23.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-27.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work2.webp", descripcion: "mueble de cliente descripcion" },
     ], 
  },
   {
    titulo: "Kitchenette",
    descripcion: `En este segmento de muebles colaborativos, hemos fabricado, dando soluciones constructivas específicas, para una infinidad de clientes, entre los que se encuentran: Indumotora, We Work, Forus, Jhonson & Jhonson, Vantrust, Nestlé, entre muchos otros.`,
     imagenes: [
      { src: "/img/Recepcion/Recepcion_Banco_de_Chile.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Inv_Norte_Sur.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_movix_6.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Backer_Mackenzie.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Bupa.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Carey.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_CHEP.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Johnson.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason_Detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_McCann-15A.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/recepción_Pacific.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepción_Pacific_detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_penta_01-1.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Penta_Financiero.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-23.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-27.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work2.webp", descripcion: "mueble de cliente descripcion" },
     ], 
  },
   {
    titulo: "Krion",
    descripcion: `Este material, diseñado originalmente por la empresa Dupont bajo la marca Corian®, es utilizado por nuestra empresa en alianza con Porcelanosa y su producto Krion, único existente y disponible bajo las especificaciones originales del producto. Este material ofrece múltiples posibilidades de color y formas que a través de moldes termoformados logran resultados de homogeneidad del material y logrando uniones imperceptibles. Cuenta con propiedades antibacteriales, motivo por el cual es recomendado para usos Clínico-Hospitalarios, Casinos, Laboratorios y otros en el segmento de la salud.`,
     imagenes: [
      { src: "/img/Recepcion/Recepcion_Banco_de_Chile.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Inv_Norte_Sur.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_movix_6.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Backer_Mackenzie.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Bupa.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Carey.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_CHEP.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Johnson.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason_Detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_McCann-15A.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/recepción_Pacific.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepción_Pacific_detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_penta_01-1.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Penta_Financiero.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-23.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-27.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work2.webp", descripcion: "mueble de cliente descripcion" },
     ], 
  },
   {
    titulo: "Muebles Fenólicos",
    descripcion: `Las placas fenólicas marcaron una tendencia en el uso de este tipo de materialidad en Europa, y simultáneamente en Chile, habiendo ejecutado el primer proyecto con mobiliario fenólico para Fundación Arturo Lopez Perez en el año, 2017. Este material, además de su alta resistencia al impacto, ofrece propiedades antibacteriales y antimicrobianas. Hay una gran variedad de colores y espesores, siendo su uso recomendado para cubiertas, revestimientos de muro, y planos frontales de mobiliario (puertas y frentes de cajón). Las marcas disponibles en el mercado nacional son: Fundermax, Merino Latam, Compact LC, Lamitech, Abet Laminati y Karikal.`,
     imagenes: [
      { src: "/img/Recepcion/Recepcion_Banco_de_Chile.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Inv_Norte_Sur.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_movix_6.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Backer_Mackenzie.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Bupa.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Carey.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_CHEP.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Johnson.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason_Detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_McCann-15A.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/recepción_Pacific.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepción_Pacific_detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_penta_01-1.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Penta_Financiero.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-23.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-27.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work2.webp", descripcion: "mueble de cliente descripcion" },
     ], 
  },
     {
    titulo: "Puertas",
    descripcion: `Fabricamos puertas de especialidad para uso Corporativo y Clínico-Hospitalario en varios tipos de terminaciones, entre ellos madera, enchape y laminados fenólicos. De la misma forma, existen variedad de rellenos para las mismas, para dar cumplimiento a requerimientos acústicos y resistencia al fuego (F30). En puertas plomadas, también tenemos una variedad de esquemas constructivos con doble o triple lamina de plomo.`,
     imagenes: [
      { src: "/img/Recepcion/Recepcion_Banco_de_Chile.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Inv_Norte_Sur.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_movix_6.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Backer_Mackenzie.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Bupa.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Carey.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_CHEP.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Johnson.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Leg_Mason_Detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_McCann-15A.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/recepción_Pacific.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepción_Pacific_detalle.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_penta_01-1.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Penta_Financiero.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-23.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Super_Salud-27.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_Vantrust2.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work.webp", descripcion: "mueble de cliente descripcion" },
      { src: "/img/Recepcion/Recepcion_We_Work2.webp", descripcion: "mueble de cliente descripcion" },
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

const SIntegrales = () => {
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
        Soluciones Integrales
      </motion.h1>

      <motion.p
        className="text-lg font-barlow text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeIn}
      >
        Diseño de espacios corporativos que inspiran productividad y reflejan identidad de marca. Creamos soluciones personalizadas de interiorismo corporativo utilizando materiales de alta calidad como melamina, MDF, vidrio templado y acero, garantizando funcionalidad, elegancia y durabilidad en oficinas, salas de reuniones y espacios comunes.
      </motion.p>

      {secciones.map((seccion, index) => {
        const mostrarBotonVerMas =
          seccion.titulo === "Mesas de Reunión" ||
          seccion.titulo === "Palillajes y Revestimientos" ||
          seccion.titulo === "Proyectos Especiales" || 
          seccion.titulo === "Recepciones";

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
          ¿Tienes un proyecto de Interiorismo Corporativo en mente?
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

export default SIntegrales