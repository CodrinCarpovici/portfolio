import React from "react";
import defaultBG from "../assets/cgc-logo/defaultBG.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Still gotta fix projects link
const Navbar = ({ setOpenModal }) => {
  const handleContactClick = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      const yOffset = sectionId === "projects-section" ? -81 : 0;
      const y =
        sectionElement.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <motion.img
            whileHover={{
              delay: 0,
              scale: 1.05,
              textShadow: "0px 0px 4px gray",
            }}
            className="img-fluid logo"
            src={defaultBG}
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => scrollToSection("home")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => scrollToSection("projects-section")}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item" onClick={handleContactClick}>
              <a
                className="nav-link"
                href="/contact"
                data-bs-toggle="collapse" // Add this attribute
                data-bs-target="#navbarNavDropdown" // Add this attribute
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
