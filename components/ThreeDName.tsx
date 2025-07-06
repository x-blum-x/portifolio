"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface ThreeDNameProps {
  children: string
}

export default function ThreeDName({ children }: ThreeDNameProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const redShadow = `${mousePosition.y / 10}px ${mousePosition.x / 80}px 1px rgba(239, 68, 68, 0.8)`
  const blueShadow = `${mousePosition.y / 8}px ${mousePosition.x / 60}px 1px rgba(59, 130, 246, 1)`

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer select-none"
    >
      {/* Red shadow */}
      <div
        className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl font-black text-transparent pointer-events-none"
        style={{ textShadow: redShadow }}
      >
        {children}
      </div>

      {/* Blue shadow */}
      <div
        className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl font-black text-transparent pointer-events-none"
        style={{ textShadow: blueShadow }}
      >
        {children}
      </div>

      {/* Main text */}
      <motion.h1
        className="relative text-6xl md:text-7xl lg:text-8xl font-black text-white z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.h1>

      {/* Reflection */}
      <div className="absolute top-full mt-4 text-6xl md:text-7xl lg:text-8xl font-black text-blue-400/20 transform scale-y-[-1] pointer-events-none blur-sm">
        {children}
      </div>
    </div>
  )
}
