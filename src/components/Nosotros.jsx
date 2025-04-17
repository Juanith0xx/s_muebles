import React from 'react'

const Nosotros = () => {
  return (
    <section className="p-6 md:p-12 flex flex-col">
      <h2 className='text-3xl md:text-4xl font-bold text-gray-500 mb-6 text-center md:text-left'>Nosotros</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          className='w-98 md:w-1/2 h-auto object-cover rounded-lg'
          src='./img/fondo-2.png'
          alt='Nosotros'
        />
        
        <div className="w-full md:w-1/2 flex flex-col">
          <p className='mt-[5rem] text-gray-700 text-2xl md:text-xl font-medium font-Poppins mb-4 text-justify'>
            Somos una empresa dedicada al desarrollo integral de proyectos de interiorismo corporativo encargándonos del desarrollo, planimetría, fabricación e instalación en obra. Nuestra propuesta de valor se basa en el desarrollo, ya que contamos con un equipo multidisciplinario especializado en mobiliario, quienes en conjunto con el taller pueden desarrollar diversos proyectos lo que nos hace caracterizarnos por ser versátiles y adaptarnos a cada uno de los proyectos que el cliente requiera.
          </p>

          <button className="mt-2 self-center md:self-start !bg-[#D33834] hover:!bg-[#D33834] transition !text-white !text-[1rem] font-bold w-56 h-12 rounded">
            <a
              href="mailto:contacto@sistemamuebles.cl"
              className="no-underline !text-white font-bold hover:!text-white visited:!text-white focus:!text-white"
            >
              Obten Nuestro Portafolio
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
