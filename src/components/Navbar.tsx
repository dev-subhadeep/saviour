import React from "react"
import ChevronDown from "./ui/ChevronDown"
import Link from "next/link"

const Navbar = () => {
  return (
    <ul className="flex gap-4 bg-background text-white px-4 py-2 rounded-2xl">
      <li key="1">
        <Link href="/">Home</Link>
      </li>
      <li key="2">
        <Link href="/#ido">IDO</Link>
      </li>
      <li key="3">
        <Link href="/#tokenomics">Tokenomics</Link>
      </li>
      <li key="4">
        <Link href="/#roadmap">Roadmap</Link>
      </li>
      <li key="5" className="flex items-center gap-1">
        Coming Soon <ChevronDown />
      </li>
    </ul>
  )
}

export default Navbar
