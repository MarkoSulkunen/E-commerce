"use client";

import { useState, useCallback, useEffect } from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContext } from "../context/auth-context";
import Link from "next/link";
import MainHeader from "./navigation/MainHeader";
import NavBar from "./navigation/NavBar";
import "../styles/Navigation.css";

const queryClient = new QueryClient();

let logoutTimer;

function Layout() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [userId, setuser] = useState(null);
  const [email, setEmail] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState(null);

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
    router.push("/");
  }, [router]);

  const logout = useCallback(() => {
    setToken(null);
    setuser(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
    router.push("/");
  }, [router]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration),
        storedData.email
      );
    }
  }, [login]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  return (
    <Router>
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

        <MainHeader>
        <h1 className="main-navigation__title">
          <Link href="/">Dog hotel</Link>
        </h1>
          <NavBar />
        </MainHeader>
        <main>
        </main>
      </QueryClientProvider>
    </AuthContext.Provider>
    </Router>
  );
}

export default Layout;