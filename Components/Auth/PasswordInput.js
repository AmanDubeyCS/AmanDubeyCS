import React, { useState } from "react";
import "./Login-signup.css";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const PasswordInput = ({ id, name, placeholder, value, onChange,  required = true }) => {
    const [isvisible, setIsVisible] = useState(false);
  return (
    <div className="password-field">
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        className="pass-input input-layout"
        type={isvisible ? 'text' : 'password'}
        value={value}
        isvisible={isvisible.toString()}
        onChange={onChange}
        required={required}
      />
      <span
        className="eye-icon"
        onClick={() => setIsVisible(!isvisible)}
        aria-label={isvisible ? "Hide password" : "Show password"}
      >
        <Icon className="icon" icon={isvisible ? eye : eyeOff} size={25}/>
      </span>
    </div>
  );
};

export default PasswordInput;