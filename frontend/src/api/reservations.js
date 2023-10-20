export const getReservations = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/reservations`
  );
  return await res.json();
};

export const createReservations = async ({ email,service,date, token}) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/reservations`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        email,
        service,
        date
      })
    }
  );
  
  return await res.json();
};

export const deleteReservations = async ({ id,token }) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/reservations/`+id,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return await res.json();
};