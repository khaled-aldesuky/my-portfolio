import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Khaled Al-Desuky - portfolio",
  description:
    "Portfolio of Khaled Al-Desuky, a software engineer specializing in .NET, Project Management, and cloud technologies.",
  keywords: ["software engineer", ".NET", "Project Managemant", "cloud computing"],
  openGraph: {
    title: "Khaled Al-Desuky - Software Engineer",
    description: "Specialized in development with .NET, Project Management, and cloud platforms",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
