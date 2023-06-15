import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../Styles.css";
import moon from "../assets/Images/moon.jpeg";

function Connexion() {
  // État pour gérer l'onglet actif
  const [activeTab, setActiveTab] = useState("contact");

  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    captcha: false,
    gdpr: false,
  });

  // Fonction de changement d'onglet
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Fonction de gestion des changements de formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  // Fonction de gestion des changements du captcha
  const handleChangeCaptcha = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      captcha: value,
    }));
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement des données du formulaire
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="card-container">
        <div
          className={`card card1 ${activeTab === "contact" ? "active" : ""}`}
        >
          {/* Onglets */}
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`button_form nav-link ${
                  activeTab === "contact" ? "active" : ""
                }`}
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected={activeTab === "contact" ? "true" : "false"}
                onClick={() => handleTabChange("contact")}
              >
                Contact
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`button_form nav-link ${
                  activeTab === "connexion" ? "active" : ""
                }`}
                id="connexion-tab"
                data-bs-toggle="tab"
                data-bs-target="#connexion"
                type="button"
                role="tab"
                aria-controls="connexion"
                aria-selected={activeTab === "connexion" ? "true" : "false"}
                onClick={() => handleTabChange("connexion")}
              >
                Connexion
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`button_form nav-link ${
                  activeTab === "inscription" ? "active" : ""
                }`}
                id="inscription-tab"
                data-bs-toggle="tab"
                data-bs-target="#inscription"
                type="button"
                role="tab"
                aria-controls="inscription"
                aria-selected={activeTab === "inscription" ? "true" : "false"}
                onClick={() => handleTabChange("inscription")}
              >
                Inscription
              </button>
            </li>
          </ul>

          {/* Contenu des onglets */}
          <div className="tab-content" id="myTabContent">
            {/* Onglet "Contact" */}
            <div
              className={`tab-pane fade ${
                activeTab === "contact" ? "show active" : ""
              }`}
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="card-body card-content form-container">
                <h4>CONTACT</h4>
                <form onSubmit={handleSubmit}>
                  {/* Champ "Nom" */}
                  <div className="form-group">
                    <label htmlFor="name">Nom :</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  {/* Champ "Email" */}
                  <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  {/* Champ "Message" */}
                  <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                    ></textarea>
                  </div>

                  {/* Champ "ReCAPTCHA" */}
                  <div className="form-group">
                    <ReCAPTCHA
                      sitekey="YOUR_RECAPTCHA_SITE_KEY"
                      onChange={handleChangeCaptcha}
                    />
                  </div>

                  {/* Bouton "Envoyer" */}
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>

            {/* Onglet "Connexion" */}
            <div
              className={`tab-pane fade ${
                activeTab === "connexion" ? "show active" : ""
              }`}
              id="connexion"
              role="tabpanel"
              aria-labelledby="connexion-tab"
            >
              <div className="card-body card-content form-container">
                <h4>CONNEXION</h4>
                <form onSubmit={handleSubmit}>
                  {/* Champ "Nom d'utilisateur" */}
                  <div className="form-group">
                    <label htmlFor="username">Nom d'utilisateur :</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  {/* Champ "Mot de passe" */}
                  <div className="form-group">
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  {/* Bouton "Mot de passe perdu" */}
                  <br />
                  <button type="reset" className="btn btn-primary">
                    Mot de passe perdu
                  </button>

                  {/* Bouton "Se connecter" */}
                  <button type="submit" className="btn btn-primary">
                    Se connecter
                  </button>
                </form>
              </div>
            </div>

            {/* Onglet "Inscription" */}
            <div
              className={`tab-pane fade ${
                activeTab === "inscription" ? "show active" : ""
              }`}
              id="inscription"
              role="tabpanel"
              aria-labelledby="inscription-tab"
            >
              <div className="card-body card-content form-container">
                <h4>INSCRIPTION</h4>
                <form onSubmit={handleSubmit}>
                  {/* Champ "Nom" */}
                  <div className="form-group">
                    <label htmlFor="name">Nom :</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  {/* Champ "Email" */}
                  <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  {/* Champ "Nom d'utilisateur" */}
                  <div className="form-group">
                    <label htmlFor="username">Nom d'utilisateur :</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  {/* Champ "Mot de passe" */}
                  <div className="form-group">
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  {/* Champ "Confirmer le mot de passe" */}
                  <div className="form-group">
                    <label htmlFor="confirmPassword">
                      Confirmer le mot de passe :
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  {/* Champ "Accepter les conditions d'utilisation" */}
                  <div className="form-group">
                    <label htmlFor="gdpr">
                      J'accepte les conditions d'utilisation :
                    </label>
                    <input
                      type="checkbox"
                      id="gdpr"
                      name="gdpr"
                      checked={formData.gdpr}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Champ "ReCAPTCHA" */}
                  <div className="form-group">
                    <ReCAPTCHA
                      sitekey="YOUR_RECAPTCHA_SITE_KEY"
                      onChange={handleChangeCaptcha}
                    />
                  </div>

                  {/* Bouton "S'inscrire" */}
                  <button type="submit" className="btn btn-primary">
                    S'inscrire
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
