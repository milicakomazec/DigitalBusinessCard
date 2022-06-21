import React from "react";
import "./Button.css";

const Button = ({ text, backgroundColor, color }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {text}
    </button>
  );
};

export default Button;
