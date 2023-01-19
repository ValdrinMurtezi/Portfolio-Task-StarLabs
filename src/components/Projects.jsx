import React from "react";
import "../style/Projects.scss";

function Projects() {
  return (
    <div id="work" className="projects">
      <h2>
        My Projects <div className="blank"></div>
      </h2>
      <p className="title">
        Below are only some of my projects wich I developed to put my skills
        into real world projects.
      </p>
      <div className="container">
        <div className="project">
          {" "}
          <img src={"/images/projects/project1.png"} alt="Project" />
          <div className="project-info">
            <p>Construction Landing Page developed with Bootstrap CSS</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://constructing.netlify.app/"
            >
              SEE PROJECT
            </a>
          </div>{" "}
        </div>
        <div className="project">
          {" "}
          <img src={"/images/projects/project2.png"} alt="Project" />
          <div className="project-info">
            <p>Movie App developed by fetching API with React Js</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://thestreamer.netlify.app/"
            >
              SEE PROJECT
            </a>
          </div>
        </div>
        <div className="project">
          {" "}
          <img src={"/images/projects/project3.png"} alt="" />
          <div className="project-info">
            <p>Weather App developed by fetching API with React Js</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://weather2cast.netlify.app/"
            >
              SEE PROJECT
            </a>
          </div>
        </div>
        <div className="project">
          {" "}
          <img src={"/images/projects/project4.png"} alt="Project" />
          <div className="project-info">
            <p>Travel Landing Page developed with Tailwind CSS</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tourstravel.netlify.app/"
            >
              SEE PROJECT
            </a>
          </div>
        </div>
        <div className="project">
          {" "}
          <img src={"/images/projects/project5.png"} alt="Project" />
          <div className="project-info">
            <p>Transform Technology Landing Page developed with Tailwind CSS</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://buildtool.netlify.app/"
            >
              SEE PROJECT
            </a>
          </div>
        </div>
        <div className="project">
          {" "}
          <img src={"/images/projects/project6.png"} alt="Project" />
          <div className="project-info">
            <p>Simple Library App developed with React JS</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://libraryapi.netlify.app/"
            >
              SEE PROJECT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
