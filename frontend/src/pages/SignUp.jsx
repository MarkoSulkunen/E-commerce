import React, { useRef, useContext } from "react";
import { useMutation } from "react-query";
import "../styles/global.css";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { AuthContext } from "../context/auth-context";

import { signUpUser } from "../api/users";
import "../styles/authenticate.css";

const SignUp  = (props) => {
  const auth = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  /* Sign up mutation */
  const signUpUserMutation = useMutation({
    mutationFn: signUpUser,
    onSuccess: (data) => {
      auth.login(data.id, data.token);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  /*###############################################################################

   FUNCTION NAME: onSubmitHandler

   DESCRIPTION: Gets input values from refs and sends a mutation to the server

  ################################################################################*/
  const onSubmitHandler = (event) => {
    event.preventDefault();

    signUpUserMutation.mutate({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div id="section-signup">
      <div className="contact-container">
        <h1>Join us</h1>
        <form  onSubmit={onSubmitHandler}>
        <Input ref={emailRef} type="email" label="Email" />
        <Input ref={passwordRef} type="password" label="Password" />
        <Button type="submit">{"SIGNUP"}</Button>
      </form>
      </div>
    </div>
  );
};

export default SignUp;