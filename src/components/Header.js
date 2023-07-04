import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import downArrow from "../assets/icons/downArrow.png";

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
        <button className="about-btn">ABOUT ME</button>
      </div>
      <button className="button down-arrow">
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
