"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectHeader() {
  return (
    <div className="bg-black/90 backdrop-blur-md border-b border-gray-600/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/#projects"
          className="inline-flex items-center text-gray-300 hover:text-red-400 transition-colors duration-200"
        >
          <ArrowLeft size={20} className="mr-2" />
          Voltar aos projetos
        </Link>
      </div>
    </div>
  )
}
