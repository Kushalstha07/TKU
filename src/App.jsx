import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';
import LandingPage from './pages/LandingPage';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import SupplyLocation from './pages/SupplyLocation';

function App() {
  return (
    <Router basename="/TKU">
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/supply" element={<SupplyLocation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
