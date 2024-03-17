import React from "react"
import ChevronDown from "./ui/ChevronDown"

const Navbar = () => {
  return (
    <ul className="flex gap-4 bg-background text-white px-4 py-2 rounded-2xl">
      <li key="1">Home</li>
      <li key="2">IDO</li>
      <li key="3">Tokenomics</li>
      <li key="4">Roadmap</li>
      <li key="5" className="flex items-center gap-1">
        Coming Soon <ChevronDown />
      </li>
    </ul>
  )
}

export default Navbar
