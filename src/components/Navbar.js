import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles.css';
import { FaHome, FaUser, FaShoppingCart, FaEnvelope, FaPowerOff, FaPlay  } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-light amber lighten-4 mb-4">
      <div className="logo">
        <h1>Navbar</h1>
      </div>
      <button className={`navbar-toggler first-button ${isMenuOpen ? "active" : ""}`} type="button" onClick={toggleMenu}>
        <div className="animated-icon1"><span></span><span></span><span></span></div>
      </button>
      <div className={`collapse navbar-collapse ${isMenuOpen ? "open" : ""}`} id="navbarSupportedContent20">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Accueil <span className="sr-only"></span> <FaHome className="icon-right" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/boutique" className="nav-link" onClick={toggleMenu}>
              Boutique <span className="sr-only"></span> <FaPlay className="icon-right" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/panier" className="nav-link" onClick={toggleMenu}>
              Panier <span className="sr-only"></span> <FaShoppingCart className="icon-right" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>
              Contact <span className="sr-only"></span> <FaEnvelope className="icon-right" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/connexion" className="nav-link" onClick={toggleMenu}>
              Connexion / Inscription <span className="sr-only"></span> <FaUser className="icon-right" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/deconnexion" className="nav-link" onClick={toggleMenu}>
              Déconnexion <span className="sr-only"></span> <FaPowerOff className="icon-right" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
