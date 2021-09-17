import React from "react";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import "./ConnectWithMe.css";

function ConnectWithMe() {
  return (
    <div>
      <a href="https://github.com/YOG3SHWAR" target="GitHub">
        <img className="logo" src={github} alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/yogeshwar-chaturvedi/"
        target="Linkedin"
      >
        <img className="logo" src={linkedin} alt="GitHub" />
      </a>
    </div>
  );
}

export default ConnectWithMe;
