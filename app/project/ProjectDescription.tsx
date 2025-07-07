import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

export default function ProjectDescription({ project }: { project: any }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30"
    >
      <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center">
        <Code2 size={24} className="mr-3 text-red-400" />
        Sobre o Projeto
      </h2>
      <div className="text-gray-300 leading-relaxed whitespace-pre-line">{project.longDescription}</div>
    </motion.section>
  )
}
