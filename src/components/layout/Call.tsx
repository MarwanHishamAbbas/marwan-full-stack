import callPattern from "../../assets/call-pattern.png"
import { buttonVariants } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import React from "react"

const Call = () => {
  return (
    <div className="text-brand bg-brown">
      <section className="text-center space-y-3">
        <div className="flex items-center gap-2 text-heading5 md:text-display1 justify-center">
          <h1 className="">Let&apos;s</h1>
          <Image
            src={callPattern}
            alt="Logo Image"
            className="bg-brand rounded-full w-[124px] h-[60px] lg:w-[164px] lg:h-[96px]"
          />
          <h1 className="">Talk</h1>
        </div>
        <p className="text-xl md:text-heading5">
          Looking forward to collaborating and turning your vision into reality!{" "}
          <br /> Let&apos;s create something extraordinary together.
        </p>
        <Link
          href="/contact"
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "space-x-2",
          })}
        >
          <Calendar />
          <span>Schedule a call</span>
        </Link>
      </section>
    </div>
  )
}

export default Call
