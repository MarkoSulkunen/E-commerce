import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/NavLinks.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth-context";

const Navbar = () => {
  const auth = useContext(AuthContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (isDropdownOpen) {
    }
  }, [isDropdownOpen]);

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href="#">Services &#9662;</a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <NavLink to="/hotel">Hotel</NavLink>
              <NavLink to="/spa">Spa</NavLink>
              <NavLink to="/daycare">Day care</NavLink>
            </div>
          )}
        </li>
        <li>
          <NavLink to="/contactpage">Contact Us</NavLink>
        </li>
        {!auth.isLoggedIn && (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
            {!auth.isLoggedIn && (
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
      )}
        {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
      </ul>
    </nav>
  );
};

export default Navbar;
