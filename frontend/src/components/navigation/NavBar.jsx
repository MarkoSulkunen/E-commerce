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
              <NavLink to="/daycare">Dog Babysitting</NavLink>
              <NavLink to="/therapy">Dog mental therapy </NavLink>
              <NavLink to="/dogcare">Dog Care Services </NavLink>
              <NavLink to="/medical">Medical Care  </NavLink>
              <NavLink to="/spa">Spa & Wellness</NavLink>
              <NavLink to="/salon">Salon services</NavLink>

            </div>
          )}
        </li>
        <li>
          <NavLink to="/contactpage">Contact us</NavLink>
        </li>
        <li>
          <NavLink to="/Reservations">Make a reservation</NavLink>
        </li>
        {!auth.isLoggedIn && (
        <li>
          <NavLink to="/login" className="UserButton">Login</NavLink>
        </li>
      )}
            {!auth.isLoggedIn && (
        <li>
          <NavLink to="/signup" className="UserButton">Sign up</NavLink>
        </li>
      )}
        {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout} className="UserButton">Logout</button>
        </li>
      )}
      </ul>
    </nav>
  );
};

export default Navbar;
