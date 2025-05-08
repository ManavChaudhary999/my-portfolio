import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import ProjectCard from "~/components/ProjectCard"
import { projects } from "~/data/projects"

export default function ProjectsPage() {
  return (
    <>
      <nav className="flex items-center space-x-2 mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground flex items-center">
          <Home className="h-4 w-4" />
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Projects</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  )
}