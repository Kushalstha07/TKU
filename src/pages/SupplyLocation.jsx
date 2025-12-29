import React from 'react';
import './SupplyLocation.css';
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

const regions = {
  kathmandu: [
    { name: 'Thamel', description: 'Central Kathmandu Hub', image: thamelImg },
    { name: 'Boudha', description: 'Cultural Heritage Area', image: boudhaImg },
    { name: 'Narayanthan', description: 'Traditional Market', image: narayanthanImg },
    { name: 'Kalanki', description: 'Commercial District', image: kalankiImg },
    { name: 'Balaju', description: 'Industrial Zone', image: balajuImg },
    { name: 'Jorpati', description: 'Residential Area', image: jorpatiImg },
  ],
  regional: [
    { name: 'Biratnagar', description: 'Eastern Regional Center', image: biratngarImg },
    { name: 'Lumbini', description: 'Birthplace of Buddha', image: lumbiniImg },
    { name: 'Pokhara', description: 'Tourist Gateway', image: pokharaImg },
    { name: 'Birgunj', description: 'Border Trade Hub', image: birgunjImg },
  ],
};

const SupplyLocation = () => {
  return (
    <div className="supply-container">
      <section className="supply-hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Supply Network</p>
          <h1 className="supply-title">Reaching Communities Across Nepal</h1>
          <p className="supply-subtitle">
            From bustling city centers to regional hubs, our distribution partners ensure
            Trilochana Kapada Udyog fabrics remain close to the people who rely on them.
          </p>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="coverage-stats">
        <div className="coverage-container">
          <div className="coverage-item">
            <div className="coverage-icon">🗺️</div>
            <div className="coverage-number">10+</div>
            <div className="coverage-label">Locations</div>
          </div>
          <div className="coverage-item">
            <div className="coverage-icon">🏙️</div>
            <div className="coverage-number">7</div>
            <div className="coverage-label">Provinces</div>
          </div>
          <div className="coverage-item">
            <div className="coverage-icon">🚚</div>
            <div className="coverage-number">24/7</div>
            <div className="coverage-label">Delivery</div>
          </div>
          <div className="coverage-item">
            <div className="coverage-icon">📦</div>
            <div className="coverage-number">1000+</div>
            <div className="coverage-label">Shipments/Month</div>
          </div>
        </div>
      </section>

      <section className="supply-content">
        <div className="network-description">
          <h2>Strategic Locations</h2>
          <p>
            We continue to expand our footprint so that retailers and creators can access
            high-quality textiles without delay. The locations below represent our primary
            supply nodes, each selected for its unique role within Nepal&apos;s vibrant market.
          </p>
        </div>

        {/* Kathmandu Valley Section */}
        <div className="region-section">
          <div className="region-header">
            <h3 className="region-title">
              <span className="region-icon">🏔️</span>
              Kathmandu Valley
            </h3>
            <p className="region-subtitle">6 strategic locations in the capital region</p>
          </div>
          <div className="locations-grid">
            {regions.kathmandu.map((location) => (
              <div
                key={location.name}
                className="location-item"
                style={{ backgroundImage: `url(${location.image})` }}
              >
                <div className="location-overlay" />
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h4>{location.name}</h4>
                  <p>{location.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Hubs Section */}
        <div className="region-section">
          <div className="region-header">
            <h3 className="region-title">
              <span className="region-icon">🌏</span>
              Regional Hubs
            </h3>
            <p className="region-subtitle">Major distribution centers across Nepal</p>
          </div>
          <div className="locations-grid">
            {regions.regional.map((location) => (
              <div
                key={location.name}
                className="location-item"
                style={{ backgroundImage: `url(${location.image})` }}
              >
                <div className="location-overlay" />
                <div className="location-content">
                  <div className="location-icon">📍</div>
                  <h4>{location.name}</h4>
                  <p>{location.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="supply-cta">
          <div className="cta-content">
            <h3>Looking for Distribution in Your Area?</h3>
            <p>We're always expanding our network. Contact us to discuss partnership opportunities.</p>
            <a href="/contact" className="cta-button">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupplyLocation;
