import React from "react";
import goals from "../assets/images/goals.jpg";
import achievements from "../assets/images/achievements.jpg";

const Case = (props) => {
  return (
    <section className="case-study">
      <div className="mask"></div>
      <img src={props.titleImg} alt="title" className="title-img"/>
      <h1>{props.title}</h1>
      <div className="container">
        <h2>Project Overview</h2>
        <p>{props.description}</p>
        <div className="mask"></div>
        <img src={goals} alt="goals" className="goals-img"/>
        <h2>Goals</h2>
        {props.goals.map((e) => (
          <button key={`${props.title + e}`}>{e}</button>
        ))}
        <h2>Tech Stack</h2>
        <ul>
          {props.tech.map((e) => (
            <li className="tech" key={`${props.title + e}`}>{e}</li>
          ))}
        </ul>
        <div className="mask"></div>
        <img src={achievements} alt="achievements" className="achievements-img"/>
        <h2>Achievements</h2>
        {props.achievements.map((e) => (
          <button className="achievement" key={`${props.title + e}`}>{e}</button>
        ))}
        <h2>Links To Website</h2>
        <h6>Live Site</h6>
        <a href={props.live}>{props.live}</a>
        <h6>Github</h6>
        <a href={props.github}>{props.github}</a>
      </div>
    </section>
  );
};

export default Case;
