import React from "react";
import { Route, Switch } from "react-router-dom";
import Projects from "../Projects/Projects";
import ConnectWithMe from "../ConnectWithMe/ConnectWithMe";
import "./Body.css";
import { motion } from "framer-motion";

function Body() {
  const bodyVariants = {
    hidden: {
      y: 1000,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 0.5,
      transition: { delay: 0.2, type: "spring", stiffness: 50 },
    },
    whileFocus: {
      scale: 1.2,
    },
  };
  return (
    <motion.div
      className="body"
      variants={bodyVariants}
      initial="hidden"
      animate="visible"
    >
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/connect">
          <ConnectWithMe />
        </Route>
      </Switch>
    </motion.div>
  );
}

export default Body;
