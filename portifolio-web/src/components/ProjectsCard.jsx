import React, { useContext } from "react";
import SiteContext from "../context/SiteContext";
import projectsList from "../services/data";
import "../styles/ProjectsCard.css";

function ProjectsCard() {
  const { currProject, setCurrProject } = useContext(SiteContext);
  return (
    <div className="cards-container">
      { projectsList.map((project, index) => (
        <div
          key={index}
          className="card"
        >
          <button
            type="button"
            onClick={ () => setCurrProject(
              project.id === currProject ? '' : project.id
            ) }
          >
            <img src={project.thumb} alt={project.title} />
          </button>
          <div>
            <h1>{ project.title }</h1>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >Repósitorio Git</a>
          </div>
        </div>
      )) }
    </div>
  );
}

export default ProjectsCard;
