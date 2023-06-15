import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaUser, FaShoppingCart, FaEnvelope, FaPowerOff, FaPlay } from "react-icons/fa";
import "../Styles.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar${isMenuOpen ? " open" : ""}`}>
      <div className="logo">
        <h1>CreaBeasty</h1>
      </div>
      <button className={`navbar-toggler first-button ${isMenuOpen ? "active" : ""}`} type="button" onClick={toggleMenu}>
        <div className="animated-icon1">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className={`navbar-collapse ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link1" onClick={toggleMenu}>
              Accueil<span className="sr-only"></span> <FaHome className="icon-right" />
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to="/boutique" className="nav-link1" onClick={toggleMenu}>
              Boutique <span className="sr-only"></span> <FaPlay className="icon-right" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/panier" className="nav-link1" onClick={toggleMenu}>
              Panier <span className="sr-only"></span> <FaShoppingCart className="icon-right" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link1" onClick={toggleMenu}>
              Contact <span className="sr-only"></span> <FaEnvelope className="icon-right" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/connexion" className="nav-link1" onClick={toggleMenu}>
              Connexion / Inscription <span className="sr-only"></span> <FaUser className="icon-right" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/deconnexion" className="nav-link1" onClick={toggleMenu}>
              Déconnexion <span className="sr-only"></span> <FaPowerOff className="icon-right" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
