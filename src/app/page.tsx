import FAQ from "@/components/FAQ"
import Hero from "@/components/Hero"
import IDO from "@/components/IDO"
import Introduction from "@/components/Introduction"
import Roadmap from "@/components/Roadmap"
import Tokenomics from "@/components/Tokenomics"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <IDO />
      <Tokenomics />
      <Roadmap />
      <FAQ />
    </main>
  )
}
