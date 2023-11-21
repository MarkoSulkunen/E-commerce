import React, { useState } from "react";
import "../styles/global.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DayCare = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className="large_container">
        <h1>Dog Babysitting</h1>
        <p></p>
        <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      </div>

    </div>
  );
};

export default DayCare;