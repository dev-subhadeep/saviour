import React from "react"
import TokenInfo from "./TokenInfo"
import LinkGenerator from "./LinkGenerator"
import Presale from "./Presale"

const IDO = () => {
  return (
    <section className="bg-[url('../../public/images/bg2.png')] bg-right bg-cover bg-black p-20 text-white flex flex-col gap-6">
      <div className="container mx-auto">
        <h2 className="text-4xl text-primary text-center my-10">
          Participate in our IDO Event!
        </h2>
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="flex flex-col gap-10 md:col-span-2">
            <div className="grid container mx-auto">
              <p className="text-center">
                During our IDO event, you will gain early access to our
                revolutionary ecosystem, designed to empower everyone to share
                wealth and achieve success.{" "}
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
            <div>
              <h3 className="text-center text-xl uppercase">
                Become an affiliate & Earn 7% as Commission!
              </h3>
            </div>
            <div>
              <LinkGenerator />
            </div>
          </div>
          <div className="md:col-span-3">
            <Presale />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IDO
