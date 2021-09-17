import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import { routeVariants } from "../../FramerMotion/variants";
import "./Projects.css";

function Projects() {
  return (
    <motion.div
      className="connect"
      variants={routeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AnimateSharedLayout>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          {items.map((item) => (
            <Item key={item} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </motion.div>
  );
}

function Item({
  name = "Dummy Project",
  desription = "dummy description ",
  url = "https://github.com/YOG3SHWAR",
  code = "https://github.com/YOG3SHWAR",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div layout>
        <h3>{name}</h3>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <Content
            desription={
              "dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description dummy description "
            }
            url={url}
            code={code}
          />
        )}
      </AnimatePresence>
    </motion.li>
  );
}

function Content({ desription, url, code }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>{desription}</div>
      <div className="buttons">
        <a className="link" href={code} target="code">
          Source Code
        </a>
        <a className="link" href={url} target="url">
          Live
        </a>
      </div>
    </motion.div>
  );
}

const items = [0, 1, 2];

export default Projects;
