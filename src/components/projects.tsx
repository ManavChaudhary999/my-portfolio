import Link from "next/link";
import { FolderCode } from "lucide-react"
import ProjectCard from "./ProjectCard"
import { projects } from "~/data"
import { debugRendering } from "~/lib/utils";

debugRendering('ProjectsComponent');

export function Projects() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="contact" className="my-12">
      {/* <div className="flex gap-6"> */}
        <h2 className="text-xl font-semibold mb-6">Featured Projects</h2>
      {/* </div> */}
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
      
      <Link href="/projects" className="flex items-center gap-1 mt-4 text-primary hover:underline">
        Click Here to see all of my Projects
        <FolderCode className="h-5 w-5" />
      </Link>
    </section>
  )
}

