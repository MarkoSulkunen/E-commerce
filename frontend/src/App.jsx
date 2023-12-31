import { useState, useCallback, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUs";
import AddService from "./pages/AddService";
import ServicesPage from "./pages/ServicesPage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import MainNavigation from "./components/navigation/MainNavigation";
import MyServices from "./pages/MyServices";

import { AuthContext } from "./context/auth-context";

import "./App.css";

const queryClient = new QueryClient();

let logoutTimer;

function App() {
  const [token, setToken] = useState(null);
  const [userId, setuser] = useState(null);
  const [email, setEmail] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState(null);

  /* useCallback to login user */
  const login = useCallback((uid, token, email, expirationDate) => {
    setToken(token);
    setuser(uid);
    setEmail(email);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token,
        email,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  /* useCallback to logout user */
  const logout = useCallback(() => {
    setToken(null);
    setuser(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  /* useEffect to check if user data exists in local storage and if the token is still valid */
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    console.log("stored data: ", storedData);
    /* if there is user data in local storage and the token is valid, log in the user */
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  /* useEffect to automatically log user out when token expires */
  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  let routes;
  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactpage/*" element={<ContactPage />} />
        <Route path="aboutus/*" element={<AboutUsPage />} />
        <Route path="myservices/*" element={<MyServices />} />
        <Route path="addservice/*" element={<AddService />} />
        <Route path="servicespage/*" element={<ServicesPage />} />
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactpage/*" element={<ContactPage />} />
        <Route path="aboutus/*" element={<AboutUsPage />} />
        <Route path="servicespage/*" element={<ServicesPage />} />
        <Route path="login/*" element={<LogIn />} />
        <Route path="signup/*" element={<SignUp />} />
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
        email: email,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Router>
          <MainNavigation />
          <main>{routes}</main>
        </Router>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}
export default App;