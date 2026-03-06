"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiTypescript, SiRust, SiNextdotjs } from "react-icons/si"

const technologies = [
  {
    name: "React",
    color: "from-blue-500 to-cyan-700",
    icon: <FaReact size={28} className="text-cyan-300 drop-shadow" />,
  },
  {
    name: "TypeScript",
    color: "from-blue-700 to-blue-900",
    icon: <SiTypescript size={28} className="text-blue-300 drop-shadow" />,
  },
  {
    name: "Python",
    color: "from-yellow-400 to-blue-600",
    icon: (
      <img
        src="/assets/python.svg"
        alt="Python"
        className="w-7 h-7 drop-shadow"
        draggable={false}
      />
    ),
  },
  {
    name: "Rust",
    color: "from-orange-800 to-gray-900",
    icon: <SiRust size={28} className="text-orange-300 drop-shadow" />,
  },
  {
    name: "Next.js",
    color: "from-gray-900 to-black",
    icon: <SiNextdotjs size={28} className="text-white drop-shadow" />,
  },
  {
    name: "Node.js",
    color: "from-green-700 to-green-900",
    icon: <FaNodeJs size={28} className="text-green-300 drop-shadow" />,
  },
]

const N = technologies.length

function getOffset(index: number, active: number): number {
  let offset = (index - active + N) % N
  if (offset > N / 2) offset -= N
  return offset
}

export default function TechSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [layout, setLayout] = useState({ step: 72, size: 56 })
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 640
      setLayout(mobile ? { step: 72, size: 56 } : { step: 120, size: 80 })
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % N)
    }, 3000)
  }

  const pauseAndResume = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    pauseTimerRef.current = setTimeout(startAutoPlay, 5000)
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current)
    }
  }, [])

  const handleClick = (index: number) => {
    if (index === activeIndex) return
    setActiveIndex(index)
    pauseAndResume()
  }

  const { step, size } = layout
  const half = size / 2

  return (
    <div className="flex flex-col items-center gap-3 py-6 select-none w-full">
      {/* Container do carrossel — overflow-hidden apenas aqui */}
      <div
        className="relative w-full max-w-[600px] h-24 sm:h-28 overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {technologies.map((tech, index) => {
          const offset = getOffset(index, activeIndex)
          const absOffset = Math.abs(offset)
          const isCenter = offset === 0
          const isVisible = absOffset <= 2

          const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.88 : 0.75
          const opacity = isVisible
            ? absOffset === 0 ? 1 : absOffset === 1 ? 0.75 : 0.5
            : 0
          const blur = absOffset === 0 ? 0 : absOffset === 1 ? 1 : 2
          const rotateY = offset * -15
          const x = offset * step - half
          const y = -half + (isCenter ? 0 : 4)

          return (
            <motion.div
              key={tech.name}
              className={`absolute top-1/2 left-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg border border-gray-600/30 cursor-pointer`}
              animate={{ x, y, scale, opacity, rotateY, filter: `blur(${blur}px)` }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
                mass: 0.8,
                opacity: { duration: 0.35, ease: "easeInOut" },
                filter: { duration: 0.3, ease: "easeInOut" },
              }}
              style={{ zIndex: 10 - absOffset, transformStyle: "preserve-3d" }}
              onClick={() => handleClick(index)}
              whileHover={
                isVisible
                  ? { scale: scale * 1.1, transition: { duration: 0.18 } }
                  : {}
              }
            >
              <span className="flex items-center justify-center">{tech.icon}</span>
            </motion.div>
          )
        })}
      </div>

      {/* Label fora do overflow-hidden — nunca cortada */}
      <div className="h-5 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="text-gray-300 text-sm font-medium whitespace-nowrap"
          >
            {technologies[activeIndex].name}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
