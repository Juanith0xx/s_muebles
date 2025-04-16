import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const clientes = [
    {
      nombre: "Achs",
      logo: "/img/Logos_Clientes/cliente-1.jpg",
      web: "https://www.achs.cl/",
    },
    {
      nombre: "Farmacia Ahumada",
      logo: "/img/Logos_Clientes/cliente-2.jpg",
      web: "https://www.farmaciasahumada.cl/",
    },
    {
      nombre: "BCG Chile",
      logo: "/img/Logos_Clientes/cliente-3.jpg",
      web: "https://www.bcg.com/chile",
    },
    {
        nombre: "BPH",
        logo: "/img/Logos_Clientes/cliente-4.jpg",
        web: "https://www.bhp.com/es",
    },
    {
        nombre: "Clinica Bio Bio",
        logo: "/img/Logos_Clientes/cliente-5.jpg",
        web: "https://www.clinicabiobio.cl/",
    },
    {
        nombre: "Bradford Hill",
        logo: "/img/Logos_Clientes/cliente-6.jpg",
        web: "https://www.bradfordhill.org/",
    },
    {
        nombre: "ClC Maderas",
        logo: "/img/Logos_Clientes/cliente-7.jpg",
        web: "https://www.clcsa.cl/",
    },
    {
        nombre: "Hotel",
        logo: "/img/Logos_Clientes/cliente-8.jpg",
        web: "https://www.marriott.com/es/hotels/sclcs-courtyard-santiago-las-condes/overview/",
    },
    {
        nombre: "Cristal Chile",
        logo: "/img/Logos_Clientes/cliente-9.jpg",
        web: "https://www.cristalchile.cl/",
    },
    {
        nombre: "Falp",
        logo: "/img/Logos_Clientes/cliente-10.jpg",
        web: "https://www.falp.org/",
    },
    {
        nombre: "FLSmidth",
        logo: "/img/Logos_Clientes/cliente-11.jpg",
        web: "https://espaciosconfort.cl",
    },
    {
        nombre: "Grupo Hogares",
        logo: "/img/Logos_Clientes/cliente-12.jpg",
        web: "https://www.hogares.cl/",
    },
    {
        nombre: "Idom",
        logo: "/img/Logos_Clientes/cliente-13.jpg",
        web: "https://www.idom.com/",
    },
    {
        nombre: "Implementos",
        logo: "/img/Logos_Clientes/cliente-14.jpg",
        web: "https://www.implementos.cl/inicio",
    },
    {
        nombre: "Logo Rinihue",
        logo: "/img/Logos_Clientes/cliente-15.jpg",
        web: "https://eclr.cl/",
    },
    {
        nombre: "Mandarin Oriental",
        logo: "/img/Logos_Clientes/cliente-16.jpg",
        web: "https://www.mandarinoriental.com/es/santiago/las-condes",
    },
    {
        nombre: "Mutual de Seguridad",
        logo: "/img/Logos_Clientes/cliente-17.jpg",
        web: "https://www.mutual.cl/portal/publico/empresa/home/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zijQ29zTyNLYyMLI1NnQ3MArz9PDy8gw0MHI30w8EKDHAARwP9KGL041EQhd_4cP0ovFaEmkEV4DGjIDc0wiDTUREAR7vvWQ!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/",
    },
    {
        nombre: "OHLA",
        logo: "/img/Logos_Clientes/cliente-18.jpg",
        web: "https://ohla-group.com/",
    },
    {
        nombre: "Parque Arauco",
        logo: "/img/Logos_Clientes/cliente-19.jpg",
        web: "https://www.parquearauco.cl/",
    },
    {
        nombre: "EPleange",
        logo: "/img/Logos_Clientes/cliente-20.jpg",
        web: "https://www.plaenge.cl/",
    },
    {
        nombre: "Quest Capital",
        logo: "/img/Logos_Clientes/cliente-21.jpg",
        web: "https://www.questcapital.cl/",
    },
    {
        nombre: "Asfaltos QLA",
        logo: "/img/Logos_Clientes/cliente-22.jpg",
        web: "https://qlasfaltos.cl/",
    },
    {
        nombre: "Toesca",
        logo: "/img/Logos_Clientes/cliente-23.jpg",
        web: "https://toesca.com/es/nosotros",
    },
    {
        nombre: "Vantruns Capital",
        logo: "/img/Logos_Clientes/cliente-24.jpg",
        web: "https://www.vantrustcapital.cl/es/index.php",
    },
    // Agrega aquí los demás hasta llegar a los 24
  ];

const ClientesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="p-6 text-3xl md:text-4xl font-bold font-Popins text-gray-500 mb-6 text-center md:text-left">
          Nuestra Cartera de Clientes
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clientes.map((cliente, index) => (
            <a
              key={index}
              href={cliente.web}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-xl shadow-md p-3"
            >
              <img
                src={cliente.logo}
                alt={cliente.nombre}
                className="h-16 mx-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientesGrid;
