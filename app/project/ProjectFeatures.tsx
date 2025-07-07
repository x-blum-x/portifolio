import { motion } from "framer-motion"

export default function ProjectFeatures({ project }: { project: any }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30"
    >
      <h2 className="text-2xl font-bold text-white mb-6 font-mono">Funcionalidades</h2>
      <ul className="space-y-3">
        {project.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start text-gray-300">
            <span className="text-red-400 mr-3 mt-1">▶</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.section>
  )
}
