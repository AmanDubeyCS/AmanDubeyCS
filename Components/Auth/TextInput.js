import React from "react";
import "./Login-signup.css";

const TextInput = ({ id, name, placeholder, value, onChange, type = "text", required = true }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className='input-layout'
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default TextInput;