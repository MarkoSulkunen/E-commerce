export const getServices = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/services`
  );
  return await res.json();
};

export const createService = async ({   service,
  price,
  info,
  location,
  name,
  contact,
  image,
  token,
  userId,}) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/services`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        service,
        price,
        info,
        location,
        name: name,
        contact: contact,
        image,
        userId,
      })

    }

  );
  
  //console.log('API Response:', res);

  const data = await res.json();
  //console.log('Parsed Response Data:', data);
  
  return data;
};

export const deleteServices = async ({ id,token }) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/services/`+id,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return await res.json();
};