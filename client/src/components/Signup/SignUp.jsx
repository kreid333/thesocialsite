import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users", {
        username: username,
        emailAddress: emailAddress,
        password: password,
      })
      .then((response) => {
        console.log(response);
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="d-block mb-2 form-control"
        id="signUpUsername"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="email"
        className="d-block mb-2 form-control"
        id="signUpEmailAddress"
        placeholder="Email Address"
        onChange={(e) => {
          setEmailAddress(e.target.value);
        }}
      />
      <input
        type="password"
        className="d-block mb-2 form-control"
        id="signUpPassword"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="text-center">
        <button type="submit" className="mb-2 btn btn-primary">Create Account</button>
      </div>
    </form>
  );
};

export default SignUp;
