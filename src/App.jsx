import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppBubble from './components/WhatsAppBubble';
import Home from './components/Home';
import AlianzasNoticias from './components/AlianzasNoticias';
import ProyectosEmblematicos from './components/ProyectosEmblematicos';
import ClientesEmblematicos from './components/ClientesEmblematicos';
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
import CatalogoPuertasHPL from './pages/Catalogos/CatalogoPuertasHPL';
import PdfViewer from './pages/Catalogos/PdfViewer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { noticias } from './components/data/noticias';
import { initGA, logPageView } from './seo/analytics'; // <-- Importamos Analytics

function AppContent() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Inicializar Google Analytics
  useEffect(() => {
    initGA();
  }, []);

  // Registrar cada cambio de página
  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

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
    <>
      <ScrollToTop />
      <Navbar />
      <WhatsAppBubble />

      <Routes>
        <Route path="/" element={
          <>
            <div id="Inicio"><Home /></div>
            <AlianzasNoticias />
            <ProyectosEmblematicos />
            <ClientesEmblematicos />
          </>
        } />
        <Route path="/producto/clinicos-hospitalarios" element={<PHospitalarios />} />
        <Route path="/producto/interiorismo" element={<Interiorismo />} />
        <Route path="/productos/puertas_hpl_marcos_telescopicos" element={<PuertasHPL />} />
        <Route path="/producto/puertas_hpl_marcos" element={<PuertasHPL />} />
        <Route path="/productos/soluciones_integrales" element={<SIntegrales />} />
        <Route path="/productos/residencial_hoteles" element={<Residencial_Hoteles />} />
        <Route path="/contacto/contact" element={<ContactForm />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos/proyectos_emblematicos" element={<PEmblematicos />} />
        <Route path="/catalogo/puertas_hpl_marcos" element={<CatalogoPuertasHPL />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:slug" element={<NoticiaDetalle />} />
        <Route path="/catalogo/pdf" element={<PdfViewer />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
