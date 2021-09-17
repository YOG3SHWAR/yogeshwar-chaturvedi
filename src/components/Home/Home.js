import { motion } from "framer-motion";
import React from "react";
import { routeVariants } from "../../FramerMotion/variants";

function Home() {
  return (
    <motion.div
      className="connect"
      variants={routeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      Home
    </motion.div>
  );
}

export default Home;
