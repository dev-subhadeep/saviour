import React from "react"
import Accordion from "./ui/Accordion"
import { faqs } from "../data/faqs"

interface FAQ {
  id: number
  question: string
  answer: string
}

const FAQ = () => {
  return (
    <section className="bg-background text-white">
      <div className="container p-10 mx-auto">
        <div className="flex flex-col gap-4">
          {faqs.map((faq: FAQ) => (
            <Accordion
              key={faq.id}
              title={
                <div className="flex gap-8">
                  <span>{faq.id}</span>
                  <span>{faq.question}</span>
                </div>
              }
              description={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
