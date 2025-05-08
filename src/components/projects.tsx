import { Code, FileText, Layout } from "lucide-react"
import ProjectCard from "./ProjectCard"
import { projects } from "~/data/projects"

export function Projects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="contact" className="my-12">
      <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="mb-3">{project.icon}</div>
            <h3 className="font-medium mb-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

