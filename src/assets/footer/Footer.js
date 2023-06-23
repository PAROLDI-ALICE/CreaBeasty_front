import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaShoppingCart, FaEnvelope } from "react-icons/fa";
import "../footer/footer_style.css";

function Footer() {
  return (
    <footer className="footer amber lighten-4">
      <div className="footer-content">
        <div className="text-footer-icon">
          <div className="iconFooterContent">
            <Link to="/contact" className="nav-link1">
              <FaEnvelope />
              &nbsp; &nbsp; contact
            </Link>
          </div>
          <div className="iconFooterContent">
            <Link to="/panier" className="nav-link1">
              <FaShoppingCart />
              &nbsp; &nbsp; commande
            </Link>
          </div>
        </div>
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
        <div className="text-footer">
          <div className="footerText">
            <p>copyright</p>
          </div>
          <div className="footerText">
            <p>mentions Légales</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
