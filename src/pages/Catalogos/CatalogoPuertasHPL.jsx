import React from 'react'

const CatalogoPuertasHPL = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* Encabezado con botón */}
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Catálogo Puertas HPL</h1>
        <a
          href="/other/Catalogo_Puertas_HPL.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Descargar PDF
        </a>
      </div>

      {/* Visor PDF */}
      <div className="flex-grow">
        <iframe
          src="/other/Catalogo_Puertas_HPL.pdf"
          title="Catálogo Puertas HPL"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  )
}

export default CatalogoPuertasHPL
