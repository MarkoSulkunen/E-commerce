import React, { useState } from "react";
import "../styles/global.css";
import Calendar from 'react-calendar';

const Salon = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="container">
        <h1>Salon services</h1>
        <p></p>
        <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      </div>

    </div>
  );
};

export default Salon;