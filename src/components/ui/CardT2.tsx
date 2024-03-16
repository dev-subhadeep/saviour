import React from "react"
import Button from "./Button"

interface CardT2 {
  title: string
  className?: string
  children: React.ReactNode
}

const CardT2 = ({ title, className, children }: CardT2) => {
  return (
    <div className={`text-white flex flex-col items-center ${className}`}>
      <div className="bg-primary flex justify-center w-[150px] rounded-lg py-2 -mb-6">
        {title}
      </div>
      <div className=" border border-primary p-6 rounded-2xl">{children}</div>
    </div>
  )
}

export default CardT2
