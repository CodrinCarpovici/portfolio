import React from "react";
import goals from "../assets/images/goals.jpg";
import achievements from "../assets/images/achievements.jpg";
import { motion, useScroll, useSpring } from "framer-motion";

const Case = (props) => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.section
      className="case-study z1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
    >
      <motion.div className="progress-bar" style={{ scaleX }} />
      {/*Come Back here */}
      <div className="img-container">
        <div className="mask"></div>
        <img src={props.titleImg} alt="title" className="title-img img-fluid" />
        <h1 className="main-title">{props.title}</h1>
      </div>
      <div className="container my-4">
        <h2 className="sub-title">Project Overview</h2>
        <p className="regular-text">{props.description}</p>
      </div>

      <div className="img-container my-4">
        <div className="mask"></div>
        <img src={goals} alt="goals" className="goals-img img-fluid" />
        <div className="absolute-container">
          <div className="container">
            <h2 className="sub-title abs-sub-title">Goals</h2>
            <div className="row button-container m-3">
              {props.goals.map((e, i) => (
                <motion.button
                  key={`${props.title + e}`}
                  className="button-text style-button col-md-auto mx-auto mt-3"
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      delay: i * 0.5
                    },
                    translateY: {
                      duration: 0.5,
                      delay: i * 0.5,
                    },
                  }}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px gray",
                  }}
                >
                  {e}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <h2 className="sub-title">Tech Stack</h2>
        <ul>
          {props.tech.map((e) => (
            <li className="tech regular-text" key={`${props.title + e}`}>
              {e}
            </li>
          ))}
        </ul>
      </div>
      <div className="img-container my-4">
        <div className="mask"></div>
        <img
          src={achievements}
          alt="achievements"
          className="achievements-img img-fluid"
        />
        <div className="absolute-container">
          <div className="container">
            <h2 className="sub-title abs-sub-title">Achievements</h2>
            <div className="row button-container m-3">
              {props.achievements.map((e, i) => (
                <motion.button
                  className="achievement button-text style-button col-md-auto mx-auto mt-3"
                  key={`${props.title + e}`}
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      delay: i * 0.5
                    },
                    translateY: {
                      duration: 0.5,
                      delay: i * 0.5,
                    },
                  }}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px gray",
                  }}
                >
                  {e}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3 pb-3 website-links-container">
        <h2 className="sub-title">Links To Website</h2>
        <h6 className="links-title">Live Site</h6>
        <a href={props.live} className="regular-text links">
          {props.live}
        </a>
        <h6 className="links-title pt-3">Github</h6>
        <a href={props.github} className="regular-text links">
          {props.github}
        </a>
      </div>
    </motion.section>
  );
};

export default Case;
