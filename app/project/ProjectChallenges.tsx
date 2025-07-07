import { motion } from "framer-motion"

export default function ProjectChallenges({ project }: { project: any }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30"
    >
      <h2 className="text-2xl font-bold text-white mb-6 font-mono">Desafios Técnicos</h2>
      <ul className="space-y-3">
        {project.challenges.map((challenge: string, index: number) => (
          <li key={index} className="flex items-start text-gray-300">
            <span className="text-yellow-400 mr-3 mt-1">⚡</span>
            {challenge}
          </li>
        ))}
      </ul>
    </motion.section>
  )
}
