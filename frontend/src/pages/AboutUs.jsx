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
          At Doggy Woogy, we're more than just a platform; we're a passionate
          team dedicated to the well-being of your beloved furry companions. Our
          diverse team brings together a wealth of experience, expertise, and,
          above all, a profound love for dogs.
        </h2>
        <br />
        <h2>
          Our team of caregivers is a collection of animal enthusiasts who've
          turned their passion into a profession. With backgrounds in pet care,
          veterinary services, and animal behaviour, they're not just providers;
          they're your pet's second family.
        </h2>
      </div>
    </div>
  );
};

export default AboutUsPage;
