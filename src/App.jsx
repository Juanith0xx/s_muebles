import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ProyectosEmblematicos from './components/ProyectosEmblematicos';
import AlianzasNoticias from './components/AlianzasNoticias';
import ClientesEmblematicos from './components/ClientesEmblematicos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsAppBubble from './components/WhatsAppBubble';
import PHospitalarios from './pages/PHospitalarios';
import Interiorismo from './pages/Interiorismo';
import PuertasHPL from './pages/PuertasHPL';
import ContactForm from './pages/ContactForm';
import Nosotros from './pages/Nosotros';
import SIntegrales from './pages/SIntegrales';
import Residencial_Hoteles from './pages/Residencial_Hoteles';

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
        <WhatsAppBubble />
        <Routes>
          <Route path="/" element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="alianzas">
                <AlianzasNoticias />
              </div>
              <div>
                <ProyectosEmblematicos />
              </div>
              <div>
                <ClientesEmblematicos />
              </div>                        
            </>
          } />
        
        /* Paginas de slider de home */
        <Route path="/producto/clinicos-hospitalarios" element={<PHospitalarios />} />
        <Route path="/producto/interiorismo" element={<Interiorismo />} />
        <Route path="/productos/puertas_hpl_marcos_telescopicos" element={<PuertasHPL />} />
        <Route path="/producto/interiorismo" element={<Interiorismo />} />
        <Route path="/contacto/contact" element={<ContactForm />} />
        <Route path="/nosotros/" element={<Nosotros />} />
        <Route path="/productos/soluciones_integrales" element={<SIntegrales />} /> 
        <Route path="/producto/puertas_hpl_marcos" element={<PuertasHPL />} /> 
        <Route path="/productos/residencial_hoteles" element={<Residencial_Hoteles />} />




          
        </Routes>
          <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
