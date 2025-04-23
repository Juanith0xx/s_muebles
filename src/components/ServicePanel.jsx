// src/components/ServicePanel.jsx
import { Paintbrush, Bot, Hammer,PencilRuler, Factory, UserCog  } from "lucide-react";

const services = [
  {
    icon: <PencilRuler size={40} />,
    title: "Servicio de Dimensionado",
    description: "Descripcion.",
  },
  {
    icon: <Paintbrush size={40} />,
    title: "Servicio de Pegado de Canto",
    description: "Descripcion.",
  },
  {
    icon: <Bot size={40} />,
    title: "Servicio de Mecanazado en CNC",
    description: "Descripcion.",
  },
  {
    icon: <Factory size={40} />,
    title: "Servicio de Prensado",
    description: "Descripcion.",
  },
  {
    icon: <UserCog size={40} />,
    title: "Servicio de fabricacion Integral sin Instalacion",
    description: "Descripcion.",
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
            className={`p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1
              ${idx >= 3 ? "md:ml-8" : ""}
            `}
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
