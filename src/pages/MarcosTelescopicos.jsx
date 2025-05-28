import React from 'react'
import { Helmet } from 'react-helmet-async';
import PageNotFound from './PageNotFound';

export const MarcosTelescopicos = () => {
  return (
  <>
   //Seo de componente
   <Helmet>
        <title>Marcos Telescópicos | Sistema Muebles</title>
        <meta name="description" content="Explora nuestras soluciones de marcos telescópicos diseñadas para ofrecer flexibilidad y durabilidad en proyectos de arquitectura moderna." />
        <link rel="canonical" href="https://sistemamuebles.cl/proyectos/marcos_telescopicos" />
      </Helmet>

    <div className="content-home">
    <PageNotFound />
  </div>
  </>
  )
}

export default MarcosTelescopicos;