import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Project.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

function Project() {
  // State management
  const [currentGlimpseTab, setCurrentGlimpseTab] = useState('interior');
  const [currentInteriorSlide, setCurrentInteriorSlide] = useState(0);
  const [currentExteriorSlide, setCurrentExteriorSlide] = useState(0);
  const [currentAmenityTab, setCurrentAmenityTab] = useState('wellness');
  const [currentAmenitySlide, setCurrentAmenitySlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Data arrays
  const interiorSlides = [
    { name: 'LIVING AREA', image: '/living-area.jpg' },
    { name: 'DINING AREA', image: '/dining-area.jpg' },
    { name: 'KITCHEN', image: '/kitchen.jpg' },
    { name: 'BEDROOM', image: '/Bedroom.jpg' },
    { name: 'BALCONY AREA', image: '/Balcony-area.jpg' },
    { name: 'WASHROOM', image: '/washroom.jpg' }
  ];

  const exteriorSlides = [
    { image: '/exterior-1.jpg' },
    { image: '/exterior-2.jpg' },
    { image: '/exterior-3.jpg' },
    { image: '/exterior4.jpg' },
    { image: '/exterior-5.jpg' },
    { image: '/exterior-6.jpg' }
  ];

  const amenities = {
    wellness: [
      { name: 'GYMNASIUM', image: '/gym.jpg' },
      { name: 'CLUB HOUSE', image: '/club.jpg' },
      { name: 'YOGA CENTRE', image: '/yoga.jpg' },
      { name: 'SAUNA', image: '/souna.jpg' },
      { name: 'SPORTS COMPLEX', image: '/sports.jpg' }
    ],
    leisure: [
      { name: 'SKY LAGOON DINING', image: '/sky.jpg' },
      { name: 'SUNKEN PODS', image: '/sunken.jpg' },
      { name: 'POOL', image: '/pool.jpg' },
      { name: 'BREW CAFE', image: '/brew.jpg' },
      { name: 'VIRTUAL GAMING', image: '/virtual.jpg' }
    ],
    business: [
      { name: 'EXECUTIVE LOUNGE', image: '/lounge.webp' },
      { name: 'SKY LOUNGE', image: '/skylounge.jpg' },
      { name: 'BANQUET HALL', image: '/banquet.jpg' },
      { name: 'CO-WORKING AREA', image: '/coworking.jpg' },
      { name: 'BUSINESS CENTRE', image: '/business.jpg' }
    ]
  };

  // Circular slider navigation for interior
  const nextInteriorSlide = () => {
    setCurrentInteriorSlide((prev) => {
      const nextIndex = prev + 1;
      // When we reach the second set (duplicate), smoothly reset to beginning
      if (nextIndex >= interiorSlides.length) {
        setTimeout(() => setCurrentInteriorSlide(0), 50);
        return nextIndex;
      }
      return nextIndex;
    });
  };

  const prevInteriorSlide = () => {
    setCurrentInteriorSlide((prev) => {
      if (prev <= 0) {
        // Jump to last card of first set, then smoothly continue
        setTimeout(() => setCurrentInteriorSlide(interiorSlides.length - 1), 50);
        return interiorSlides.length * 2 - 1;
      }
      return prev - 1;
    });
  };

  // Circular slider navigation for exterior
  const nextExteriorSlide = () => {
    setCurrentExteriorSlide((prev) => {
      const nextIndex = prev + 1;
      // When we reach the second set (duplicate), smoothly reset to beginning
      if (nextIndex >= exteriorSlides.length) {
        setTimeout(() => setCurrentExteriorSlide(0), 50);
        return nextIndex;
      }
      return nextIndex;
    });
  };

  // Circular slider navigation for amenities
  const nextAmenitySlide = () => {
    const currentAmenities = amenities[currentAmenityTab];
    setCurrentAmenitySlide((prev) => (prev + 1) % currentAmenities.length);
  };

  const prevAmenitySlide = () => {
    const currentAmenities = amenities[currentAmenityTab];
    setCurrentAmenitySlide((prev) => 
      prev === 0 ? currentAmenities.length - 1 : prev - 1
    );
  };

  // Reset slide when tab changes
  const handleAmenityTabChange = (tab) => {
    setCurrentAmenityTab(tab);
    setCurrentAmenitySlide(0);
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="project-page fade-in-element">
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/video2.mp4" type="video/mp4" />
            <source src="/video2.mp4" type="video/webm" />
            {/* Fallback image if video doesn't load */}
            <img src="/images/hero/building-render-1.jpg" alt="The Seggovias Building" className="hero-image" />
          </video>
          {/* Overlay for better text readability */}
          <div className="hero-overlay"></div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="project-details">
        <div className="project-container">
          <div className="project-content">
            <div className="project-text">
              <img src="/Seggovias.png" alt="Seggovias Logo" className="project-logo" />
              
              <h2 className="project-location">SECTOR 70A, SPR ROAD, GURUGRAM</h2>
              
              <div className="project-description">
                <p>
                  Seggovias isn't just a place to live — it's where timeless Spanish charm 
                  transforms into a personal statement. Inspired by the historic city of Segovia 
                  and its iconic castle, this address brings royal heritage to the modern heart of 
                  Gurgaon.
                </p>
                
                <p>
                  With flowing stone facades, private terraces, and architecture that echoes 
                  the grace of nobility — Seggovias is designed for those who don't just seek 
                  luxury, but command it. Here, every residence is an exclusive retreat, built for 
                  those who move through life with quiet authority. This is where you don't 
                  share space, you own it. Where your mornings begin with grandeur, and your 
                  evenings end in peace.
                </p>
                
                <p className="project-highlight">
                  A home not just built for living but for a new beginning as a King!
                </p>
              </div>
              
              <div className="project-features">
                <div className="feature">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9 17 14.74 18.18 21.02 12 17.77 5.82 21.02 7 14.74 2 9 8.91 8.26 12 2"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h3>Premium 3 BHK + Study Layouts</h3>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18"/>
                      <path d="M5 21V7l8-4v18"/>
                      <path d="M19 21V11l-6-4"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h3>Modern Architecture & Design</h3>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                      <line x1="9" y1="9" x2="9.01" y2="9"/>
                      <line x1="15" y1="9" x2="15.01" y2="9"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h3>Peaceful Residential Environment</h3>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      <path d="M8 11l2 2 4-4"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h3>Vaastu-Compliant Layouts</h3>
                  </div>
                </div>
              </div>
              
              <div className="project-buttons">
                <button className="btn-primary">Enquire Now</button>
                <button className="btn-secondary">Download Brochure</button>
              </div>
            </div>
            
            <div className="project-visual">
              <img src="/hero.jpg" alt="Seggovias Architecture" />
            </div>
          </div>
        </div>
      </section>

      {/* Glimpses Section */}
      <section className="glimpses">
        <div className="project-container">
          <div className="glimpses-header">
            <h2 className="project-section-title">GLIMPSES OF MASTERPIECE</h2>
            <div className="glimpse-tabs">
              <button 
                className={`tab ${currentGlimpseTab === 'interior' ? 'active' : ''}`}
                onClick={() => setCurrentGlimpseTab('interior')}
              >
                INTERIOR
              </button>
              <button 
                className={`tab ${currentGlimpseTab === 'exterior' ? 'active' : ''}`}
                onClick={() => setCurrentGlimpseTab('exterior')}
              >
                EXTERIOR
              </button>
            </div>
          </div>
          
          {currentGlimpseTab === 'interior' ? (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={15}
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.glimpse-swiper-button-next',
                prevEl: '.glimpse-swiper-button-prev',
              }}
              breakpoints={{
                779: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  centeredSlides: false,
                }
              }}
              key={currentGlimpseTab}
              className="glimpse-swiper"
            >
              {interiorSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="slide-card">
                    <img src={slide.image} alt={slide.name} />
                    <div className="slide-overlay">
                      <h3>{slide.name}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="glimpse-swiper-button-prev"></div>
              <div className="glimpse-swiper-button-next"></div>
            </Swiper>
          ) : (
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={15}
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.glimpse-swiper-button-next',
                prevEl: '.glimpse-swiper-button-prev',
              }}
              breakpoints={{
                779: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  centeredSlides: false,
                }
              }}
              key={currentGlimpseTab}
              className="glimpse-swiper"
            >
              {exteriorSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="slide-card">
                    <img src={slide.image} alt={`Exterior View ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
              <div className="glimpse-swiper-button-prev"></div>
              <div className="glimpse-swiper-button-next"></div>
            </Swiper>
          )}
        </div>
      </section>

      {/* Immersive Tour Section */}
      <section className="immersive-tour">
        <div className="immersive-tour-header">
          <div className="project-container">
            <h2 className="project-section-title">IMMERSIVE TOUR</h2>
            <button className="virtual-tour-btn">VIRTUAL TOUR</button>
          </div>
        </div>
        
        <div className="immersive-tour-video">
          <video 
            className="immersive-video" 
            controls={false}
            playsInline
            muted
            poster="/thumbnail.png"
          >
            <source src="/immersive-tour.mp4" type="video/mp4" />
            <source src="/immersive-tour.webm" type="video/webm" />
          </video>
          <button className="immersive-play-button" onClick={() => {
            const video = document.querySelector('.immersive-video');
            const playBtn = document.querySelector('.immersive-play-button');
            if (video.paused) {
              video.play();
              playBtn.innerHTML = `
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.9)"/>
                  <rect x="30" y="28" width="6" height="24" fill="#4A1A5C"/>
                  <rect x="44" y="28" width="6" height="24" fill="#4A1A5C"/>
                </svg>
              `;
            } else {
              video.pause();
              playBtn.innerHTML = `
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.9)"/>
                  <path d="M32 28L56 40L32 52V28Z" fill="#4A1A5C"/>
                </svg>
              `;
            }
          }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.9)"/>
              <path d="M32 28L56 40L32 52V28Z" fill="#4A1A5C"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities">
        <div className="project-container">
          <div className="amenities-header">
            <h2 className="project-section-title">PREMIER OFFERINGS</h2>
            <div className="amenity-tabs">
              <button 
                className={`tab ${currentAmenityTab === 'wellness' ? 'active' : ''}`}
                onClick={() => handleAmenityTabChange('wellness')}
              >
                WELLNESS
              </button>
              <button 
                className={`tab ${currentAmenityTab === 'leisure' ? 'active' : ''}`}
                onClick={() => handleAmenityTabChange('leisure')}
              >
                LEISURE
              </button>
              <button 
                className={`tab ${currentAmenityTab === 'business' ? 'active' : ''}`}
                onClick={() => handleAmenityTabChange('business')}
              >
                BUSINESS
              </button>
            </div>
          </div>
          
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.amenity-swiper-button-next',
              prevEl: '.amenity-swiper-button-prev',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
                centeredSlides: false,
              }
            }}
            key={currentAmenityTab}
            className="amenity-swiper"
          >
            {amenities[currentAmenityTab].map((amenity, index) => (
              <SwiperSlide key={index}>
                <div className="amenity-card">
                  <img src={amenity.image} alt={amenity.name} />
                  <div className="amenity-overlay">
                    <h3>{amenity.name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="amenity-swiper-button-prev"></div>
            <div className="amenity-swiper-button-next"></div>
          </Swiper>
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="connectivity">
        <div className="project-container">
          <h2 className="project-section-title">CONNECTIVITY</h2>
          <div className="connectivity-map">
            <img src="/map.jpg" alt="Connectivity Map" />
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="floor-plans">
        <div className="project-container">
          <div className="floor-plans-header">
            <h2 className="project-section-title">PROJECT CONFIGURATION</h2>
            <div className="config-badge">3 BHK + LOUNGE + STUDY</div>
          </div>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: '.floor-plan-pagination',
              clickable: true,
              bulletClass: 'floor-plan-bullet',
              bulletActiveClass: 'floor-plan-bullet-active',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
              }
            }}
            className="floor-plan-swiper"
          >
            <SwiperSlide>
              <div className="floor-plan-card">
                <img src="/type-2p-floorplan.jpg" alt="Type 2P Floor Plan" />
                <div className="plan-details">
                  <h3>TYPE 2 P</h3>
                  <p>(3.5 BHK + SERVICE PERSONNEL)</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="floor-plan-card">
                <img src="/type-1p-floorplan.jpg" alt="Type 1P Floor Plan" />
                <div className="plan-details">
                  <h3>TYPE 1 P</h3>
                  <p>(3.5 BHK + SERVICE PERSONNEL)</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="floor-plan-card">
                <img src="/type-3p-floorplan.jpg" alt="Type 3P Floor Plan" />
                <div className="plan-details">
                  <h3>TYPE 3 P</h3>
                  <p>(3.5 BHK + SERVICE PERSONNEL)</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="floor-plan-card">
                <img src="/type-1-floorplan.jpg" alt="Type 1 Floor Plan" />
                <div className="plan-details">
                  <h3>TYPE 1</h3>
                  <p>(3.5 BHK + SERVICE PERSONNEL)</p>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="floor-plan-card">
                <img src="/type-2-floorplan.jpg" alt="Type 2 Floor Plan" />
                <div className="plan-details">
                  <h3>TYPE 2</h3>
                  <p>(3.5 BHK + SERVICE PERSONNEL)</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          
          <div className="floor-plan-pagination"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Project;