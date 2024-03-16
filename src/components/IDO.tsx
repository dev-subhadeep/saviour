import React from "react"
import TokenInfo from "./TokenInfo"

const IDO = () => {
  return (
    <section className="bg-[url('../../public/images/bg2.png')] bg-black p-10">
      <h2 className="text-4xl text-primary text-center">
        Participate in our IDO Event!
      </h2>
      <div className="grid grid-cols-2 container mx-auto">
        <p className="text-white">
          During our IDO event, you will gain early access to our revolutionary
          ecosystem, designed to empower everyone to share wealth and achieve
          success.{" "}
          <span className="sm:hidden">
            By participating in this exclusive event, you'll secure your
            position at the forefront of blockchain innovation, with the
            potential for high rewards.
          </span>
        </p>
      </div>
      <div>
        <TokenInfo />
      </div>
    </section>
  )
}

export default IDO
