"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../styles/NavLinks.css";

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
              <Link href="/Spa">Spa</Link>
              <Link href="/DayCare">Day care</Link>
            </div>
          )}
        </li>
        <li>
          <Link href="/ContactPage">Contact Us</Link>
        </li>
        <li>
          <Link href="/Login">Login</Link>
        </li>
        <li>
          <Link href="/SignUp">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;