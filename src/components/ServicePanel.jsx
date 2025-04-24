// src/components/ServicePanel.jsx
import { Paintbrush, Bot, Hammer,PencilRuler, Factory, UserCog  } from "lucide-react";

const services = [
  {
    icon: <PencilRuler size={40} color="#D33834"/>,
    title: "Servicio de Dimensionado",
    description: "Especializados en precisión y optimización, nuestro servicio de dimensionado garantiza soluciones técnicas adaptadas a sus necesidades. Utilizamos herramientas avanzadas para calcular, evaluar y ajustar dimensiones con meticulosidad, logrando un equilibrio perfecto entre funcionalidad y estética. Ideal para proyectos de arquitectura, ingeniería y diseño, brindamos resultados que destacan por su excelencia y atención al detalle.",
  },
  {
    icon: <Paintbrush size={40} color="#D33834" />,
    title: "Servicio de Pegado de Canto",
    description: "Destacamos en la aplicación precisa y sofisticada de cantos en superficies, ofreciendo acabados impecables que reflejan calidad y estilo. Con tecnologías avanzadas y un enfoque meticuloso, garantizamos resultados duraderos y estéticamente atractivos, ideales para muebles, diseños interiores y proyectos personalizados. Nuestro compromiso es entregar soluciones que fusionan funcionalidad y elegancia.",
  },
  {
    icon: <Bot size={40} color="#D33834" />,
    title: "Servicio de Mecanizado en CNC",
    description: "Expertos en tecnología de vanguardia, ofrecemos un servicio de mecanizado en CNC que garantiza precisión milimétrica y acabados excepcionales. Diseñamos y fabricamos piezas personalizadas con atención al detalle, utilizando equipos avanzados para cumplir con los estándares más exigentes. Ideal para aplicaciones en ingeniería, manufactura y diseño industrial, nuestro servicio combina eficiencia, calidad y experiencia técnica.",
  },
  {
    icon: <Factory size={40} color="#D33834" />,
    title: "Servicio de Prensado",
    description: "Brindamos un servicio de prensado de alta precisión, ideal para ensamblajes y procesos que requieren fuerza y uniformidad. Empleamos equipos de calidad superior y técnicas avanzadas para garantizar resultados consistentes y duraderos. Perfecto para aplicaciones en fabricación, carpintería y diseño, nuestro enfoque combina eficiencia, atención al detalle y un acabado profesional que supera expectativas.",
  },
  {
    icon: <UserCog size={40} color="#D33834" />,
    title: "Servicio de fabricacion Integral sin Instalacion",
    description: "Ofrecemos soluciones completas en fabricación, diseñadas para satisfacer las necesidades específicas de cada cliente. Desde el diseño hasta la producción, garantizamos un proceso eficiente, cuidadoso y de alta calidad. Sin incluir la instalación, este servicio está pensado para proyectos que requieren flexibilidad y autonomía en la etapa final, asegurando productos terminados que cumplen con los más altos estándares de precisión y excelencia.",
  },
];

export default function ServicePanel() {
  return (
    <section className="w-screen py-12 px-4 pb-28 md:px-16 bg-[#D33834] dark:bg-gray-900">
      <h2 className="px-4 pb-4 text-3xl font-bold font-[Poppins] text-center text-white dark:text-white mb-10">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`p-6 bg-white dark:bg-gray-800 cursor-pointer rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1
              ${idx >= 3 ? "md:ml-8" : ""}
            `}
          >
            <div className="text-primary mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white font-[Poppins]">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm font-[Poppins]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
