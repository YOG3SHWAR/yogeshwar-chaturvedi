import { motion } from "framer-motion";
import React from "react";
import { routeVariants } from "../../FramerMotion/variants";

function Projects() {
  return (
    <motion.div
      className="connect"
      variants={routeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      Projects
    </motion.div>
  );
}
export default Projects;
