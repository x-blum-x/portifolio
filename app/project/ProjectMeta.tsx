import { Calendar, Github, ExternalLink } from "lucide-react"

export default function ProjectMeta({ project }: { project: any }) {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.status === "Completed"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
          }`}
        >
          {project.status}
        </span>
        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30">
          {project.category}
        </span>
        <div className="flex items-center text-gray-400 text-sm">
          <Calendar size={16} className="mr-1" />
          {project.date}
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">{project.title}</h1>
      <p className="text-xl text-gray-300 mb-8 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg border border-gray-600/30 transition-all duration-200 hover:border-red-500/50"
          >
            <Github size={20} className="mr-2" />
            Ver Código
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg border border-red-500/30 transition-all duration-200"
          >
            <ExternalLink size={20} className="mr-2" />
            Ver Demo
          </a>
        )}
      </div>
    </div>
  )
}
