import React from "react";
import gitImg from "../assets/github.png";
import linkedinImg from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <span> Hossam Marey</span>
        <a
          href="https://www.linkedin.com/in/hossam-marey/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinImg} alt="LinkedIN" />
        </a>
        <a
          href="https://github.com/HossamMarey/dotsless"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitImg} alt="Github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
