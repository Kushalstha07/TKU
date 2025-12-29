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

const locations = [
  { name: 'Thamel', description: 'Central Kathmandu Hub', image: thamelImg },
  { name: 'Boudha', description: 'Cultural Heritage Area', image: boudhaImg },
  { name: 'Narayanthan', description: 'Traditional Market', image: narayanthanImg },
  { name: 'Kalanki', description: 'Commercial District', image: kalankiImg },
  { name: 'Balaju', description: 'Industrial Zone', image: balajuImg },
  { name: 'Jorpati', description: 'Residential Area', image: jorpatiImg },
  { name: 'Biratnagar', description: 'Eastern Regional Center', image: biratngarImg },
  { name: 'Lumbini', description: 'Birthplace of Buddha', image: lumbiniImg },
  { name: 'Pokhara', description: 'Tourist Gateway', image: pokharaImg },
  { name: 'Birgunj', description: 'Border Trade Hub', image: birgunjImg },
];

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

      <section className="supply-content">
        <div className="network-description">
          <h2>Strategic Locations</h2>
          <p>
            We continue to expand our footprint at
          </p>
        </div>
        <div className="locations-grid">
          {locations.map((location) => (
            <div
              key={location.name}
              className="location-item"
              style={{ backgroundImage: `url(${location.image})` }}
            >
              <div className="location-overlay" />
              <div className="location-content">
                <div className="location-icon">📍</div>
                <h3>{location.name}</h3>
                <p>{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SupplyLocation;
