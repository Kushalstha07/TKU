import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="Trilochana Kapada Udyog" className="logo-img" />
            </Link>
          </div>
        </div>
        
        <div className="footer-section links-section">
          <div className="footer-links">
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>
        </div>
        
        <div className="footer-section contact-section">
          <div className="footer-contact">
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-value">9841529303</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">example@.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location:</span>
              <span className="contact-value">Thamel</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">
          Copyright © 2025 Trilochan Kapada Udhyog Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
