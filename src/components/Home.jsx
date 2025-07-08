import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FiChevronRight } from "react-icons/fi";
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
      src: "/img/Carrusel/hospitalarios.jpg",
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
    <div className="w-screen mt-6 pb-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[500px] rounded-xl overflow-hidden"
          >
            <Link to={slide.link}>
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[600px] object-cover object-center transition-all duration-300"
              />
            </Link>

            <Link
              to={slide.link}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:bottom-6 bg-red-600 hover:bg-red-800 text-white font-[Poppins] text-center flex items-center gap-3 px-6 py-2 text-sm sm:text-base font-semibold rounded-full border border-white shadow-md transition duration-300"
            >
              <span className="whitespace-pre-line leading-tight">
                {slide.label}
              </span>
              <span className="border border-white rounded-full p-2">
                <FiChevronRight className="text-white w-6 h-6" />
              </span>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
