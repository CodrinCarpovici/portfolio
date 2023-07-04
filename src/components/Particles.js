import React from "react";

const colors = [
  "purple",
  "medium-blue",
  "light-blue",
  "red",
  "orange",
  "yellow",
  "cyan",
  "light-green",
  "lime",
  "magenta",
  "lightish-red",
  "pink",
];

const Particles = () => {
  return (
    <div className="particles">
      {colors.map((color) => (
        <div className={color} key={color}></div>
      ))}
    </div>
  );
};

export default Particles;
