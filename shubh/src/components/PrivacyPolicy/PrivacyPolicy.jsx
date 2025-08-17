import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">

      <main className="main-content-privacy-page">
        <div className="date-info-privacy-page">
          Last Updated: 01-06-2025
        </div>
        
        <h1 className="page-title-privacy-page">PRIVACY POLICY</h1>
        
        <div className="content-section-privacy-page">
          <p className="intro-text-privacy-page">
            Subh Housing is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your 
            information when you visit our website.
          </p>
          
          <div className="section-privacy-page">
            <h2>1. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, phone number, and location when you fill out a form, 
              request a callback, or contact us through the website.
            </p>
          </div>
          
          <div className="section-privacy-page">
            <h2>2. Use of Information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Respond to your inquiries or requests</li>
              <li>Send you updates on our projects and services</li>
              <li>Improve website functionality and user experience</li>
            </ul>
          </div>
          
          <div className="section-privacy-page">
            <h2>3. Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal data. However, no online transmission can be 100% 
              secure, and we cannot guarantee complete security.
            </p>
          </div>
          
          <div className="section-privacy-page">
            <h2>4. Sharing of Information</h2>
            <p>
              We do not sell or rent your personal information. We may share data with trusted third-party partners who assist us in 
              operating our website or servicing you, under confidentiality agreements.
            </p>
          </div>
          
          <div className="section-privacy-page">
            <h2>5. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience and collect analytical data. You can choose to disable cookies in 
              your browser settings.
            </p>
          </div>
          
          <div className="section-privacy-page">
            <h2>6. User Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information by contacting us directly at info@subhhousing.com.
            </p>
          </div>
          
          <div className="section-privacy-page">
            <h2>7. Policy Updates</h2>
            <p>
              We may revise this Privacy Policy from time to time. Any updates will be posted on this page with the updated date.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;