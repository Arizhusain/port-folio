import React from "react";
import "./feature.css";

const Card = (props) => {
  return (
    <>
      <div class="smallcard">
        <div class="smallbg">
          <div className="smallImage">Image</div>
          <h1 className="smallTitle">UI Design</h1>
          <p className="smallDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            quod?
          </p>
          <a href="#" className="smallLink">
            KNOW MORE...
          </a>
        </div>
        <div class="smallblob"></div>
      </div>
    </>
  );
};

export default Card;
