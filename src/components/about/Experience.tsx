const experiences = [
  {
    startDate: "Apr 2021",
    endDate: "Mar 2024",
    position: "Full-Stack Developer",
    company: "Upwork",
  },
  {
    startDate: "Apr 2022",
    endDate: "Dec 2022",
    position: "Jr. Front-End Developer",
    company: "ORKA Solutions",
  },

  {
    startDate: "Jan 2023",
    endDate: "Dec 2023",
    position: "Senior Front-End Developer",
    company: "OneCo.",
  },

  {
    startDate: "Feb 2023",
    endDate: "Current",
    position: "Next.js Developer",
    company: "Nudge Solutions",
  },
]

import React from "react"

const Experience = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-5 justify-between">
      <h3 className="text-lg md:flex-1 font-semibold">Experiences</h3>

      <div className="md:w-3/4 mx-auto flex flex-col gap-5">
        {experiences.reverse().map((exp, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center gap-5 py-4 border-b-[0.5px] border-b-border"
          >
            <p>
              {exp.startDate} - {exp.endDate}
            </p>
            <p>
              {exp.position} - {exp.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
