import React from 'react'
import PageNotFound from './PageNotFound';

const MueblesClinicosHospitalarios = () => {
  return (
  <>
   //Seo de componente
  <Helmet>
  <title>Muebles Clínicos y Hospitalarios | Sistema Muebles</title>
  <meta name="description" content="Diseño y fabricación de muebles clínicos y hospitalarios de alta calidad, enfocados en funcionalidad, seguridad y diseño moderno." />
  <link rel="canonical" href="https://sistemamuebles.cl/proyectos/muebles_clinicos_hospitalarios" />
  </Helmet>

    <div className="content-home">
    <PageNotFound />
  </div>
  </>
  )
}

export default MueblesClinicosHospitalarios;