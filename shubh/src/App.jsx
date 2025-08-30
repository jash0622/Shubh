import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Home from './components/Home/Home.jsx';
import Project from './components/Project/Project.jsx';
import Contact from './components/Contact/Contact.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import TermsConditions from './components/TermsConditions/TermsConditions.jsx';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx';
import Model from './components/model/model.jsx';
import Gallary from './components/Gallary/Gallary.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      mouseMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Auto popup modal every 30 seconds
    const modalInterval = setInterval(() => {
      setIsModalOpen(true);
    }, 60000);

    return () => {
      lenis.destroy();
      clearInterval(modalInterval);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/term&conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/gallery" element={<Gallary />} />
        </Routes>
        {/* <Model isOpen={isModalOpen} onClose={closeModal} /> */}
      </div>
    </Router>
  );
}

export default App;