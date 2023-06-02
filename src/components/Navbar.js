import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Jeremie Garod</h1>
      </div>

      <div
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className="nav-link" onClick={toggleMenu}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/projets" className="nav-link" onClick={toggleMenu}>
            Projets
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
