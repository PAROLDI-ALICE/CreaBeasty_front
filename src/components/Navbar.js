import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles.css';

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
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/features" className="nav-link" onClick={toggleMenu}>
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link" onClick={toggleMenu}>
              Pricing
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
