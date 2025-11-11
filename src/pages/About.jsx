import React from 'react';
import './About.css';
import thamelImg from '../assets/thamel.jpeg';
import boudhaImg from '../assets/boudha.jpeg';
import narayanthanImg from '../assets/narayanthan.jpg';
import kalankiImg from '../assets/kalanki.jpeg';
import balajuImg from '../assets/balaju.jpeg';
import jorpatiImg from '../assets/jorpatu.jpeg';
import biratngarImg from '../assets/biratnagar.jpeg';
import lumbiniImg from '../assets/lumbini.jpeg';
import pokharaImg from '../assets/pokhara.jpeg';
import birgunjImg from '../assets/birgunj.jpeg';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="about-title">About Trilochana Kapada Udyog</h1>
          <p className="about-subtitle">
            Crafting Excellence in Textile Manufacturing Since Our Inception
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="content-container">
          <div className="about-section">
            <h2 className="section-title">Our Story</h2>
            <p className="section-text">
              Trilochana Kapada Udyog has been at the forefront of textile manufacturing, 
              combining traditional craftsmanship with modern technology to create exceptional 
              fabrics and designs. Our journey began with a vision to preserve the rich heritage 
              of textile artistry while embracing innovation.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              To deliver premium quality textiles that blend traditional techniques with 
              contemporary designs, ensuring customer satisfaction and contributing to the 
              preservation of textile heritage.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Quality</h3>
                <p>We never compromise on the quality of our products and services.</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Constantly evolving and adapting to meet modern design trends.</p>
              </div>
              <div className="value-item">
                <h3>Heritage</h3>
                <p>Preserving traditional textile craftsmanship for future generations.</p>
              </div>
              <div className="value-item">
                <h3>Customer Focus</h3>
                <p>Dedicated to exceeding customer expectations in every project.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2 className="section-title">Our Supply Network</h2>
            <p className="section-text">
              We proudly serve customers across multiple locations throughout Nepal, 
              ensuring our quality textiles reach communities far and wide.
            </p>
            <div className="locations-grid">
              <div className="location-item" style={{backgroundImage: `url(${thamelImg})`}}>
                <div className="location-overlay"></div>
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h3>Thamel</h3>
                  <p>Central Kathmandu Hub</p>
                </div>
              </div>
              <div className="location-item" style={{backgroundImage: `url(${boudhaImg})`}}>
                <div className="location-overlay"></div>
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h3>Boudha</h3>
                  <p>Cultural Heritage Area</p>
                </div>
              </div>
              <div className="location-item" style={{backgroundImage: `url(${narayanthanImg})`}}>
                <div className="location-overlay"></div>
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h3>Narayanthan</h3>
                  <p>Traditional Market</p>
                </div>
              </div>
              <div className="location-item" style={{backgroundImage: `url(${kalankiImg})`}}>
                <div className="location-overlay"></div>
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h3>Kalanki</h3>
                  <p>Commercial District</p>
                </div>
              </div>
              <div className="location-item" style={{backgroundImage: `url(${balajuImg})`}}>
                <div className="location-overlay"></div>
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h3>Balaju</h3>
                  <p>Industrial Zone</p>
                </div>
              </div>
              <div className="location-item" style={{backgroundImage: `url(${jorpatiImg})`}}>
                <div className="location-overlay"></div>
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h3>Jorpati</h3>
                  <p>Residential Area</p>
                </div>
              </div>
              <div className="location-item" style={{backgroundImage: `url(${biratngarImg})`}}>
                <div className="location-overlay"></div>
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h3>Biratnagar</h3>
                  <p>Eastern Regional Center</p>
                </div>
              </div>
              <div className="location-item" style={{backgroundImage: `url(${lumbiniImg})`}}>
                <div className="location-overlay"></div>
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h3>Lumbini</h3>
                  <p>Birthplace of Buddha</p>
                </div>
              </div>
              <div className="location-item" style={{backgroundImage: `url(${pokharaImg})`}}>
                <div className="location-overlay"></div>
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h3>Pokhara</h3>
                  <p>Tourist Gateway</p>
                </div>
              </div>
              <div className="location-item" style={{backgroundImage: `url(${birgunjImg})`}}>
                <div className="location-overlay"></div>
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h3>Birgunj</h3>
                  <p>Border Trade Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
