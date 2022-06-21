import React from "react";
import "./Button.css";

const Button = ({ text, style }) => {
  return (
    <button className="btn" style={style}>
      {text}
    </button>
  );
};

export default Button;
