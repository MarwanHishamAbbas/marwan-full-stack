import egyptFlag from "../../assets/egypt.svg"
import heroPattern1 from "../../assets/about/hero-pattern-1.png"
import Social from "../common/Social"

import React from "react"
import Image from "next/image"

const Hero = () => {
  return (
    <main className="bg-brand text-brown grid place-content-center">
      <div className="hero">
        <div className="text-heading1 md:text-7xl lg:text-[100px] xl:text-display1 hidden md:block">
          <div className="flex items-center gap-4 flex-wrap">
            <h1>Marwan Hisham</h1>
            <Image
              src={heroPattern1}
              alt="Logo Image"
              className="bg-brand rounded-full w-[124px] h-[60px] lg:w-[230px] lg:h-[100px]"
            />
          </div>
          <h1>Full-Stack Developer</h1>

          <div className="flex items-center">
            <h1>Based in</h1>
            <Image
              src={egyptFlag}
              alt="Logo Image"
              className="rounded-full size-[100px] lg:size-[130px]"
            />
            <h1>Egypt</h1>
          </div>
        </div>
        <div className="text-heading2 md:hidden md:invisible">
          <h1>Marwan H.</h1>
          <Image
            src={heroPattern1}
            alt="Logo Image"
            className="bg-brand rounded-full w-full h-[70px]"
          />
          <h1>Full-Stack</h1>

          <h1>Developer</h1>
          <h1>Based in</h1>
          <div className="flex items-center">
            <Image
              src={egyptFlag}
              alt="Logo Image"
              className="rounded-full size-[100px] lg:size-[120px]"
            />
            <h1>Egypt</h1>
          </div>
        </div>
        <p className="text-heading6 md:text-heading5 my-16 lg:w-3/4">
          Crafting seamless user experiences and bringing designs to life is my
          specialty. From responsive layouts to interactive animations, I
          meticulously curate every detail to ensure captivating realities.
          Explore my portfolio to see the fusion of creativity and
          functionality, and feel free to connect with me to discuss your
          project aspirations further.
        </p>
        <Social variant="linkDark" />
      </div>
    </main>
  )
}

export default Hero
