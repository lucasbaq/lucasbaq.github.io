import React from "react";
import github from "../styles/images/github.svg"
import linkedin from "../styles/images/linkedin.svg"
import "../styles/Socials.css";

function Socials() {
  return (
    <article className="socials">
      <p>ME SIGA</p>
      <nav>
        <a
          className="github-btn"
          href="https://github.com/lucasbaq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ github } alt="github link" />
        </a>
        <a
          className="linkedin-btn"
          href="https://www.linkedin.com/in/lucasbaq/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ linkedin } alt="linkedin link" />
        </a>
      </nav>
    </article>
  );
}

export default Socials;
