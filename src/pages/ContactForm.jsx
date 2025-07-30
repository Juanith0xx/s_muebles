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

  const categoriaCorreoMap = {
    "Cotización Puertas": "puertas@sistemamuebles.cl",
    "Cotización Soluciones Hospitales": "hospitales@sistemamuebles.cl",
    "Cotización Espacios Corporativos": "corporativos@sistemamuebles.cl",
    "Otras consultas": "operaciones@sistemamuebles.cl",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const correoDestino = categoriaCorreoMap[formData.categoria] || "contacto@sistemamuebles.cl";

    const datosParaEmail = {
      ...formData,
      to_email: correoDestino,
    };

    emailjs
      .send(
        "service_p1d87o5",          // ID del servicio
        "template_8sj05kw",         // ID de la plantilla
        datosParaEmail,
        "kEfgki1uhnRq31pjs"         // clave pública
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
      className="w-full flex justify-center items-center px-4 py-12 sm:py-16 dark:bg-gray-900 bg-[#142063]"
    >
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 mt-20 sm:p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white font-[Poppins]">
          Contáctanos
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="input-field"
          />

          {/* Correo */}
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />

          {/* Teléfono */}
          <input
            type="tel"
            name="telefono"
            placeholder="Tu número de teléfono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="input-field"
          />

          {/* Categoría */}
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="Cotización Puertas">Cotización Puertas</option>
            <option value="Cotización Soluciones Hospitales">Cotización Clinico-Hospitalario</option>
            <option value="Cotización Espacios Corporativos">Cotización Espacios Corporativos</option>
            <option value="Otras consultas">Otras consultas</option>
          </select>

          {/* Mensaje */}
          <textarea
            name="mensaje"
            rows="5"
            placeholder="Escribe tu mensaje aquí"
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="input-field"
          />

          {/* Botón */}
          <button type="submit" className="submit-button">
            Enviar mensaje <FiChevronRight className="ml-2" />
          </button>
        </form>

        {enviado && (
          <p className="mt-4 text-green-600 font-medium font-[Montserrat]">
            ✅ ¡Mensaje enviado correctamente!
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-600 font-medium font-[Montserrat]">
            ❌ {error}
          </p>
        )}
      </div>

      {/* Estilos personalizados */}
      <style>{`
        .input-field {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #ccc;
          background: white;
          color: #000;
          font-family: 'Poppins', sans-serif;
        }
        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #142063;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 999px;
          font-weight: 600;
          transition: background 0.3s;
        }
        .submit-button:hover {
          background: #0f174c;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
