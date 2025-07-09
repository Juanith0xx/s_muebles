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
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const logos = [
    { src: "/img/Clientes/nestle.png", alt: "Nestlé" },
    { src: "/img/Clientes/falp.png", alt: "FALP" },
    { src: "/img/Clientes/CCHC.png", alt: "CCHC" },
    { src: "/img/Clientes/ACHS.png", alt: "ACHS" },
    { src: "/img/Clientes/farmacia_ahumada.png", alt: "Ahumada" },
    { src: "/img/Clientes/BCG.png", alt: "BCG"},
    { src: "/img/Clientes/BHP.png", alt: "BHP"},
    { src: "/img/Clientes/clinica_bio.png", alt: "Clinica Bio Bio"},
    { src: "/img/Clientes/Hill.jpeg", alt: "Hill"},
    { src: "/img/Clientes/courtyard.png", alt: "Courtyard"},
    { src: "/img/Clientes/cristales-chile.png", alt: "Cristales chile"},
    { src: "/img/Clientes/fls.png", alt: "FLS"},
    { src: "/img/Clientes/idom.png", alt: "IDOM"},
    { src: "/img/Clientes/implementos.png", alt: "Implementos"},
    { src: "/img/Clientes/Lago.png", alt: "Lago Riñigue"},
    { src: "/img/Clientes/mandarin.png", alt: "Mandarin Oriental"},
    { src: "/img/Clientes/mutual.png", alt: "Mutual de Seguridad"},
    { src: "/img/Clientes/OHLA.png", alt: "OHLA "},
    { src: "/img/Clientes/parque.png", alt: "Parque Arauco "},
    { src: "/img/Clientes/plange.png", alt: "Plaenge"},
    { src: "/img/Clientes/quest.png", alt: "Quest"},
    { src: "/img/Clientes/van.png", alt: "VanTrust Capital "},    
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 font-[Inter]">
      <h2 className="text-4xl font-bold font-[Poppins] text-center text-gray-800 mb-8">Han Confiado en Nosotros</h2>
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
