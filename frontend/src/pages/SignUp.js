import React, { lazy, Suspense } from "react";
import "../styles/global.css";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

const Navbar = lazy(() => import("../components/NavBar"));

const SignUp = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <div className="container">
        <h1>Sign up</h1>
        <form>
        <Input type="text" label="Name" id="signup-name" />
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
        <Button type="submit">{"SIGNUP"}</Button>
      </form>
      </div>
    </div>
  );
};

export default SignUp;