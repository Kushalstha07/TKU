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
            <h2 className="section-title">हाम्रो कथा(Our Story)</h2>
            <p className="section-text">
              Trilochana Kapada Udyog has been at the forefront of textile manufacturing, 
              combining traditional craftsmanship with modern technology to create exceptional 
              fabrics and designs. Our journey began with a vision to preserve the rich heritage 
              of textile artistry while embracing innovation.
            </p>
            <p className="section-text">ट्रिलोचना कपडा उद्योग वस्त्र उत्पादनको अग्रपंक्तिमा रहँदै आएको छ।परम्परागत हस्तकला र आधुनिक प्रविधिको संयोजनमार्फत
            उत्कृष्ट कपडा र डिजाइनहरू सिर्जना गर्दै आएको हाम्रो यात्रा, वस्त्र कलाको समृद्ध धरोहर संरक्षण गर्दै नवप्रवर्तन अपनाउने 
            दृष्टिकोणबाट सुरु भएको हो।</p>
          </div>

          <div className="about-section">
            <h2 className="section-title">हाम्रो लक्ष्य(Our Mission)</h2>
            <p className="section-text">
              To deliver premium quality textiles that blend traditional techniques with 
              contemporary designs, ensuring customer satisfaction and contributing to the 
              preservation of textile heritage.
            </p>
            <p className="section-text">परम्परागत प्रविधि र आधुनिक डिजाइनको समिश्रणसहित उच्च गुणस्तरका वस्त्रहरू प्रदान गर्दै ग्राहक सन्तुष्टि सुनिश्चित गर्नु तथा 
            वस्त्र धरोहरको संरक्षणमा योगदान पुर्‍याउनु।</p>
          </div>

          <div className="about-section">
            <h2 className="section-title">हाम्रा नैतिक मूल्यहरू(Our Moral Values)</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">✦</div>
                <h3>Quality</h3>
                <p>We never compromise on the quality of our products and services.</p>
                <p>हामी हाम्रो उत्पादन र सेवाको गुणस्तरमा कहिल्यै सम्झौता गर्दैनौं</p>
              </div>
              <div className="value-item">
                <div className="value-icon">✦</div>
                <h3>Innovation</h3>
                <p>Constantly evolving and adapting to meet modern design trends.</p>
                <p>आधुनिक डिजाइन प्रवृत्तिअनुसार निरन्तर विकास र अनुकूलन।</p>
              </div>
              <div className="value-item">
                <div className="value-icon">✦</div>
                <h3>Heritage</h3>
                <p>Preserving traditional textile craftsmanship for future generations.</p>
                 <p>भविष्यका पुस्ताका लागि परम्परागत वस्त्र हस्तकलाको संरक्षण।</p>
              </div>
              <div className="value-item">
                <div className="value-icon">✦</div>
                <h3>Customer Focus</h3>
                <p>Dedicated to exceeding customer expectations in every project.</p>
                <p>हरेक परियोजनामा ग्राहकको अपेक्षाभन्दा बढी सेवा प्रदान गर्न प्रतिबद्ध।</p>
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
                  <p>हामी वस्त्र उत्पादनका लागि केवल उत्कृष्ट सामग्रीहरू मात्र प्रयोग गर्छौं।</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">✦</span>
                <div className="feature-content">
                  <h4>Expert Craftsmanship</h4>
                  <p>Our skilled artisans bring years of experience to every project.</p>
                  <p>हाम्रा दक्ष कारीगरहरूले प्रत्येक परियोजनामा वर्षौँको अनुभव प्रस्तुत गर्छन्।</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">✦</span>
                <div className="feature-content">
                  <h4>Custom Designs</h4>
                  <p>Tailored solutions to meet your specific requirements and vision.</p>
                  <p>तपाईंका विशिष्ट आवश्यकताहरू र दृष्टिकोण पूरा गर्न अनुकूलित समाधानहरू।</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-bullet">✦</span>
                <div className="feature-content">
                  <h4>Timely Delivery</h4>
                  <p>We pride ourselves on meeting deadlines without compromising quality.</p>
                  <p>गुणस्तरमा सम्झौता नगरी समयमै डेलिभरी गर्नेमा हामी गर्व गर्छौं।</p>
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
