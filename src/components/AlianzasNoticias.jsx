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
  {
    titulo: "Nueva alianza estratégica con Porcelanosa",
    descripcion:
      "Nos unimos a Porcelanosa para integrar superficies de alta gama en nuestros proyectos, elevando calidad y diseño.",
    imagen: "/img/alianza-porcelanosa.jpg",
    link: "/noticias/alianza-porcelanosa",
  },
  {
    titulo: "Nueva alianza estratégica con Porcelanosa",
    descripcion:
      "Nos unimos a Porcelanosa para integrar superficies de alta gama en nuestros proyectos, elevando calidad y diseño.",
    imagen: "/img/alianza-porcelanosa.jpg",
    link: "/noticias/alianza-porcelanosa",
  },
];

const alianzas = [
  { nombre: "Häfele", url: "https://www.hafele.cl" },
  { nombre: "Porcelanosa", url: "https://www.porcelanosa.com" },
  { nombre: "Abet Laminati", url: "https://laminati.cl/" },
  { nombre: "Robfu", url: "https://www.robfu.com" },
  { nombre: "Merino", url: "https://www.merinolaminates.com" },
  { nombre: "Cabinarent", url: "https://www.cabinarent.cl" },
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
      id="nosotros"
      className="w-full px-4 sm:px-6 md:px-12 py-16 bg-gray-600"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row text-center">
        {/* Alianzas */}
        <div
          ref={alianzasRef}
          className={`w-full lg:w-1/2 transition-opacity duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-[Poppins] text-white mb-6">
            Alianzas
          </h2>
          <ul className="text-white text-xl sm:text-lg lg:text-2xl font-[Barlow] space-y-4">
            {alianzas.map(({ nombre, url }, index) => (
              <li
                key={nombre}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`transition-all duration-700 ease-out ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:font-semibold"
                >
                  {nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Noticias */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold font-[Poppins] text-white mb-6 sm:text-center">
            Noticias
          </h2>
          <div className="grid grid-cols-2 gap-6 w-full">
            {noticias.map((noticia, index) => (
              <article
                key={index}
                className="relative w-full group rounded-2xl overflow-hidden bg-white border border-gray-200 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Overlay animado desde abajo */}
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#142063] opacity-90 transition-all duration-500 ease-in-out group-hover:h-full z-10" />

                <figure className="relative w-full h-44 overflow-hidden z-20">
                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
                    loading="lazy"
                  />
                </figure>

                <div className="p-4 relative z-20">
                  <h3 className="text-lg font-bold font-[Inter] text-gray-800 transition-colors group-hover:text-white">
                    {noticia.titulo}
                  </h3>
                  <p className="text-sm mt-2 font-[Source Sans 3] leading-relaxed text-gray-600 transition-colors group-hover:text-white">
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
        </div>
      </div>
    </section>
  );
};

export default AlianzasNoticias;
