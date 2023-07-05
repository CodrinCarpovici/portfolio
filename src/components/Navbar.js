import React from "react";
import defaultBG from "../assets/cgc-logo/defaultBG.png";
import { Link } from "react-scroll";

const Navbar = ({ setOpenModal }) => {
  const handleContactClick = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="img-fluid logo" src={defaultBG} alt="logo" />
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
              <a
                className="nav-link"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="projects-section"
                smooth={true}
                duration={100}
                offset={-81}
              >
                <a
                  className="nav-link"
                  href="/projects"
                  data-bs-toggle="collapse" // Add this attribute
                  data-bs-target="#navbarNavDropdown" // Add this attribute
                >
                  Projects
                </a>
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
