import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiChevronRight } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    categoria: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_p1d87o5",
        "template_8sj05kw",
        formData,
        "kEfgki1uhnRq31pjs"
      )
      .then(() => {
        setEnviado(true);
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          mensaje: "",
          categoria: "",
        });
        setTimeout(() => setEnviado(false), 5000);
      })
      .catch((err) => {
        console.error("Error al enviar:", err);
        setError("Hubo un error al enviar tu mensaje.");
      });
  };

  return (
    <section
      id="contacto"
      className="w-full flex justify-center items-center px-4 py-12 sm:py-16 dark:bg-gray-900"
    >
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 mt-20 sm:p-8">
        <h2 className="text-3xl sm:text-3xl font-bold mb-6 text-gray-800 font-[Poppins] dark:text-white">
          Contáctanos
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium font-[Poppins] text-gray-800 dark:text-gray-300 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#142063]"
            />
          </div>

          {/* Correo electrónico */}
          <div>
            <label className="block text-sm font-medium font-[Poppins] text-gray-800 dark:text-gray-300 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#142063]"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-sm font-medium font-[Source Sans 3] text-gray-800 dark:text-gray-300 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#142063]"
            />
          </div>

          {/* Categoría */}
          <div>
            <label className="block text-sm font-medium font-[Source Sans 3] text-gray-800 dark:text-gray-300 mb-1">
              Motivo de consulta
            </label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-800 font-[Barlow] bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#142063]"
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="Cotización Puertas">Cotización Puertas</option>
              <option value="Cotización Soluciones Hospitales">Cotización Soluciones Hospitales</option>
              <option value="Cotización Clínicas y Laboratorios">Cotización Clínicas y Laboratorios</option>
              <option value="Cotización Espacios Corporativos">Cotización Espacios Corporativos</option>
              <option value="Otras consultas">Otras consultas</option>
            </select>
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm font-medium font-[Source Sans 3] text-gray-800 dark:text-gray-300 mb-1">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#142063]"
            ></textarea>
          </div>

          {/* Botón con flecha estilo FiChevronRight */}
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#142063]  text-white font-[Poppins] text-center flex items-center gap-3 px-6 py-2 text-sm sm:text-base font-semibold rounded-full border border-white shadow-md transition duration-300 justify-center"
          >
            <span className="whitespace-pre-line leading-tight">
              Enviar mensaje
            </span>
            <span className="border border-white rounded-full">
              <FiChevronRight className="text-white w-6 h-6" />
            </span>
          </button>
        </form>

        {/* Mensaje de éxito */}
        {enviado && (
          <p className="mt-4 text-green-600 font-medium font-[Montserrat]">
            ✅ ¡Mensaje fue enviado correctamente!
          </p>
        )}

        {/* Mensaje de error */}
        {error && (
          <p className="mt-4 text-red-600 font-medium font-[Montserrat]">
            ❌ {error}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
