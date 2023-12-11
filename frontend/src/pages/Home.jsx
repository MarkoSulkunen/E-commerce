import React from "react";
import "../styles/global.css";
import "../styles/Home.css";
import {
  dogImage,
  dogBoneImage,
  dogPawImage,
  brushImage,
  spaImage,
  heartPlusImage,
} from "../assets/symbols/common";
import Services from "../components/services/Services";
import homeImage from "../assets/stock/woman-petting-adorable-dog.jpg";
import forwardSymbol from "../assets/symbols/forward.png";

const Home = () => {
  return (
    <div id="section-hotel">
      <div className="home_banner_container">
        <div className="home_banner_small_container">
          <h4>WELCOME TO</h4>
          <hr></hr>
          <h2 className="home_banner_small_text">
            We are an online platform who helps to connect dog owners looking
            for dog babysitting services and people who are willing to host and
            take care of the dogs.
          </h2>
        </div>
        <div className="home_banner_center_container">
          <h1>DOGGY WOOGY</h1>
          <hr></hr>
          <span className="circle"></span>
          <hr className="leftHr"></hr>
          <span className="leftCircle"></span>
          <img src={homeImage} />
        </div>
        <div className="home_banner_small_container">
          <h1>WHERE WAGGING TAILS MEET</h1>
          <h3>TRUSTED CARE!</h3>
          <button to="/signup" className="JoinButton">
            Find a Dog Sitter <img src={forwardSymbol}></img>
          </button>
        </div>
      </div>
      <Services></Services>
      </div>
  );
};

export default Home;
