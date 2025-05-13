import Link from "next/link"
import { Navigation } from "~/components/navigation"
import { Smile } from "lucide-react"
import { Experience } from "~/components/experience"
import { Projects } from "~/components/projects"

export default function HomePage() {
  return (
    <>
      {/* <nav className="flex items-center space-x-2 mb-8 text-sm text-muted-foreground">
        <span className="text-foreground">
              <Home className="h-4 w-4" />
        </span>
      </nav> */}

      <section id="about" className="mb-12">
        <p className="text-lg leading-relaxed">
          Hello! I'm Manav, a Lead Software Engineer & Designer. Passionate about crafting tools that empower developers
          and designers to express themselves seamlessly.
          <Link href="/about" className="flex items-center gap-1 mt-4 text-primary hover:underline">
            Understand Me Better
            <Smile className="h-5 w-5" />
          </Link>
        </p>
      </section>

      <Experience />

      <Projects />
    </>
  )
}

