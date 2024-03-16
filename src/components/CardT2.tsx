import React from "react"
import Button from "./ui/Button"

interface CardT2 {
  title: string
  children: React.ReactNode
}

const CardT2 = ({ title, children }: CardT2) => {
  return (
    <div className="text-white flex flex-col items-center">
      <div className="bg-primary flex justify-center w-[150px] rounded-lg py-2 -mb-6">
        {title}
      </div>
      <div className=" border border-primary p-6 rounded-2xl min-w-[500px]">
        {children}
      </div>
    </div>
  )
}

export default CardT2
