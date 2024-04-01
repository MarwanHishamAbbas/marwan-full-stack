import heroPattern from "../../assets/hero-pattern.png"
import heroPattern2 from "../../assets/hero-pattern-2.jpeg"
import Social from "../common/Social"
import Image from "next/image"

import React from "react"

const Hero = () => {
  return (
    <main className="bg-brown text-brand grid place-content-center">
      <div className="hero">
        <div className="text-heading1 md:text-7xl lg:text-[100px] xl:text-display1 hidden md:block">
          <div className="flex items-center gap-4 flex-wrap">
            <h1>Digital Dynamo</h1>
            <Image
              src={heroPattern}
              alt="Logo Image"
              className="bg-brand rounded-full w-[124px] h-[60px] lg:w-[230px] lg:h-[100px]"
            />
          </div>
          <h1>Empowering Online</h1>

          <div className="flex items-center gap-4">
            <Image
              src={heroPattern2}
              alt="Logo Image"
              className="bg-brand rounded-full w-[124px] h-[70px] lg:w-[230px] lg:h-[100px]"
            />
            <h1>Experiences</h1>
          </div>
        </div>
        <div className="text-heading2 md:hidden md:invisible">
          <Image
            src={heroPattern}
            alt="Logo Image"
            className="bg-brand rounded-full w-[124px] h-[60px]"
          />
          <h1>Digital Dynamo</h1>

          <h1>Empowering</h1>

          <Image
            src={heroPattern2}
            alt="Logo Image"
            className="bg-brand rounded-full w-full object-cover h-[70px]"
          />
          <h1>Online Experiences</h1>
        </div>
        <p className="text-heading6 md:text-heading5 my-16 lg:w-3/4">
          Specializing in materializing designs and sculpting fluid user
          experiences, I excel in translating concepts into captivating
          realities. From crafting responsive layouts to orchestrating
          interactive animations, every detail is meticulously curated to ensure
          seamless engagement. Dive into my portfolio to witness the fusion of
          creativity and functionality, and don&apos;t hesitate to reach out to
          discuss how we can bring your project aspirations to fruition.
        </p>
        <Social variant="linkLight" />
      </div>
    </main>
  )
}

export default Hero
