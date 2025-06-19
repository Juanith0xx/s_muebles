import { Link } from "react-router-dom";
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
    <div className="w-full max-w-screen-xl mx-auto mt-6 px-4 md:px-6 lg:px-12">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[500px] rounded-xl overflow-hidden"
          >
            {/* Imagen clickeable */}
            <Link to={slide.link}>
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[600px] object-cover object-center transition-all duration-500"
              />
            </Link>

            {/* Botón clickeable */}
            <Link
              to={slide.link}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-red-600 hover:bg-red-700 text-white font-[Montserrat] px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base md:text-base font-semibold rounded-md shadow-md transition duration-300"
            >
              {slide.label}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
