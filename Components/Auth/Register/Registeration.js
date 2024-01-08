import React, { useState } from "react";
import "../Login-signup.css";
import TextInput from "../TextInput.js";
import PasswordInput from "../PasswordInput.js";
import { Link } from "react-router-dom";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsOfService, setTermsOfService] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="title">Create Account</h2>
      <span className="description">Use your email or sign up with Google</span>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="name"
          name="name"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
            <input
              type="checkbox"
              id="termsOfService"
              name="termsOfService"
              checked={termsOfService}
              onChange={(e) => setTermsOfService(e.target.checked)}
              required
            />
            I agree to the <a href="#">Terms of Service</a>
          </label>
        </div>
        <button 
          className="submit-button" 
          type="submit"
          disabled = {!termsOfService}
          >
          Sign Up
        </button>
      </form>
      <div className="signin-but">
        <span className="signin-but">
          Have an account? <Link to={"/login"}>Sign In</Link>
        </span>
      </div>
    </>
  );
};

export default Registration;