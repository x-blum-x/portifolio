"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface ThreeDNameProps {
  children: string
  /** Posição do mouse relativa ao centro da área que você quiser (ex: sessão inteira) */
  mousePosition?: {
    x: number
    y: number
  }
}

export default function ThreeDName({ children, mousePosition }: ThreeDNameProps) {
  const [internalMousePosition, setInternalMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const useExternalMouse = mousePosition !== undefined
  const effectiveMousePosition = useExternalMouse ? mousePosition! : internalMousePosition

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || useExternalMouse) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setInternalMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    if (useExternalMouse) return
    setInternalMousePosition({ x: 0, y: 0 })
  }

  // Agora as sombras vão na direção oposta ao mouse de forma natural
  const redShadow = `${-effectiveMousePosition.x / 50}px ${-effectiveMousePosition.y / 50}px 2px rgba(239, 68, 68, 0.9)`
  const blueShadow = `${-effectiveMousePosition.x / 30}px ${-effectiveMousePosition.y / 30}px 3px rgba(59, 130, 246, 0.9)`

  return (
    <div
      ref={containerRef}
      onMouseMove={useExternalMouse ? undefined : handleMouseMove}
      onMouseLeave={useExternalMouse ? undefined : handleMouseLeave}
      className="relative cursor-pointer select-none"
    >
      {/* Red shadow */}
      <div
        className="absolute inset-0 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-transparent pointer-events-none"
        style={{ textShadow: redShadow }}
      >
        {children}
      </div>

      {/* Blue shadow */}
      <div
        className="absolute inset-0 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-transparent pointer-events-none"
        style={{ textShadow: blueShadow }}
      >
        {children}
      </div>

      {/* Main text */}
      <motion.h1
        className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {children}
      </motion.h1>

      {/* Reflection */}
      <div className="absolute top-full mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-blue-400/20 transform scale-y-[-1] pointer-events-none blur-sm">
        {children}
      </div>
    </div>
  )
}
