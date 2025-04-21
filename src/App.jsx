import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nosotros from './components/Nosotros';
import Navbar from './components/Navbar';
import ClientesGrid from './components/ClientesGrid';
import FactoryVideo from './components/FactoryVideo';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ServicePanel from './components/ServicePanel';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Ruta principal con secciones scrolleables */}
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

        {/* Ruta separada para Servicios */}
        <Route path="/servicios" element={<ServicePanel />} />
      </Routes>
    </Router>
  );
}

export default App;
