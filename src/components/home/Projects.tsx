import ProjectCard from "../projects/ProjectCard"
import { PROJECTS_DATA } from "../../data/projects"

import React from "react"

const Projects = () => {
  return (
    <main className="bg-white" >
      <section>
        <div className="text-center">
          <span className="md:text-lg font-semibold">
            The Newest Additions To My Portfolio!
          </span>
          <h1 className="text-heading6 md:text-heading1 font-semibold mt-1 mb-3">
            Full-Stack Developer Chronicles
          </h1>
          <p className="text-blueBlack text-xl">
            Pixel Perfect Websites to Code Conquests <br /> Where Tech Dreams
            Come True!
          </p>
        </div>
        <div className="space-y-8 mt-12">
          {PROJECTS_DATA.slice(0, 3).map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Projects
