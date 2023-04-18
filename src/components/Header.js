import React from "react";
import downArrow from "../assets/icons/downArrow.png";

const Header = () => {
  return (
    <header className="header d-flex align-items-center">
      <div className="container main-offer">
        <div className="display-title" style={{'--stacks': 3}}>
          <span style={{'--index': 0}}>
            CODRIN G. CARPOVICI
          </span>
          <span style={{'--index': 1}}>
            CODRIN G. CARPOVICI
          </span>
          <span style={{'--index': 2}}>
            CODRIN G. CARPOVICI
          </span>
        </div>
        <h2 className="sub-title">WEB DEVELOPER</h2>
        <button className="about-btn">ABOUT ME</button>
      </div>
      <button className="button arrow-btn">
        <img
          src={downArrow}
          className="arrow-icon img-fluid"
          alt="down arrow"
        />
      </button>
    </header>
  );
};

export default Header;
