import React from "react";
import "../style/Contact.scss";
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone, BsGlobe } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>
        Contact <div className="blank"></div>
      </h2>
      <div className="container">
        <div className="info">
          <p>
            <span>
              <AiOutlineMail size={20} />
            </span>{" "}
            waldrin.-@live.com
          </p>
          <p>
            <span>
              <BsPhone size={20} />
            </span>{" "}
            +393 45 96 09 09
          </p>
          <p>
            <span>
              <BsGlobe size={20} />
            </span>{" "}
            valimurtezi.netlify.app
          </p>
          <p>
            <span>
              <GoLocation size={20} />
            </span>{" "}
            Gjilan, Kosovo
          </p>
        </div>
        <div className="logo">
          <img src={"/images/footer-logo.png"} alt="" />
        </div>
        <div className="skills">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ValdrinMurtezi"
          >
            <FiGithub size={30} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/valdrin-murtezi-4ab082231/"
          >
            <FiLinkedin size={30} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/dfchools"
          >
            <FiFacebook size={30} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Waldrin1"
          >
            <FiTwitter size={30} />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Contact;
