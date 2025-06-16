import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // 👈 Import necesario
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProyectosEmblematicos from './components/ProyectosEmblematicos';
import AlianzasNoticias from './components/AlianzasNoticias';
import ClientesEmblematicos from './components/ClientesEmblematicos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
              <div id="alianzas">
                <AlianzasNoticias />
              </div>
              <div>
                <ProyectosEmblematicos />
              </div>
              <div>
                <ClientesEmblematicos />
              </div>

             

              <div id="contacto">
                <ContactForm />
              </div>
              <Footer />
            </>
          } />
        
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
