import React from "react";
import axios from "axios";
import fileDownload from "js-file-download";
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
  const download = (e) => {
    e.preventDefault();
    axios({
      url: "/images/Valdrin-Murtezi-CV.pdf",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      fileDownload(res.data, "Valdrin Murtezi CV.pdf");
    });
  };
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="info">
          <h2>
            About Me <div className="blank"></div>
          </h2>
          <p>
            I am Valdrin Murtezi, a self-taught front-end developer with over a
            year of experience. I have a passion for creating responsive and
            beautiful websites that provide an exceptional user experience. With
            a keen eye for design and a strong understanding of the latest web
            development technologies, I am dedicated to constantly improving and
            pushing the boundaries of my skillset.
          </p>
          <br />
          <p>
            I have a strong understanding of HTML, CSS and JavaScript and have
            experience with popular front-end frameworks such as React. I am
            also familiar with CSS preprocessors such as SCSS and Tailwind CSS.
            When I'm not connected to the PC, I am connected to the nature. I
            like keeping myself busy with sports in my free time.
          </p>
          <div className="git-cv">
            <a href="https://github.com/ValdrinMurtezi">
              <FiGithub size={60} /> <br />
              Github
            </a>
            <button onClick={(e) => download(e)}>
              <BsFileEarmarkPerson size={60} /> <br />
              Resume
            </button>
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
        <div className="responsive-img">
          <img src={"/images/img-2.png"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
