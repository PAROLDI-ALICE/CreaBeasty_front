import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaShoppingCart,
  FaEnvelope,
  FaPowerOff,
  FaPlay,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../navbar/navbar_style.css";

function Navbar() {
  //NAVIGATION - const pour redirection (router-dom)
  const navigate = useNavigate();
  //MENU
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //DECONNEXION
  const handleLogout = async (event) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    //on récupère le bon endpoint
    await fetch(`http://127.0.0.1:8000/api/logout`, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.success) {
          alert("Vous êtes déconnecté(e) !");
          console.log(response);
          navigate("/");
        }
      });
  };
  return (
    <nav className={`navbar${isMenuOpen ? " open" : ""}`}>
      <div className="logo">
        <Link to="/" className="nav-link1">
          <h1>CreaBeasty</h1>
        </Link>
      </div>
      <div className="navContent-right">
        <div className="iconNavContent">
          <Link to="/connexion" className="nav-link1">
            <FaUser className="icon-navbar" />
          </Link>
        </div>
        <div className="iconNavContent">
          <Link to="/panier" className="nav-link1">
            <FaShoppingCart className="icon-navbar" />
          </Link>
        </div>
        <button
          className={`navbar-toggler first-button ${
            isMenuOpen ? "active" : ""
          }`}
          type="button"
          onClick={toggleMenu}
        >
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
                Accueil<span className="sr-only"></span>{" "}
                <FaHome className="icon-right" />
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="/boutique" className="nav-link1" onClick={toggleMenu}>
                Boutique <span className="sr-only"></span>{" "}
                <FaPlay className="icon-right" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/panier" className="nav-link1" onClick={toggleMenu}>
                Panier <span className="sr-only"></span>{" "}
                <FaShoppingCart className="icon-right" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link1" onClick={toggleMenu}>
                Contact <span className="sr-only"></span>{" "}
                <FaEnvelope className="icon-right" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/connexion" className="nav-link1" onClick={toggleMenu}>
                Connexion / Inscription <span className="sr-only"></span>{" "}
                <FaUser className="icon-right" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/deconnexion"
                className="nav-link1"
                onClick={handleLogout}
              >
                Déconnexion <span className="sr-only"></span>{" "}
                <FaPowerOff className="icon-right" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
