import React, { useState, useEffect } from "react";
import { useQuery } from 'react-query';
import Calendar from 'react-calendar';
import { getReservations } from '../api/reservations.js';

const Reservations = () => {
  const [value, onChange] = useState(new Date());
  
  const {data, isLoading, isError} = useQuery("reservationData", getReservations);
  console.log('Fetched reservations to the page:', data);

  return (
    <div>
      <div className="container">
        <h1>Reservations</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error fetching reservations.</p>
        ) : (
          <div>
            <Calendar
              onChange={onChange}
              value={value}
              
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservations;

