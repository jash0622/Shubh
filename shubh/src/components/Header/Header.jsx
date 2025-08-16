import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  return (
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

        <div className="nav-right">
          <a href="tel:+918920022004" className="phone-number">+ (91) 89 2002 2004</a>
          <button className="schedule-btn">SCHEDULE A VISIT</button>
        </div>
      </div>
    </header>
  );
};

export default Header;