import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-content">
          <div className="heroo-content">
          <h1 className="about-title">About Trilochana Kapada Udyog</h1>
          <p className="about-subtitle">
            Crafting Excellence in Textile Manufacturing Since Our Inception
          </p>
          </div>
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

        </div>
      </section>
    </div>
  );
};

export default About;
