import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Home } from "lucide-react"
import { projects } from "~/data"
import { notFound } from "next/navigation"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <>
      <nav className="flex items-center space-x-2 mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground flex items-center">
          <Home className="h-4 w-4" />
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/projects" className="hover:text-foreground">
          Projects
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{project.title}</span>
      </nav>

      <div className="prose dark:prose-invert max-w-none">
        <h1>{project.title}</h1>
        
        <div className="relative h-[400px] my-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <h2>Overview</h2>
        <p>{project.caseStudy.overview}</p>

        <h2>Challenges</h2>
        <ul>
          {project.caseStudy.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>

        <h2>Solutions</h2>
        <ul>
          {project.caseStudy.solutions.map((solution, index) => (
            <li key={index}>{solution}</li>
          ))}
        </ul>

        <h2>Outcomes</h2>
        <ul>
          {project.caseStudy.outcomes.map((outcome, index) => (
            <li key={index}>{outcome}</li>
          ))}
        </ul>

        <div className="flex gap-4 mt-8">
          <Link href="/projects" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </>
  )
}