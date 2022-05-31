import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import PixelArt from "../components/PixelArt";
import ProjectsCard from "../components/ProjectsCard";
import SiteContext from "../context/SiteContext";

const projectObj = {
  "pixel-art": <PixelArt />,
}

function Projects() {
  const { currProject } = useContext(SiteContext);
  const [showProject, setShowProject] = useState('');

  useEffect(() => {
    setShowProject(projectObj[currProject])
  }, [currProject]);

  return (
    <>
      <Header />
      <ProjectsCard />
      { showProject }
    </>
  );
}

export default Projects;
