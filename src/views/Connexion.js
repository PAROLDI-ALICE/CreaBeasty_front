import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../views/Styles.css";
import { useNavigate } from "react-router-dom";
import moon from "../assets/Images/moon.jpeg";

function Connexion() {
  //NAVIGATION - const pour redirection (router-dom)
  const navigate = useNavigate();
  //ONGLETS - État pour gérer l'onglet actif
  const [activeTab, setActiveTab] = useState("contact");
  //ONGLETS - Fonction de changement des onglets
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  //INSCRIPTION - variable d'état pour stocker les valeurs du formulaire
  const [user, setUser] = useState({});
  //INSCRIPTION - quand la valeur des champs change, on récupère leur valeur et on les envoie dans user
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  //INSCRIPTION - FETCH api/user - Fonction de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        password: user.password,
        address1: user.address1,
        address2: user.address2,
        phone: user.phone,
        zipcode: user.zipcode,
        city: user.city,
        country: user.country,
        captcha: false,
        gdpr: false,
      }),
    };
    //on récupère le bon endpoint
    await fetch(`http://127.0.0.1:8000/api/user`, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.success) {
          alert("Votre profil a été créé !");
          console.log(response);
          navigate("/");
        } else {
          alert("Veuillez remplir les champs requis.");
        }
      });
  };

  //CONNEXION - variable d'état pour stocker les valeurs du formulaire
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  //CONNEXION - quand la valeur des champs change, on récupère leur valeur et on les envoie dans user
  const handleInputChangeCo = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };
  //CONNEXION - FETCH api/login - Fonction de soumission du formulaire
  const handleSubmitCo = async (event) => {
    event.preventDefault();
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userLogin.email,
        password: userLogin.password,
      }),
    };
    await fetch(`http://127.0.0.1:8000/api/login`, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Adresse email ou mot de passe incorrect.");
      })
      .then((data) => {
        // Traitez les données JSON ici
        console.log(data);
        navigate("/");
        // on envoie le type de compte en local storage pour identifier le type de connexion
        localStorage.setItem("account", JSON.stringify(data.account));
        localStorage.setItem("id", JSON.stringify(data.id));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    captcha: false,
    gdpr: false,
  });
  // RGPD - Fonction de gestion des changements de formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };
  // CAPTCHA - Fonction de gestion des changements du captcha
  const handleChangeCaptcha = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      captcha: value,
    }));
  };

  //RETURN du composant
  return (
    <div className="container">
      <div className="card-container">
        <div
          className={`card card1 ${activeTab === "contact" ? "active" : ""}`}
        >
          {/* ONGLETS */}
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
                <form onSubmit={handleSubmitCo}>
                  {/* Champ "Email
                  " */}
                  <div className="form-group">
                    <label htmlFor="username">Email* :</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      onChange={handleInputChangeCo}
                      className="form-control"
                    />
                  </div>

                  {/* Champ "Mot de passe" */}
                  <div className="form-group">
                    <label htmlFor="password">Mot de passe* :</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      onChange={handleInputChangeCo}
                      className="form-control"
                    />
                  </div>

                  {/* Bouton "Mot de passe perdu" */}
                  <br />
                  <button type="reset" className="btn btn-primary">
                    Mot de passe oublié
                  </button>
                  <br />
                  {/* Bouton "Se connecter" */}
                  <button
                    type="submit"
                    onClick={handleSubmitCo}
                    className="btn btn-primary"
                  >
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
                  <div className="dispatchForm">
                    {/* Champ "Prénom" */}
                    <div className="form-group">
                      <label htmlFor="firstname">Prénom* :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        name="firstname"
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Champ "Nom" */}
                    <div className="form-group">
                      <label htmlFor="lastname">Nom* :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        name="lastname"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="dispatchForm">
                    {/* Champ "Pseudo" */}
                    <div className="form-group">
                      <label htmlFor="username">Pseudo* :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Champ "Email" */}
                    <div className="form-group">
                      <label htmlFor="email">Email* :</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="dispatchForm">
                    {/* Champ "Adresse 1" */}
                    <div className="form-group">
                      <label htmlFor="address1">Adresse* :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address1"
                        name="address1"
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Champ "Adresse 2" */}
                    <div className="form-group">
                      <label htmlFor="address2">Compléments :</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        name="address2"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="dispatchForm">
                    {/* Champ "Téléphone" */}
                    <div className="form-group">
                      <label htmlFor="phone">Téléphone* :</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    {/* Champ "Code postal" */}
                    <div className="form-group">
                      <label htmlFor="zipcode">Code postal* :</label>
                      <input
                        type="text"
                        pattern="[0-9]*"
                        name="zipcode"
                        id="zipcode"
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="dispatchForm">
                    {/* Champ "Ville" */}
                    <div className="form-group">
                      <label htmlFor="city">Ville* :</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    {/* Champ "Pays" */}
                    <div className="form-group">
                      <label htmlFor="country">Pays :</label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="dispatchForm">
                    {/* Champ "Mot de passe" */}
                    <div className="form-group">
                      <label htmlFor="password">Mot de passe* :</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    {/* Champ "Confirmer le mot de passe" */}
                    <div className="form-group">
                      <label htmlFor="confirmPassword">Confirmer* :</label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="dispatchForm">
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
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Champ "ReCAPTCHA" */}
                    <div className="form-group">
                      <ReCAPTCHA
                        sitekey="YOUR_RECAPTCHA_SITE_KEY"
                        onChange={handleChangeCaptcha}
                      />
                    </div>
                  </div>
                  {/* Bouton "SUBMIT FORM - API" */}
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary"
                  >
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
