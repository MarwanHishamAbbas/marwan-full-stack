import Card from "./Card"
import { WhatMakesMeContent } from "./about-content"

import React from "react"

const WhyMe = () => {
  return (
    <section className="pt-0 flex flex-col md:flex-row gap-5 items-center md:items-start">
      <h1 className="text-lg font-semibold md:flex-1">
        What Shapes My Identity
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:w-3/4">
        {WhatMakesMeContent.map((card, idx) => (
          <Card key={idx} item={card} />
        ))}
      </div>
    </section>
  )
}

export default WhyMe
