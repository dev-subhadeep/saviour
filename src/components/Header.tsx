"use client"
import React, { useState } from "react"
import Logo from "../../public/saviour-logo.png"
import Image from "next/image"
import Navlinks from "./Navbar"
import Bars from "./ui/Bars"
import ConnectButton from "./ConnectButton"
import ChevronDown from "./ui/ChevronDown"
import Link from "next/link"
import { zcool } from "@/lib/fonts"

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <header
        style={zcool.style}
        className={`fixed flex justify-between items-center p-6 w-full text-white z-20 ${
          isSidebarOpen ? ` bg-background` : ``
        }`}
      >
        <div className="flex gap-2 items-center">
          <button
            className="sm:hidden"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <Bars />
          </button>
          <Link className="flex gap-2 items-center" href={"/"}>
            <Image src={Logo} alt="Saviour Logo" height={50} width={50} />
            <span>Saviour</span>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <Navlinks />
        </div>
        <div>
          <ConnectButton />
        </div>
      </header>
      <div
        className={`fixed bg-background w-full overflow-hidden top-[100px] ${
          isSidebarOpen ? `h-full` : `h-0`
        }`}
      >
        <ul className="p-10 text-white">
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
      </div>
    </>
  )
}

export default Header
