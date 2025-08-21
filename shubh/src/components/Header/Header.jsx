import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Model from '../model/model';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10); // Very little scroll needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to check if link is active
  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeMobileMenu();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <nav className="nav-left">
            <Link 
              to="/" 
              className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
            >
              HOME
            </Link>
            <Link 
              to="/aboutus" 
              className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
            >
              ABOUT US
            </Link>
            <Link 
              to="/projects" 
              className={`nav-link ${isActiveLink('/projects') ? 'active' : ''}`}
            >
              PROJECTS
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
            >
              CONTACT US
            </Link>
          </nav>

          <div className="logo-container">
            <Link to="/" style={{ cursor: 'pointer' }}>
              <img src="/Subh-Housing-Logo-White.png" alt="SUBH Housing" className="logo" />
            </Link>
          </div>

          <div className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>

          <div className="nav-right">
            <a href="tel:+918920022004" className="phone-number">+ (91) 89 2002 2004</a>
            <button className="schedule-btn" onClick={openModal}>SCHEDULE A VISIT</button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
      
      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={closeMobileMenu}>×</button>
        <div className="mobile-menu-content">
          <nav className="mobile-nav-links">
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActiveLink('/') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              HOME
            </Link>
            <Link 
              to="/aboutus" 
              className={`mobile-nav-link ${isActiveLink('/about') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              ABOUT US
            </Link>
            <Link 
              to="/projects" 
              className={`mobile-nav-link ${isActiveLink('/projects') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              PROJECT
            </Link>
            <Link 
              to="/contact" 
              className={`mobile-nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
            <Link 
              to="/gallery" 
              className={`mobile-nav-link ${isActiveLink('/gallery') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              GALLERY
            </Link>
          </nav>
        </div>
      </div>
      
      <Model isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;