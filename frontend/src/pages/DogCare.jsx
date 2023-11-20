import React, { useState } from "react";
import "../styles/global.css";
import Services from "../components/services/Services";

const DogCare = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
        <h1>Dog Care Services</h1>
        <p></p>
        <div>
        <Services></Services>
      </div>
      </div>


  );
};

export default DogCare;