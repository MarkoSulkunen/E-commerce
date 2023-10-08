import React, { useRef, useContext } from "react";
import { useMutation } from "react-query";
import "../styles/global.css";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { AuthContext } from "../context/auth-context";

import { loginUser } from "../api/users";
import "../styles/Authenticate.css";

const LogIn = (props) => {
  const auth = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("login data: ", data);
      auth.login(data.id, data.token);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    loginUserMutation.mutate({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div id="section-login">
      <div className="container">
      <h1>Login</h1>
      <form  onSubmit={onSubmitHandler}>
        <Input ref={emailRef} type="email" label="Email" />
        <Input ref={passwordRef} type="password" label="Password" />
        <Button type="submit">{"LOGIN"}</Button>
      </form>
      </div>
    </div>
  );
};

export default LogIn;