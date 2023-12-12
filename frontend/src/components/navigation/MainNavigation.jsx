import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavBar from "./NavBar";
import "../../styles/Navigation.css";
import logo from "../../assets/images/logo.png";

const MainNavigation = () => {
  const [navbarVisible, setNavbarVisible] = useState(window.innerWidth > 1200);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 992) {
      setNavbarVisible(true);
    }
  }, [windowWidth]);

  const toggleNavbarVisibility = () => {
    if (windowWidth < 992){
      setNavbarVisible(!navbarVisible);
    }
  };

  let deactivate_button = (
    <button
      type="button"
      className="deactivate-nav-button"
      onClick={toggleNavbarVisibility}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="deactivate-nav-button-icon"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );

  let activate_button = (
    <button
      type="button"
      className="activate-nav-button"
      onClick={toggleNavbarVisibility}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="activate-nav-button-icon"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  );

  let hamburger_button = navbarVisible === true ? deactivate_button : activate_button;

  return (
    <>
      {navbarVisible && (
      <MainHeader>
        <div className="main-navigation-container">
          <h1 className="main-navigation__title">
            <Link to="/">
              <img className="dog_logo" src={logo} alt="Logo" />
            </Link>
            <h1 className="slogan">We Care Your Paws</h1>
          </h1>
          <nav className="main-navigation__header-nav">
            <NavBar />
          </nav>
        </div>
      </MainHeader>)}
      <div className="hamburger-button-container">
        {windowWidth < 1200 && hamburger_button}
      </div>
    </>
  );
};
export default MainNavigation;
