import React from "react"
import Logo from "../../public/saviour-logo.png"
import Image from "next/image"
import Navlinks from "./Navlinks"
import Bars from "./ui/Bars"
import Button from "./ui/Button"

const Navbar = () => {
  return (
    <header className="fixed flex justify-between items-center px-4 w-screen text-white z-10">
      <div className="flex gap-2 items-center">
        <button>
          <Bars />
        </button>
        <Image src={Logo} alt="Saviour Logo" height={50} width={50} />
        <span>Saviour</span>
      </div>
      <div>
        <Navlinks />
      </div>
      <div>
        <Button>Connect Wallet</Button>
      </div>
    </header>
  )
}

export default Navbar
