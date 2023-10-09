import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
  email: "",
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState(null);

  const loginHandler = (id, token, email) => {
    setToken(token);
    setUserId(id);
    setEmail(email);
  };

  const logoutHandler = () => {
    setToken(null);
    setUserId(null);
  };

  const contextValue = {
    isLoggedIn: !!token,
    token: token,
    userId: userId,
    login: loginHandler,
    logout: logoutHandler,
    email: email,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};