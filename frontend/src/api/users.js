/*###############################################################################

 FUNCTION NAME: signUpUser

 DESCRIPTION: Sends a POST request to the server to sign up a new user with
     given email and password.

################################################################################*/
export const signUpUser = async ({email, password}) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/users/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    );
    
    return await res.json();
  };
  
/*###############################################################################

 FUNCTION NAME: loginUser

 DESCRIPTION: Sends a POST request to the server to log in an existing user 
     with given email and password.

################################################################################*/ 
  export const loginUser = async ({email, password}) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/users/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      }
    );
    
    return await res.json();
  };

/*###############################################################################

 FUNCTION NAME: getUserById

 DESCRIPTION: Sends a GET request to the server to retrieve a user by id.

################################################################################*/
  export const getUserById = async (userId) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`);
    return await res.json();
  };

/*###############################################################################

 FUNCTION NAME: getAllUsers

 DESCRIPTION: Sends a GET request to the server to retrieve all users.

################################################################################*/  
  export const getAllUsers = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/users`
    );
    return await res.json();
  };

/*###############################################################################

 FUNCTION NAME: deleteUser

 DESCRIPTION: Sends a DELETE request to the server to delete a user by id.

################################################################################*/  
  export const deleteUser = async ({ id,token }) => {
  
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/users/`+id,
      {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    );
    const data = await res.json();
  return data;
  };
  