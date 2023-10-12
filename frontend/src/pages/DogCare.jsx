import React, { useState } from "react";
import "../styles/global.css";
import Calendar from 'react-calendar';

const DogCare = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="container">
        <h1>Dog Care Services</h1>
        <p></p>
        <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      </div>

    </div>
  );
};

export default DogCare;