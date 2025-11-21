"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { FaReact, FaNodeJs } from "react-icons/fa"
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
  }
]
const ITEM_WIDTH = 60
const VISIBLE_COUNT = 5
const CENTER_SLOT = Math.floor(VISIBLE_COUNT / 2) // 2

export default function TechSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const restartAutoPlay = () => {
    setIsAutoPlaying(false)
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current)
    }
    autoPlayTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  // move o índice central (carrossel circular)
  const move = (dir: 1 | -1) => {
    setActiveIndex((prev) => (prev + (dir === 1 ? 1 : -1) + technologies.length) % technologies.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      move(1) // próximo
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current)
      }
    }
  }, [])

  const handleIconClick = (slot: number) => {
    const distanceFromCenter = slot - CENTER_SLOT
    if (distanceFromCenter !== 0) {
      setActiveIndex((prev) => (prev + distanceFromCenter + technologies.length) % technologies.length)
      restartAutoPlay()
    }
  }

  // monta a fila visível: centro ±2 (sempre 5 itens)
  const visibleIndices: number[] = []
  for (let offset = -CENTER_SLOT; offset <= CENTER_SLOT; offset++) {
    const index = (activeIndex + offset + technologies.length) % technologies.length
    visibleIndices.push(index)
  }

  return (
    <div className="flex items-center justify-center py-8 select-none">
      <div className="relative w-full max-w-[600px] h-28 overflow-visible" style={{ perspective: "1000px" }}>
        <div className="flex h-full items-center justify-center gap-10">
          <AnimatePresence mode="popLayout">
            {visibleIndices.map((techIndex, slot) => {
              const tech = technologies[techIndex]
              const distanceFromCenter = Math.abs(slot - CENTER_SLOT)
              const isCenter = slot === CENTER_SLOT
              const offsetX = (slot - CENTER_SLOT) * ITEM_WIDTH

              const scale = distanceFromCenter === 0 ? 1 : distanceFromCenter === 1 ? 0.88 : 0.75

              const opacity = distanceFromCenter === 0 ? 1 : distanceFromCenter === 1 ? 0.75 : 0.5

              const zIndex = 10 - distanceFromCenter

              const rotateY = (slot - CENTER_SLOT) * -15

              const blur = distanceFromCenter === 0 ? 0 : distanceFromCenter === 1 ? 1 : 2

              return (
                <motion.div
                  key={`${tech.name}-${techIndex}`}
                  layoutId={tech.name}
                  className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg border border-gray-600/30 ${!isCenter ? "" : ""}`}
                  style={{
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => handleIconClick(slot)}
                  initial={{
                    scale: 0.7,
                    opacity: 0,
                    rotateY: slot > CENTER_SLOT ? 45 : -45,
                    filter: `blur(3px)`,
                  }}
                  animate={{
                    scale,
                    opacity,
                    rotateY,
                    filter: `blur(${blur}px)`,
                    y: isCenter ? 0 : 4,
                  }}
                  exit={{
                    scale: 0.7,
                    opacity: 0,
                    rotateY: slot > CENTER_SLOT ? -45 : 45,
                    filter: `blur(3px)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.4 },
                    rotateY: { duration: 0.5, ease: "easeInOut" },
                  }}
                  whileHover={
                    !isCenter
                      ? {
                          scale: scale * 1.1,
                          transition: { duration: 0.2 },
                        }
                      : {
                          scale: 1.1,
                          rotateY: 0,
                          transition: { duration: 0.2 },
                        }
                  }
                >
                  <span className="text-3xl flex items-center justify-center">{tech.icon}</span>

                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.8 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="absolute -bottom-7 -translate-x-1/2 text-gray-300 text-sm font-medium whitespace-nowrap text-center"
                    >
                      {tech.name}
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
