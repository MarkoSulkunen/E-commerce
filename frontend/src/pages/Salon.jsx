import React, { useState } from "react";
import "../styles/global.css";
import Services from "../components/services/Services";

const Salon = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>

        <h1>Salon services</h1>
        <p></p>
        <div>
        <Services></Services>
      </div>
      </div>

  );
};

export default Salon;