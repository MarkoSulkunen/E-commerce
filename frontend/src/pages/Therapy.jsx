import React, { useState } from "react";
import "../styles/global.css";
import Calendar from 'react-calendar';

const Therapy = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="large_container">
        <h1>Dog mental therapy</h1>
        <p></p>
        <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      </div>

    </div>
  );
};

export default Therapy;