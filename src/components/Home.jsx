import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  const slides = [
    {
      src: "/img/Carrusel/respaldo_HPL.png", // Imagen alta resolución recomendada (mín 1920x1080)
      label: "Proyectos Clínicos Hospitalarios",
      link: "/productos/proyectos_clinicos_hospitalarios",
    },
    {
      src: "/img/Carrusel/Puertas_HPL.jpg",
      label: "Puertas HPL y Marcos Telescópicos",
      link: "/productos/puertas_hpl_marcos_telescopicos",
    },
    {
      src: "/img/Carrusel/forus.jpg",
      label: "Proyectos Int. Corporativos",
      link: "/productos/proyectos_int_corporativos",
    },
    {
      src: "/images/slider4.jpg",
      label: "Soluciones Integrales",
      link: "/productos/soluciones_integrales",
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-6 px-4 md:px-6 lg:px-12">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[600px] rounded-xl overflow-hidden"
          >
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover object-center transition-all duration-500"
              // Cambia a object-cover si prefieres que cubra todo el contenedor con posible recorte:
              // className="w-full h-full object-cover object-center transition-all duration-500"
            />
            <a
              href={slide.link}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-red-600 hover:bg-red-700 text-white font-[Montserrat] px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base md:text-lg font-semibold rounded-md shadow-md transition duration-300"
            >
              {slide.label}
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
