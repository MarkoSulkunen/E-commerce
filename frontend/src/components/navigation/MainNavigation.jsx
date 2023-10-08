import { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavBar from "./NavBar";
import "../../styles/MainNavigation.css";

const MainNavigation = () => {
 
  return (
    <>
      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/">Dog Hotel</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavBar />
        </nav>
      </MainHeader>
    </>
  );
};
export default MainNavigation;

