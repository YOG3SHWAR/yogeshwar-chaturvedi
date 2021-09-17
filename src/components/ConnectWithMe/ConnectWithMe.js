import { motion } from "framer-motion";
import React from "react";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import "./ConnectWithMe.css";
import { routeVariants } from "../../FramerMotion/variants";

function ConnectWithMe() {
  return (
    <motion.div
      className="connect"
      variants={routeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <a href="https://github.com/YOG3SHWAR" target="GitHub">
        <div className="card">
          <img className="logo" src={github} alt="GitHub" />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/yogeshwar-chaturvedi/"
        target="Linkedin"
      >
        <div className="card">
          <img className="logo" src={linkedin} alt="GitHub" />
        </div>
      </a>
    </motion.div>
  );
}

export default ConnectWithMe;
