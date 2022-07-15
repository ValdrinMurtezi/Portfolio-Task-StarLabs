import React from "react";
import "../style/Header.scss";

function Header() {
  return (
    <header>
      <div id="home" className="container">
        <h1>
          Hi, I am <span>Valdrin Murtezi</span>{" "}
        </h1>
        <h2>Front End Developer |</h2>
      </div>
      <div className="icon">
        <img src={"/images/icon2.png"} alt="" />
      </div>
    </header>
  );
}

export default Header;
