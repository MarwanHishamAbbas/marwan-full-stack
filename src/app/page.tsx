import Clients from "@/components/home/Clients"
import Hero from "@/components/home/Hero"
import Projects from "@/components/home/Projects"
import SmoothScroll from "@/components/providers/SmoothScroll"

export default function Home() {
  return (
    <SmoothScroll>
      <Hero />
      <Projects />
      <Clients />
    </SmoothScroll>
  )
}
