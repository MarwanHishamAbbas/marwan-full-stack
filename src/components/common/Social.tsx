import { buttonVariants } from "../ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

import { FC } from "react"

interface SocialProps {
  variant: "linkLight" | "linkDark"
}

const Social: FC<SocialProps> = ({ variant }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center gap-3 social">
      <Link
        className={buttonVariants({
          className: "flex gap-4",
          variant: variant,
        })}
        href="/contact"
      >
        <div>Let&apos;s Chat</div> <ArrowUpRight />
      </Link>
      <div className="grid grid-cols-4 gap-3 text-center text-xs md:text-sm">
        <Link
          target="_blank"
          className={buttonVariants({ variant: variant, size: "sm" })}
          href="https://github.com/MarwanHishamAbbas"
        >
          GitHub
        </Link>
        <Link
          target="_blank"
          className={buttonVariants({ variant: variant, size: "sm" })}
          href="https://www.linkedin.com/in/marwanhiisham/"
        >
          LinkedIn
        </Link>
        <Link
          target="_blank"
          className={buttonVariants({ variant: variant, size: "sm" })}
          href="https://twitter.com/MarwanHishamDev"
        >
          X (Twitter)
        </Link>
        <Link
          target="_blank"
          className={buttonVariants({ variant: variant, size: "sm" })}
          href="https://www.instagram.com/marwanhishamdev/"
        >
          Instagram
        </Link>
      </div>
    </div>
  )
}

export default Social
