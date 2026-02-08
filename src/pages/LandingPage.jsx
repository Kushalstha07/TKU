import React, { useRef, useEffect, useState } from 'react';
import './LandingPage.css';
import heroImage from '../assets/Heroimage.png';
import third from '../assets/third.jpeg';
import design16 from '../assets/design16.jpeg';
import fi1 from '../assets/fi1.jpg';
import fi2 from '../assets/fi2.jpg';
import fi3 from '../assets/fi3.jpg';
import fi4 from '../assets/fi4.jpg';
import  founderone from '../assets/founderone.jpg';
import foundertwo from '../assets/foundertwo.jpg';
import founderthree from '../assets/founderthree.jpg';


const carouselImages = [ fi1, fi2, fi3, fi4];
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
          <p className="hero-subtitle">नेपालको गर्वको कटन उद्योग - Where Tradition Meets Innovation</p>
          <button className="cta-btn" onClick={() => document.querySelector('.factory-section').scrollIntoView({ behavior: 'smooth' })}>
            Discover Our Story
          </button>
          <div className="scroll-indicator">
            <span className="scroll-arrow">↓</span>
          </div>
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
          <span className="heading-highlight"></span> नेपालको भरपर्दो कपडा (टेक्सटाइल) उद्योग</h2>
        <div className="factory-content">
          <div className="factory-desc">
            <div className="desc-icon">🏭</div>
            <h3>हरेक धागोमा उत्कृष्टता</h3>
             <p>ट्रिलोचना कपडा उद्योगमा, हामी अन्तर्राष्ट्रिय मापदण्डहरू पूरा गर्ने उच्च गुणस्तरको कपास कपडा उत्पादनमा विशेषज्ञ छौं।</p>
            <p>At Trilochana Kapada Udyog, we specialize in producing high-quality cotton Kapada that meet 
            international standards.</p>
           
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
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
          <h2 className="section-title">किन त्रिलोचना कपडा उद्योग रोज्ने?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">1</div>
              <h3>Premium Quality Fabrics</h3>
              <p>Carefully sourced materials that offer durability, comfort, and a refined finish 
              for every use.</p>
              <p>टिकाउपन, आराम र आकर्षक फिनिस प्रदान गर्ने ध्यानपूर्वक चयन गरिएका सामग्रीहरू। </p>
              </div>
              
                
            <div className="feature-card">
              <div className="feature-icon">2</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times with reliable shipping to meet your deadlines without compromising quality.</p>
              <p>गुणस्तरमा सम्झौता नगरी समयमै डेलिभरी सुनिश्चित गर्ने भरपर्दो ढुवानी सेवा।</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">3</div>
              <h3>Trusted Partnership</h3>
              <p>Long-term relationships with clients worldwide, built on trust, reliability, and exceptional service.</p>
              <p>विश्वास, भरपर्दोपन र उत्कृष्ट सेवामा आधारित विश्वव्यापी ग्राहकहरूसँगको दीर्घकालीन सम्बन्ध।</p>
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
          <h2 className="section-title">हाम्रा कपडा उत्पादनहरू</h2>
          <p className="section-subtitle">Premium textile designs crafted with precision and care</p>

          <div className='products-grid-modern'>
            <div className='product-card-modern'>
              <div className='product-image-wrapper'>
                <img src={third} alt="Striped Pattern Design" className="product-image-modern" />
                <div className='product-badge'>Popular</div>
              </div>
              <div className='product-content'>
                <h3 className='product-title'>Striped Pattern Design</h3>
                <p className='product-description'>Classic elegance meets contemporary style with our versatile striped patterns</p>
                <ul className='product-features'>
                  <li><span className='feature-icon'>✓</span> Visual Structure</li>
                  <li><span className='feature-icon'>✓</span> Garment Ready</li>
                  <li><span className='feature-icon'>✓</span> Pattern Customization</li>
                  <li><span className='feature-icon'>✓</span> Easy Recognition</li>
                  <li><span className='feature-icon'>✓</span> Design Flexibility</li>
                </ul>
              </div>
            </div>

            <div className='product-card-modern'>
              <div className='product-image-wrapper'>
                <img src={design16} alt="Plain Pattern Design" className="product-image-modern" />
                <div className='product-badge premium'>Premium</div>
              </div>
              <div className='product-content'>
                <h3 className='product-title'>Plain Pattern Design</h3>
                <p className='product-description'>Timeless simplicity with superior quality for professional applications</p>
                <ul className='product-features'>
                  <li><span className='feature-icon'>✓</span> Plain Surface Design</li>
                  <li><span className='feature-icon'>✓</span> Color Consistency</li>
                  <li><span className='feature-icon'>✓</span> Professional Appearance</li>
                  <li><span className='feature-icon'>✓</span> Craft & DIY Ready</li>
                  <li><span className='feature-icon'>✓</span> Custom Printing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}

        <h2 className='section-title'> Our Founder</h2>
         <section className='founder'>
        <div className='foundercard'>
          <img src={founderone}  className='founder-image'/>
          <div className='founder-text'>
            <h2 style={{ textAlign: 'center' }}>Ananta Shrestha</h2>
            <br /><br /><br />
            
            <p>हाम्रो वस्त्र उद्योगमा तपाईंलाई हार्दिक स्वागत छ। गुणस्तर, विश्वास र नवप्रवर्तनलाई आधार मानेर स्थापना गरिएको हाम्रो कम्पनीले नेपाली तथा अन्तर्राष्ट्रिय बजारका लागि उत्कृष्ट कपडा उत्पादन गर्दै आएको छ。</p>
            <p>हामी आधुनिक प्रविधि र परम्परागत सीपको संयोजन गर्दै टिकाउ, आकर्षक र आरामदायी वस्त्र निर्माण गर्छौं। कच्चा पदार्थको छनोटदेखि तयार कपडासम्म हरेक चरणमा गुणस्तरमा कुनै सम्झौता गर्दैनौं।</p>
            <p>हाम्रो लक्ष्य केवल व्यापार गर्नु मात्र होइन, तर नेपाली वस्त्र उद्योगलाई विश्वस्तरमा चिनाउनु पनि हो। त्यसका लागि हामी वातावरणमैत्री उत्पादन प्रक्रिया, श्रमिकको सम्मान र दीर्घकालीन विकासमा विश्वास गर्छौं।</p>
            <p>हामीप्रति देखाउनुभएको विश्वासका लागि धन्यवाद। भविष्यमा पनि उत्कृष्ट सेवा र गुणस्तरका साथ तपाईंको भरोसाको साझेदार बन्ने प्रतिबद्धता व्यक्त गर्दछु। धन्यवाद। – कम्पनीका मालिक</p>
          </div>

        </div>

      </section>


    </div>
  );
};

export default LandingPage;
