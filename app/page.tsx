"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ContactSection from "@/components/sections/ContactSection"
import Navigation from "@/components/Navigation"
import MatrixBackground from "@/components/MatrixBackground"
import { LanguageProvider } from "@/context/LanguageContext"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <LanguageProvider>
      <main className="relative min-h-screen bg-black overflow-x-hidden">
        <MatrixBackground />
        <Navigation />
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </LanguageProvider>
  )
}
