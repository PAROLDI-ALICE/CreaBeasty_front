import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../Styles.css";
import moon from "../assets/Images/moon.jpeg";

function Connexion() {
  const [activeTab, setActiveTab] = useState("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    captcha: false,
    gdpr: false,
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleChangeCaptcha = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      captcha: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement des données du formulaire
    console.log(formData);
  };

  return (
    <div className="card-container">
      <div className={`card card1 ${activeTab === "contact" ? "active" : ""}`}>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={` button_form nav-link ${
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
        <div className="tab-content" id="myTabContent">
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
              <div className="Rappel">
                <span>Rappel Entreprise</span>
              </div>
              <p className="Rappel1">
                Lorem Ipsum is simply dummy text of the printing.{" "}
              </p>
              <br />
              <div className="Rappel">
                <span>Coordonnées</span>
              </div>
              <p className="Rappel1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Nom :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email :</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="password">Sujet</label>
                  <input
                    type="sujet"
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="captcha">Captcha :</label>
                  <ReCAPTCHA
                    sitekey="VOTRE_CLÉ_DE_SITE_RECAPTCHA"
                    onChange={handleChangeCaptcha}
                  />
                </div>
                <div>
                  <label>
                    <input
                      className="checkbox"
                      type="checkbox"
                      name="gdpr"
                      checked={formData.gdpr}
                      onChange={handleChange}
                    />
                    Accepter les conditions RGPD
                  </label>
                </div>
                <button className="button_form" type="submit">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
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

              <p className="Rappel1"></p>
              <br />
              <div className="Rappel">
                <img src={moon} alt="lune" />
              </div>

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email :</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="password">Mot de passe :</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <br/>

                <div>
                  <button className="button_form" type="submit">
                    Mot de passe oublié
                  </button>
                </div>

                <br />
                <button className="button_form" type="submit">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
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
            <div className="Rappel">
              <span>Rappel Entreprise</span>
            </div>
            <p className="Rappel1">
              Lorem Ipsum is simply dummy text of the printing.{" "}
            </p>
            <br />
            <div className="Rappel">
              <span>Remerciement</span>
            </div>
            <p className="Rappel1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nom :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="username">Pseudo :</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Mot de passe :</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">
                  Confirmer le mot de passe :
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="captcha">Captcha :</label>
                <ReCAPTCHA
                  sitekey="VOTRE_CLÉ_DE_SITE_RECAPTCHA"
                  onChange={handleChangeCaptcha}
                />
              </div>
              <div>
                <label>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="gdpr"
                    checked={formData.gdpr}
                    onChange={handleChange}
                  />
                  Accepter les conditions RGPD
                </label>
              </div>
              <button className="button_form" type="submit">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
