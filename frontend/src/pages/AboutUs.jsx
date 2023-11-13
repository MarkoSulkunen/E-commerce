import React from "react";
import "../styles/global.css";
import CEO from '../assets/images/CEO.png';
import financemanager from '../assets/images/financemanager.png';
import marketingmanager from '../assets/images/marketingmanager.png';
import operationmanager from '../assets/images/operationmanager.png';
import servicemanager from '../assets/images/servicemanager.png';

import { Link } from "react-router-dom";




const AboutUsPage = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>We are an online platform that helps connect dog owners looking for babysitting services with people willing to host and care for dogs for a short period.</p>

      <div className="container">
      <img className="about-pic" src={CEO} alt="CEO" style={{ width: "400px", height: "500px" }} />
        <h2>Chandima Suriyachcharige</h2>
        <p>
        CEO
        </p>
      </div>

      <div className="container">
      <img className="about-pic" src={marketingmanager} alt="marketingmanager" style={{ width: "400px", height: "500px" }} />
        <h2>Kotaro So</h2>
        <p>
        Marketing manager
        </p>
      </div>

      <div className="container">
      <img className="about-pic" src={financemanager} alt="financemanager" style={{ width: "400px", height: "500px" }} />
        <h2>M M Sanduni Darshanika</h2>
        <p>
        Finance Manager 
        </p>
      </div>

      <div className="container">
      <img className="about-pic" src={operationmanager} alt="operationmanager" style={{ width: "400px", height: "500px" }}/>
        <h2>Vinodhini Radhakrishnan</h2>
        <p>
        Operation Manager 
        </p>
      </div>
      <div className="container">
      <img className="about-pic" src={servicemanager} alt="servicemanager" style={{ width: "400px", height: "500px" }} />
        <h2>Phuong Leng</h2>
        <p>
        Service manager
        </p>
      </div>

    </div>
  );
};

export default AboutUsPage;
