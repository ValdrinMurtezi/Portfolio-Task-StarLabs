import React, { useState } from "react";
import "../style/Navbar.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src={"/images/logo.png"} alt="" />
          </div>
          <div className="menu">
            <ul className="links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#work">My Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="get-started-btn">
              <button>GET STARTED</button>
            </div>
          </div>
          <div onClick={toggleNav} className="toggler">
            <button>
              {nav ? (
                <AiOutlineMenu size={27} />
              ) : (
                <AiOutlineClose className="close-btn" size={27} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={nav ? "menu-mobile" : "menu-mobile open"}>
        <div className="logo">
          <img src={"/images/logo.png"} alt="" />
        </div>
        <ul className="links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
