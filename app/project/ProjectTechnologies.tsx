import { motion } from "framer-motion"

export default function ProjectTechnologies({ project }: { project: any }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30"
    >
      <h3 className="text-xl font-bold text-white mb-6 font-mono">Tecnologias</h3>
      <div className="space-y-4">
        {project.technologies.map((tech: any, index: number) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">{tech.name}</span>
              <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">{tech.level}</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden">
              <div
                className={`w-full h-full bg-gradient-to-r ${
                  tech.color?.includes("from-") && tech.color?.includes("to-")
                    ? tech.color
                    : "from-gray-600 to-gray-800"
                } shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
