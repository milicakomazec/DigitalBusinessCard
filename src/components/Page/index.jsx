import React from "react";
import Button from "../Button";
import TextContent from "../TextContent";
import TitleText from "../TitleText";
import Footer from "../Footer";
import "./Page.css";

const Page = () => {
  return (
    <div className="page-container">
      <div className="business-card-container">
        <img
          className="user-photo"
          src="../../../media/profile-photo.png"
          alt="User profile"
        ></img>
        <div className="content-container">
          <TitleText text="Laura Smith" color="white" fontSize="23px" />
          <TitleText
            text="Frontend Developer"
            color="#F3BF99"
            fontSize="15px"
          />
          <TitleText text="laurasmith.website" color="white" fontSize="10px" />
          <div className="btn-container">
            <Button text="Email" backgroundColor="white" color="black" />
            <Button text="Linkedin" backgroundColor="#5093E2" color="white" />
          </div>
          <div className="text-content-container">
            <TextContent
              title="About"
              content="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
            />
            <TextContent
              title="Interest"
              content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
