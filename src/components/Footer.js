import React from "react";
import logo from "../assets/cgc-logo/defaultBG.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
