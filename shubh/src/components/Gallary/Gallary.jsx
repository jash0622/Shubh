import React from 'react';
import './Gallary.css';

const Gallary = () => {
  return (
    <div className="gallery-hall-collections">
      {/* Hero Section */}
      <section className="gallery-hero-section">
        <div className="gallery-hero-content">
          <h1 className="gallery-hero-title">Collections - Accordion Horizontal</h1>
          <div className="gallery-hero-arrow">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M8 10L0 0H16L8 10Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      {/* Accordion Gallery */}
      <section className="gallery-accordion-section">
        <div className="gallery-accordion-container">
          <div className="gallery-accordion-item active">
            <div className="gallery-accordion-image">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop" 
                alt="The Orphans"
              />
            </div>
            <div className="gallery-accordion-content">
              <span className="gallery-label">GALLERY</span>
              <h3 className="gallery-title">The Orphans</h3>
              <div className="gallery-read-more">
                <span>Read More</span>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="gallery-accordion-item">
            <div className="gallery-accordion-image">
              <img 
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop" 
                alt="Still life painting"
              />
            </div>
            <div className="gallery-accordion-content">
              <span className="gallery-label">GALLERY</span>
              <h3 className="gallery-title">Still Life</h3>
            </div>
          </div>
          
          <div className="gallery-accordion-item">
            <div className="gallery-accordion-image">
              <img 
                src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop" 
                alt="Portrait of woman"
              />
            </div>
            <div className="gallery-accordion-content">
              <span className="gallery-label">GALLERY</span>
              <h3 className="gallery-title">Portrait</h3>
            </div>
          </div>
          
          <div className="gallery-accordion-item">
            <div className="gallery-accordion-image">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" 
                alt="Landscape painting"
              />
            </div>
            <div className="gallery-accordion-content">
              <span className="gallery-label">GALLERY</span>
              <h3 className="gallery-title">Landscape</h3>
            </div>
          </div>

          <div className="gallery-accordion-item">
            <div className="gallery-accordion-image">
              <img 
                src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop" 
                alt="Abstract art"
              />
            </div>
            <div className="gallery-accordion-content">
              <span className="gallery-label">GALLERY</span>
              <h3 className="gallery-title">Abstract</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallary;