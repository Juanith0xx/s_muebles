
import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Nosotros from "./Nosotros";
import ClientesGrid from "./ClientesGrid";
import FactoryVideo from "./FactoryVideo";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ServicePanel from "./ServicePanel"


const HomePage = () => {
  return (

    <div className="content-home">
      <Navbar />
      <Home />
      <Nosotros />
      <ClientesGrid />
      <FactoryVideo />
      <ContactForm />
      <Footer />    
    </div>

  );
};

export default HomePage;
