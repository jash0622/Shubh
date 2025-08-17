import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSliding(true);
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loader ${isSliding ? 'slide-down' : ''}`}>
      <img src="/Subh-Housing-Logo-White.png" alt="Loading" className="loader-logo" />
    </div>
  );
};

export default Loader;