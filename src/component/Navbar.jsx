import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
        <li><Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link></li>
        <li><Link to="/supply" className={location.pathname === "/supply" ? "active" : ""}>Supply</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
