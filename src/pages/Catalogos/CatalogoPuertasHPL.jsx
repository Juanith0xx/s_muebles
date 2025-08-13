import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // si estás usando React Router

const CatalogoPuertasHPL = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // para redirigir al inicio

  useEffect(() => {
    const mobile = window.innerWidth < 640;
    setIsMobile(mobile);

    if (mobile) {
      window.location.href = "/other/Catalogo_Puertas_HPL.pdf";
    }
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white gap-4 px-4">
        <p className="text-gray-600 text-sm animate-pulse">Redirigiendo al catálogo...</p>
        <button
          onClick={() => navigate('/')} // ajusta la ruta según tu estructura
          className="px-4 py-2 bg-[#D33834] text-white text-sm rounded shadow transition duration-200"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Navbar móvil */}
      <div className="sm:hidden bg-gray-900 text-white px-4 py-3 flex items-center justify-between shadow-md">
        <FiMenu className="text-xl" />
        <h1 className="text-sm font-semibold text-center flex-grow">Catálogo</h1>
        <div className="w-6" />
      </div>

      {/* Menú escritorio */}
      <div className="hidden sm:flex p-4 bg-gray-100 flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left">
          Catálogo Puertas HPL
        </h1>
      </div>

      {/* Visor PDF solo en escritorio */}
      <div className="hidden sm:block flex-grow overflow-y-auto">
        <iframe
          src="/other/Catalogo_Puertas_HPL.pdf"
          title="Catálogo Puertas HPL"
          className="w-full h-full min-h-[600px]"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default CatalogoPuertasHPL;