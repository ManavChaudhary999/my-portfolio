import { Code, FileText, Layout } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "SyntaxUI Pro",
      description: "Premium UI components for your next project.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "SyntaxUI",
      description: "Free-to-use UI React components and blocks.",
      icon: <Layout className="h-6 w-6" />,
    },
    {
      title: "Prettyfolio",
      description: "A curated collection of portfolios for inspiration.",
      icon: <FileText className="h-6 w-6" />,
    },
  ]

  return (
    <section className="my-12">
      <h2 className="text-xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="mb-3">{project.icon}</div>
            <h3 className="font-medium mb-1">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

