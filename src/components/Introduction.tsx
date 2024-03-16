import React from "react"
import Button from "./ui/Button"
import ChevronDown from "./ui/ChevronDown"
import Image from "next/image"
import NinjaIntro from "../../public/images/ninja.png"

const Introduction = () => {
  return (
    <section className="bg-background text-white">
      <div className="container mx-auto grid justify-center items-center p-10">
        <div className="row-span-3 flex justify-center">
          <Image src={NinjaIntro} height={200} width={300} alt="Ninja" />
        </div>
        <div>
          <h2 className="text-4xl text-primary">Introduction</h2>
        </div>
        <div>
          We've all been in the mud once, and now we've decided to fight it out.
          Pay tribute to those pioneers of WEB3 and the warriors who dedicated
          their love to the blockchain. Save the lucky ones alive, join us to
          save the future! Our mission is to empower everyone to share wealth
          and succeed. read more...
        </div>
        <div className="mt-2">
          <Button>
            Documents <ChevronDown />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Introduction
