//Layout
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
//Tools
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
//views
import Home from "./components/Home/Home";
import Budget from "./components/Budget/Budget";
import  Tecnologys from "./components/Tecnologys/Tecnologys";
import  Projects from "./components/Projects/Projects";
//Routes
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Layout({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const hideNavbarFooter = ['/AA']; // Ruta en la que quieres ocultar Navbar y Footer

  useEffect(() => {
    setLoading(true); // Activa la pantalla de carga
    const timer = setTimeout(() => {
      setLoading(false); // Desactiva la pantalla de carga después de un tiempo
    }, 500); // Ajusta el tiempo según tus necesidades

    return () => clearTimeout(timer); // Limpia el timer en caso de que el componente se desmonte
  }, [location]);

  return (
    <>
      {loading && <LoadingSpinner />} {/* Muestra la pantalla de carga si loading es true */}
      {!hideNavbarFooter.includes(location.pathname) && <Navbar />}
      {children}
      {!hideNavbarFooter.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {

  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Budget" element={<Budget />} />
        <Route path="/Tecnologys" element={<Tecnologys />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Layout>
  </Router> 
  );
}

export default App;
