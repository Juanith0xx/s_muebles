import React from 'react';
import { useNavigate } from 'react-router-dom';

const PdfViewer = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between shadow-md">
        <h1 className="text-sm font-semibold text-center flex-grow">Catálogo</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-white text-gray-900 px-3 py-1 rounded text-sm hover:bg-gray-200 transition"
        >
          Volver al inicio
        </button>
      </div>

      <iframe
        src="/other/Catalogo_Puertas_HPL.pdf"
        title="Catálogo Puertas HPL"
        className="w-full h-full"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default PdfViewer;
