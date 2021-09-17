import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";

function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  const temp = [1, 2, 3, 4, 5];
  const items = temp.map((id) => (
    <div id={id} style={{ minHeight: "50px", minWidth: "50px" }}>
      {" "}
      gugsu h{id}
    </div>
  ));

  return (
    <AnimateSharedLayout type="crossfade">
      {items.map((item) => (
        <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {
          <motion.div layoutId={selectedId}>
            <motion.h5>abc</motion.h5>
            <motion.h2>abc</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        }
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
export default Projects;
