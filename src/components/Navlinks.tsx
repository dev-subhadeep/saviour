import React from "react"
import ChevronDown from "./ui/ChevronDown"

const Navlinks = () => {
  return (
    <ul className="flex gap-4 bg-background text-white px-4 py-2 rounded-2xl">
      <li>Home</li>
      <li>IDO</li>
      <li>Tokenomics</li>
      <li>Roadmap</li>
      <li className="flex items-center gap-1">
        Coming Soon <ChevronDown />
      </li>
    </ul>
  )
}

export default Navlinks
