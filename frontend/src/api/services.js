
/*###############################################################################

 FUNCTION DESCRIPTION

-----------------------------------------------------------------------------------

 NAME: getServices

 DESCRIPTION: Makes API call to fetch all services from the server.

##################################################################################*/
export const getServices = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/services`
  );
  return await res.json();
};

/*###############################################################################

 FUNCTION DESCRIPTION

-----------------------------------------------------------------------------------

 NAME: getServicesById

 DESCRIPTION: Makes API call to fetch services by user id

##################################################################################*/
export const getServicesById = async (userId, token) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/services?userId=${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await res.json();
};

/*###############################################################################

 FUNCTION DESCRIPTION

-----------------------------------------------------------------------------------

 NAME: createService

 DESCRIPTION: Makes API call to crerate a new service

##################################################################################*/
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

/*###############################################################################

 FUNCTION DESCRIPTION

-----------------------------------------------------------------------------------

 NAME: deleteServices

 DESCRIPTION: Makes API call to delete a service

##################################################################################*/
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

/*###############################################################################

 FUNCTION DESCRIPTION

-----------------------------------------------------------------------------------

 NAME: editService

 DESCRIPTION: Makes API call to edit a service

##################################################################################*/
export const editService = async ({ id, token, editedService }) => {
  console.log("Request sent to editService endpoint with params:", { id });
  console.log("Request body:", editedService);

  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/services/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(editedService),
  });
  console.log("Response from server:", response);
  const data = await response.json();

  console.log("Response from editService endpoint:", data);

  try {
    const parsedData = JSON.parse(data);
    console.log("Response from editService endpoint:", parsedData);
    if (!response.ok) {
      throw new Error(parsedData.message || "Could not edit service.");
    }
    return parsedData;
  } catch (error) {
    console.error("editServiceMutation error", error);
    return undefined;
  }
};