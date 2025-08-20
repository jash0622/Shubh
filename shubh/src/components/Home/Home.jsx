import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Model from '../model/model';


const Home = () => {
  const [activeCard, setActiveCard] = useState('purpose'); // Default to purpose
  const [hoveredCard, setHoveredCard] = useState(null); // Track which card is hovered
  const [activeBusinessCard, setActiveBusinessCard] = useState('real-estate'); // Default to real estate
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setScrollY(scrolled);

      const parallaxRings = document.querySelector('.rings-parallax');
      const storyDescription = document.querySelector('.story-description');
      const parallaxLeaf = document.querySelector('.leaf-parallax');
      const foundationsTitle = document.querySelector('.foundations-title');
      const storyRightFrame = document.querySelector('.story-right-frame');
      const parallaxLeafExplore = document.querySelector('.leaf-parallax-explore');
      const excellenceContent = document.querySelector('.excellence-content');
      const exploreSection = document.querySelector('.explore-project-section');

      // === Rings parallax ===
      if (parallaxRings && storyDescription) {
        const storyRect = storyDescription.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const storyCenter = storyRect.top + storyRect.height / 2;

        if (storyCenter <= windowHeight / 2) {
          parallaxRings.style.transform = `translateY(-100vh)`;
        } else {
          parallaxRings.style.transform = `translateY(${scrolled * -0.3}px)`;
        }
      }



      // === Leaves parallax ===
      if (parallaxLeaf && foundationsTitle && storyRightFrame) {
        const storyRightRect = storyRightFrame.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Define animation boundaries
        const showTrigger = storyRightRect.bottom;
        
        // Check if the trigger point is within the viewport
        if (showTrigger < windowHeight) {
          parallaxLeaf.style.opacity = '1';
          
          // Calculate upward movement based on scroll distance
          const scrollDistance = windowHeight - showTrigger;
          const speed = -0.7; // Negative for upward scroll
          
          parallaxLeaf.style.transform = `translateY(${scrollDistance * speed}px) scale(0.8)`;
        } else {
          // Keep the leaf hidden when it's not in the animation zone
          parallaxLeaf.style.opacity = '0';
        }
        
        // Hide the leaf once it scrolls completely out of view
        const leafRect = parallaxLeaf.getBoundingClientRect();
        if (leafRect.bottom < 0) {
          parallaxLeaf.style.opacity = '0';
        }
      }

      // === Explore section leaves parallax ===
      if (parallaxLeafExplore && exploreSection && excellenceContent) {
        const exploreRect = exploreSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Define animation boundaries
        const showTrigger = exploreRect.bottom;
        
        // Check if the trigger point is within the viewport
        if (showTrigger < windowHeight) {
          parallaxLeafExplore.style.opacity = '1';
          
          // Calculate upward movement based on scroll distance
          const scrollDistance = windowHeight - showTrigger;
          const speed = -0.7; // Negative for upward scroll
          
          parallaxLeafExplore.style.transform = `translateY(${scrollDistance * speed}px) scale(0.8)`;
        } else {
          // Keep the leaf hidden when it's not in the animation zone
          parallaxLeafExplore.style.opacity = '0';
        }
        
        // Hide the leaf once it scrolls completely out of view
        const leafRect = parallaxLeafExplore.getBoundingClientRect();
        if (leafRect.bottom < 0) {
          parallaxLeafExplore.style.opacity = '0';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardHover = (cardType) => {
    setActiveCard(cardType);
    setHoveredCard(cardType);
  };

  const handleCardLeave = () => {
    setActiveCard('purpose'); // Reset to purpose background
    setHoveredCard(null); // Remove white box
  };

  const handleBusinessCardClick = (cardType) => {
    setActiveBusinessCard(cardType);
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home fade-in-element">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
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

      {/* Welcome Section */}
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

      {/* Story Description */}
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

      {/* Combined Story + Foundations */}
      <section className="combined-story-foundations">
        {/* Left image frame - below text paragraph, slightly overflowing upward */}
        <div className="image-frame story-left-frame"
             style={{
               opacity: scrollY > window.innerHeight * 1.5 ? 1 : 0,
               transition: 'opacity 0.5s ease-in-out'
             }}>
          <div className="story-left"
               style={{
                 transform: `translateY(${scrollY * -0.2}px)`
               }}></div>
        </div>
        
        {/* Right image frame - taller height, positioned higher to overlay story description */}
        <div className="image-frame story-right-frame"
             style={{
               opacity: scrollY > window.innerHeight * 1.0 ? 1 : 0,
               transition: 'opacity 0.5s ease-in-out'
             }}>
          <div className="story-right"
               style={{
                 transform: `translateY(${scrollY * -0.3}px)`
               }}></div>
        </div>
        
        {/* Badge overlay on top of both images */}
        <div className="story-badge">
          <span>SUBH<br />STORY</span>
        </div>

        <h2 className="foundations-title">FOUNDATIONS OF TRUST</h2>
        <p className="foundations-tagline">your life, your space</p>

        {/* Leaves */}
        <img src="/leaf-xxxl.webp" alt="" className="leaf-parallax" />

        <div className={`three-panels ${activeCard}`}>
          <div 
            className="panel purpose-panel"
            onMouseEnter={() => handleCardHover('purpose')}
            onMouseLeave={handleCardLeave}
          >
            <div className={`panel-card ${hoveredCard === 'purpose' ? 'active' : ''}`}>
              <h3 className="panel-header">
                <span className="header-text">PURPOSE</span>
              </h3>
              <p>Every space is built with intent, not just profit.</p>
            </div>
          </div>
          <div 
            className="panel peace-panel"
            onMouseEnter={() => handleCardHover('peace')}
            onMouseLeave={handleCardLeave}
          >
            <div className={`panel-card ${hoveredCard === 'peace' ? 'active' : ''}`}>
              <h3 className="panel-header">
                <span className="header-text">PEACE</span>
              </h3>
              <p>Noise-reducing layouts and nature-first planning for mental ease.</p>
            </div>
          </div>
          <div 
            className="panel progress-panel"
            onMouseEnter={() => handleCardHover('progress')}
            onMouseLeave={handleCardLeave}
          >
            <div className={`panel-card ${hoveredCard === 'progress' ? 'active' : ''}`}>
              <h3 className="panel-header">
                <span className="header-text">PROGRESS</span>
              </h3>
              <p>Smart infrastructure that evolves with you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Development Section */}
      <section className="signature-development">
        <div className="signature-content">
          <div className="signature-header">
            <h2>SIGNATURE</h2>
            <h2>DEVELOPMENT</h2>
          </div>
          <div className="video-container">
            <video className="signature-video" autoPlay muted loop playsInline>
              <source src="/video2.mp4" type="video/mp4" />
            </video>
            <img src="/image-building.png" alt="Signature Building" className="building-image" />
          </div>
          <div className="signature-logo">
            <div className="logo-background"></div>
            <img src="/Seggovias.png" alt="Seggovias Logo" />
          </div>
          <img src="/image-girl.webp" alt="Mother and Daughter" className="girl-image" />
          <div className="signature-footer">
            <p>
              Seggovias by Subh Housing is a premium 3 BHK + Study residential project offering spacious<br />
              layouts, modern interiors, and lifestyle amenities<br />
              — designed for elevated living in a prime, well-connected location.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Project Section */}
      <section className="explore-project-section">
        <img src="/leaf-md (1).webp" alt="" className="leaf-parallax-explore" />
        <div className="explore-button">
          <span>EXPLORE</span>
          <span>PROJECT</span>
        </div>
      </section>

      {/* Excellence in Details Section */}
      <section className="excellence-section">
        <div className="excellence-content">
          <h3 className="excellence-subtitle">EXCELLENCE</h3>
          <h3 className="excellence-subtitle">IN DETAILS</h3>
          <div className="subh-edge-container">
            <span className="experience-text">EXPERIENCE</span>
            <h2 className="subh-edge-title">THE SUBH EDGE</h2>
          </div>
        </div>
      </section>

      {/* Values Slideshow Section */}
      <section className="values-slideshow-section">
        <ValuesSlideshow />
      </section>

      {/* Growing Across Frontiers Section */}
      <section className="growing-frontiers-section">
        <div className="frontiers-content">
          <div className="frontiers-text">
            <h2 className="frontiers-title">GROWING ACROSS<br />FRONTIERS</h2>
            <p className="frontiers-subtitle">Our business</p>
            <p className="frontiers-description">
              From developing high-end homes to acquiring prime land<br />
              and investing in India's sporting spirit, our ventures reflect<br />
              a bold, balanced vision for growth.
            </p>
          </div>
          
          <div className="business-cards">
            <div 
              className={`business-card real-estate-card ${activeBusinessCard === 'real-estate' ? 'active' : ''}`}
              onClick={() => handleBusinessCardClick('real-estate')}
            >
              <div className="card-content">
                <h3>REAL ESTATE DEVELOPMENT</h3>
              </div>
            </div>
            
            <div 
              className={`business-card land-investment-card ${activeBusinessCard === 'land-investment' ? 'active' : ''}`}
              onClick={() => handleBusinessCardClick('land-investment')}
            >
              <div className="card-content">
                <h3>LAND ACQUISITION</h3>
              </div>
            </div>
            
            <div 
              className={`business-card sports-card ${activeBusinessCard === 'sports' ? 'active' : ''}`}
              onClick={() => handleBusinessCardClick('sports')}
            >
              <div className="card-content">
                <h3>CRICKET FRANCHISE</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Partnership Section */}
      <section className="bank-partnership-section">
        <div className="bank-content">
          <div className="bank-text-section">
            <div className="bank-title-wrapper">
              <p className="bank-stay-informed">Stay informed</p>
              <h2 className="bank-title">INSIGHTS & UPDATES</h2>
            </div>
            <div className="bank-description-wrapper">
              <p className="bank-description">
                Discover the latest news, expert tips, and behind-the-scenes stories from the world of real estate and lifestyle at Subh Housing.
              </p>
            </div>
          </div>
          
          <div className="bank-cta-section">
            <p className="bank-cta-text">SMART BUYERS STAY UPDATED — BE ONE OF THEM.</p>
            <button className="bank-cta-button" onClick={openModal}>GET UPDATES NOW</button>
          </div>
          
          <div className="bank-logos-section">
            <div className="bank-section-title-wrapper">
              <h2 className="bank-section-title">
                BANK<br />
                ON<br />
                SUBH
              </h2>
              <p className="bank-section-subtitle">
                HASSLE-<br />
                FREE<br />
                HOMEBUYING
              </p>
            </div>
            
            <div className="bank-logos-container">
              <div className="bank-row">
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={4}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  className="bank-swiper-top"
                >
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/1361099-idfc-first-bank (1).jpg" alt="IDFC First Bank" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/Axis_Bank_logo.svg (1).png" alt="Axis Bank" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/BankOfBarodaLogo.svg (1).png" alt="Bank of Baroda" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/Bank-of-India-Logo-scaled.png" alt="Bank of India" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/banks_1494089366 (1).webp" alt="Bank Logo" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              
              <div className="bank-row">
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={4}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    reverseDirection: true,
                  }}
                  speed={1000}
                  className="bank-swiper-bottom"
                >
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/icici-home-loan (1).jpg" alt="ICICI Bank" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/images (1).png" alt="Bank Logo" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/IndusInd_Bank_SVG_Logo.svg (1).png" alt="IndusInd Bank" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/Kotak_Mahindra_Bank_logo-scaled.png" alt="Kotak Mahindra Bank" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/LIC-Housing-Finance-Logo-Vector-PNG-1024x511-1.png" alt="LIC Housing Finance" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/logo-yesbank (1).png" alt="Yes Bank" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/SBI-Logo-scaled.png" alt="SBI" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bank-logo-block">
                      <img src="/Tata_Capital_Logo-01-scaled.jpg" alt="Tata Capital" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      <Model isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

