import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Nosotros = () => {
  return (
    <div id="nosotros"
      className="min-h-screen pt-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto space-y-16 text-gray-800">
      {/* 1. Título principal */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          En Sistema Muebles nos dedicamos a diseñar y fabricar soluciones personalizadas en mobiliario clínico, hospitalario y corporativo, con un enfoque en calidad, innovación y compromiso humano.
        </p>
      </section>

      {/* 2. Misión, Visión y Valores */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Nuestra Misión</h3>
          <p className="text-gray-600">Brindar soluciones funcionales, seguras y estéticas que mejoren los espacios de trabajo y salud de nuestros clientes.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Nuestra Visión</h3>
          <p className="text-gray-600">Ser referentes en innovación y excelencia en mobiliario institucional y clínico en toda Latinoamérica.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Nuestros Valores</h3>
          <ul className="text-gray-600 list-disc list-inside space-y-1">
            <li className="leading-relaxed">Compromiso</li>
            <li className="leading-relaxed">Innovación</li>
            <li className="leading-relaxed">Responsabilidad</li>
            <li className="leading-relaxed">Trabajo en equipo</li>
          </ul>
        </div>
      </section>


      {/* 3. Historia o Trayectoria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Transformamos tu visión en un proyecto impecable.</h2>
        <p className="text-gray-600 leading-relaxed">
          Fabricamos soluciones constructivas inteligentes en mobiliario, puertas y superficies para hoteles, residencias e inmobiliarias. Aplicamos ingeniería de precisión y materiales certificados como HPL, Krion® y cuarzo para proyectos complejos, exigentes y personalizados. Nuestra experiencia de 23 años, compromiso con la calidad y cumplimiento de plazos críticos nos posiciona como socios estratégicos para arquitectos, constructoras e instituciones. Creamos espacios duraderos, higiénicos y funcionales que evolucionan con el uso y resisten el tiempo.
        </p>
      </section>

   <section>
  <h2 className="text-2xl font-bold mb-4">Nuestra Fábrica</h2>
  <p className="text-gray-600 leading-relaxed mb-8">
    Contamos con una fábrica equipada para desarrollar soluciones constructivas en mobiliario, puertas y superficies. Aplicamos ingeniería de precisión y utilizamos materiales certificados como HPL, Krion® y cuarzo, garantizando funcionalidad, durabilidad e higiene en cada proyecto.
  </p>

  {/* Video local desde /public */}
  <video
    controls
    className="w-full h-auto rounded-lg shadow-lg mb-12"
    src="/other/nuestra-fabrica.mp4"
    type="video/mp4"
  >
    Tu navegador no admite el elemento de video.
  </video>

  {/* Galería de fotos */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <img src="/img/Nosotros/CNC_Taller.JPG" className="rounded-lg shadow-md object-cover" />
    <img src="/img/Nosotros/Maquinas_Taller.JPG" className="rounded-lg shadow-md object-cover" />
    <img src="/img/Nosotros/Taller.JPG" className="rounded-lg shadow-md object-cover" />
  </div>
</section> 

<section className="mt-20">
  <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4 font-[Poppins]">
    Alianzas
  </h2>
  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
    Empresas líderes que eligieron nuestras soluciones
  </p>

  <Slider
    dots={false}
    arrows={false}
    infinite={true}
    autoplay={true}
    autoplaySpeed={2000}
    speed={1200}
    slidesToShow={6}
    slidesToScroll={1}
    cssEase="ease-in-out"
    responsive={[
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ]}
  >
    {[
      { src: "/img/Clientes/nestle.png", alt: "Nestlé" },
      { src: "/img/Clientes/falp.png", alt: "FALP" },
      { src: "/img/Clientes/CCHC.png", alt: "CCHC" },
      { src: "/img/Clientes/ACHS.png", alt: "ACHS" },
      { src: "/img/Clientes/farmacia_ahumada.png", alt: "Ahumada" },
      { src: "/img/Clientes/BCG.png", alt: "BCG" },
    ].map((logo, index) => (
      <div key={index} className="flex justify-center items-center px-4">
        <div className="w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 flex items-center justify-center">
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition duration-300 ease-out"
            loading="lazy"
          />
        </div>
      </div>
    ))}
  </Slider>
</section>

      {/* 4. Equipo humano */}
      {/*
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">Conoce a Nuestro Equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          <div className="text-center">
            <img
              src="/img/equipo/juan.webp"
              alt="Juan Estay"
              className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#142063] mb-4"
            />
            <h3 className="font-semibold text-lg">Juan Estay</h3>
            <p className="text-sm text-gray-500">Director de Proyectos</p>
            <p className="text-sm text-gray-600 mt-2">Especialista en desarrollo y gestión de soluciones hospitalarias personalizadas.</p>
          </div>

          <div className="text-center">
            <img
              src="/img/equipo/juan.webp"
              alt="Juan Estay"
              className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#142063] mb-4"
            />
            <h3 className="font-semibold text-lg">Juan Estay</h3>
            <p className="text-sm text-gray-500">Director de Proyectos</p>
            <p className="text-sm text-gray-600 mt-2">Especialista en desarrollo y gestión de soluciones hospitalarias personalizadas.</p>
          </div>

          <div className="text-center">
            <img
              src="/img/equipo/juan.webp"
              alt="Juan Estay"
              className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#142063] mb-4"
            />
            <h3 className="font-semibold text-lg">Juan Estay</h3>
            <p className="text-sm text-gray-500">Director de Proyectos</p>
            <p className="text-sm text-gray-600 mt-2">Especialista en desarrollo y gestión de soluciones hospitalarias personalizadas.</p>
          </div>

          <div className="text-center">
            <img
              src="/img/equipo/juan.webp"
              alt="Juan Estay"
              className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#142063] mb-4"
            />
            <h3 className="font-semibold text-lg">Juan Estay</h3>
            <p className="text-sm text-gray-500">Director de Proyectos</p>
            <p className="text-sm text-gray-600 mt-2">Especialista en desarrollo y gestión de soluciones hospitalarias personalizadas.</p>
          </div>
        </div>

        
      </section> */}

      {/* 5. CTA o contacto (opcional) */}
      <section className="text-center mt-16 pb-8">
        <h2 className="text-2xl font-bold mb-4">¿Te gustaría saber más?</h2>
        <p className="mb-6 text-gray-600">Estamos aquí para ayudarte a desarrollar el espacio que tu proyecto necesita.</p>
        <a
          href="/contacto/contact"
          className="inline-block bg-[#142063] text-white px-6 py-3 rounded-md hover:bg-[#1f2b8d] transition"
        >
          Contáctanos
        </a>
      </section>
    </div>
  );
};

export default Nosotros;
