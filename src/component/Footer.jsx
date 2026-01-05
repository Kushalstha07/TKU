import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand-section">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Trilochana Kapada Udyog" className="logo-img" />
          </Link>
          <h3 className="brand-name">Trilochan Kapada Udhyog</h3>
          <p className="brand-tagline">नेपालको गर्वको रेशम उद्योग</p>
        </div>
        
        <div className="footer-section links-section">
          <h4 className="section-title">Quick Links</h4>
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/supply" className="footer-link">Supply Locations</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </div>
        
        <div className="footer-section contact-section">
          <h4 className="section-title">Contact Info</h4>
          <div className="footer-contact">
            <a href="tel:9841529303" className="contact-item">9841529303</a>
            <a href="mailto:example@.com" className="contact-item">example@.com</a>
            <div className="contact-item">Lubhu, Lalitpur, Nepal</div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} Trilochan Kapada Udhyog Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
