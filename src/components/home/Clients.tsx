import Image from "next/image"
import hasib from "../../assets/clients/hassib.png"

import React from "react"

const Clients = () => {
  return (
    <section className="pt-0">
      <div className="rounded-3xl grid-cols-1 grid md:grid-cols-5 border border-brown bg-blueBlack/5 overflow-hidden">
        <div className="md:col-span-2 border-b md:border-r md:border-b-0 border-brown grid place-content-center">
          <div className="p-6 lg:p-10">
            <span>Clients</span>
            <p className="text-heading5 font-semibold">
              What Others Have Experienced Working With Me
            </p>
          </div>
        </div>
        <div className="p-6 lg:p-10 self-center space-y-6 col-span-3">
          <p className="text-base lg:text-xl font-semibold">
            “Marwan worked as a contractor for our company. He is the kind of
            Front-End Developer we were looking for who could follow our coding
            style and doesn&apos;t need much instruction. He helped us design
            and develop some external pages for our website. He helped us
            integrate sanity.io, a headless CMS. I must say he did work on time
            and efficiently. I would wholeheartedly recommend Marwan to anyone
            seeking a highly skilled and dependable front-end developer for
            their technical projects”
          </p>
          <div className="flex items-center gap-3">
            <Image src={hasib} alt="Hasib Image" width={80} height={80} />
            <div>
              <h3 className="text-heading6">Hasib Khan</h3>
              <p>Co-founder at Nudge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
