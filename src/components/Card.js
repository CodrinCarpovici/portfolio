import React from "react";
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div
      className="card-container"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="mask"> </div>
      <div className="img-container">
        <img src={props.img} alt="project" className="img-fluid" />
      </div>
      <div className="centered">
        <h2 className="card-title">{props.title}</h2>
        <h3 className="card-sub-title">{props.subTitle}</h3>
        <motion.button
          className="button case-button"
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 4px gray",
          }}
        >
          Case Study
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;
