import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="componentContainer">
      <div className="wrapper">
        <div className="headerContainer">
          <div className="logo"><span className="prefix">Ariz</span><span className="postfix">folio</span></div>
          <ul className="menu">
            <li className="menuitems">HOME</li>
            <li className="menuitems">PROJECT</li>
            <li className="menuitems">ABOUT</li>
            <li className="menuitems">CONTACT</li>
            <li className="menuitems">BLOG</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
