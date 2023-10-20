import React, { useState, useEffect, useContext } from "react";
import { useQuery } from 'react-query';
import moment from 'moment';
import 'moment-timezone';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { getReservations, createReservations } from '../api/reservations.js';
import { AuthContext } from '../context/auth-context.jsx'

const localizer = momentLocalizer(moment);

const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newReservationTitle, setNewReservationTitle] = useState('');
  const [selectedSlotInfo, setSelectedSlotInfo] = useState(null);

  const { email } = useContext(AuthContext);

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

  const handleEventSelect = (event) => {
    setSelectedDate(
      `Selected Date: ${event.start.toDateString()} ${event.start.getHours()}:${event.start.getMinutes()} - ${event.end.getHours()}:${event.end.getMinutes()} (${event.title})`
    );
  };

  const handleCreateReservation = async () => {
    if (newReservationTitle && selectedSlotInfo) {
      const { start, end } = selectedSlotInfo;

      const reservation = {
        title: newReservationTitle,
        start: start,
        end: end,
      };

      try {
        const response = await createReservations({
          email: email,
          service: reservation.title,
          date: reservation.start,
        });

        if (response && response.status === 'success') {
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

  const handleSlotSelect = (slotInfo) => {
    setSelectedSlotInfo(slotInfo);
    setShowForm(true);
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
            <Calendar
              localizer={localizer}
              events={events}
              defaultDate={new Date()}
              selectable
              onSelectEvent={handleEventSelect}
              onSelectSlot={handleSlotSelect}
              views={['month', 'week', 'day']}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservations;