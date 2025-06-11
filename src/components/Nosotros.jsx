import React from 'react';

const Nosotros = () => {
  return (
    <section id="nosotros" className="p-6 md:p-12 flex flex-col">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Columna Alianzas */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-gray-500 mb-4 text-left">Alianzas</h2>
          <p className="text-gray-600 text-justify text-base md:text-lg font-[Poppins]">
            * prueba 1 
            * prueba 2
          </p>
          
        </div>

        {/* Columna Noticias */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
  <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-gray-500 mb-4 text-center w-full">Noticias</h2>
  <p className="text-gray-600 text-justify text-base md:text-lg font-[Poppins]">
    Mantente al día con nuestras últimas novedades, avances en proyectos, colaboraciones estratégicas y participaciones en ferias del rubro. Compartimos noticias relevantes sobre nuestro trabajo, alianzas y desarrollos que reflejan nuestro compromiso con la innovación y la excelencia en cada proyecto.
  </p>
</div>
      </div>
    </section>
  );
};

export default Nosotros;
