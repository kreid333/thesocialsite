import React, { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="text-center">
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
        type="text"
        className="d-block mb-2 form-control"
        id="signUpEmailAddress"
        placeholder="Email Address"
        onChange={(e) => {
          setEmailAddress(e.target.value);
        }}
      />
      <input
        type="text"
        className="d-block mb-2 form-control"
        id="signUpPassword"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="text-center">
        <button className="mb-2 btn btn-primary">Create Account</button>
      </div>
    </form>
  );
};

export default SignUp;
