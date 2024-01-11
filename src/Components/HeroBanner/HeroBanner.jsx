import React from "react";
import "./heroBanner.css";
import avatar from "../../assets/avatar1.png";

const HeroBanner = () => {
  return (
    <div className="BannerContainer">
      <div className="bannerWrapper wrapper">
        <div className="imageContainer">
          <img src={avatar} className="avatarImage" />
        </div>
        <div className="textContainer">
          <h3 className="namePlate">Arifhusain Soudagar</h3>
          <h1 className="profession">Frontend Developer</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis incidunt voluptas beatae quam sint eaque ea provident
            reiciendis, error molestias quidem cum sequi blanditiis odit ipsum
            eveniet rerum tenetur laborum.
          </p>
          <button className="btn">ABOUT ME</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
