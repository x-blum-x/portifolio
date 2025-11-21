"use client"

import { useParams } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import MatrixBackground from "@/components/MatrixBackground"
import { projectsData } from "@/data/projectData"
import ProjectHeader from "@/app/project/ProjectHeader"
import ProjectMeta from "@/app/project/ProjectMeta"
import ProjectDescription from "@/app/project/ProjectDescription"
import ProjectFeatures from "@/app/project/ProjectFeatures"
import ProjectChallenges from "@/app/project/ProjectChallenges"
import ProjectTechnologies from "@/app/project/ProjectTechnologies"
import ProjectInfo from "@/app/project/ProjectInfo"
import { getCommitCount } from "@/services/getCommitCount"

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectsData[slug as keyof typeof projectsData]
  const [commitCount, setCommitCount] = useState<number | null>(null)
  const hasFetched = useRef(false)

  useEffect(() => {
    if (hasFetched.current) return
    hasFetched.current = true

    if (project.github) {
      const [owner, repo] = project.github.replace("https://github.com/", "").split("/")
      getCommitCount(owner, repo).then((count) => {
        //console.log(`Result: ${owner}, ${repo}, Commits: ${count}`)
        setCommitCount(count)
      })
    }
  }, [project.github])


  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Projeto não encontrado</h1>
          <Link href="/#projects" className="text-red-400 hover:text-red-300">
            Voltar aos projetos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black relative">
      <MatrixBackground />
      <div className="relative z-10">
        <ProjectHeader />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProjectMeta project={project} />
          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            <div className="lg:col-span-2 space-y-12">
              <ProjectDescription project={project} />
              <ProjectFeatures project={project} />
              <ProjectChallenges project={project} />
            </div>
            <div className="space-y-8">
              <ProjectTechnologies project={project} />
              <ProjectInfo project={project} commitCount={commitCount} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
