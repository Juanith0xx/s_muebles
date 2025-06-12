import React from 'react'

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
]

const AlianzasNoticias = () => {
  return (
    <section id="nosotros" className="px-4 sm:px-6 md:px-12 py-8 flex flex-col mt-10 bg-[#d33834]">
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* Columna Alianzas */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-55">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[Montserrat] text-gray-100 mb-4 text-left">
            Alianzas
          </h2>

          <ul className="list-disc list-inside text-gray-100 text-base sm:text-lg md:text-xl font-[Montserrat] space-y-2">
            {["Häfele", "Porcelanosa", "Abet Laminati", "Robfu", "Merino", "Cabinarent"].map((marca) => (
              <li
                key={marca}
                className="cursor-pointer hover:font-semibold font-[Montserrat]"
              >
                <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full">
                  {marca}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna Noticias */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[Montserrat] text-gray-100 mb-6 text-left md:text-center w-full">
            Noticias
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 w-full">
            {noticias.map((noticia, index) => (
              <article
                key={index}
                className="group rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white transition-all hover:shadow-xl"
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
                  <h3 className="text-lg font-bold font-[Montserrat] text-gray-800 group-hover:text-[#d33834] transition-colors">
                    {noticia.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 font-[Montserrat]">{noticia.descripcion}</p>
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
  )
}

export default AlianzasNoticias
