import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      {projects.map((project) => {
        return(
          <div key={project.id} id="project-list">
            <ProjectItem
             name={project.name}
             about={project.about}
             technologies={project.technologies}
             />
          </div>
        )
      })}
      
    </div>
  );
}

export default ProjectList;
