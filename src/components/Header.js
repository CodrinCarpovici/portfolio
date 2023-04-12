import React from "react";
import downArrow from "../assets/icons/downArrow.png";

const Header = () => {
  return (
    <header className="header d-flex align-items-center">
      <div className="container main-offer">
        <h1 className="display-title">CODRIN G. CARPOVICI</h1>
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
