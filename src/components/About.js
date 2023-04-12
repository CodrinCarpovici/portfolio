import React from "react";
import aboutBG from "../assets/images/technology.jpg";

const About = () => {
  return (
    <div className="about ">
      <div className="mask"></div>
      <div className="img-container">
        <img src={aboutBG} alt="about background" className="img-fluid" />
      </div>
      <div className="center-left p-3 mt-5">
        <h3 className="about-title">About</h3>
        <p className="about-text">
          Hi, I'm Codrin, a self-taught Front End Developer with a passion for
          creating user friendly websites and applications. My primary technical
          skills are in&nbsp;
          <strong className="about-bold">
            ReactJS, Bootstrap, JavaScript, HTML, CSS/SASS
          </strong>
          . I'm constantly learning and keeping up to date with the latest
          technologies and developments in the industry.
        </p>
        <p className="about-text">
          When I'm not coding, I enjoy exploring new cultures, playing video
          games, and learning about science and history. I believe that
          problem-solving and creativity are at the core of development, and I
          strive to deliver solutions that are both functional and aesthetically
          pleasing.
        </p>
        <p className="about-text">
          <strong className="about-bold">
            You can reach me using using this contact form.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default About;
