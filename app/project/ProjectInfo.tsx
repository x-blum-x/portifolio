import { motion } from "framer-motion"
import { Calendar, Code2, User, Github } from "lucide-react"

export default function ProjectInfo({ project, commitCount }: { project: any; commitCount?: number | null }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30"
    >
      <h3 className="text-xl font-bold text-white mb-6 font-mono">Informações</h3>
      <div className="space-y-4">
        <div className="flex items-center text-gray-300">
          <User size={16} className="mr-3 text-red-400" />
          <span className="text-sm">Desenvolvedor: Gabriel Blum</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Calendar size={16} className="mr-3 text-red-400" />
          <span className="text-sm">Ano: {project.date}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Code2 size={16} className="mr-3 text-red-400" />
          <span className="text-sm">Categoria: {project.category}</span>
        </div>
        {commitCount !== null && (
          <div className="flex items-center text-gray-300">
            <Github size={16} className="mr-3 text-red-400" />
            <span className="text-sm">Commits: {commitCount}</span>
          </div>
        )}
      </div>
    </motion.section>
  )
}
