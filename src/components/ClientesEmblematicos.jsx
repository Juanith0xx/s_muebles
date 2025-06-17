import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientesEmblematicos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4, // más logos en pantallas grandes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // xl: pantallas grandes
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // lg: tablets grandes
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // sm: celulares
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const logos = [
    { src: "/img/Clientes/nestles.png", alt: "Nestlé" },
    { src: "/img/Clientes/falp.png", alt: "FALP" },
    { src: "/img/Clientes/CCHC.png", alt: "CCHC" },
    { src: "/img/Clientes/ACHS.png", alt: "ACHS" },
    { src: "/img/Clientes/farmacia_ahumada.png", alt: "Ahumada" },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 font-[Montserrat]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Han Confiado en Nosotros</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 xl:w-44 xl:h-32 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientesEmblematicos;
