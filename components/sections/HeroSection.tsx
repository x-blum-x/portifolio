"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, ChevronDown } from "lucide-react"
import ThreeDName from "@/components/ThreeDName"
import TechSlider from "@/components/TechSlider"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export default function HeroSection() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/x_blum_x/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gabriel-blum-santos-9b981625a/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/x-blum-x", label: "GitHub" },
  ]

  const sectionRef = useRef<HTMLElement | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <ThreeDName mousePosition={mousePosition}>Gabriel Blum</ThreeDName>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-xl text-gray-400 font-light font-mono"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <TechSlider />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-sm sm:text-lg text-gray-300 leading-relaxed max-w-2xl"
            >
              {t.hero.description}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex space-x-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-red-400 transition-colors duration-200 p-2 rounded-full bg-gray-800/30 border border-gray-600/30 shadow-lg shadow-black/20"
                  aria-label={social.label}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-56 h-56 sm:w-80 sm:h-80 rounded-tl-[80px] rounded-br-[80px] sm:rounded-tl-[120px] sm:rounded-br-[120px] overflow-hidden border-4 border-gray-600/30 shadow-2xl backdrop-blur-sm bg-gray-800/10"
              >
                <Image
                  src="/assets/face.jpg"
                  alt="Foto de Gabriel Blum"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/10 to-gray-600/10 rounded-tl-[140px] rounded-br-[140px] blur-xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-gray-500/60"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
