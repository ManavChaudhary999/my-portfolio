import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground flex items-center">
          <Home className="h-4 w-4" />
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">About</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p>
          As a Lead Software Engineer & Designer, I bring a unique blend of technical expertise and creative vision to every project. 
          My journey in the tech world has been driven by a singular passion: creating tools and experiences that make life better for developers and designers.
        </p>

        <h2>What I Do</h2>
        <p>
          I specialize in full-stack development, with a particular focus on creating intuitive user interfaces and robust backend systems. 
          My approach combines technical excellence with design thinking, ensuring that every solution is not just functional, but also beautiful and user-friendly.
        </p>

        <h2>My Philosophy</h2>
        <p>
          I believe that great software is born at the intersection of technology and human experience. 
          Every line of code I write and every design decision I make is guided by this principle.
        </p>

        <Link href="/" className="inline-block mt-8 text-primary hover:underline">
          ← Back to Home
        </Link>
      </div>
    </>
  )
}