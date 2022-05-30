import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../styles/images/home.png";
import aboutIcon from "../styles/images/about.png";
import projectIcon from "../styles/images/project.png";

function Menu() {
  return (
    <nav className="links-container">
      <Link to="/">
        <img className="icon" src={ homeIcon } alt="About" />
        Home
      </Link>
      <Link to="/about">
        <img className="icon" src={ aboutIcon } alt="About" />
        Sobre
      </Link>
      <Link to="/projects">
        <img className="icon" src={ projectIcon } alt="About" />
        Projetos
      </Link>
    </nav>
  );
}

export default Menu;
