import AboutMe from "@/components/about/AboutMe"

import Hero from "@/components/about/Hero"
import Projects from "@/components/home/Projects"
import Experience from "@/components/about/Experience"
import WhyMe from "@/components/about/WhyMe"
import SmoothScroll from "@/components/providers/SmoothScroll"

export default function About() {
  return (
    <SmoothScroll>
      <Hero />
      <AboutMe />
      <Experience />
      <WhyMe />
    </SmoothScroll>
  )
}
