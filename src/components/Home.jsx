import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slides = [
    {
      src: "/img/Carrusel/hospitalarios.jpg",
      label: "Proyectos Clínicos Hospitalarios",
      link: "/productos/proyectos_clinicos_hospitalarios",
    },
    {
      src: "/img/Carrusel/Puertas_HPL.webp",
      label: "Puertas HPL y Marcos Telescópicos",
      link: "/productos/puertas_hpl_marcos_telescopicos",
    },
    {
      src: "/img/Carrusel/reunion.webp",
      label: "Proyectos Int. Corporativos",
      link: "/productos/proyectos_int_corporativos",
    },
    {
      src: "/images/reunion.webp",
      label: "Soluciones Integrales",
      link: "/productos/soluciones_integrales",
    },
  ];

  return (
    <div className="w-screen mt-6 pb-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-xl"
          >
            <Link to={slide.link}>
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 px-4">
                <div className="flex items-center justify-center gap-2 sm:gap-3 bg-[#970C10] hover:bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base transition duration-300 shadow-lg border border-white max-w-xs mx-auto">
                  <span className="whitespace-pre-line leading-tight text-center">
                    {slide.label}
                  </span>
                  <span className="border border-white rounded-full p-1 sm:p-2">
                    <FiChevronRight className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
