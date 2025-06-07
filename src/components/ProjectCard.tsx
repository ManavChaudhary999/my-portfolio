import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Home, Github, Globe } from "lucide-react"
import { Button } from "~/components/ui/button"
import type { Project } from "~/types";
import { debugRendering } from "~/lib/utils";

debugRendering('ProjectCardComponent');


export default function ProjectCard({ project } : { project: Project}) {
  return (
    <div
        key={project.id}
        className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
        <div className="relative h-48 mb-4">
            <Image
                src={project.image}
                alt={project.title}
                fill
                // layout="fill"
                className="object-cover rounded-md"
            />
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
            <span
                key={tech}
                className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
            >
                {tech}
            </span>
            ))}
        </div>

        <div className="flex gap-2 flex-wrap">
            <Button variant="outline" asChild>
                <Link href={project.sourceCode}>
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                </Link>
            </Button>
            <Button variant="outline" asChild>
                <Link prefetch={true} href={`/projects/${project.id}`}>
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Case Study
                </Link>
            </Button>
            <Button variant="outline" asChild>
                <Link target="_blank" href={project.liveDemo}>
                    <Globe className="h-4 w-4 mr-2" />
                    Live Demo
                </Link>
            </Button>
        </div>
    </div>
  );
}