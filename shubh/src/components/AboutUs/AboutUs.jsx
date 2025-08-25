import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1); // Start from 1 (actual first slide)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Newsletter form state
  const [newsletterData, setNewsletterData] = useState({
    fullName: '',
    email: ''
  });
  const [newsletterErrors, setNewsletterErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate globe position based on scroll
  const calculateGlobePosition = () => {
    const parallaxSectionStart = window.innerHeight * 2.2; // Start of parallax section
    const parallaxSectionHeight = window.innerHeight * 2; // Height of parallax section
    const valuesSection = parallaxSectionStart + parallaxSectionHeight; // Start of values section
    const extendedScrollHeight = window.innerHeight * 0.5; // Additional scroll distance for complete exit
    
    // Start moving globe as soon as parallax section starts
    if (scrollY >= parallaxSectionStart) {
      const totalScrollDistance = parallaxSectionHeight + extendedScrollHeight;
      const scrollProgress = (scrollY - parallaxSectionStart) / totalScrollDistance;
      const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
      
      // Move from bottom (0%) to completely off screen (-200%)
      const translateY = -(clampedProgress * 200);
      return translateY;
    }
    
    // Globe stays at bottom before parallax section
    return 0;
  };

  const globeTranslateY = calculateGlobePosition();

  // Faces data
  const facesData = [
    {
      name: "AYUSH SINGLA",
      position: "CEO, SUBH HOUSING",
      quote: "I believe good design changes lives. We're committed to creating smart, future-ready spaces that truly feel like home.",
      message: "Thank you for your trust. Let's shape something remarkable together.",
      signature: "Ayush Singla",
      image: "/ayushsingla.png"
    },
    {
      name: "RAJKAMAL SINGLA",
      position: "FOUNDER, SUBH HOUSING",
      quote: "Subh Housing began with a dream — to build not just homes, but trust. Every space we create is rooted in values, comfort, and long-term peace of mind.",
      message: "Thank you for considering us. Your journey to a better life starts here.",
      signature: "Rajkamal Singla",
      image: "/rajkamal.png"
    },
    {
      name: "ABHISHEK SINGLA",
      position: "MANAGING DIRECTOR, SUBH HOUSING",
      quote: "For me, it's always about people first. We build homes that listen — to your needs, your lifestyle, and your aspirations.",
      message: "Thank you for letting us be a part of your story.",
      signature: "Abhishek Singla",
      image: "/abhishek.png"
    }
  ];

  // Create slides with duplicates for infinite loop
  const slides = [
    facesData[facesData.length - 1], // Last slide (for smooth transition from first to last)
    ...facesData, // Original slides
    facesData[0] // First slide (for smooth transition from last to first)
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  };

  // Handle infinite loop transitions
  useEffect(() => {
    if (currentSlide === slides.length - 1) {
      // If at the last slide (duplicate of first), jump to actual first after transition
      setTimeout(() => {
        setCurrentSlide(1);
        setIsTransitioning(false);
      }, 500);
    } else if (currentSlide === 0) {
      // If at the first slide (duplicate of last), jump to actual last after transition
      setTimeout(() => {
        setCurrentSlide(slides.length - 2);
        setIsTransitioning(false);
      }, 500);
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  }, [currentSlide, slides.length]);

  // Newsletter form handlers
  const handleNewsletterChange = (e) => {
    const { name, value } = e.target;
    setNewsletterData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (newsletterErrors[name]) {
      setNewsletterErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateNewsletterForm = () => {
    const errors = {};
    
    // Full Name validation
    if (!newsletterData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (newsletterData.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(newsletterData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    return errors;
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateNewsletterForm();
    if (Object.keys(errors).length > 0) {
      setNewsletterErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form on success
      setNewsletterData({ fullName: '', email: '' });
      setNewsletterErrors({});
      alert('Thank you for subscribing to our newsletter!');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="aboutus-container fade-in-element">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <Header />
      {/* Background Video */}
      <video className="background-video" autoPlay muted loop>
        <source src="/project-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="video-overlay"></div>


      {/* Main Content */}
      <main className="main-content">
        <div className="content-left">
          <h1 className="main-heading">THERE IS NO PLACE LIKE</h1>
          <h2 className="home-text">home</h2>
          <button className="explore-btn">EXPLORE OUR JOURNEY</button>
        </div>

        <div className="content-right">
          <p className="description">
            We believe home is where your heart settles, and we're honored to be part of your story.
          </p>
        </div>
      </main>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <p className="mission-subtitle">You know when you like a place,<br />BUT YOU CAN'T EXPLAIN WHY?</p>
            <h2 className="mission-heading">
              THAT'S WHAT WE  DO
            </h2>
          </div>
        </div>
        
        {/* Mission Description - Positioned for scroll reveal */}
        <div className="mission-description">
          <p>
            Our mission is to create places where people feel good and want to stay. Our values are the constant pursuit of innovation, technical excellence, and passion for what we do.
          </p>
        </div>

        <div className="flower-image">
          <video autoPlay muted >
            <source src="/abut.webm" type="video/webm" />
          </video>
        </div>
      </section>

      {/* Right Container - Moved outside mission section */}
      <div className="parallax-right"
           style={{
             opacity: scrollY > window.innerHeight * 1.0 ? 1 : 0,
             transition: 'opacity 0.5s ease-in-out'
           }}>
        <div className="parallax-bg-right"
             style={{
               backgroundImage: 'url(/aboutusright.jpg)',
               transform: `translateY(${scrollY * -0.3}px)`
             }}>
        </div>
      </div>

      {/* Left Container - Moved outside mission section */}
      <div className="parallax-left" 
           style={{
             opacity: scrollY > window.innerHeight * 1.5 ? 1 : 0,
             transition: 'opacity 0.5s ease-in-out'
           }}>
        <div className="parallax-bg-left" 
             style={{
               backgroundImage: 'url(/aboutusleft.jpg)',
               transform: `translateY(${scrollY * -0.2}px)`
             }}>
        </div>
      </div>

      {/* Parallax Section */}
      <section className="parallax-section">
        {/* Globe Image with Scroll Effect */}
        <div 
          className="globe-image"
          style={{
            transform: `translateY(${globeTranslateY}%)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img src="/globe.png" alt="Globe" />
        </div>

        {/* Vision Text for Right Side - Elementor style reveal */}
        <div className="vision-right-text"
             style={{
               opacity: scrollY > window.innerHeight * 1.2 ? 1 : 0,
               transition: 'opacity 0.6s ease-in'
             }}>
          <p className="vision-subtitle">A VISION<br/>ROOTED IN<br/>MEANING</p>
        </div>

        {/* Main Vision Text - Elementor style reveal with left container */}
         <div className="vision-main-text"
              style={{
                opacity: scrollY > window.innerHeight * 1.2 ? 1 : 0,
                transition: 'opacity 0.6s ease-in'
              }}>
          <h2 className="vision-title">A VISION</h2>
          <h3 className="vision-powered">POWERED BY PEOPLE</h3>
          <p className="vision-explore">explore our journey</p>
          <p className="vision-description">
            Buying a home isn't just a transaction — it's a turning point in your life. <br/> At Subh Housing, we honour that. Every conversation, every design,<br/> and every brick laid reflects our commitment to building not just houses,<br/> but homes where memories are made and futures are secured.<br/> You've worked hard for this moment —<br/> and we're here to make it worthwhile.
          </p>
        </div>
          
        
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-content">
          <div className="values-header">
            <h2 className="values-main-title">WHAT WE STAND FOR</h2>
            <p className="values-cursive">heart of subh</p>
            <p className="values-subtitle">OUR VALUES — WHAT<br />GUIDES US</p>
          </div>

          <div className="values-cards">
            <div className="value-card card-1">
              <div className="card-number">01</div>
              <h3 className="card-title">VISION & INNOVATION</h3>
              <p className="card-description">
                We think ahead to build beyond. Our forward-looking mindset, grounded in expertise and stability, helps us create real estate solutions with enduring value.
              </p>
            </div>

            <div className="value-card card-2">
              <div className="card-number">02</div>
              <h3 className="card-title">INTEGRITY & PASSION</h3>
              <p className="card-description">
                Driven by purpose and guided by ethics, our passion fuels innovation and empowers us to make a meaningful, lasting difference in the lives we touch.
              </p>
            </div>

            <div className="value-card card-3">
              <div className="card-number">03</div>
              <h3 className="card-title">ELEGANCE & FLOW</h3>
              <p className="card-description">
                Excellence lies in the details. Through refined craftsmanship and unwavering consistency, we deliver quality that stands the test of time.
              </p>
            </div>

            <div className="value-card card-4">
              <div className="card-number">04</div>
              <h3 className="card-title">TRUST & SUPPORT</h3>
              <p className="card-description">
                We believe every lasting relationship begins with trust and grows stronger with support. At Subh Housing, we stand by our customers—every step, every promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Couple Section */}
      <section className="couple-section">
        <div className="couple-overlay"></div>
        <div className="couple-content">
          <p className="couple-subtitle">A PLACE WHERE LIFE BECOMES ART</p>
          <h2 className="couple-main-title">A NEW ERA FOR THE CITY, A NEW</h2>
          <h2 className="couple-subtitle-line">CHAPTER IN YOUR LIFE.</h2>
        </div>
      </section>

      {/* Step In Section */}
      <section className="step-in-section">
        <div className="step-in-content">
          <div className="curve-design">
            <img src="/design.png" alt="Curve Design" />
          </div>
          <button className="step-in-button">
            <span className="step-in-text">STEP IN<br />TODAY</span>
          </button>
        </div>
          
        <div className="faces-section">
          <div className="faces-header">
            <h2 className="faces-title">FACES OF SUBH</h2>
            <p className="faces-subtitle">founders</p>
          </div>

          <div className="faces-slider">
            <div 
              className="faces-container"
              style={{
                transform: `translateX(-${currentSlide * 20}%)`,
                transition: isTransitioning ? 'transform 0.5s ease' : 'none'
              }}
            >
              {slides.map((face, index) => (
                <div key={index} className="face-slide">
                  <div className="face-content">
                    <h3 className="face-name">{face.name}</h3>
                    <p className="face-position">{face.position}</p>
                    
                    <div className="face-quote-card">
                      <p className="face-quote">"{face.quote}"</p>
                      <p className="face-message">{face.message}</p>
                      <p className="face-signature">{face.signature}</p>
                    </div>
                  </div>
                  
                  <div className="face-image">
                    <img src={face.image} alt={face.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="faces-navigation">
            <button 
              className="aboutus-nav-arrow" 
              onClick={prevSlide}
            >
              &#8249;
            </button>
            <button 
              className="aboutus-nav-arrow" 
              onClick={nextSlide}
            >
              &#8250;
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-header">
            <h2 className="newsletter-title">JOIN OUR NEWSLETTER</h2>
            <p className="newsletter-description">
              Subscribe to the Subh Newsletter for exclusive insights, project updates, and valuable property 
              tips delivered straight to your inbox.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Full Name*"
                  value={newsletterData.fullName}
                  onChange={handleNewsletterChange}
                  className={`aboutus-form-input ${newsletterErrors.fullName ? 'error' : ''}`}
                />
                {newsletterErrors.fullName && (
                  <span className="error-message">{newsletterErrors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={newsletterData.email}
                  onChange={handleNewsletterChange}
                  className={`aboutus-form-input ${newsletterErrors.email ? 'error' : ''}`}
                />
                {newsletterErrors.email && (
                  <span className="error-message">{newsletterErrors.email}</span>
                )}
              </div>

              <button 
                type="submit" 
                className="newsletter-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join'}
              </button>
            </div>

            <div className="privacy-notice">
              <span className="privacy-icon">🔒</span>
              <span className="privacy-text">Your personal information is encrypted</span>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;