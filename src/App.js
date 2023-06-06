import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Presentation from "./components/Presentation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Carousel/>
        <Presentation/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
