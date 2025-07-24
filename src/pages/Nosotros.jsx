const Nosotros = () => {
  return (
    <div className="min-h-screen pt-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto space-y-16 text-gray-800">
      {/* 1. Título principal */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          En Sistema Muebles nos dedicamos a diseñar y fabricar soluciones personalizadas en mobiliario clínico, hospitalario y corporativo, con un enfoque en calidad, innovación y compromiso humano.
        </p>
      </section>

      {/* 2. Misión, Visión y Valores */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">Nuestra Misión</h3>
          <p className="text-gray-600">Brindar soluciones funcionales, seguras y estéticas que mejoren los espacios de trabajo y salud de nuestros clientes.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Nuestra Visión</h3>
          <p className="text-gray-600">Ser referentes en innovación y excelencia en mobiliario institucional y clínico en toda Latinoamérica.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Nuestros Valores</h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Compromiso</li>
            <li>Innovación</li>
            <li>Responsabilidad</li>
            <li>Trabajo en equipo</li>
          </ul>
        </div>
      </section>

      {/* 3. Historia o Trayectoria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Transformamos tu visión en un proyecto impecable.</h2>
        <p className="text-gray-600 leading-relaxed">
          Somos socios estratégicos de arquitectos, constructoras, hoteles, clínicas, hospitales e inmobiliarias, convirtiendo diseños desafiantes en SOLUCIONES CONSTRUCTIVAS INTELIGENTES, precisas y duraderas.
La ingeniería que aplicamos en nuestra fábrica nos da la experiencia real para un control total de la calidad y el cumplimiento que necesitan nuestros clientes en plazos críticos.
Te pueden ofrecer materiales “similares”, pero si sabes de mobiliario, puertas, superficies y marcos telescópicos, la decisión de materialidad correcta y sus prestaciones son clave. Nuestra propuesta se basa en:
•	Compromiso con la Excelencia: “Nuestra palabra vale"– En 23 años hemos construido relaciones que perduran porque cumplimos rigurosamente plazos y especificaciones.
•	Fortaleza Constructiva: Cada proyecto complejo es una oportunidad para ofrecer soluciones más inteligentes.
•	Colaboración: El trabajo en equipo de nuestros ingenieros y diseñadores, junto con el requerimiento de los clientes, permite siempre encontrar una mejor solución técnica.
El desarrollo de soluciones a la medida facilita realizar ingeniería de precisión en el diseño y fabricación con exactitud milimétrica, garantizando encajes perfectos y una funcionalidad, incluso en proyectos de alta complejidad como quirófanos inteligentes y laboratorios.
Los materiales que usamos resisten el tiempo y evolucionan con las necesidades de los espacios: buscamos lo mejor del mercado: Placas Fenólicas HPL (antibacteriales, resistentes a la humedad y al fuego), Krion® (superficie sólida de alto rendimiento e higiene), puertas fenólicas, marcos telescópicos, superficies de cuarzo y cortinas roller de bajo mantenimiento que se traducen en ahorros significativos a largo plazo.
Hemos entregado soluciones de alto impacto en proyectos críticos, como el FALP (Fundación Arturo López Pérez) y el Servicio Médico Legal (SML), donde la precisión y el cumplimiento normativo no son negociables. La confianza en nuestro trabajo es nuestro mayor logro y la mejor prueba de nuestro compromiso.
Estamos aquí para transformar tus espacios donde las personas sanan, trabajan y viven, creando ambientes que resisten el tiempo y se adaptan a los cambios. ¿Tienes un proyecto desafiante en mente? Conversemos y descubramos el valor de una inversión inteligente.
 
        </p>
      </section>

      {/* 4. Equipo humano */}
      {/*
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">Conoce a Nuestro Equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          <div className="text-center">
            <img
              src="/img/equipo/juan.webp"
              alt="Juan Estay"
              className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#142063] mb-4"
            />
            <h3 className="font-semibold text-lg">Juan Estay</h3>
            <p className="text-sm text-gray-500">Director de Proyectos</p>
            <p className="text-sm text-gray-600 mt-2">Especialista en desarrollo y gestión de soluciones hospitalarias personalizadas.</p>
          </div>

          <div className="text-center">
            <img
              src="/img/equipo/juan.webp"
              alt="Juan Estay"
              className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#142063] mb-4"
            />
            <h3 className="font-semibold text-lg">Juan Estay</h3>
            <p className="text-sm text-gray-500">Director de Proyectos</p>
            <p className="text-sm text-gray-600 mt-2">Especialista en desarrollo y gestión de soluciones hospitalarias personalizadas.</p>
          </div>

          <div className="text-center">
            <img
              src="/img/equipo/juan.webp"
              alt="Juan Estay"
              className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#142063] mb-4"
            />
            <h3 className="font-semibold text-lg">Juan Estay</h3>
            <p className="text-sm text-gray-500">Director de Proyectos</p>
            <p className="text-sm text-gray-600 mt-2">Especialista en desarrollo y gestión de soluciones hospitalarias personalizadas.</p>
          </div>

          <div className="text-center">
            <img
              src="/img/equipo/juan.webp"
              alt="Juan Estay"
              className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-[#142063] mb-4"
            />
            <h3 className="font-semibold text-lg">Juan Estay</h3>
            <p className="text-sm text-gray-500">Director de Proyectos</p>
            <p className="text-sm text-gray-600 mt-2">Especialista en desarrollo y gestión de soluciones hospitalarias personalizadas.</p>
          </div>
        </div>

        
      </section> */}

      {/* 5. CTA o contacto (opcional) */}
      <section className="text-center mt-16 pb-8">
        <h2 className="text-2xl font-bold mb-4">¿Te gustaría saber más?</h2>
        <p className="mb-6 text-gray-600">Estamos aquí para ayudarte a desarrollar el espacio que tu proyecto necesita.</p>
        <a
          href="/contacto/contact"
          className="inline-block bg-[#142063] text-white px-6 py-3 rounded-md hover:bg-[#1f2b8d] transition"
        >
          Contáctanos
        </a>
      </section>
    </div>
  );
};

export default Nosotros;
