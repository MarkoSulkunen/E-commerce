import { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavBar from "./NavBar";
import "../../styles/MainNavigation.css";
import logo from '../../assets/logo.png';

const MainNavigation = () => {
 
  return (
    <>
      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/"><img width={200} height={100} src={logo} alt="Logo" /></Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavBar />
        </nav>
      </MainHeader>
    </>
  );
};
export default MainNavigation;

