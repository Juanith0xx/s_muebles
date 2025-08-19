import React from "react";
import { noticias } from "../components/data/noticias";
import { Link } from "react-router-dom";

const Noticias = () => {
  return (
    <section className="min-h-screen w-full bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-[Poppins] text-black mb-4 mt-13">
            Noticias & Proyectos
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-[Barlow]">
            Entérate de nuestros últimos avances, colaboraciones y entregas recientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {noticias.map((noticia, index) => (
            <article
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 font-[Poppins] group-hover:text-[#142063]">
                  {noticia.titulo}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed font-[Barlow]">
                  {noticia.descripcion}
                </p>
                <Link
                  to={noticia.link}
                  className="inline-block mt-4 text-[#d33834] text-sm font-semibold hover:underline group-hover:text-[#142063]"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;
