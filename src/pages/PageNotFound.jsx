import React from 'react';
import { Link } from 'react-router-dom';
import ghostImg from '/img/pacman.png';

const PageNotFound = () => {
  
  return (
    <div className="w-screen h-screen py-12 pb-28 md:px-16 flex flex-col justify-center items-center bg-[#fafafc] dark:bg-gray-900 px-4 text-center overflow-hidden">
      <div className="flex items-center justify-center text-8xl font-bold mb-8 text-red-600">
        <span >4</span>
        <img src={ghostImg} alt="Ghost" className="w-25 h-25 mx-2" />
        <span>4</span>
      </div>

      <h2 className="text-3xl md:text-3xl font-bold font-[Poppins] text-gray-700 dark:text-white mb-2">
        Página en construcción
      </h2>
      <p className="text-gray-600 font-[Poppins] dark:text-gray-300 mb-6">
        Estamos trabajando para traerte esta sección muy pronto.
      </p>
      <Link
        to="/"
        className="bg-[#D33834] text-white font-[Poppins] font-bold py-2 px-4 rounded hover:bg-red-700 transition z-10"
      >
        Volver al Inicio
      </Link>

    
    </div>
  );
};

export default PageNotFound;