import type { ProjectProps } from "../../types/project"
import { buttonVariants } from "../ui/button"
import { ArrowUpRight } from "lucide-react"
import { Button } from "../ui/button"

import { FC } from "react"
import Image from "next/image"
import Link from "next/link"

const ProjectCard: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="rounded-3xl overflow-hidden relative w-full">
      <Link href={`/projects/${project.slug}`} className="">
        <Image
          src={project.coverImage}
          alt="Project"
          className="rounded-3xl h-[350px] lg:h-[850px] object-cover"
          quality={100}
          loading={"eager"}
        />
      </Link>
      <section className="lg:absolute left-4 right-4 bottom-4 bg-white flex items-center justify-between py-3 lg:py-6 rounded-3xl px-0 lg:px-6">
        <div className="space-y-2">
          <h4 className="text-heading6">{project.title}</h4>
          <div className="flex gap-3">
            {project.stack.map((s, idx) => (
              <span
                key={idx}
                className="rounded-full text-blueBlack border border-brown px-3 py-0.5 text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <Link
          target="_blank"
          className={buttonVariants({
            variant: "linkDark",
            class: "hidden md:flex gap-1",
          })}
          href={project.preview}
        >
          <span>View Demo</span>
          <ArrowUpRight className="" />
        </Link>
        <Button className=" md:hidden" variant="linkDark" size="icon">
          <ArrowUpRight />
        </Button>
      </section>
    </div>
  )
}

export default ProjectCard
