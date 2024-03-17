import type { Metadata } from "next"
import { Inter, Shojumaru } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import { cookieToInitialState } from "wagmi"

import { config } from "@/config"
import Web3ModalProvider from "@/context"
import { headers } from "next/headers"

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
  const initialState = cookieToInitialState(config, headers().get("cookie"))
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider initialState={initialState}>
          <Header />
          {children}
          <Footer />
        </Web3ModalProvider>
      </body>
    </html>
  )
}
