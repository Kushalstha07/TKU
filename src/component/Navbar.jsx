import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <div className="logo-wrapper">
            <img src={logo} alt="Trilochana Kapada Udhyog" />
            <div className="logo-ring"></div>
          </div>
        </Link>
        <div className="brand-text">
          <h2 className="navbar-title">Trilochana Kapada Udhyog</h2>
          <p className="navbar-tagline">नेपालको गर्वको रेशम उद्योग</p>
        </div>
      </div>

      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}><span className="link-icon"></span>Home</Link></li>
        <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""} onClick={closeMenu}><span className="link-icon"></span>Services</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={closeMenu}><span className="link-icon"></span>About Us</Link></li>
        <li><Link to="/supply" className={location.pathname === "/supply" ? "active" : ""} onClick={closeMenu}><span className="link-icon"></span>Supply</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={closeMenu}><span className="link-icon"></span>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
