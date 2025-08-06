// src/pages/NoticiaDetalle.jsx

import { useParams, Link } from "react-router-dom";
import { noticias } from "../components/data/noticias";

const NoticiaDetalle = () => {
  const { slug } = useParams();
  const noticia = noticias.find(n => n.slug === slug);

  if (!noticia) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500 text-lg font-[Barlow]">Noticia no encontrada</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-[#142063] text-white font-semibold rounded-full shadow-md hover:bg-[#0f1a4d] transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto">
      <img
        src={noticia.imagen}
        alt={noticia.titulo}
        className="rounded-xl mb-6 w-full h-80 object-cover"
        loading="lazy"
      />
      <h1 className="text-3xl sm:text-4xl font-bold text-[#142063] font-[Poppins] mb-6">
        {noticia.titulo}
      </h1>
      <p className="text-gray-700 text-lg font-[Barlow] whitespace-pre-line leading-relaxed mb-10">
        {noticia.contenido || noticia.descripcion}
      </p>

      {/* Botón para volver al home */}
      <div className="text-center">
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#d33834] text-white font-semibold rounded-full shadow-md hover:bg-[#b72c2a] transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default NoticiaDetalle;
