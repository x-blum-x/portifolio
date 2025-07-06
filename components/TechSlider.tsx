"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa"
import { SiTypescript, SiRust, SiNextdotjs } from "react-icons/si"

const technologies = [
  {
    name: "React",
    color: "from-blue-500 to-cyan-700",
    icon: <FaReact size={36} className="text-cyan-300 drop-shadow" />
  },
  {
    name: "TypeScript",
    color: "from-blue-700 to-blue-900",
    icon: <SiTypescript size={36} className="text-blue-300 drop-shadow" />
  },
  {
    name: "Python",
    color: "from-yellow-400 to-blue-600",
    icon: (
      <img
        src="/assets/python.svg"
        alt="Python"
        className="w-9 h-9 drop-shadow"
        draggable={false}
      />
    )
  },
  {
    name: "Rust",
    color: "from-orange-800 to-gray-900",
    icon: <SiRust size={36} className="text-orange-300 drop-shadow" />
  },
  {
    name: "Next.js",
    color: "from-gray-900 to-black",
    icon: <SiNextdotjs size={36} className="text-white drop-shadow" />
  },
  {
    name: "Node.js",
    color: "from-green-700 to-green-900",
    icon: <FaNodeJs size={36} className="text-green-300 drop-shadow" />
  },
]

export default function TechSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying || isDragging) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isDragging])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    const threshold = 50

    if (info.offset.x > threshold) {
      setCurrentIndex((prev) => (prev - 1 + technologies.length) % technologies.length)
    } else if (info.offset.x < -threshold) {
      setCurrentIndex((prev) => (prev + 1) % technologies.length)
    }
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const getVisibleTechs = () => {
    const visible = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + technologies.length) % technologies.length
      visible.push({ ...technologies[index], position: i })
    }
    return visible
  }

  return (
    <div className="flex items-center justify-center py-8 select-none">
      <motion.div
        className="flex items-center space-x-4 w-80 justify-center cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        dragElastic={0.2}
      >
        <AnimatePresence mode="wait">
          {getVisibleTechs().map((tech, index) => (
            <motion.div
              key={`${tech.name}-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8, x: tech.position * 50 }}
              animate={{
                opacity: tech.position === 0 ? 1 : 0.4,
                scale: tech.position === 0 ? 1 : 0.7,
                x: tech.position * 80,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg border border-gray-600/30 pointer-events-none`}
            >
              <span className="text-3xl flex items-center justify-center">{tech.icon}</span>
              {tech.position === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-300 text-sm font-medium whitespace-nowrap"
                >
                  {tech.name}
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
