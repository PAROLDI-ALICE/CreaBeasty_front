import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Boutique from "./components/Boutique";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Connexion from "./components/Connexion";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connexion" element={<Connexion/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
