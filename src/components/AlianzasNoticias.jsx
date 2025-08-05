import React, { useState, useEffect, useRef } from "react";

const noticias = [
  {
    titulo: "Inauguramos centro modular en Las Condes",
    descripcion:
      "Nuestro nuevo proyecto integra soluciones de última generación en diseño clínico modular, realizado junto a Cabinarent y Häfele.",
    imagen: "/img/noticia-proyecto.jpg",
    link: "/noticias/centro-modular",
  },
  {
    titulo: "Participamos en Expo Construye 2025",
    descripcion:
      "Presentamos nuestras soluciones modulares para espacios corporativos en la feria líder del sector construcción y diseño.",
    imagen: "/img/expo-construye.jpg",
    link: "/noticias/expo-construye-2025",
  },
 
];

const AlianzasNoticias = () => {
  const [visible, setVisible] = useState(false);
  const alianzasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (alianzasRef.current) {
      observer.observe(alianzasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="w-full px-4 sm:px-6 md:px-12 py-12 sm:py-16 bg-gray-600"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row text-center lg:text-left">
  
       {/* Alianzas con imagen centrada */}
<div
  ref={alianzasRef}
  className={`w-full lg:w-1/2 flex flex-col items-center justify-center text-center transition-opacity duration-700 ${
    visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
  }`}
>
  <img
    src="/img/Nosotros.webp"
    alt="Alianzas estratégicas"
    className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto rounded-xl shadow-lg mb-6"
    loading="lazy"
  />
  <p className="text-white text-base sm:text-lg font-[Barlow] max-w-md">
    Trabajamos junto a marcas líderes para ofrecer soluciones modulares de alto nivel, combinando diseño, funcionalidad y tecnología en cada proyecto.
  </p>
</div>

        {/* Noticias */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[Poppins] text-white mb-6">
            Noticias
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {noticias.map((noticia, index) => (
              <article
                key={index}
                className="relative w-full group rounded-2xl overflow-hidden bg-white border border-gray-200 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Overlay animado desde abajo */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#142063] opacity-90 transition-all duration-500 ease-in-out group-hover:h-full z-10" />

                <figure className="relative w-full h-24 overflow-hidden z-20">
                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                </figure>

                <div className="p-4 relative z-20">
                  <h3 className="text-lg sm:text-xl font-bold font-[Poppins] text-gray-800 transition-colors group-hover:text-white">
                    {noticia.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm mt-2 font-[Barlow] leading-relaxed text-gray-600 transition-colors group-hover:text-white">
                    {noticia.descripcion}
                  </p>
                  <a
                    href={noticia.link}
                    className="inline-block mt-3 text-sm font-semibold text-[#d33834] transition-colors group-hover:text-white hover:underline"
                  >
                    Leer más →
                  </a>
                </div>
              </article>
            ))}
          </div>
          {/* Botón "Ver más noticias" */}
        <div className="mt-8 text-center">
        <a
        href="http://localhost:5173/noticias"
        className="inline-block px-6 py-3 bg-[#d33834] text-white font-semibold rounded-full shadow-md hover:bg-[#b72c2a] transition-colors duration-300"
        >
             Ver más noticias
        </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AlianzasNoticias;
