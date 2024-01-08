import React, { useState } from "react";
import "../Login-signup.css";
import TextInput from "../TextInput.js";
import PasswordInput from "../PasswordInput.js";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="title">Welcome Back</h2>
      <span className="description">Login with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <PasswordInput
          id="pass"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="terms">
          <label htmlFor="termsOfService" className="termsOfService">
            <a href="#">Forgot your password?</a>
          </label>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div className="signin-but">
        <span>
          Don't have an account? <Link to={"/"}>Sign Up</Link>
        </span>
      </div>
    </>
  );
};

export default Login;