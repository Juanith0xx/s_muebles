import React from 'react';

const Home = () => {
  return (
    <section 
      className="
        relative 
        w-full 
        min-h-[22rem] sm:min-h-[28rem] md:min-h-[32rem]
        mt-6
        bg-cover bg-center bg-no-repeat
        overflow-hidden 
        flex 
        items-center 
        justify-start
        px-4 sm:px-6 md:px-12 
        py-16 sm:py-24 md:py-28
      "
      style={{
        backgroundImage: `url('/img/fondo-3.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
      }}
    >
      {/* Contenido principal */}
      <div
        className="
          relative 
          z-10 
          flex 
          flex-col 
          items-start 
          max-w-2xl 
          text-white 
          font-[Poppins] 
          text-sm sm:text-base md:text-lg
        "
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-Popins font-bold text-left mb-6">
          Una <br /> Solución <br /> Integral
        </h1>

        <a className="bg-[#D33834] !text-white font-Popins font-bold rounded w-48 sm:w-56 h-10 sm:h-12 flex items-center justify-center transition duration-300"
          href="mailto:contacto@sistemamuebles.cl"
         
        >
          Más Informaciones
        </a>
      </div>
    </section>
  );
};

export default Home;