import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/navbar/Navbar";
import Home from "./views/Home";
import Boutique from "./views/Boutique";
import Contact from "./views/Contact";
import Footer from "./assets/footer/Footer";
import Connexion from "./views/Connexion";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <Router>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/panier" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
