import { PROJECTS_DATA } from "../../data/projects"
import ProjectCard from "./ProjectCard"

import React from "react"

const ProjectsList = () => {
  return (
    <section>
      {PROJECTS_DATA.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </section>
  )
}

export default ProjectsList
