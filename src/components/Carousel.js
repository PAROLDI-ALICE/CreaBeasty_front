import React from "react";
import "../components/carousel_style.css";
import collier from "../assets/Images/collier.jpeg";

const Carrousel = () => {
  const mySlideRight = () => {
    const sliderElements = document.getElementsByClassName("cont-slider");
    for (let i = 0; i < sliderElements.length; i++) {
      if (sliderElements[i].id === "ext-1") {
        sliderElements[i].id = "ext-8";
      } else {
        const elementId = sliderElements[i].id;
        const strNum = elementId.match(/\d+$/)[0];
        let num = parseInt(strNum);
        num--;
        sliderElements[i].id = "ext-" + num;
      }
    }
  };

  const mySlideLeft = () => {
    const sliderElements = document.getElementsByClassName("cont-slider");
    for (let i = 0; i < sliderElements.length; i++) {
      if (sliderElements[i].id === "ext-8") {
        sliderElements[i].id = "ext-1";
      } else {
        const elementId = sliderElements[i].id;
        const strNum = elementId.match(/\d+$/)[0];
        let num = parseInt(strNum);
        num++;
        sliderElements[i].id = "ext-" + num;
      }
    }
  };

  const selectSliderElement = (e) => {
    const idd = e.id;
    const numStr = idd.match(/\d+$/)[0];
    const numId = parseInt(numStr);
    const sliderElements = document.getElementsByClassName("cont-slider");
    if (numId !== 1) {
      const times = 9 - numId;
      for (let z = 0; z < times; z++) {
        for (let i = 0; i < sliderElements.length; i++) {
          if (sliderElements[i].id === "ext-8") {
            sliderElements[i].id = "ext-1";
          } else {
            const elementId = sliderElements[i].id;
            const strNum = elementId.match(/\d+$/)[0];
            let num = parseInt(strNum);
            num++;
            sliderElements[i].id = "ext-" + num;
          }
        }
      }
    }
  };

  return (
    <div>
      <div className="spacer"></div>
      <div className="arrow" onClick={mySlideLeft}>
        <img
          src="http://cerati.org/eoitecne/img/down.png"
          className="arrowleft arimage"
          alt="Left Arrow"
        />
      </div>
      <div className="slider-cont" id="slider-cont">
        <div className="test-slider">
          <div className="cont-slider" onClick={selectSliderElement} id="ext-1">
            <img src={collier} alt="Collier" />
          </div>
          <div className="cont-slider" onClick={selectSliderElement} id="ext-2">
            <img
              className="flat-w-image image-slider"
              src="http://cerati.org/eoitecne/img/prodotti/02.png"
              alt="Image 2"
            />
            <img
              src="http://cerati.org/eoitecne/img/prodotti/02.png"
              className="image-w"
              alt="Image 2"
            />
          </div>
          <div className="cont-slider" onClick={selectSliderElement} id="ext-3">
            <img
              className="flat-w-image image-slider"
              src="http://cerati.org/eoitecne/img/prodotti/03.png"
              alt="Image 3"
            />
            <img
              src="http://cerati.org/eoitecne/img/prodotti/03.png"
              className="image-w"
              alt="Image 3"
            />
          </div>
          <div className="cont-slider" onClick={selectSliderElement} id="ext-4">
            <img
              className="flat-w-image image-slider"
              src="http://cerati.org/eoitecne/img/prodotti/04.png"
              alt="Image 4"
            />
            <img
              src="http://cerati.org/eoitecne/img/prodotti/04.png"
              className="image-w"
              alt="Image 4"
            />
          </div>
          <div className="cont-slider" onClick={selectSliderElement} id="ext-5">
            <img
              className="flat-w-image image-slider"
              src="http://cerati.org/eoitecne/img/prodotti/01.png"
              alt="Image 5"
            />
            <img
              src="http://cerati.org/eoitecne/img/prodotti/01.png"
              className="image-w"
              alt="Image 5"
            />
          </div>
          <div className="cont-slider" onClick={selectSliderElement} id="ext-6">
            <img
              className="flat-w-image image-slider"
              src="http://cerati.org/eoitecne/img/prodotti/06.png"
              alt="Image 6"
            />
            <img
              src="http://cerati.org/eoitecne/img/prodotti/06.png"
              className="image-w"
              alt="Image 6"
            />
          </div>
          <div className="cont-slider" onClick={selectSliderElement} id="ext-7">
            <img
              className="flat-w-image image-slider"
              src="http://cerati.org/eoitecne/img/prodotti/07.png"
              alt="Image 7"
            />
            <img
              src="http://cerati.org/eoitecne/img/prodotti/07.png"
              className="image-w"
              alt="Image 7"
            />
          </div>
          <div className="cont-slider" onClick={selectSliderElement} id="ext-8">
            <img
              className="flat-w-image image-slider"
              src="http://cerati.org/eoitecne/img/prodotti/08.png"
              alt="Image 8"
            />
            <img
              src="http://cerati.org/eoitecne/img/prodotti/08.png"
              className="image-w"
              alt="Image 8"
            />
          </div>
        </div>
      </div>
      <div className="arrow" onClick={mySlideRight}>
        <img
          src="http://cerati.org/eoitecne/img/down.png"
          className="arrowright arimage"
          alt="Right Arrow"
        />
      </div>
    </div>
  );
};

export default Carrousel;
