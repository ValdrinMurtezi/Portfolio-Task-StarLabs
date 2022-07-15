import React from "react";
import "../style/Projects.scss";

function Projects() {
  return (
    <div className="projects">
      <h2>
        My Projects <div className="blank"></div>
      </h2>
      <div className="container">
        <div className="project">
          {" "}
          <img src={"/images/projects/project1.png"} alt="" />
          <div className="project-info">
            <p>Construction Landing Page developed with Bootstrap CSS</p>
            <a href="#home">SEE PROJECT</a>
          </div>
        </div>
        <div className="project">
          {" "}
          <img src={"/images/projects/project2.png"} alt="" />
          <div className="project-info">
            <p>Movie App developed by fetching API with React Js</p>
            <a href="#home">SEE PROJECT</a>
          </div>
        </div>
        <div className="project">
          {" "}
          <img src={"/images/projects/project3.png"} alt="" />
          <div className="project-info">
            <p>Weather App developed by fetching API with React Js</p>
            <a href="#home">SEE PROJECT</a>
          </div>
        </div>
        <div className="project">
          {" "}
          <img src={"/images/projects/project4.png"} alt="" />
          <div className="project-info">
            <p>Travel Landing Page developed with Tailwind CSS</p>
            <a href="#home">SEE PROJECT</a>
          </div>
        </div>
        <div className="project">
          {" "}
          <img src={"/images/projects/project5.png"} alt="" />
          <div className="project-info">
            <p>Transform Technology Landing Page developed with Tailwind CSS</p>
            <a href="#home">SEE PROJECT</a>
          </div>
        </div>
        <div className="project">
          {" "}
          <img src={"/images/projects/project6.png"} alt="" />
          <div className="project-info">
            <p>Simple Car App developed with React JS</p>
            <a href="#home">SEE PROJECT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
