import React from "react";
import './header.css'

const Header = () => {
  return (
    <div className="wrapper">
      <div className="headerContainer">
        <div className="logo">Arif</div>
        <ul className="menu">
          <li className="menuitems">HOME</li>
          <li className="menuitems">PROJECT</li>
          <li className="menuitems">ABOUT</li>
          <li className="menuitems">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
