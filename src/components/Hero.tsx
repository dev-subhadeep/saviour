import React from "react"

const Hero = () => {
  return (
    <div className="bg-[url('../../public/images/hero-image.png')] bg-cover py-[100px] relative">
      <div className="w-[95vh] pt-[100px] bg-[#242323] opacity-40 absolute"></div>
      <h1 className="text-white absolute text-[45px] font-family:'ZCOOL KuaiLe'">
        Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
      </h1>
    </div>
  )
}

export default Hero
