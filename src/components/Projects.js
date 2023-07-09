import React from "react";
import Card from "./Card";
import data from "./data";

const Projects = () => {
  return (
    <main className="d-flex align-items-center flex-column projects" id="projects-section">
      <h1 className="display-title mb-4">PROJECTS</h1>
      {data.map((data) => (
        <Card
          key={data.title}
          img={data.titleImg}
          title={data.title}
        />
      ))}
    </main>
  );
};

export default Projects;
