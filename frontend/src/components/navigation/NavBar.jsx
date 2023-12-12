import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navigation.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const Navbar = () => {
  const auth = useContext(AuthContext);

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/servicespage">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contactpage">Contact us</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About us</NavLink>
        </li>
        {auth.isLoggedIn && (
         <li>
          <NavLink to="/myservices">My Services</NavLink>
        </li>
        )}
        {auth.isLoggedIn && (
         <li>
          <NavLink to="/addservice">Add Service</NavLink>
        </li>
        )}
        {!auth.isLoggedIn && (
        <li>
          <NavLink to="/login"  className="UserButton">Login</NavLink>
        </li>
      )}
            {!auth.isLoggedIn && (
        <li>
          <NavLink to="/signup"  className="UserButton">SignUp</NavLink>
        </li>
      )}
        {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout} className="UserButton">LOGOUT</button>
        </li>
      )}
      </ul>
    </nav>
  );
};

export default Navbar;