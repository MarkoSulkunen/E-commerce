import React from "react";
import "../styles/global.css";
import CEO from "../assets/images/CEO.png";
import financemanager from "../assets/images/financemanager.png";
import marketingmanager from "../assets/images/marketingmanager.png";
import operationmanager from "../assets/images/operationmanager.png";
import servicemanager from "../assets/images/servicemanager.png";

const AboutUsPage = () => {
  return (
    <div>
      <h1 className="meetTeam">Meet our team</h1>
      <div className="all-people-container">
        <div className="about-container">
          <img className="about-pic" src={CEO} alt="CEO" />
          <div className="info-container">
            <h3>Chandima Suriyachcharige</h3>
            <p>CEO</p>
          </div>
        </div>
        <div className="about-container">
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

        <div className="about-container">
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

        <div className="about-container">
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

        <div className="about-container">
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
      <div className="about_info_container">
        <h2>
          We are an online platform that helps connect dog owners looking for
          babysitting services with people willing to host and care for dogs for
          a short period. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </h2>
        <br/>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
      </div>
    </div>
  );
};

export default AboutUsPage;
