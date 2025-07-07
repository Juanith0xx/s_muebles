import React from 'react';

const noticias = [
  {
    titulo: 'Inauguramos centro modular en Las Condes',
    descripcion:
      'Nuestro nuevo proyecto integra soluciones de última generación en diseño clínico modular, realizado junto a Cabinarent y Häfele.',
    imagen: '/img/noticia-proyecto.jpg',
    link: '/noticias/centro-modular'
  },
  {
    titulo: 'Participamos en Expo Construye 2025',
    descripcion:
      'Presentamos nuestras soluciones modulares para espacios corporativos en la feria líder del sector construcción y diseño.',
    imagen: '/img/expo-construye.jpg',
    link: '/noticias/expo-construye-2025'
  },
  {
    titulo: 'Nueva alianza estratégica con Porcelanosa',
    descripcion:
      'Nos unimos a Porcelanosa para integrar superficies de alta gama en nuestros proyectos, elevando calidad y diseño.',
    imagen: '/img/alianza-porcelanosa.jpg',
    link: '/noticias/alianza-porcelanosa'
  },
  {
    titulo: 'Nueva alianza estratégica con Porcelanosa',
    descripcion:
      'Nos unimos a Porcelanosa para integrar superficies de alta gama en nuestros proyectos, elevando calidad y diseño.',
    imagen: '/img/alianza-porcelanosa.jpg',
    link: '/noticias/alianza-porcelanosa'
  }
];

const alianzas = [
  { nombre: 'Häfele', url: 'https://www.hafele.cl' },
  { nombre: 'Porcelanosa', url: 'https://www.porcelanosa.com' },
  { nombre: 'Abet Laminati', url: 'https://laminati.cl/' },
  { nombre: 'Robfu', url: 'https://www.robfu.com' },
  { nombre: 'Merino', url: 'https://www.merinolaminates.com' },
  { nombre: 'Cabinarent', url: 'https://www.cabinarent.cl' }
];

const AlianzasNoticias = () => {
  return (
    <section id="nosotros" className="w-full px-4 sm:px-6 md:px-12 py-16 bg-red-500">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row text-center">

        {/* Alianzas */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold font-[Barlow] text-white mb-6 ">
            Alianzas
          </h2>
          <ul className="text-white text-2xl hover:underline sm:text-lg lg:text-2xl font-[Source Sans 3] space-y-4">
            {alianzas.map(({ nombre, url }) => (
              <li key={nombre} className=''>
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
                className="w-full group rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white transition-all hover:shadow-xl"
              >
                <figure>
                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </figure>
                <div className="p-4">
                  <h3 className="text-lg font-bold font-[Inter] text-gray-800 group-hover:text-[#d33834] transition-colors">
                    {noticia.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 font-[Source Sans 3] leading-relaxed">
                    {noticia.descripcion}
                  </p>
                  <a
                    href={noticia.link}
                    className="inline-block mt-3 text-sm font-semibold text-[#d33834] hover:underline"
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
