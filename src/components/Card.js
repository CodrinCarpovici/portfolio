import React from "react";

const Card = (props) => {
  return (
    <article className="">
      <div className="card-container">
        <div className="mask"></div>
        <div className="img-container">
          <img src={props.img} alt="project" className="img-fluid" />
        </div>
        <h2 className="top-left card-title">{props.title}</h2>
        <h3 className="center-left card-sub-title">{props.subTitle}</h3>
        <button className="button bottom-left case-button">Case Study</button>
      </div>
    </article>
  );
};

export default Card;
