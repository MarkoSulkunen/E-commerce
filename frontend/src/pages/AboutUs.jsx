import React from "react";
import "../styles/global.css";
import CEO from "../assets/images/CEO.png";
import financemanager from "../assets/images/financemanager.png";
import marketingmanager from "../assets/images/marketingmanager.png";
import operationmanager from "../assets/images/operationmanager.png";
import servicemanager from "../assets/images/servicemanager.png";

import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div>
      <div className="large_container">
        <h2>ABOUT US</h2>
        <h2>
          We are an online platform that helps connect dog owners looking for
          babysitting services with people willing to host and care for dogs for
          a short period.
        </h2>
      </div>
      <div className="about-container">
        <div className="container">
          <img className="about-pic" src={CEO} alt="CEO" />
          <div className="info-container">
            <h3>Chandima Suriyachcharige</h3>
            <p>CEO</p>
          </div>
        </div>

        <div className="container">
          <img
            className="about-pic"
            src={marketingmanager}
            alt="marketingmanager"
          />
          <div className="info-container">
            <h3>Kotaro So</h3>
            <p>Marketing manager</p>
          </div>
        </div>

        <div className="container">
          <img
            className="about-pic"
            src={financemanager}
            alt="financemanager"
          />
          <div className="info-container">
            <h3>M M Sanduni Darshanika</h3>
            <p>Finance Manager</p>
          </div>
        </div>

        <div className="container">
          <img
            className="about-pic"
            src={operationmanager}
            alt="operationmanager"
          />
          <div className="info-container">
            <h3>Vinodhini Radhakrishnan</h3>
            <p>Operation Manager</p>
          </div>
        </div>
        <div className="container">
          <img
            className="about-pic"
            src={servicemanager}
            alt="servicemanager"
          />
          <div className="info-container">
            <h3>Phuong Leng</h3>
            <p>Service manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;