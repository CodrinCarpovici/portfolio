import React from "react";
import { motion } from "framer-motion";

const colors = [
  "purple",
  "medium-blue",
  "light-blue",
  "red",
  "orange",
  "yellow",
  "cyan",
  "light-green",
  "lime",
  "magenta",
  "lightish-red",
  "pink",
];

const Particles = () => {
  return (
    <motion.div
      className="particles"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duratioon: 0.5,
        delay: 2,
      }}
    >
      {colors.map((color) => (
        <div className={color} key={color}></div>
      ))}
    </motion.div>
  );
};

export default Particles;
