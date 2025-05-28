import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // 👈 Import necesario
import './App.css';

import Nosotros from './components/Nosotros';
import Navbar from './components/Navbar';
import ClientesGrid from './components/ClientesGrid';
import FactoryVideo from './components/FactoryVideo';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ServicePanel from './components/ServicePanel';
import OficinasCorporativa from './pages/OficinasCorporativa';
import MueblesClinicosHospitalarios from './pages/MueblesClinicosHospitalarios';
import Puertas from './pages/Puertas';
import RevestimientoFenolico from './pages/RevestimientoFenolico';
import { MarcosTelescopicos } from './pages/MarcosTelescopicos';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <HelmetProvider>
      <Router>
        {/* Botón opcional para cambiar tema */}
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="nosotros">
                <Nosotros />
              </div>
              <div id="nuestros_clientes">
                <ClientesGrid />
              </div>
              <div id="nuestra_fabrica">
                <FactoryVideo />
              </div>
              <div id="contacto">
                <ContactForm />
              </div>
              <Footer />
            </>
          } />
          <Route path="/servicios" element={<ServicePanel />} />
          <Route path="/proyectos/oficinas-corporativa" element={<OficinasCorporativa />} />
          <Route path="/proyectos/muebles_clinicos_hospitalarios" element={<MueblesClinicosHospitalarios />} />
          <Route path="/proyectos/puertas" element={<Puertas />} />
          <Route path="/proyectos/revestimiento_fenolico" element={<RevestimientoFenolico />} />
          <Route path="/proyectos/marcos_telescopicos" element={<MarcosTelescopicos />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
