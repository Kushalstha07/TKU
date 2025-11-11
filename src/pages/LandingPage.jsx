import React, { useRef, useEffect, useState } from 'react';
import './LandingPage.css';
import heroImage from '../assets/Heroimage.png';
import factory1 from '../assets/factoryimage1.png';
import factory2 from '../assets/factoryimage2.png';
import factory3 from '../assets/factoryimage3.png';
import factory4 from '../assets/factoryimage4.png';

const carouselImages = [factory1, factory2, factory3, factory4];

const LandingPage = () => {
  const bgRef = useRef(null);
  const [carouselIdx, setCarouselIdx] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY * 0.2;
        bgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIdx((idx) => (idx + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCarouselIdx(index);
  };

  return (
    <div>
      <div className="landing-container">

        <div className="hero-overlay" />
        <img
          ref={bgRef}
          className="landing-bg"
          src={heroImage}
          alt="Textile Factory Hero"
        />
        <div className="landing-text">
          <h1 className="hero-title">Crafting Quality Fabrics for a Sustainable Future</h1>
          <p className="hero-subtitle">
            Leading manufacturer of premium textiles with over two decades of excellence in innovation, quality, and environmental responsibility.
          </p>
          <br />
          <button className="cta-btn">Explore Our Fabrics</button>
        </div>
        <div className="section-divider">
          <svg viewBox="0 0 1440 100" width="100%" height="100" preserveAspectRatio="none">
            <path fill="url(#gradient)" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"></path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f8f9fa" />
                <stop offset="33%" stopColor="#e9ecef" />
                <stop offset="66%" stopColor="#dee2e6" />
                <stop offset="100%" stopColor="#ced4da" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <section className="factory-section">
        <div className="section-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-icon">🏭</div>
          <div className="decoration-line"></div>
        </div>
        <h2 className="factory-heading">
          <span className="heading-highlight">Trustable</span> Textile Factory In Nepal
        </h2>
        <div className="factory-content">
          <div className="factory-desc">
            <div className="desc-icon">🏭</div>
            <h3>Excellence in Every Thread</h3>
            <p>At Trilochana Kapada Udyog, we specialize in producing high-quality cotton Kapada that meet international standards. With advanced textile machinery, skilled craftsmanship, and a commitment to sustainable practices, we deliver materials trusted by fashion brands, manufacturers, and wholesalers worldwide.</p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label"> Location Served</span>
              </div>
            </div>
          </div>
          <div className="factory-carousel">
            <img src={carouselImages[carouselIdx]} alt="Factory" className="carousel-img" />
            <div className="carousel-dots">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === carouselIdx ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
            <div className="carousel-overlay">
              <div className="carousel-info">
                <span className="image-counter">{carouselIdx + 1} / {carouselImages.length}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="inter-section-divider">
        <svg viewBox="0 0 1440 100" width="100%" height="100" preserveAspectRatio="none">
          <path fill="url(#gradient2)" d="M0,100 C480,0 960,100 1440,0 L1440,100 L0,100 Z"></path>
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dee2e6" />
              <stop offset="33%" stopColor="#ced4da" />
              <stop offset="66%" stopColor="#adb5bd" />
              <stop offset="100%" stopColor="#868e96" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="section-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-icon">⭐</div>
            <div className="decoration-line"></div>
          </div>
          <h2 className="section-title">Why Choose Trilochana Kapada Udyog?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Sustainable Practices</h3>
              <p>Eco-friendly manufacturing processes that protect our environment while delivering premium quality fabrics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times with reliable shipping to meet your deadlines without compromising quality.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Premium Quality</h3>
              <p>International standards with rigorous quality control ensuring every fabric meets excellence criteria.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Trusted Partnership</h3>
              <p>Long-term relationships with clients worldwide, built on trust, reliability, and exceptional service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="inter-section-divider">
        <svg viewBox="0 0 1440 100" width="100%" height="100" preserveAspectRatio="none">
          <path fill="url(#gradient3)" d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"></path>
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e9ecef" />
              <stop offset="33%" stopColor="#dee2e6" />
              <stop offset="66%" stopColor="#ced4da" />
              <stop offset="100%" stopColor="#adb5bd" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Products Section */}
      <section className="products-section">
        <div className="products-container">
          <div className="section-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-icon">🎯</div>
            <div className="decoration-line"></div>
          </div>
          <h2 className="section-title">Our Premium Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">🧵</div>
              <h3>Cotton Fabrics</h3>
              <p>Premium quality cotton materials perfect for garments and home textiles.</p>
            </div>
            <div className="product-card">
              <div className="product-image">✨</div>
              <h3>Synthetic Blends</h3>
              <p>Innovative synthetic-natural blends for modern textile applications.</p>
            </div>
            <div className="product-card">
              <div className="product-image">🌟</div>
              <h3>Specialty Fabrics</h3>
              <p>Custom-made fabrics for specific industrial and fashion requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
