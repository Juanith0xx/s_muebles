import React, { useEffect } from 'react';

const CatalogoPuertasHPL = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Menos de 768px = móvil
    if (isMobile) {
      window.location.href = "/other/Catalogo_Puertas_HPL.pdf";
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Encabezado */}
      <div className="p-4 bg-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left">
          Catálogo Puertas HPL
        </h1>
        <div className="flex gap-2 justify-center sm:justify-end">
          <a
            href="/other/Catalogo_Puertas_HPL.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Ver PDF
          </a>
          <a
            href="/other/Catalogo_Puertas_HPL.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Descargar PDF
          </a>
        </div>
      </div>

      {/* Visor PDF solo en escritorio */}
      <div className="flex-grow overflow-y-auto hidden sm:block">
        <iframe
          src="/other/Catalogo_Puertas_HPL.pdf"
          title="Catálogo Puertas HPL"
          className="w-full h-full min-h-[400px] sm:min-h-[600px]"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default CatalogoPuertasHPL;
