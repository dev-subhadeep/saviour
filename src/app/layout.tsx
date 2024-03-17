import type { Metadata } from "next"
import { Inter, Shojumaru } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
