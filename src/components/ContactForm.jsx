import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
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
        "service_c60cjid", // ✅ Tu Service ID
        "template_m615mel", // ✅ Tu Template ID
        formData,
        "kEfgki1uhnRq31pjs" // ✅ Tu Public Key
      )
      .then(() => {
        setEnviado(true);
        setFormData({ nombre: "", email: "", mensaje: "" });
        setTimeout(() => setEnviado(false), 5000);
      })
      .catch((err) => {
        console.error("Error al enviar:", err);
        setError("Hubo un error al enviar tu mensaje.");
      });
  };

  return (
    <section  id="contacto" className="flex justify-center items-center px-4 py-16 dark:bg-gray-900">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-500 font-[Poppins] dark:text-white">
          Contáctanos
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium font-[Poppins] text-gray-700 dark:text-gray-300 mb-1">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium font-[Poppins] text-gray-700 dark:text-gray-300 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium font-[Poppins] text-gray-700 dark:text-gray-300 mb-1">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="no-underline !bg-[#D33834] text-white "
          
          >
            Enviar mensaje
          </button>
        </form>

        {enviado && (
          <p className="mt-4 text-green-600 font-medium font-[Poppins]">
            ✅ ¡Mensaje fue enviado correctamente!
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-600 font-medium font-[Poppins]">
            ❌ {error}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;