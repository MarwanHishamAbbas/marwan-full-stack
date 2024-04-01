"use client"

import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useEffect } from "react"
import { PropsWithChildren } from "react"
import Preloader from "../layout/Preloader/Preloader"

function SmoothScroll({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll({})

      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = "default"
        window.scrollTo(0, 0)
      }, 2000)
    })()
  }, [])

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {children}
    </main>
  )
}

export default SmoothScroll
