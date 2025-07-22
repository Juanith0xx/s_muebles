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
      src: "/img/Carrusel/hospitalarios.jpg", // Usa WebP si puedes
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
            className="relative h-[600px] sm:h-[700px] md:h-[800px] overflow-hidden rounded-xl"
          >
            <Link to={slide.link}>
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/30 z-10" />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex items-center gap-3 bg-[#970C10] hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold text-sm sm:text-base transition duration-300 shadow-lg border border-white">
                  <span className="whitespace-pre-line leading-tight">
                    {slide.label}
                  </span>
                  <span className="border border-white rounded-full p-2">
                    <FiChevronRight className="text-white w-6 h-6" />
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
