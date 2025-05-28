import React from 'react'
import PageNotFound from './PageNotFound';
import { Helmet } from 'react-helmet-async';

const OficinasCorporativa = () => {
    return (
      <>
       //Seo de componente
      <Helmet>
      <title>Oficinas Corporativas | Sistema Muebles</title>
      <meta name="description" content="Soluciones integrales en mobiliario para oficinas corporativas: diseño moderno, ergonomía y funcionalidad para tu empresa." />
      <link rel="canonical" href="https://sistemamuebles.cl/proyectos/oficinas-corporativa" />
      </Helmet>

      <div className="content-home">
        <PageNotFound />
      </div>
      </>
    );
  };
  
  export default OficinasCorporativa;