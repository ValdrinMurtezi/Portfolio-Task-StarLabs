import React from "react";
import "../style/Contact.scss";
import { FiGithub, FiLinkedin, FiFacebook, FiTwitter } from "react-icons/fi";

function Contact() {
  return (
    <div className="contact">
      <h2>
        Contact <div className="blank"></div>
      </h2>
      <div className="container">
        <div className="info">
          <p>waldrin.-@live.com</p>
          <p>+393 45 96 09 09</p>
          <p>valimurtezi.netlify.app</p>
          <p>Gjilan, Kosovo</p>
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
