import React, { useState } from "react";
import "../styles/global.css";
import Calendar from 'react-calendar';

const Spa = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="container">
        <h1>Spa & Wellness</h1>
        <p></p>
        <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      </div>

    </div>
  );
};

export default Spa;