// components/Home.js
import React from "react";
import Carousel from "../components/Carousel";
import Presentation from "./Presentation";

function Home() {
  return (
    <div className="container-xxl">
      <Carousel/>
      <Presentation/>
     
    </div>
  );
}

export default Home;
