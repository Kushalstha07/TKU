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

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-number">50+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Designs Created</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">100%</div>
            <div className="stat-label">Quality Assured</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Customer Support</div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="content-container">
          <div className="about-section">
            <div className="section-icon">📖</div>
            <h2 className="section-title">Our Story</h2>
            <p className="section-text">
              Trilochana Kapada Udyog has been at the forefront of textile manufacturing, 
              combining traditional craftsmanship with modern technology to create exceptional 
              fabrics and designs. Our journey began with a vision to preserve the rich heritage 
              of textile artistry while embracing innovation.
            </p>
          </div>

          <div className="about-section">
            <div className="section-icon">🎯</div>
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              To deliver premium quality textiles that blend traditional techniques with 
              contemporary designs, ensuring customer satisfaction and contributing to the 
              preservation of textile heritage.
            </p>
          </div>

          <div className="about-section">
            <div className="section-icon">⭐</div>
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">✓</div>
                <h3>Quality</h3>
                <p>We never compromise on the quality of our products and services.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
                <p>Constantly evolving and adapting to meet modern design trends.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🏛️</div>
                <h3>Heritage</h3>
                <p>Preserving traditional textile craftsmanship for future generations.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">❤️</div>
                <h3>Customer Focus</h3>
                <p>Dedicated to exceeding customer expectations in every project.</p>
              </div> 
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="about-section why-choose">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="features-list">
              <div className="feature-item">
                <span className="feature-bullet">✦</span>
                <div className="feature-content">
                  <h4>Premium Quality Materials</h4>
                  <p>We source only the finest materials for our textile production.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">✦</span>
                <div className="feature-content">
                  <h4>Expert Craftsmanship</h4>
                  <p>Our skilled artisans bring years of experience to every project.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">✦</span>
                <div className="feature-content">
                  <h4>Custom Designs</h4>
                  <p>Tailored solutions to meet your specific requirements and vision.</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">✦</span>
                <div className="feature-content">
                  <h4>Timely Delivery</h4>
                  <p>We pride ourselves on meeting deadlines without compromising quality.</p>
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
