import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ghostImg from '/img/pacman.png'; // Asegúrate de que la imagen esté en public o src/assets

const generateCircles = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 30) + 10, // Tamaños entre 10px y 40px
    left: Math.random() * 100, // Posición horizontal aleatoria
    delay: Math.random() * 5, // Demora aleatoria
    duration: 2 + Math.random() * 4, // Duración de caída
  }));
};

const PageNotFound = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    setCircles(generateCircles());
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-4 text-center overflow-hidden">
      <div className="flex items-center justify-center text-8xl font-bold mb-8 text-red-600">
        <span >4</span>
        <img src={ghostImg} alt="Ghost" className="w-25 h-25 mx-2" />
        <span>4</span>
      </div>

      <h2 className="text-3xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-2">
        Página en construcción
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Estamos trabajando para traerte esta sección muy pronto.
      </p>
      <Link
        to="/"
        className="bg-[#D33834] text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition z-10"
      >
        Volver al Inicio
      </Link>

      {/* Círculos cayendo */}
      {circles.map(circle => (
        <div
          key={circle.id}
          className="absolute top-0 rounded-full bg-[#D33834] opacity-60 animate-[fall_linear_infinite]"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.left}%`,
            animationDelay: `${circle.delay}s`,
            animationDuration: `${circle.duration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default PageNotFound;