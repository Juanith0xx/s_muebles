import React from "react";

const FactoryVideo = () => {
  return (
    <section className="px-4 py-12 bg-gradient-to-r from-[#d33834] via-[#a52b29] to-[#d33834] bg-[length:200%_200%] animate-gradient-x">
      <h2 className="p-6 text-3xl md:text-4xl font-semibold font-Popins text-white mb-6 text-center md:text-left">
        Nuestra Fábrica
      </h2>
      <div className="flex justify-center items-center">
        <div className="max-w-4xl w-full rounded-2xl shadow-xl overflow-hidden border border-white/20 p-4 bg-white/5 backdrop-blur-md">
          <div className="aspect-w-16 aspect-h-9">
            <video
              className="w-full h-full object-cover rounded-lg"
              controls
              poster="/images/factory-poster.jpg"
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
