import React, { useState } from "react";
import "../styles/global.css";
import Services from "../components/services/Services";

const Spa = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
        <h1>Spa & Wellness</h1>
        <p></p>
        <div>
        <Services></Services>
      </div>
      </div>


  );
};

export default Spa;