"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "@/context/LanguageContext"

type Skill = {
  name: string
  icon: string
}

type SkillCategory = {
  titleKey: "frontend" | "backend" | "tools"
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    titleKey: "frontend",
    skills: [
      { name: "React",      icon: "/react_logo.svg" },
      { name: "TypeScript", icon: "/typescript_logo.svg" },
      { name: "Next.js",    icon: "/nextjs_logo.svg" },
      { name: "JavaScript", icon: "/javaScript_logo.svg" },
    ],
  },
  {
    titleKey: "backend",
    skills: [
      { name: "Node.js",    icon: "/nodejs_logo.svg" },
      { name: "Python",     icon: "/python_logo.svg" },
      { name: "Rust",       icon: "/rust_logo.svg" },
      { name: "PostgreSQL", icon: "/postgresql_logo.svg" },
    ],
  },
  {
    titleKey: "tools",
    skills: [
      { name: "Git",    icon: "/git_logo.svg" },
      { name: "Docker", icon: "/docker_logo.svg" },
      { name: "AWS",    icon: "/AWS_logo.svg" },
      { name: "Linux",  icon: "/linux_logo.svg" },
    ],
  },
]

export default function SkillsSection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const categoryTitle = (key: SkillCategory["titleKey"]) => {
    if (key === "frontend") return "Frontend"
    if (key === "backend")  return "Backend"
    return t.skills.toolsCategory
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.skills.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.skills.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.titleKey}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {categoryTitle(category.titleKey)}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="relative w-10 h-10">
                      <Image src={skill.icon} alt={skill.name} fill className="object-contain" sizes="40px" />
                    </div>
                    <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
