"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { projectsData } from "@/data/projectData"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = Object.entries(projectsData).map(([slug, data]) => ({
    ...data,
    slug,
  }))

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">Projetos em Destaque</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Alguns dos projetos que desenvolvi para demonstrar minhas habilidades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 group min-h-[420px]"
            >
              <Link href={`/project/${project.slug}`} className="absolute inset-0 z-10" />

              <div className="relative z-0 overflow-hidden">
                <img
                  src={"/placeholder.svg?height=300&width=400"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6 pb-20 relative z-0">
                <h3 className="text-xl font-bold text-white mb-3 font-mono">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-5 left-6 z-20 flex items-center justify-between w-[calc(100%-3rem)]">
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>

                <Link
                  href={`/project/${project.slug}`}
                  className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors duration-200 font-medium"
                >
                  <span className="text-sm">Ver mais</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
