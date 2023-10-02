import React, { lazy, Suspense } from "react";
import "../styles/global.css";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const Navbar = lazy(() => import("../components/NavBar"));

const Login = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <div className="container">
      <h1>Login</h1>
      <form>
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
        <Button type="submit">{"LOGIN"}</Button>
      </form>
      </div>
    </div>
  );
};

export default Login;