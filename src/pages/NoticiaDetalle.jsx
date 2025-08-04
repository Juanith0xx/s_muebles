// src/pages/NoticiaDetalle.jsx

import { useParams } from "react-router-dom";
import { noticias } from "../components/data/noticias";

const NoticiaDetalle = () => {
  const { slug } = useParams();
  const noticia = noticias.find(n => n.slug === slug);

  if (!noticia) return <p className="text-center py-20 text-gray-500">Noticia no encontrada</p>;

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 max-w-5xl mx-auto">
      <img src={noticia.imagen} alt={noticia.titulo} className="rounded-xl mb-6 w-full h-80 object-cover" />
      <h1 className="text-3xl sm:text-4xl font-bold text-[#142063] font-[Poppins] mb-4">
        {noticia.titulo}
      </h1>
      <p className="text-gray-700 text-lg font-[Barlow]">
        {/* Aquí podrías tener contenido más largo si lo agregas en el JSON */}
        {noticia.descripcion}
      </p>
    </section>
  );
};

export default NoticiaDetalle;
