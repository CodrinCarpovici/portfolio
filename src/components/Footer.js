import React from "react";
import logo from "../assets/cgc-logo/defaultBG.png";
import smallerlogo from "../assets/cgc-logo/favicon.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer pt-3 z1">
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="/">
              <img src={logo} alt="logo" className="logo" />
            </a>
            <a href="/">
              <img src={smallerlogo} alt="smaller logo" className="smaller-logo" />
            </a>
          </div>
          <div className="col text-center">
            <a href="https://github.com/CodrinCarpovici" className="">
              <img src={github} alt="github logo" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/codrin-gabriel-c-31b4b899/" className="">
              <img src={linkedin} alt="linkedin logo" className="social-icon" />
            </a>
            <div className="">
              <p className="copyright">
                Copyright© 2023 CGC, Inc. All rights reserved.
              </p>
            </div>
          </div>
          <div className="col d-flex flex-column align-items-end">
            <a href="/" className="footer-link">Home</a>
            <a href="/projects" className="footer-link">Projects</a>
            <a href="/contact" className="footer-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
