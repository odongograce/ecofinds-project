import type React from "react"
import type { Metadata } from "next"
import { Crimson_Pro, Playfair_Display, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ecoFinds - Sustainable Second-Hand Auctions",
  description: "Discover quality pre-loved items through competitive bidding. Join our sustainable marketplace.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
