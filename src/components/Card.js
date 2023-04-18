import React from "react";

const Card = (props) => {
  return (
    <article className="">
      <div className="card-container">
        <div className="mask"></div>
        <div className="img-container">
          <img src={props.img} alt="project" className="img-fluid" />
        </div>
        <div className="centered">
          <h2 className="card-title">{props.title}</h2>
          <h3 className="card-sub-title">{props.subTitle}</h3>
          <button className="button case-button">Case Study</button>
        </div>
      </div>
    </article>
  );
};

export default Card;
