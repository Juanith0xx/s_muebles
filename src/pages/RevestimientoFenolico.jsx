import React from 'react'
import PageNotFound from './PageNotFound';

const RevestimientoFenolico = () => {
  return (
  <>
  //Seo de componente
  <Helmet>
  <title>HPL y Fachada Ventilada | Sistema Muebles</title>
  <meta name="description" content="Expertos en instalación de revestimientos HPL y sistemas de fachada ventilada, ideales para proyectos modernos, duraderos y de alto rendimiento técnico." />
  <link rel="canonical" href="https://sistemamuebles.cl/proyectos/revestimiento_fenolico" />
  </Helmet>

  <div className="content-home">
    <PageNotFound />
  </div>
  </>
  )
}

export default RevestimientoFenolico