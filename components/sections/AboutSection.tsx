"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Lightbulb, Users, Zap, GraduationCap, MapPin } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Escrevo código limpo, maintível e bem documentado seguindo as melhores práticas.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Adoro resolver problemas complexos com soluções criativas e eficientes.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Trabalho bem em equipe e acredito na colaboração para alcançar os melhores resultados.",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Sempre disposto a aprender novas tecnologias e me adaptar rapidamente às mudanças.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/60 to-gray-900/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">Sobre Mim</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sou um desenvolvedor apaixonado por tecnologia com experiência em desenvolvimento full-stack. Especializo-me
            em criar aplicações web modernas, eficientes e escaláveis usando as mais recentes tecnologias do mercado.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 shadow-2xl shadow-black/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="text-red-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-white font-mono">Formação Acadêmica</h3>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-red-300 font-semibold">Universidade do Estado de Mato Grosso - UNEMAT</p>
              <div className="flex items-center justify-center text-gray-300">
                <MapPin size={16} className="mr-2" />
                <span>Mato Grosso, Brasil</span>
              </div>
              <p className="text-gray-400">Graduado em 2024</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-red-500/40 hover:bg-gray-800/30 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-gray-800 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-red-900/20">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-mono">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
