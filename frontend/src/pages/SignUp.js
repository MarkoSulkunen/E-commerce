"use client";

import React, { useRef, useContext } from "react";
import { useMutation } from "react-query";
import "../styles/global.css";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { AuthContext } from "../context/auth-context";

import { signUpUser } from "../api/users";
import "../styles/Authenticate.css";

const SignUp  = () => {
  const auth = useContext(AuthContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const signUpUserMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: (data) => {
      console.log(data);
      auth.login(data.id, data.token);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    signUpUserMutation.mutate({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div id="section-signup">
      <div className="container">
        <h1>Sign up</h1>
        <form  onSubmit={onSubmitHandler}>
        <Input ref={nameRef} type="text" label="Name" id="signup-name" />
        <Input ref={emailRef} type="email" label="Email" />
        <Input ref={passwordRef} type="password" label="Password" />
        <Button type="submit">{"SIGNUP"}</Button>
      </form>
      </div>
    </div>
  );
};

export default SignUp;