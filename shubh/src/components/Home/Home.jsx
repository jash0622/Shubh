import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxRings = document.querySelector('.rings-parallax');
      const parallaxLeaf = document.querySelector('.leaf-parallax');
      const storyDescription = document.querySelector('.story-description');
      
      if (parallaxRings && storyDescription) {
        const storyRect = storyDescription.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const storyCenter = storyRect.top + storyRect.height / 2;
        
        if (storyCenter <= windowHeight / 2) {
          // Move rings completely to top when story-description is centered
          parallaxRings.style.transform = `translateY(-100vh)`;
        } else {
          // Rings move upward during scroll
          parallaxRings.style.transform = `translateY(${scrolled * -0.3}px)`;
        }
      }
      
      // Leaf parallax animation (same as rings)
      if (parallaxLeaf) {
        const foundationsTitle = document.querySelector('.foundations-title');
        if (foundationsTitle) {
          const foundationsRect = foundationsTitle.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const foundationsCenter = foundationsRect.top + foundationsRect.height / 2;
          
          if (foundationsCenter <= windowHeight / 2) {
            // Move leaf completely to top when foundations-title is centered
            parallaxLeaf.style.transform = `translateY(-100vh)`;
          } else {
            // Leaf moves upward during scroll
            parallaxLeaf.style.transform = `translateY(${scrolled * -0.3}px)`;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero Section - A New Beginning */}
      <section className="hero-section">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">A NEW BEGINNING</h1>
          <p className="hero-subtitle">
            Discover Future-Ready Residential And Commercial Spaces<br />
            Crafted With Quality, Integrity, And Vision.
          </p>
          <button className="scroll-button">SCROLL TO EXPLORE</button>
        </div>
      </section>

      {/* Welcome Section with Parallax */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2 className="welcome-title">WELCOME TO<br />SUBH HOUSING</h2>
          <p className="welcome-tagline">Welcome home.</p>
          <img src="/rings-xxl.webp" alt="" className="rings-parallax" />
          <p className="philosophy-text">
            At Subh Housing, we believe that a home is not<br />
            just made of walls — it's built with trust, dreams,<br />
            and a deep sense of belonging. Founded in 2023,<br />
            our journey began with a simple yet powerful<br />
            vision: to create spaces that feel like home even<br />
            before you move in.
          </p>
        </div>
      </section>

      {/* Story Description Section */}
      <section className="story-description">
        <div className="story-content">
          <p className="story-text">
            Because at Subh Housing, it's never<br />
            just about real estate — it's about the<br />
            lives we touch and the stories we help<br />
            shape.
          </p>
        </div>
      </section>

      {/* Combined Story and Foundations Section */}
      <section className="combined-story-foundations">
        <div className="story-left">
          {/* Left image placeholder */}
        </div>
        <div className="story-right">
          {/* Right image placeholder */}
        </div>
        <div className="story-badge">
          <span>SUBH<br />STORY</span>
        </div>
        
        <h2 className="foundations-title">FOUNDATIONS OF TRUST</h2>
        <p className="foundations-tagline">your life, your space</p>
        <img src="/leaf-xxxl.webp" alt="" className="leaf-parallax" />
        <div className="three-panels">
          <div className="panel purpose-panel">
            <h3>PURPOSE</h3>
            <p>Every space is built with intent, not just profit.</p>
          </div>
          <div className="panel peace-panel">
            <h3>PEACE</h3>
            <p>Noise-reducing layouts and nature-first planning for mental ease.</p>
          </div>
          <div className="panel progress-panel">
            <h3>PROGRESS</h3>
            <p>Smart infrastructure that evolves with you.</p>
          </div>
        </div>
      </section>

      {/* Three Panel Sections */}
      <section className="three-panel-restaurant">
        <div className="panel purpose-panel">
          <h3>PURPOSE</h3>
          <p>Every space is built with intent, not just profit.</p>
        </div>
        <div className="panel peace-panel">
          <h3>PEACE</h3>
          <p>Noise-reducing layouts and nature-first planning for mental ease.</p>
        </div>
        <div className="panel progress-panel">
          <h3>PROGRESS</h3>
          <p>Smart infrastructure that evolves with you.</p>
        </div>
      </section>

      <section className="three-panel-nature">
        <div className="panel purpose-panel">
          <h3>PURPOSE</h3>
          <p>Every space is built with intent, not just profit.</p>
        </div>
        <div className="panel peace-panel">
          <h3>PEACE</h3>
          <p>Noise-reducing layouts and nature-first planning for mental ease.</p>
        </div>
        <div className="panel progress-panel">
          <h3>PROGRESS</h3>
          <p>Smart infrastructure that evolves with you.</p>
        </div>
      </section>

      <section className="three-panel-city">
        <div className="panel purpose-panel">
          <h3>PURPOSE</h3>
          <p>Every space is built with intent, not just profit.</p>
        </div>
        <div className="panel peace-panel">
          <h3>PEACE</h3>
          <p>Noise-reducing layouts and nature-first planning for mental ease.</p>
        </div>
        <div className="panel progress-panel">
          <h3>PROGRESS</h3>
          <p>Smart infrastructure that evolves with you.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;