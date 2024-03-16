import type { Metadata } from "next"
import { Inter, Shojumaru } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })
const shojumaru = Shojumaru({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saviour",
  description:
    "Saviour is a place where Blockchain heroes thrive, rescuing dreams, elevating fortunes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
