import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_p1d87o5", // ✅ Tu Service ID
        "template_8sj05kw", // ✅ Tu Template ID
        formData,
        "kEfgki1uhnRq31pjs" // ✅ Tu Public Key
      )
      .then(() => {
        setEnviado(true);
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
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
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 sm:p-8">
        <h2 className="text-3xl sm:text-3xl font-bold mb-6 text-gray-800 font-[Inter] dark:text-white">
          Contáctanos
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium font-[Source Sans 3] text-gray-800 dark:text-gray-300 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D33834]"
            />
          </div>

          {/* Correo electrónico */}
          <div>
            <label className="block text-sm font-medium font-[Source Sans 3] text-gray-800 dark:text-gray-300 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D33834]"
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
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D33834]"
            />
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
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D33834]"
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full sm:w-auto sm:bottom-6 sm:left-6 bg-[#d33834] text-white !font-[Source Sans 3] px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base md:text-base font-semibold rounded-md shadow-md transition duration-300"
          >
            Enviar mensaje
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
