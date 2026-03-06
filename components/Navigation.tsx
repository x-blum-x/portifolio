"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { useLanguage, languages, type LangCode } from "@/context/LanguageContext"

export default function Navigation() {
  const { lang, setLang, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navItems = [
    { name: t.nav.home,     href: "#home" },
    { name: t.nav.about,    href: "#about" },
    { name: t.nav.skills,   href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact,  href: "#contact" },
  ]

  const currentLang = languages.find((l) => l.code === lang)!

  const handleSelectLang = (code: LangCode) => {
    setLang(code)
    setLangOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/40 border-b border-gray-600/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Mobile: hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop: nav links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-red-400 transition-colors duration-200 font-medium font-mono"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Language selector — visível em mobile e desktop, sempre à direita */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors duration-200 bg-gray-800/40 hover:bg-gray-700/50 border border-gray-600/40 rounded-lg px-3 py-1.5 text-sm font-mono"
              aria-label="Selecionar idioma"
            >
              <Globe size={14} />
              <span className="hidden sm:inline">{currentLang.flag} {currentLang.label}</span>
              <span className="sm:hidden">{currentLang.flag}</span>
              <ChevronDown
                size={12}
                className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-2 w-52 bg-gray-900/95 backdrop-blur-md border border-gray-600/40 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleSelectLang(l.code)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-mono text-left transition-colors duration-150
                        ${lang === l.code
                          ? "bg-red-600/20 text-red-300"
                          : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                        }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                      {lang === l.code && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-red-400" />
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-gray-800/40 backdrop-blur-md rounded-lg mt-2 p-4 border border-gray-600/30 mb-2"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-red-400 transition-colors duration-200 font-mono"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
