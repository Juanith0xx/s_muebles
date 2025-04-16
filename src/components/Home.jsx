import React, { useEffect, useState } from 'react';

const generateRandomPosition = () => {
  const positions = ['top', 'bottom'];
  const vertical = positions[Math.floor(Math.random() * positions.length)];
  const verticalValue = `${Math.floor(Math.random() * 70)}%`;

  const horizontal = Math.random() > 0.5 ? 'left' : 'right';
  const horizontalValue = `${Math.floor(Math.random() * 80)}%`;

  return {
    [vertical]: verticalValue,
    [horizontal]: horizontalValue,
  };
};

const generateRombos = (count) => {
  return Array.from({ length: count }, (_, i) => {
    const size = [16, 20, 24, 28, 32, 36, 40][i % 7];
    const rotate = [0, 6, 12, 45][i % 4];
    const opacity = [60, 70, 75, 80, 85, 90][i % 6];

    return {
      id: i,
      size,
      rotate,
      opacity,
      position: generateRandomPosition(),
    };
  });
};

const Home = () => {
  const [rombos, setRombos] = useState([]);

  useEffect(() => {
    setRombos(generateRombos(12));
  }, []);

  return (
    <section
      className="
        relative 
        w-full 
        min-h-[22rem] sm:min-h-[28rem] md:min-h-[32rem]
        mt-6
        bg-[#d33834] 
        overflow-hidden 
        flex 
        items-center 
        justify-start
        px-4 sm:px-6 md:px-12 
        py-16 sm:py-24 md:py-28
      "
    >
      {/* Rombos decorativos */}
      <div className="absolute inset-0 z-0">
        {rombos.map(({ id, size, rotate, opacity, position }) => (
          <div
            key={id}
            className="absolute bg-white shadow-md rounded transition-all duration-500"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity / 100,
              transform: `rotate(${rotate}deg)`,
              ...position,
            }}
          />
        ))}
      </div>

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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-left mb-6">
          Una <br /> Solución <br /> Integral
        </h1>

        <a
          href="mailto:contacto@sistemamuebles.cl"
          className="bg-gray-400 hover:bg-gray-500 !text-white font-bold rounded w-48 sm:w-56 h-10 sm:h-12 flex items-center justify-center transition duration-300"
        >
          Más Informaciones
        </a>
      </div>
    </section>
  );
};

export default Home;
