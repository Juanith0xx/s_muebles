import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const secciones = [
  {
    titulo: "Muebles Área Limpia - Sucia",
    imagenes: [
      "/img/hospitalarios/IMG_1381.JPG",
      "/img/hospitalarios/sucia2.jpg",
      "/img/hospitalarios/limpia3.jpg",
    ],
  },
  {
    titulo: "Estación de Enfermería",
    imagenes: [
      "/img/hospitalarios/enfermeria1.jpg",
      "/img/hospitalarios/enfermeria2.jpg",
    ],
  },
  {
    titulo: "Estaciones Box - Laboratorio",
    imagenes: [
      "/img/hospitalarios/box1.jpg",
      "/img/hospitalarios/laboratorio2.jpg",
    ],
  },
  {
    titulo: "Estantes y Lockers",
    imagenes: [
      "/img/hospitalarios/lockers1.jpg",
      "/img/hospitalarios/estantes2.jpg",
    ],
  },
];

const PHospitalarios = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 mt-10">
        Proyectos Clínicos Hospitalarios
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Ofrecemos soluciones integrales en mobiliario clínico-hospitalario, adaptadas a las normativas sanitarias y estándares de calidad. Nuestra línea incluye estaciones de enfermería, boxes de atención, áreas limpias-sucias y sistemas de almacenamiento para entornos clínicos.
      </p>

      <PhotoProvider>
        {secciones.map((seccion, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
              {seccion.titulo}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {seccion.imagenes.map((src, i) => (
                <PhotoView key={i} src={src}>
                  <img
                    src={src}
                    alt={`${seccion.titulo} ${i + 1}`}
                    className="w-full h-64 object-cover rounded-xl shadow-md cursor-zoom-in hover:scale-105 transition-transform duration-300"
                  />
                </PhotoView>
              ))}
            </div>
          </div>
        ))}
      </PhotoProvider>
    </div>
  );
};

export default PHospitalarios;
