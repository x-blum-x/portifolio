import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gabriel Blum - Full Stack Developer",
  description:
    "Portfólio profissional de Gabriel Blum Santos - Desenvolvedor Full Stack especializado em React, TypeScript, Python e tecnologias modernas.",
  keywords: "Gabriel Blum, desenvolvedor, full stack, React, TypeScript, Python, Rust, portfolio",
  authors: [{ name: "Gabriel Blum Santos" }],
  openGraph: {
    title: "Gabriel Blum - Full Stack Developer",
    description: "Desenvolvedor Full Stack apaixonado por criar soluções inovadoras",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
