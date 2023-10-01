import React, { lazy, Suspense } from "react";
import "../styles/global.css";

const Navbar = lazy(() => import("../components/NavBar"));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <div className="container">
        <h1>Dog Hotel Home Page</h1>
        <p>content</p>
      </div>
    </div>
  );
};

export default Home;