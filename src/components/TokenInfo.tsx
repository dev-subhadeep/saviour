import React from "react"
import Button from "./ui/Button"

const TokenInfo = () => {
  return (
    <div className="text-white flex flex-col items-center">
      <div className="bg-primary flex justify-center w-[150px] rounded-lg py-2 -mb-6">
        Token Info
      </div>
      <div className=" border border-primary p-6 rounded-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        aspernatur, porro, alias inventore doloribus beatae a voluptas quae
        deserunt ducimus, non aut fugiat asperiores! Expedita dolor eveniet quo
        totam autem! Aut, similique sed. Iusto quo illo enim, libero nobis
        assumenda atque magni repellendus dolor ad omnis nihil, provident veniam
        illum laboriosam tempore accusamus? Eaque quasi, numquam ullam debitis
        reiciendis commodi?
      </div>
      <Button>Connect Wallet</Button>
    </div>
  )
}

export default TokenInfo
