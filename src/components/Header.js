import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import downArrow from "../assets/icons/downArrow.png";
import { motion } from "framer-motion";

const Header = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    new SplitType(titleRef.current);

    gsap.to(titleRef.current.querySelectorAll(".char"), {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  return (
    <header className="header d-flex align-items-center">
      <div className="container main-offer">
        <div className="display-title" style={{ "--stacks": 3 }}>
          <span style={{ "--index": 0 }}>CODRIN G. CARPOVICI</span>
          <span style={{ "--index": 1 }}>CODRIN G. CARPOVICI</span>
          <span style={{ "--index": 2 }}>CODRIN G. CARPOVICI</span>
        </div>
        <h2 ref={titleRef} className="sub-title" id="mainSubTitle">
          WEB DEVELOPER
        </h2>
        <motion.button
          className="about-btn"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0,
            opacity: {
              duration: 0.5,
              delay: 1.7, // custom duration for opacity property only
            },
          }}
          whileHover={{ delay: 0, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ABOUT ME
        </motion.button>
      </div>
      <motion.button
        className="button down-arrow"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duratioon: 0.5,
          delay: 1.7,
        }}
      >
        <img
          src={downArrow}
          className="arrow-icon img-fluid"
          alt="down arrow"
        />
      </motion.button>
    </header>
  );
};

export default Header;
