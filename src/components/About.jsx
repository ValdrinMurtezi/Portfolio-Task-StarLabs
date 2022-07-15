import React from "react";
import "../style/About.scss";
import { FiGithub } from "react-icons/fi";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandBootstrap,
} from "react-icons/tb";
import { FaSass, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="info">
          <h2>
            About Me <div className="blank"></div>
          </h2>
          <p>
            I am a motivated young Front End Developer who likes to contribute
            to the tech world with my self learned knowledge. I started my
            journey one year ago. The "how" is very casually and unexpectedly.
            It got me into it and now I find myself everyday in front of the PC
            sharpening my coding skills and finding it exciting. I am ready to
            be part of a good team and to put my skills into work.
          </p>
          <p>
            When I'm not connected to the PC, I am connected to the nature. I
            like keeping myself busy with sports in my free time.
          </p>
          <div className="git-cv">
            <a href="https://github.com/ValdrinMurtezi">
              <FiGithub size={60} /> <br />
              Github
            </a>
            <a className="cv" href="#home">
              <BsFileEarmarkPerson size={60} /> <br />
              Resume
            </a>
          </div>
        </div>
        <div className="skills">
          <h2>Technical Skills</h2>
          <div className="skills-container">
            <div style={{ color: "orangered" }}>
              <span>
                {" "}
                <AiOutlineHtml5 size={60} />
              </span>
            </div>
            <div>
              <span style={{ color: "#264de4" }}>
                {" "}
                <TbBrandCss3 size={60} />
              </span>
            </div>
            <div>
              <span style={{ color: "rgb(196, 18, 136)" }}>
                {" "}
                <FaSass size={60} />
              </span>
            </div>
            <div>
              <span style={{ color: "rgb(219, 219, 34)" }}>
                <TbBrandJavascript size={60} />
              </span>
            </div>
            <div>
              <span style={{ color: "#563d7c" }}>
                {" "}
                <TbBrandBootstrap size={60} />
              </span>
            </div>
            <div>
              <span style={{ color: "rgb(14, 77, 77)" }}>
                {" "}
                <SiTailwindcss size={60} />
              </span>
            </div>
            <div>
              <span style={{ color: "#61dbfb" }}>
                {" "}
                <FaReact size={60} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
