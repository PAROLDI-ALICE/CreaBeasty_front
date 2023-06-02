import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import '../Styles.css';

function Footer() {
  return (
    <footer className="footer amber lighten-4">
      <div className="footer-content">
        
        <div className="footer-social">
          <a href="https://facebook.com" className="footer-social-link">
            <FaFacebook className="footer-social-icon" />
          </a>
          <a href="https://twitter.com" className="footer-social-link">
            <FaTwitter className="footer-social-icon" />
          </a>
          <a href="https://instagram.com" className="footer-social-link">
            <FaInstagram className="footer-social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
