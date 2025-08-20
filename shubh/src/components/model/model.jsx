import React, { useState } from 'react';
import './model.css';

const Model = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    queries: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-content">
          {/* Left Side */}
          <div className="modal-left">
            <div className="left-bg-overlay"></div>
            <div className="left-content">
              <div className="form-section">
                <div className="logo-container-modal">
                  <img src="/Subh-Housing-Logo-Purple.jpg" alt="Subh Housing Logo" className="subh-logo-modal" />
                </div>
                <h2 className="form-title">GET PROPERTY ALERTS THAT MATTER.</h2>
                
                <form onSubmit={handleSubmit} className="property-form">
                  <div className="form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name*"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number*"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      name="emailAddress"
                      placeholder="Email Address*"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="queries"
                      placeholder="Ask your queries"
                      value={formData.queries}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows="4"
                    />
                  </div>
                  
                  <button type="submit" className="submit-button">
                    Send Me Updates
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="modal-right">
            <div className="building-image-container">
              <div className="building-logo-overlay">
                <img src="/New-Project-3.webp" alt="Seggovias Logo" className="seggovias-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;