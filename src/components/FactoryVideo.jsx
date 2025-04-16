import React from "react";

const FactoryVideo = () => {
  return (
    <section className="px-4 py-12 ">
      <h2 className="p-6 text-3xl md:text-4xl font-bold font-Popins text-gray-500 mb-6 text-center md:text-left">
        Nuestra Fábrica
      </h2>
      <div className="flex justify-center items-center">
        <div className="max-w-4xl w-full rounded-2xl shadow-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/images/factory-poster.jpg" // Opcional: imagen previa al video
            >
              <source src="/other/nuestra-fabrica.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryVideo;