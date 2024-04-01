import Image from "next/image"
import marwanImage from "../../assets/about/Marwan.jpeg"

import React from "react"

const AboutMe = () => {
  return (
    <main className="bg-brown text-white">
      <section className="flex flex-col md:flex-row justify-between md:items-center gap-10">
        <div>
          <span className="text-lg">About me</span>
          <h1 className="text-heading4 md:text-heading2 mt-2 mb-4">
            Exploring the Digital Universe
          </h1>
          <p className="text-heading7 md:text-heading6">
            My journey into the world of coding began with curiosity and a
            desire to understand the inner workings of the digital universe.
            From tinkering with basic Front-End concepts to mastering the
            intricacies of back-end development, every step has been a lesson in
            patience, persistence, and problem-solving.
          </p>
        </div>

        <Image
          src={marwanImage}
          alt="Logo Image"
          className="rounded-2xl"
          width={450}
          height={500}
        />
      </section>
    </main>
  )
}

export default AboutMe
