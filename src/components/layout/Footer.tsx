import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

import React from "react"

const Footer = () => {
  return (
    <footer className="bg-orange">
      <section className="flex flex-col items-start md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-6">
          <Link
            href="mailto:marwanhishamdev@gmail.com"
            className="text-lg lg:text-heading5 lg underline underline-offset-4"
          >
            marwanhishamdev@gmail.com
          </Link>
          <div className="text-xs md:text-sm flex gap-3 flex-wrap">
            <Link
              target="_blank"
              className={buttonVariants({ variant: "linkDark", size: "sm" })}
              href="https://github.com/MarwanHishamAbbas"
            >
              GitHub
            </Link>
            <Link
              target="_blank"
              className={buttonVariants({ variant: "linkDark", size: "sm" })}
              href="https://www.linkedin.com/in/marwanhiisham/"
            >
              LinkedIn
            </Link>
            <Link
              target="_blank"
              className={buttonVariants({ variant: "linkDark", size: "sm" })}
              href="https://twitter.com/MarwanHishamDev"
            >
              X (Twitter)
            </Link>
            <Link
              target="_blank"
              className={buttonVariants({ variant: "linkDark", size: "sm" })}
              href="https://www.instagram.com/marwanhishamdev/"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div className="text-xs md:text-sm space-x-3">
          <Link href="/">Home</Link>
          <Link href="/projects">Case studies</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>
    </footer>
  )
}

export default Footer
