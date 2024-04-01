import Image from "next/image"
import type { ProjectProps } from "../../types/project"
import { FC } from "react"

const ProjectCase: FC<ProjectProps> = ({ project }) => {
  return (
    <main>
      <Image
        src={project.coverImage}
        alt="Project"
        quality={100}
        loading={"eager"}
      />

      <article>{project.content}</article>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {project.images.map((image, idx) => (
          <Image
            key={idx}
            src={image}
            alt="Project"
            quality={100}
            loading={"eager"}
          />
        ))}
      </div>
    </main>
  )
}

export default ProjectCase
