import React from "react";
import "./TextContent.css";

const TextContent = ({ title, content }) => {
  return (
    <div className="text-content">
      <div
        className="title"
        style={{ fontSize: "18px", paddingBottom: "15px" }}
      >
        {" "}
        {title}
      </div>
      <div className="text" style={{ fontSize: "12px" }}>
        {" "}
        {content}
      </div>
    </div>
  );
};

export default TextContent;
