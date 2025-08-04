import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Componentes globales
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppBubble from './components/WhatsAppBubble';

// Secciones de Home
import Home from './components/Home';
import AlianzasNoticias from './components/AlianzasNoticias';
import ProyectosEmblematicos from './components/ProyectosEmblematicos';
import ClientesEmblematicos from './components/ClientesEmblematicos';

// Páginas
import PHospitalarios from './pages/PHospitalarios';
import Interiorismo from './pages/Interiorismo';
import PuertasHPL from './pages/PuertasHPL';
import ContactForm from './pages/ContactForm';
import Nosotros from './pages/Nosotros';
import SIntegrales from './pages/SIntegrales';
import Residencial_Hoteles from './pages/Residencial_Hoteles';
import PEmblematicos from './pages/PEmblematicos';
import Noticias from './pages/Noticias';
import NoticiaDetalle from './pages/NoticiaDetalle';

// Estilos de carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Datos
import { noticias } from './components/data/noticias';

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
        <ScrollToTop />
        <Navbar />
        <WhatsAppBubble />

        <Routes>
          {/* Página principal */}
          <Route path="/" element={
            <>
              <div id="Inicio"><Home /></div>
              <AlianzasNoticias />
              <ClientesEmblematicos />
            </>
          } />

          {/* Páginas de productos */}
          <Route path="/producto/clinicos-hospitalarios" element={<PHospitalarios />} />
          <Route path="/producto/interiorismo" element={<Interiorismo />} />
          <Route path="/productos/puertas_hpl_marcos_telescopicos" element={<PuertasHPL />} />
          <Route path="/producto/puertas_hpl_marcos" element={<PuertasHPL />} />
          <Route path="/productos/soluciones_integrales" element={<SIntegrales />} />
          <Route path="/productos/residencial_hoteles" element={<Residencial_Hoteles />} />

          {/* Otras páginas */}
          <Route path="/contacto/contact" element={<ContactForm />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/proyectos/proyectos_emblematicos" element={<PEmblematicos />} />

          {/* Noticias */}
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<NoticiaDetalle />} />
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
