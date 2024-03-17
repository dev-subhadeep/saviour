import Image, { StaticImageData } from "next/image"
import React from "react"

interface CardT1 {
  title: string
  description: string
  image: string | StaticImageData
}

const CardT1 = ({ title, description, image }: CardT1) => {
  return (
    <div className="h-[226px] w-[156px] md:h-[340px] md:w-[234px] rounded-lg relative  bg-gradient-to-t from-primary to-[#EF490F] overflow-hidden border-4 border-primary transform transition-all hover:scale-[1.02] delay-50">
      <div className="absolute rounded-lg bg-[#060818] opacity-95">
        <Image src={image} alt="Card" className="rounded-lg" />
      </div>
      <div className="absolute bottom-0">
        <p className="text-white text-2xl px-3 py-1">{title}</p>
        <p className="text-white p-3">{description}</p>
      </div>
    </div>
  )
}

export default CardT1
