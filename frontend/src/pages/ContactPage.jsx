import React from "react";
import "../styles/global.css";
import {
  facebookLogo,
  instagramLogo,
  linkedinLogo,
  twitterLogo,
} from "../assets/symbols/social";
import { emailSymbol, phoneSymbol } from "../assets/symbols/common";

const ContactPage = () => {
  return (
    <div id="section-contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-small-container">
          {emailSymbol}
          <p>doggywooggy@gmail.com</p>
        </div>
        <div className="contact-small-container">
          {phoneSymbol}
          <p>+358 004 002 00</p>
        </div>
        <p>Social Media</p>
        <div className="social-container">
          <a className="social-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">{facebookLogo}</a>
          <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">{instagramLogo}</a>
          <a className="social-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">{linkedinLogo}</a>
          <a className="social-link" href="https://www.twitter.com/" target="_blank" rel="noreferrer">{twitterLogo}</a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
