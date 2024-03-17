import React from "react"
import Button from "./ui/Button"
import ChevronDown from "./ui/ChevronDown"
import Image from "next/image"
import NinjaIntro from "../../public/images/ninja.png"

const Introduction = () => {
  return (
    <section className="bg-background text-white text-center">
      <div className="grid">
        <div id="image-wrapper">
          <Image src={NinjaIntro} alt="Ninja" />
        </div>
        <div id="heading-wrapper">
          <h2 className="text-4xl text-primary my-2 sm:text-left">
            Introduction
          </h2>
        </div>
        <div id="paragraph-wrapper">
          <p className="my-2 sm:text-left">
            We&apos;ve all been in the mud once, and now we&apos;ve decided to
            fight it out. Pay tribute to those pioneers of WEB3 and the warriors
            who dedicated their love to the blockchain. Save the lucky ones
            alive, join us to save the future! Our mission is to empower
            everyone to share wealth and succeed. read more...
          </p>
        </div>
        <div id="button-wrapper">
          <Button>
            Documents <ChevronDown />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Introduction
