import React from "react";
import "./TitleText.css";

const TitleText = ({ text, color, fontSize }) => {
  return (
    <div className="title-text" style={{ color: color, fontSize: fontSize }}>
      {text}
    </div>
  );
};

export default TitleText;
