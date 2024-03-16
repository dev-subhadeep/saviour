import React from "react"
import Accordion from "./ui/Accordion"

const FAQ = () => {
  return (
    <section className="bg-background text-white">
      <div className="container p-10 mx-auto">
        <Accordion
          title={
            <div className="flex gap-8">
              <span>1</span>
              <span>Why choose "saviour"?</span>
            </div>
          }
          description="Cause it's the best!"
        />
      </div>
    </section>
  )
}

export default FAQ
