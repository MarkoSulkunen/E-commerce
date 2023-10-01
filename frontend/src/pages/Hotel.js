import React, { lazy, Suspense } from "react";
import "../styles/global.css";

const Navbar = lazy(() => import("../components/NavBar"));

const Hotel = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <div className="container">
        <h1>Hotel</h1>
        <p>content..</p>
      </div>
    </div>
  );
};

export default Hotel;