"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../../styles/NavLinks.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <Link href="/">Home</Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href="#">Services &#9662;</a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link href="/Hotel">Hotel</Link>
              <Link href="/#section-spa">Spa</Link>
              <Link href="/#section-daycare">Day care</Link>
            </div>
          )}
        </li>
        <li>
          <NavLink to="/ContactPage">Contact Us</NavLink>
        </li>
        <li>
          <Link href="/LogIn">Login</Link>
        </li>
        <li>
          <Link href="/#section-signup">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
