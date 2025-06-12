import Slider from 'react-slick';
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
    arrows: false
  };

  const slides = [
    {
      src: "/img/slider1.jpg",
      label: "Proyectos Clínicos Hospitalarios",
      link: "/productos/proyectos_clinicos_hospitalarios"
    },
    {
      src: "/img/slider2.jpg",
      label: "Puertas HPL y Marcos Telescópicos",
      link: "/productos/puertas_hpl_marcos_telescopicos"
    },
    {
      src: "/img/slider3.jpg",
      label: "Proyectos Int. Corporativos",
      link: "/productos/proyectos_int_corporativos"
    },
    {
      src: "/images/slider4.jpg",
      label: "Soluciones Integrales",
      link: "/productos/soluciones_integrales"
    }
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-6 px-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative aspect-[16/9] rounded-xl overflow-hidden">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <a
              href={slide.link}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm md:text-base font-semibold shadow-lg transition duration-300"
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
