import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientesEmblematicos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  const logos = [
    { src: "/img/Clientes/nestle.png", alt: "Nestlé" },
    { src: "/img/Clientes/falp.png", alt: "FALP" },
    { src: "/img/Clientes/CCHC.png", alt: "CCHC" },
    { src: "/img/Clientes/ACHS.png", alt: "ACHS" },
    { src: "/img/Clientes/farmacia_ahumada.png", alt: "Ahumada" },
    { src: "/img/Clientes/BCG.png", alt: "BCG" },
    { src: "/img/Clientes/BHP.png", alt: "BHP" },
    { src: "/img/Clientes/clinica_bio.png", alt: "Clinica Bio Bio" },
    { src: "/img/Clientes/Hill.jpeg", alt: "Hill" },
    { src: "/img/Clientes/courtyard.png", alt: "Courtyard" },
    { src: "/img/Clientes/cristales-chile.png", alt: "Cristales chile" },
    { src: "/img/Clientes/fls.png", alt: "FLS" },
    { src: "/img/Clientes/idom.png", alt: "IDOM" },
    { src: "/img/Clientes/implementos.png", alt: "Implementos" },
    { src: "/img/Clientes/Lago.png", alt: "Lago Riñigue" },
    { src: "/img/Clientes/mandarin.png", alt: "Mandarin Oriental" },
    { src: "/img/Clientes/mutual.png", alt: "Mutual de Seguridad" },
    { src: "/img/Clientes/OHLA.png", alt: "OHLA" },
    { src: "/img/Clientes/parque.png", alt: "Parque Arauco" },
    { src: "/img/Clientes/plange.png", alt: "Plaenge" },
    { src: "/img/Clientes/quest.png", alt: "Quest" },
    { src: "/img/Clientes/van.png", alt: "VanTrust Capital" },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 sm:px-8 py-10 font-[Inter]">
      <h2 className="text-2xl sm:text-4xl font-bold font-[Poppins] text-center text-gray-800 mb-10">
        Han Confiado en Nosotros
      </h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center px-4">
            <div className="w-36 h-24 sm:w-40 sm:h-28 md:w-44 md:h-32 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition duration-300"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientesEmblematicos;