const ValuesSlideshow = () => {
  const slides = [
    {
      title: "INTEGRITY",
      description: "We operate with complete transparency, honesty, and ethical practices—earning your trust from day one to project handover."
    },
    {
      title: "QUALITY", 
      description: "We use premium materials, smart design, and rigorous construction standards to ensure homes that last for generations."
    },
    {
      title: "TIMELINESS",
      description: "On-time delivery is our commitment—not a bonus. We value your time and build with disciplined execution."
    },
    {
      title: "DESIGN",
      description: "Our spaces blend functionality and elegance, crafted to complement modern lifestyles and support family well-being."
    },
    {
      title: "INNOVATION",
      description: "Smart infrastructure, sustainable practices, and forward-thinking design make every project future-ready and efficient."
    },
    {
      title: "COMMUNITY",
      description: "We build inclusive, vibrant environments where families thrive and neighbors become lifelong friends."
    },
    {
      title: "SUPPORT",
      description: "Our relationship doesn't end at possession—we're here with responsive post-sales support and care."
    },
    {
      title: "WELLBEING",
      description: "We prioritize natural light, green zones, and open spaces to create environments that nurture physical and mental wellness."
    }
  ];

  return (
    <div className="values-slideshow">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.home-nav-arrow-left',
          nextEl: '.home-nav-arrow-right',
        }}
        className="slides-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-oval">
              <div className="slide-icon">
                <img src="/kindness_11777794.svg" alt="Kindness Icon" />
              </div>
              <h3 className="slide-title">{slide.title}</h3>
              <p className="slide-description">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button className="home-nav-arrow home-nav-arrow-left">
        ←
      </button>
      <button className="home-nav-arrow home-nav-arrow-right">
        →
      </button>
    </div>
  );
};

export default Home;