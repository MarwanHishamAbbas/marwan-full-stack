import { CornerDownLeft } from "lucide-react"
import type { ProjectProps } from "../../types/project"
import { buttonVariants } from "../ui/button"

import { FC } from "react"
import Link from "next/link"

const ProjectCaseHero: FC<ProjectProps> = ({ project }) => {
  return (
    <main className="bg-brown text-brand">
      <div className="space-y-8 hero">
        <Link
          className={buttonVariants({
            variant: "linkLight",
            className: "space-x-2",
            size: "sm",
          })}
          href="/projects"
        >
          <CornerDownLeft />
          <span>All case studies</span>
        </Link>
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-semibold">
            {project.title}
          </h1>
          <p className="text-xl lg:text-heading6 md:w-3/4">
            {project.description}
          </p>
        </div>
        <div className="space-y-2">
          {project.client && (
            <div className="flex items-center justify-between border-b border-brand py-2">
              <p>Client:</p>
              <p>{project.client}</p>
            </div>
          )}
          <div className="flex items-center justify-between border-b border-brand py-2">
            <p>Technologies:</p>
            <div className="flex gap-1">
              {project.stack.map((tech, idx) => (
                <p key={idx}>
                  {tech} {idx === project.stack.length - 1 ? null : ","}
                </p>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-brand py-2">
            <p>Date:</p>
            <p>{project.date}</p>
          </div>
          <div className="flex items-center justify-between border-b border-brand py-2">
            <p>Preview:</p>
            <Link target="_blank" href={project.preview}>
              {project.preview.replace("https://", "")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectCaseHero
