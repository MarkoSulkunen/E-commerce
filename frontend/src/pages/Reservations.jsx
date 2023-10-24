import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from 'react-query';
import moment from 'moment';
import 'moment-timezone';
import DatetimePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/reservation.css';

import { getReservations, createReservations } from '../api/reservations.js';
import { AuthContext } from '../context/auth-context.jsx';

const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newReservationTitle, setNewReservationTitle] = useState('');
  const [reservationHours, setReservationHours] = useState(1);
  const auth = useContext(AuthContext);

  const { data, isLoading, isError } = useQuery('reservationData', getReservations);

  useEffect(() => {
    if (data && data.response) {
      const reservations = data.response.map((reservation) => ({
        id: reservation.id,
        title: reservation.service,
        start: new Date(reservation.date),
        end: new Date(reservation.date),
      }));

      setEvents(reservations);
    }
  }, [data]);

  const availableTimeSlots = getAvailableTimeSlots(selectedDate, events);

  const handleCreateReservation = async () => {
    if (newReservationTitle && selectedDate && selectedTime) {
      const selectedDateTime = new Date(selectedDate);
      const timeParts = selectedTime.split(':');
      selectedDateTime.setHours(parseInt(timeParts[0], 10));
      selectedDateTime.setMinutes(parseInt(timeParts[1], 10));

      const endReservationDate = new Date(selectedDateTime);
      endReservationDate.setHours(endReservationDate.getHours() + reservationHours);

      try {
        const response = await createReservations({
          email: auth.email,
          service: newReservationTitle,
          date: selectedDateTime,
          endDate: endReservationDate,
          token: auth.token,
        });

        if (response && response.status === 'success') {
          const reservation = {
            title: newReservationTitle,
            start: selectedDateTime,
            end: endReservationDate,
          };

          setEvents([...events, reservation]);
          setNewReservationTitle('');
          setShowForm(false);
        } else {
          console.error('Reservation creation failed.');
        }
      } catch (error) {
        console.error('API request error:', error);
      }
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const isReservedSlot = (date) => {
    return events.some((event) => {
      return date >= event.start && date <= event.end;
    });
  };

  return (
    <div>
      <div className="container">
        <h1>Reservations</h1>

        {showForm && (
          <div>
            <h2>Create Reservation</h2>
            <form>
              <label>Title:</label>
              <input
                type="text"
                value={newReservationTitle}
                onChange={(e) => setNewReservationTitle(e.target.value)}
              />
              <label>Date:</label>
              <DatetimePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
              />
              <label>Time:</label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="" disabled>
                  Select a time
                </option>
                {availableTimeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <label>Reservation Duration (hours):</label>
              <select
                value={reservationHours}
                onChange={(e) => setReservationHours(parseInt(e.target.value, 10))
                }
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>
                    {i} hour{ i !== 1 ? 's' : ''}
                  </option>
                ))}
              </select>
              <button onClick={handleCreateReservation}>Create</button>
            </form>
          </div>
        )}

        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error fetching reservations.</p>
        ) : (
          <div>
            <label>Date:</label>
            <DatetimePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
            />
            <label>Time:</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="" disabled>
                Select a time
              </option>
              {availableTimeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <button onClick={() => setShowForm(true)}>Create Reservation</button>
          </div>
        )}
      </div>
    </div>
  );
};

const getAvailableTimeSlots = (date, events) => {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const availableTimeSlots = [];
  let currentSlot = new Date(startOfDay);

  while (currentSlot <= endOfDay) {
    availableTimeSlots.push(
      moment(currentSlot).format('HH:mm')
    );
    currentSlot.setMinutes(currentSlot.getMinutes() + 30);
  }

  // Mark reserved time slots as unavailable
  events.forEach((event) => {
    if (event.start >= startOfDay && event.start <= endOfDay) {
      const start = moment(event.start).format('HH:mm');
      const end = moment(event.end).format('HH:mm');
      const startIndex = availableTimeSlots.indexOf(start);
      const endIndex = availableTimeSlots.indexOf(end);

      if (startIndex !== -1 && endIndex !== -1) {
        availableTimeSlots.splice(startIndex, endIndex - startIndex + 1);
      }
    }
  });

  return availableTimeSlots;
};

export default Reservations;