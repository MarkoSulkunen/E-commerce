import React, { lazy, Suspense } from "react";
import "../styles/global.css";

const Navbar = lazy(() => import("../components/NavBar"));

const ContactPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <div className="container">
        <h1>Contact Us</h1>
        <p>dog.hotel@doghotel.com</p>
      </div>
    </div>
  );
};

export default ContactPage;