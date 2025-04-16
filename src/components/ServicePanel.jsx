// src/components/ServicePanel.jsx
import { Paintbrush, Ruler, Hammer } from "lucide-react";

const services = [
  {
    icon: <Paintbrush size={32} />,
    title: "Diseño Personalizado",
    description: "Creamos muebles a medida que se adaptan a tus espacios y estilo.",
  },
  {
    icon: <Ruler size={32} />,
    title: "Asesoría Profesional",
    description: "Te acompañamos en todo el proceso para lograr el mejor resultado.",
  },
  {
    icon: <Hammer size={32} />,
    title: "Instalación Garantizada",
    description: "Montaje profesional con garantía de calidad y durabilidad.",
  },
];

export default function ServicePanel() {
  return (
    <section className="py-12 px-4 md:px-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-primary mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
