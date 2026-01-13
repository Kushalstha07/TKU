import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import DriveGallery from '../component/DriveGallery';

const Services = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  // start empty: only show images fetched from Drive
  const [designImages, setDesignImages] = useState([]);

  // Drive integration (can be provided via Vite env vars)
  const DEFAULT_DRIVE_FOLDER = import.meta.env.VITE_DRIVE_FOLDER_ID || '16E9apvyrvpDXNITmpSCfT2a0kMUlNRxl';
  const DEFAULT_DRIVE_KEY = import.meta.env.VITE_DRIVE_API_KEY || 'AIzaSyCQK1-C8o1w5mUZ2lgrF6u-tqKEV1IRxNc';

  // Config for Drive
  const driveFolder = DEFAULT_DRIVE_FOLDER;
  const driveKey = DEFAULT_DRIVE_KEY;

  const categories = [
    { id: 'all', name: 'All Designs' },
  ];

  const buildDriveSrcs = useCallback((fileId, thumb, webContentLink) => {
    const srcs = [];

    // If Drive returns a thumbnailLink, try it first (usually most reliable)
    if (typeof thumb === 'string' && thumb.length > 0) {
      // Upscale common size param when present
      srcs.push(thumb.replace(/=s\d+(-c)?$/, '=w1600'));
      srcs.push(thumb);
    }

    // Common public image endpoints for Google Drive
    srcs.push(`https://lh3.googleusercontent.com/d/${fileId}`);
    srcs.push(`https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`);
    srcs.push(`https://drive.google.com/uc?export=view&id=${fileId}`);

    if (webContentLink) {
      srcs.push(webContentLink);
    }

    // Drive API media endpoint (requires public access; may return 403/JSON)
    srcs.push(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${driveKey}`);

    // de-dupe while preserving order
    return Array.from(new Set(srcs));
  }, [driveKey]);

  // Merge drive files into the designImages state when DriveGallery fetches them
  const handleDriveFiles = useCallback((files) => {
    if (!Array.isArray(files)) return;
    const mapped = files.map(f => ({
      id: f.id,
      srcs: buildDriveSrcs(f.id, f.thumbnailLink, f.webContentLink),
      srcIndex: 0,
      src: buildDriveSrcs(f.id, f.thumbnailLink, f.webContentLink)[0],
      title: f.name,
      category: 'drive'
    }));
    setDesignImages(mapped);
  }, [driveKey, buildDriveSrcs]);
  const [driveLoading, setDriveLoading] = useState(false);
  const [driveError, setDriveError] = useState(null);
  // no debug state in production

  const handleDriveStart = useCallback(() => {
    setDriveLoading(true);
    setDriveError(null);
  }, []);

  const handleDriveError = useCallback((msg) => {
    setDriveLoading(false);
    setDriveError(String(msg));
  }, []);

  const handleDriveDone = useCallback(() => {
    setDriveLoading(false);
    setDriveError(null);
  }, []);

  const filteredImages = currentCategory === 'all' 
    ? designImages 
    : designImages.filter(img => img.category === currentCategory);

  const advanceImageSrc = useCallback((imageId) => {
    setDesignImages((prev) => prev.map((img) => {
      if (img.id !== imageId) return img;
      const srcs = Array.isArray(img.srcs) ? img.srcs : [];
      const nextIndex = (img.srcIndex ?? 0) + 1;
      if (nextIndex >= srcs.length) return img;
      return { ...img, srcIndex: nextIndex, src: srcs[nextIndex] };
    }));
  }, []);

  // removed debug image load checks for production

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  }, [selectedImage, filteredImages]);

  const prevImage = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  }, [selectedImage, filteredImages]);

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
  }, [selectedImage, filteredImages, nextImage, prevImage]);

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="services-title">हाम्रो डिजाइन संग्रह</h1>
          <p className="services-subtitle">
            Explore our extensive collection of exquisite fabric designs, 
            crafted with precision and artistic excellence
          </p>
          <div className="hero-stats">
            <div className="stat-item">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Unique Designs</span>
            </div>
                <div style={{ marginLeft: 8 }}>
                  {driveLoading ? <span style={{ color: '#a3bffa' }}>Loading images…</span> 
            : driveError ? <span style={{ color: '#ffb4b4' }}>Drive error: {driveError}</span> 
            : null}
                </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Excellence</span>
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

  {/* Drive fetcher (no UI) - fetches images from your Drive folder and merges into the gallery */}
  <DriveGallery folderId={driveFolder} apiKey={driveKey} onFiles={handleDriveFiles} onStart={handleDriveStart} onError={handleDriveError} onDone={handleDriveDone} pollInterval={0} />
  {/* pass onDone to clear loading state after successful fetch */}

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
                    onError={() => advanceImageSrc(image.id)}
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

                {/* debug links removed for production */}

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
                onError={() => advanceImageSrc(selectedImage.id)}
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
          <button className="cta-button" onClick={() => navigate('/contact')}>
            आजै सुरु गर्नुहोस्
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
