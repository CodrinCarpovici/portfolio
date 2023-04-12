import React from "react";
import Card from "./Card";
import data from "./cardData";

const Projects = () => {
  return (
    <main className="d-flex align-items-center flex-column projects">
      <h1 className="display-title">PROJECTS</h1>
      {data.map((data) => (
        <Card
          key={data.title}
          img={data.img}
          title={data.title}
          subTitle={data.subTitle}
        />
      ))}
    </main>
  );
};

export default Projects;
