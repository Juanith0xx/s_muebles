import React from 'react'
import PageNotFound from './PageNotFound'

const Puertas = () => {
  return (
    <>
     //Seo de componente
    <Helmet>
    <title>Puertas Especializadas | Sistema Muebles</title>
    <meta name="description" content="Conoce nuestras puertas de diseño exclusivo: resistentes, modernas y personalizables para todo tipo de espacios." />
    <link rel="canonical" href="https://sistemamuebles.cl/proyectos/puertas" />
    </Helmet>

    <div className="content-home">
    <PageNotFound />
    </div>
    </>
  )
}

export default Puertas