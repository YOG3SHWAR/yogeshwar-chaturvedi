import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Projects from "../Projects/Projects";
import ConnectWithMe from "../ConnectWithMe/ConnectWithMe";
import "./Body.css";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../Home/Home";

function Body() {
  const location = useLocation();
  const bodyVariants = {
    hidden: {
      y: 1000,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
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
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/connect">
            <ConnectWithMe />
          </Route>
        </Switch>
      </AnimatePresence>
    </motion.div>
  );
}

export default Body;
