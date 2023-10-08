import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="clouds">
        {/* Cloud elements with different sizes and positions */}
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
        {/* Add more cloud elements as needed */}
      </div>
      <div className="footer-content">
        {/* Footer content goes here */}
        <p>&copy; 2023 Ehtisham Anwar</p>
      </div>
    </footer>
  );
}

export default Footer;
