import React from "react";
import logo from "../assets/cgc-logo/defaultBG.png";
import smallerlogo from "../assets/cgc-logo/favicon.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = ({ setOpenModal }) => {
  return (
    <footer className="footer pt-3 z1">
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="/">
              <motion.img
                whileHover={{
                  delay: 0,
                  scale: 1.05,
                  textShadow: "0px 0px 4px gray",
                }}
                src={logo}
                alt="logo"
                className="logo"
              />
            </a>
            <a href="/">
              <img
                src={smallerlogo}
                alt="smaller logo"
                className="smaller-logo"
              />
            </a>
          </div>
          <div className="col text-center">
            <a href="https://github.com/CodrinCarpovici" className="">
              <motion.img
                whileHover={{
                  delay: 0,
                  scale: 1.1,
                  textShadow: "0px 0px 4px gray",
                }}
                whileTap={{ scale: 0.95 }}
                src={github}
                alt="github logo"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/codrin-gabriel-c-31b4b899/"
              className=""
            >
              <motion.img
                whileHover={{
                  delay: 0,
                  scale: 1.1,
                  textShadow: "0px 0px 4px gray",
                }}
                whileTap={{ scale: 0.95 }}
                src={linkedin}
                alt="linkedin logo"
                className="social-icon"
              />
            </a>
            <div className="">
              <p className="copyright">
                Copyright© 2023 CGC, Inc. All rights reserved.
              </p>
            </div>
          </div>
          <div className="col d-flex flex-column align-items-end">
            <Link to="/">
              <motion.button
                whileHover={{
                  delay: 0,
                  scale: 1.1,
                  textShadow: "0px 0px 4px gray",
                }}
                whileTap={{ scale: 0.95 }}
                className="footer-link"
              >
                Home
              </motion.button>
            </Link>
            <Link to="/">
              <motion.button
                whileHover={{
                  delay: 0,
                  scale: 1.1,
                  textShadow: "0px 0px 4px gray",
                }}
                whileTap={{ scale: 0.95 }}
                className="footer-link"
              >
                Projects
              </motion.button>
            </Link>
            <motion.button
              whileHover={{
                delay: 0,
                scale: 1.1,
                textShadow: "0px 0px 4px gray",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenModal(true)}
              href="/contact"
              className="footer-link"
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
