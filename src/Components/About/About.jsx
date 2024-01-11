import React from "react";
import Card from "../features/Card";
import Rating from "../features/Rating";
import "./about.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutWrapper wrapper">
        <div className="cardContainer">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="rateContainer">
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default About;
