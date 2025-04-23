import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-2">Página en construcción</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Estamos trabajando para traerte esta sección muy pronto.</p>
      <Link to="/" className="bg-[#D33834] text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default PageNotFound;