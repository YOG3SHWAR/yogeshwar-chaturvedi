import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const linkVariants = {
    initial: { y: -250 },
    animate: {
      y: -0,
      transition: { delay: 0.2, type: "spring", stiffness: 50 },
    },
    whileHover: {
      textShadow: "0px 0px 15px rgb(51, 50, 50)",
      scale: 1.1,
    },
  };

  const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 },
    },
    whileTap: {
      scale: 0.8,
      rotate: -180,
      transition: {
        duration: 0.2,
      },
    },

    whileHover: { scale: 1.2, rotate: 0, x: 0, y: 0 },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header>
      <motion.div className="header">
        <NavLink to="/" className="navlink">
          <motion.svg
            style={{ originX: "50%", originY: "50%" }}
            // width="auto"
            height="5vh"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            whileTap="whileTap"
            whileHover="whileHover"
          >
            <motion.path
              d="M99.8975 112.899L127.729 59.3594H143.696L106.929 126.229V166H92.8662V126.229L56.0986 59.3594H72.2119L99.8975 112.899Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={7}
              variants={pathVariants}
            />
            <motion.path
              d="M164.315 138.58C162.281 157.298 155.567 171.62 144.174 181.549C132.862 191.477 117.766 196.441 98.8857 196.441C85.7021 196.441 74.0241 193.146 63.8516 186.554C53.7604 179.962 45.9479 170.644 40.4141 158.6C34.8802 146.474 32.0726 132.639 31.9912 117.096V94.0244C31.9912 78.2367 34.7581 64.2393 40.292 52.0322C45.8258 39.8252 53.7604 30.4258 64.0957 23.834C74.5124 17.1608 86.4753 13.8242 99.9844 13.8242C119.027 13.8242 134.042 18.9919 145.028 29.3271C156.096 39.5811 162.525 53.7819 164.315 71.9297H149.179C145.435 41.7376 129.037 26.6416 99.9844 26.6416C83.8711 26.6416 71.013 32.6637 61.4102 44.708C51.8887 56.7523 47.1279 73.3945 47.1279 94.6348V116.363C47.1279 136.871 51.7666 153.229 61.0439 165.436C70.4027 177.643 83.0166 183.746 98.8857 183.746C114.592 183.746 126.433 180.003 134.408 172.516C142.383 164.947 147.307 153.635 149.179 138.58H164.315Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={7}
              variants={pathVariants}
            />
          </motion.svg>
        </NavLink>

        <motion.div
          className="links"
          variants={linkVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={linkVariants} whileHover="whileHover">
            <NavLink
              to="/projects"
              className="navlink"
              activeClassName="selected"
            >
              Projects
            </NavLink>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="whileHover">
            <NavLink
              to="/contact"
              className="navlink"
              activeClassName="selected"
            >
              Contact Me
            </NavLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Header;
