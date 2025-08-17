import React from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="terms-page">

      <main className="main-content-terms-page">
        <div className="date-info-terms-page">
          Last Updated: 01-06-2025
        </div>
        
        <h1 className="page-title-terms-page">TERMS & CONDITIONS</h1>
        
        <div className="content-section-terms-page">
          <p className="intro-text-terms-page">
            Welcome to Subh Housing's website. By accessing or using this website, you agree to comply with and be bound by the 
            following terms and conditions. If you do not agree with any part of these terms, please do not use our website.
          </p>
          
          <div className="section-terms-page">
            <h2>1. Use of the Website</h2>
            <p>
              This website is intended for informational purposes only. You may not use the content or materials for commercial purposes 
              without prior written consent from Subh Housing.
            </p>
          </div>
          
          <div className="section-terms-page">
            <h2>2. Intellectual Property</h2>
            <p>
              All content, including text, images, graphics, logos, and design elements, are the property of Subh Housing and are protected 
              by applicable intellectual property laws. Unauthorized use of any materials may result in legal action.
            </p>
          </div>
          
          <div className="section-terms-page">
            <h2>3. Project Information</h2>
            <p>
              All project details, floor plans, pricing, and availability provided on the website are subject to change without notice. For the 
              latest updates, we encourage users to contact our sales team directly.
            </p>
          </div>
          
          <div className="section-terms-page">
            <h2>4. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites for convenience. Subh Housing is not responsible for the content, privacy 
              policies, or practices of any third-party websites.
            </p>
          </div>
          
          <div className="section-terms-page">
            <h2>5. Limitation of Liability</h2>
            <p>
              Subh Housing will not be liable for any direct, indirect, or incidental damages resulting from the use of this website or its 
              content.
            </p>
          </div>
          
          <div className="section-terms-page">
            <h2>6. Modifications</h2>
            <p>
              We reserve the right to change or update these terms at any time. It is your responsibility to review them periodically.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;