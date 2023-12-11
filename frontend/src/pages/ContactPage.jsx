import React from "react";
import "../styles/global.css";
import {
  facebookLogo,
  instagramLogo,
  linkedinLogo,
  twitterLogo,
} from "../assets/symbols/social";
import { emailSymbol, phoneSymbol } from "../assets/symbols/common";
import headerImage from "../assets/stock/wallpaper2you_256312.jpg";

const ContactPage = () => {
  return (
    <div id="section-contact">
      <div className="ServicePageHeader">
        <h1 className="meetTeam">Contact Us</h1>
        <hr className="leftHr"></hr>
        <span className="leftCircle"></span>
        <img src={headerImage} />
      </div>
      <div>
        <div className="ContactPageContainer">
          <div className="contact-small-container">
            {emailSymbol}
            <p>Email - </p>
            <p>doggywooggy@gmail.com</p>
          </div>
          <div className="contact-small-container">
            {phoneSymbol}
            <p>Phone number - </p>
            <p>+358 004 002 00</p>
          </div>
          <div className="social-container">
            <p>Follow us:</p>
            <a
              className="social-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              {facebookLogo}
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              {instagramLogo}
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              {linkedinLogo}
            </a>
            <a
              className="social-link"
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              {twitterLogo}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
