import React, { useState, useEffect } from 'react';
import './Services.css';

// Import all design images
import design1 from '../assets/design1.jpg';
import design2 from '../assets/design2.jpg';
import design3 from '../assets/design3.jpg';
import design4 from '../assets/design4.jpg';
import design5 from '../assets/design5.jpeg';
import design6 from '../assets/design6.jpeg';
import design7 from '../assets/design7.jpeg';
import design8 from '../assets/design8.jpeg';
import design9 from '../assets/design9.jpeg';
import design10 from '../assets/design10.jpeg';
import design11 from '../assets/design11.jpeg';
import design12 from '../assets/design12.jpeg';
import design13 from '../assets/design13.jpeg';
import design14 from '../assets/design14.jpeg';
import design15 from '../assets/design15.jpeg';

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const designImages = [
    { id: 1, src: design1, category: 'traditional', title: 'Traditional Design 1' },
    { id: 2, src: design2, category: 'modern', title: 'Modern Design 1' },
    { id: 3, src: design3, category: 'traditional', title: 'Traditional Design 2' },
    { id: 4, src: design4, category: 'vintage', title: 'Vintage Design 1' },
    { id: 5, src: design5, category: 'modern', title: 'Modern Design 2' },
    { id: 6, src: design6, category: 'traditional', title: 'Traditional Design 3' },
    { id: 7, src: design7, category: 'vintage', title: 'Vintage Design 2' },
    { id: 8, src: design8, category: 'modern', title: 'Modern Design 3' },
    { id: 9, src: design9, category: 'traditional', title: 'Traditional Design 4' },
    { id: 10, src: design10, category: 'vintage', title: 'Vintage Design 3' },
    { id: 11, src: design11, category: 'modern', title: 'Modern Design 4' },
    { id: 12, src: design12, category: 'traditional', title: 'Traditional Design 5' },
    { id: 13, src: design13, category: 'vintage', title: 'Vintage Design 4' },
    { id: 14, src: design14, category: 'modern', title: 'Modern Design 5' },
    { id: 15, src: design15, category: 'traditional', title: 'Traditional Design 6' }
  ];

  const categories = [
    { id: 'all', name: 'All Designs', icon: '🎨' },
    { id: 'traditional', name: 'Traditional', icon: '🏛️' },
    { id: 'modern', name: 'Modern', icon: '🔥' },
    { id: 'vintage', name: 'Vintage', icon: '⭐' }
  ];

  const filteredImages = currentCategory === 'all' 
    ? designImages 
    : designImages.filter(img => img.category === currentCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, filteredImages]);

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="services-title">Our Design Collection</h1>
          <p className="services-subtitle">
            Explore our extensive collection of exquisite fabric designs, 
            crafted with precision and artistic excellence
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Unique Designs</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality</span>
            </div>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-element">🧵</div>
          <div className="floating-element">✂️</div>
          <div className="floating-element">🎨</div>
          <div className="floating-element">📐</div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-section">
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${currentCategory === category.id ? 'active' : ''}`}
              onClick={() => setCurrentCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`gallery-item item-${(index % 6) + 1}`}
                onClick={() => openLightbox(image)}
              >
                <div className="image-wrapper">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h3 className="image-title">{image.title}</h3>
                      <p className="image-category">{image.category}</p>
                      <button className="view-btn">
                        <span>👁️</span> View Details
                      </button>
                    </div>
                  </div>
                </div>
                <div className="item-number">{String(image.id).padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-nav prev" onClick={prevImage}>‹</button>
            <button className="lightbox-nav next" onClick={nextImage}>›</button>
            
            <div className="lightbox-content">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <h2 className="lightbox-title">{selectedImage.title}</h2>
                <p className="lightbox-category">Category: {selectedImage.category}</p>
                <p className="lightbox-description">
                  This exquisite design showcases the finest craftsmanship and attention to detail, 
                  representing the pinnacle of textile artistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Create Something Beautiful?</h2>
          <p className="cta-description">
            Let us bring your vision to life with our exceptional designs and craftsmanship
          </p>
          <button className="cta-button">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
