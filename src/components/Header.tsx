"use client"
import React, { useState } from "react"
import Logo from "../../public/saviour-logo.png"
import Image from "next/image"
import Navlinks from "./Navbar"
import Bars from "./ui/Bars"
import ConnectButton from "./ConnectButton"

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
      <header
        className={`fixed flex justify-between items-center p-6 w-full text-white z-20 ${
          isSidebarOpen ? ` border border-blue-50` : ``
        }`}
      >
        <div className="flex gap-2 items-center">
          <button
            className="sm:hidden"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <Bars />
          </button>
          <Image src={Logo} alt="Saviour Logo" height={50} width={50} />
          <span className="font-sans">Saviour</span>
        </div>
        <div className="hidden sm:flex">
          <Navlinks />
        </div>
        <div>
          <ConnectButton />
        </div>
      </header>
    </>
  )
}

export default Header
