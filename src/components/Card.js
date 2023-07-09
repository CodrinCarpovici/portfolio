import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/projects/${props.title}`}>
      <motion.div
        className="card-container z1"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="mask"> </div>
        <div className="img-container">
          <img src={props.img} alt="project" className="img-fluid" />
        </div>
        <div className="centered">
          <h2 className="card-title">{props.title}</h2>

          <motion.button
            className="button case-button"
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 4px gray",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Case Study
          </motion.button>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
