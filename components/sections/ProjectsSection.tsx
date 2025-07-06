"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Calculadora Rust",
      description:
        "Calculadora desenvolvida em Rust, construída para testar minhas capacidades e para uso público educacional. Implementa operações matemáticas básicas com interface de linha de comando.",
      tech: ["Rust", "CLI", "Mathematics"],
      github: "https://github.com/x-blum-x/Calculadora-Rust",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Hand Tracking",
      description:
        "Software de análise de imagens em tempo real para detecção e acompanhamento de mãos, usando inteligência artificial e visão computacional. Implementado com OpenCV e MediaPipe.",
      tech: ["Python", "OpenCV", "MediaPipe", "AI"],
      github: "https://github.com/x-blum-x/Hand-Trancking",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Portfolio Website",
      description:
        "Site de portfólio pessoal moderno e responsivo desenvolvido com Next.js, TypeScript e Tailwind CSS. Inclui animações suaves e design profissional.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projetos em Destaque</h2>
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
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
